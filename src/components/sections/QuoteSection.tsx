import { Clock, FileText, MessageSquare } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/config/navigation";
import { QuoteForm } from "./QuoteForm";

export async function QuoteSection() {
  const t = await getTranslations();
  const highlights = t.raw("hero.highlights") as string[];
  const icons = [Clock, FileText, MessageSquare];

  return (
    <Section id={SECTION_IDS.quote} aria-labelledby="quote-title" className="isolate">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -z-10 size-160 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-4">
          <SectionHeading
            id="quote-title"
            eyebrow={t("quote.eyebrow")}
            title={t("quote.title")}
            subtitle={t("quote.subtitle")}
            align="left"
          />
          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-4">
              {highlights.map((item, index) => {
                const Icon = icons[index % icons.length] ?? Clock;
                return (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground/90 sm:text-base"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                      <Icon aria-hidden className="size-4" />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative rounded-2xl border border-border bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur">
            <div
              aria-hidden
              className="absolute inset-x-8 -top-px h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"
            />
            <QuoteForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
