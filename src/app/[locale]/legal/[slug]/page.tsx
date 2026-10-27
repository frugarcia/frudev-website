import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AnalyticsConsentReset } from "@/components/analytics/AnalyticsConsentReset";
import { LEGAL_PAGES } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/seo";

type LegalKey = (typeof LEGAL_PAGES)[number]["key"];
type Params = Promise<{ locale: string; slug: string }>;

function findPage(slug: string) {
  return LEGAL_PAGES.find((page) => page.href === `/legal/${slug}`);
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    LEGAL_PAGES.map((page) => ({ locale, slug: page.href.replace("/legal/", "") })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = findPage(slug);
  if (!page) return {};
  const t = await getTranslations({ locale: locale as Locale, namespace: "legal" });
  return {
    title: t(`${page.key}.title`),
    alternates: buildAlternates(locale, page.href),
    robots: { index: true, follow: true },
  };
}

export default async function LegalPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();
  setRequestLocale(locale as Locale);

  const t = await getTranslations("legal");
  const key: LegalKey = page.key;
  const sections = t.raw(`${key}.sections`) as Array<{ heading: string; body: string }>;
  const { owner, taxId, address, registry, updatedAt } = siteConfig.legal;
  const values: Record<string, string> = {
    owner,
    taxId,
    address,
    registry,
    email: siteConfig.email,
  };
  const fill = (text: string) =>
    text.replace(/\{(\w+)\}/g, (_, name: string) => values[name] ?? "");
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(updatedAt));

  return (
    <article className="container-page max-w-3xl pt-32 pb-24 sm:pt-40">
      <Link
        href="/"
        className="-ml-2 inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft aria-hidden className="size-4" />
        {t("back")}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        {t(`${key}.title`)}
      </h1>
      <p className="mt-3 font-mono text-xs text-subtle">{t("updated", { date })}</p>
      <div className="mt-12 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">{fill(section.heading)}</h2>
            <p className="leading-relaxed text-pretty text-muted">{fill(section.body)}</p>
          </section>
        ))}
      </div>
      {key === "cookies" && <AnalyticsConsentReset />}
    </article>
  );
}
