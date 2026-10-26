"use server";

import { render } from "@react-email/render";
import { headers } from "next/headers";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import QuoteConfirmation from "@/emails/quote-confirmation";
import QuoteNotification from "@/emails/quote-notification";
import { routing, type Locale } from "@/i18n/routing";
import { isRateLimited } from "@/lib/quote-rate-limit";
import { quoteSchema, type QuoteData } from "@/lib/schemas";

export type SendQuoteResult =
  { ok: true; mocked?: boolean } | { ok: false; error: "validation" | "rate_limited" | "server" };

async function buildEmails(data: QuoteData, locale: Locale) {
  const tQuote = await getTranslations({ locale, namespace: "quote" });
  const tEmail = await getTranslations({ locale, namespace: "email" });

  const rows = [
    {
      label: tQuote("steps.type"),
      value: data.projectTypes.map((type) => tQuote(`types.${type}`)).join(", "),
    },
    { label: tQuote("budgetQuestion"), value: tQuote(`budgets.${data.budget}`) },
    { label: tQuote("timelineQuestion"), value: tQuote(`timelines.${data.timeline}`) },
    { label: tQuote("fields.name"), value: data.name },
    { label: tQuote("fields.email"), value: data.email },
    { label: tQuote("fields.company"), value: data.company || "-" },
    { label: tQuote("fields.phone"), value: data.phone || "-" },
    { label: tQuote("fields.message"), value: data.message },
  ];

  const confirmationProps = {
    locale,
    preview: tEmail("confirmationPreview"),
    greeting: tEmail("confirmationGreeting", { name: data.name }),
    body: tEmail("confirmationBody"),
    summaryTitle: tEmail("confirmationSummary"),
    rows,
    signature: tEmail("confirmationSignature"),
  };
  const notificationProps = {
    locale,
    preview: tEmail("notificationPreview", { name: data.name }),
    rows,
    localeLabel: tEmail("localeLabel"),
    replyTo: data.email,
  };

  const [internalHtml, internalText, confirmationHtml, confirmationText] = await Promise.all([
    render(<QuoteNotification {...notificationProps} />),
    render(<QuoteNotification {...notificationProps} />, { plainText: true }),
    render(<QuoteConfirmation {...confirmationProps} />),
    render(<QuoteConfirmation {...confirmationProps} />, { plainText: true }),
  ]);

  return {
    internal: {
      subject: tEmail("subject", { name: data.name }),
      text: internalText,
      html: internalHtml,
    },
    confirmation: {
      subject: tEmail("confirmationSubject"),
      text: confirmationText,
      html: confirmationHtml,
    },
  };
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
