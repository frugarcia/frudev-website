import { ArrowRight, CircleCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { QUOTE_HREF, SECTION_IDS } from "@/config/navigation";
import { Link } from "@/i18n/navigation";
import { HeroVisual } from "./HeroVisual";

export async function Hero() {
  const t = await getTranslations("hero");
  const highlights = t.raw("highlights") as string[];

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 size-144 -translate-x-1/2 animate-pulse-slow rounded-full bg-accent/20 blur-3xl sm:size-192"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-40 -z-10 size-96 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <div className="animate-fade-up">
            <Eyebrow>{t("badge")}</Eyebrow>
          </div>
          <h1 className="animate-fade-up text-4xl leading-[1.05] font-semibold tracking-tight text-balance [animation-delay:80ms] min-[400px]:text-5xl sm:text-6xl xl:text-7xl">
            {t("titleStart")} <span className="text-gradient">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </h1>
          <p className="max-w-xl animate-fade-up text-base leading-relaxed text-pretty text-muted [animation-delay:160ms] sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="flex w-full animate-fade-up flex-col gap-3 [animation-delay:240ms] min-[480px]:w-auto min-[480px]:flex-row">
            <Button asChild size="lg">
              <Link href={QUOTE_HREF}>
                {t("ctaPrimary")}
                <ArrowRight
                  aria-hidden
                  className="transition-transform group-hover/button:translate-x-0.5"
                />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={`/#${SECTION_IDS.services}`}>{t("ctaSecondary")}</Link>
            </Button>
          </div>
          <ul className="flex animate-fade-up flex-col gap-x-6 gap-y-2 pt-2 text-sm text-muted [animation-delay:320ms] sm:flex-row sm:flex-wrap">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleCheck aria-hidden className="size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 animate-fade-up [animation-delay:300ms] lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
