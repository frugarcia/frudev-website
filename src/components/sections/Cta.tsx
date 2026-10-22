import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { QUOTE_HREF } from "@/config/navigation";
import { Link } from "@/i18n/navigation";

type CtaProps = {
  variant: "afterServices" | "afterProcess";
};

export async function Cta({ variant }: CtaProps) {
  const t = await getTranslations(`cta.${variant}`);

  return (
    <div className="container-page">
      <Reveal className="border-accent/20 relative isolate overflow-hidden rounded-3xl border px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
        <div
          aria-hidden
          className="from-accent/15 via-surface to-surface absolute inset-0 -z-10 bg-linear-to-br"
        />
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {t("title")}
            </h2>
            <p className="text-muted text-base">{t("subtitle")}</p>
          </div>
          <Button asChild size="lg" className="w-full md:w-auto">
            <Link href={QUOTE_HREF}>
              {t("button")}
              <ArrowRight aria-hidden className="transition-transform group-hover/button:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
