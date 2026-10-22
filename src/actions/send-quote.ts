"use server";

import { headers } from "next/headers";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";
import { quoteSchema, type QuoteData } from "@/lib/schemas";
import { escapeHtml } from "@/lib/utils";

export type SendQuoteResult =
  { ok: true; mocked?: boolean } | { ok: false; error: "validation" | "rate_limited" | "server" };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissions = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissions.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

async function buildEmails(data: QuoteData, locale: Locale) {
  const tQuote = await getTranslations({ locale, namespace: "quote" });
  const tEmail = await getTranslations({ locale, namespace: "email" });

  const rows: Array<[string, string]> = [
    [tQuote("steps.type"), data.projectTypes.map((type) => tQuote(`types.${type}`)).join(", ")],
    [tQuote("budgetQuestion"), tQuote(`budgets.${data.budget}`)],
    [tQuote("timelineQuestion"), tQuote(`timelines.${data.timeline}`)],
    [tQuote("fields.name"), data.name],
    [tQuote("fields.email"), data.email],
    [tQuote("fields.company"), data.company || "-"],
    [tQuote("fields.phone"), data.phone || "-"],
    [tQuote("fields.message"), data.message],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const tableHtml = `<table cellpadding="8" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="color:#64748b;vertical-align:top;white-space:nowrap"><strong>${escapeHtml(label)}</strong></td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  const internal = {
    subject: tEmail("subject", { name: data.name }),
    text: `${text}\n\nLocale: ${locale}`,
    html: `${tableHtml}<p style="color:#94a3b8;font-size:12px">Locale: ${locale}</p>`,
  };

  const greeting = tEmail("confirmationGreeting", { name: data.name });
  const confirmation = {
    subject: tEmail("confirmationSubject"),
    text: `${greeting}\n\n${tEmail("confirmationBody")}\n\n${tEmail("confirmationSummary")}:\n${text}\n\n${tEmail("confirmationSignature")}`,
    html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#0f172a"><p>${escapeHtml(greeting)}</p><p>${escapeHtml(tEmail("confirmationBody"))}</p><h3 style="margin-top:24px">${escapeHtml(tEmail("confirmationSummary"))}</h3>${tableHtml}<p style="margin-top:24px">${escapeHtml(tEmail("confirmationSignature"))}</p></div>`,
  };

  return { internal, confirmation };
}

export async function sendQuote(input: unknown, localeInput: string): Promise<SendQuoteResult> {
  const locale: Locale = hasLocale(routing.locales, localeInput)
    ? localeInput
    : routing.defaultLocale;
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "validation" };

  const data = parsed.data;
  if (data.website) return { ok: true };

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return { ok: false, error: "rate_limited" };

  const { internal, confirmation } = await buildEmails(data, locale);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[send-quote] RESEND_API_KEY not set, mock mode.\n" + internal.text);
    return { ok: true, mocked: true };
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    console.error("[send-quote] CONTACT_TO_EMAIL is not set.");
    return { ok: false, error: "server" };
  }

  const from = process.env.CONTACT_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: internal.subject,
    text: internal.text,
    html: internal.html,
  });

  if (error) {
    console.error("[send-quote] Failed to send internal email", error);
    return { ok: false, error: "server" };
  }

  const confirmationResult = await resend.emails.send({
    from,
    to: data.email,
    replyTo: to,
    subject: confirmation.subject,
    text: confirmation.text,
    html: confirmation.html,
  });
  if (confirmationResult.error) {
    console.warn("[send-quote] Confirmation email not sent", confirmationResult.error);
  }

  return { ok: true };
}
