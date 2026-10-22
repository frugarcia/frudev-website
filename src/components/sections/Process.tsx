import { Code, LifeBuoy, PenTool, Rocket, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/config/navigation";

const ICONS = [Search, PenTool, Code, Rocket, LifeBuoy] as const;

type Step = { title: string; description: string; duration: string };

export async function Process() {
  const t = await getTranslations("process");
  const steps = t.raw("steps") as Step[];

  return (
    <Section id={SECTION_IDS.process} aria-labelledby="process-title">
      <SectionHeading
        id="process-title"
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="relative mt-14 sm:mt-16">
        <div
          aria-hidden
          className="from-accent/60 via-border-strong absolute top-0 bottom-0 left-5 w-px bg-linear-to-b to-transparent lg:top-5 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full lg:bg-linear-to-r"
        />
        <Stagger as="ol" stagger={0.12} className="grid gap-10 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = ICONS[index % ICONS.length] ?? Search;
            return (
              <StaggerItem as="li" key={step.title} className="relative flex gap-5 lg:flex-col lg:gap-6">
                <span className="border-accent/40 bg-background text-accent ring-background relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border ring-8">
                  <Icon aria-hidden className="size-4" />
                </span>
                <div className="flex flex-col gap-2 pt-1 lg:pt-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-subtle font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                  <span className="border-border text-accent-soft mt-1 w-fit rounded-full border px-2.5 py-0.5 font-mono text-xs">
                    {step.duration}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
