import { Gauge, Handshake, Layers, MessageSquare, Receipt, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/config/navigation";

const ICONS = [Layers, MessageSquare, Receipt, Gauge, ShieldCheck, Handshake] as const;

type Item = { title: string; description: string };

export async function WhyUs() {
  const t = await getTranslations("whyUs");
  const items = t.raw("items") as Item[];

  return (
    <Section id={SECTION_IDS.whyUs} aria-labelledby="why-title" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-accent/10 absolute top-1/2 left-1/2 -z-10 size-160 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      />
      <SectionHeading
        id="why-title"
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Stagger
        as="ul"
        className="border-border bg-border mt-14 grid gap-px overflow-hidden rounded-2xl border sm:mt-16 md:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item, index) => {
          const Icon = ICONS[index % ICONS.length] ?? Layers;
          return (
            <StaggerItem
              as="li"
              key={item.title}
              className="bg-background hover:bg-surface flex flex-col gap-4 p-6 transition-colors sm:p-8"
            >
              <Icon aria-hidden className="text-accent size-6" />
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
