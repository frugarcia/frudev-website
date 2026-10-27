import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { CLIENTS } from "@/config/clients";
import { QUOTE_HREF } from "@/config/navigation";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/seo";

type Params = Promise<{ locale: string }>;

type CaseStudy = {
  client: string;
  sector: string;
  problem: string;
  work: string;
  result: string;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "projects" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/proyectos"),
    robots: { index: true, follow: true },
  };
}

export default async function ProjectsPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("projects");
  const cases = t.raw("cases") as CaseStudy[];

  return (
    <article className="container-page max-w-5xl pt-32 pb-24 sm:pt-40">
      <Link
        href="/"
        className="-ml-2 inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft aria-hidden className="size-4" />
        {t("back")}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{t("intro")}</p>

      <div className="mt-16 flex flex-col">
        {cases.map((study) => {
          const logo = CLIENTS.find((client) => client.name === study.client);
          return (
            <section key={study.client} className="border-t border-border py-12 sm:py-16">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs tracking-wide text-subtle uppercase">
                    {study.sector}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">{study.client}</h2>
                  {logo && (
                    <Image
                      src={logo.src}
                      alt=""
                      width={logo.width}
                      height={logo.height}
                      style={{ height: Math.min(logo.height, 48), width: "auto" }}
                      className="mt-8 opacity-80"
                    />
                  )}
                </div>
                <dl className="flex flex-col gap-8 lg:col-span-8">
                  {(
                    [
                      ["problem", study.problem],
                      ["work", study.work],
                      ["result", study.result],
                    ] as const
                  ).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-2">
                      <dt className="text-sm font-medium text-foreground">{t(key)}</dt>
                      <dd className="leading-relaxed text-pretty text-muted">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-t border-border py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {t("ctaTitle")}
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{t("ctaBody")}</p>
        <Button asChild className="mt-8">
          <Link href={QUOTE_HREF}>
            {t("cta")}
            <ArrowRight
              aria-hidden
              className="transition-transform group-hover/button:translate-x-0.5"
            />
          </Link>
        </Button>
      </section>
    </article>
  );
}
