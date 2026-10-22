import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/config/navigation";

export type FaqItem = { q: string; a: string };

export async function Faq() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as FaqItem[];

  return (
    <Section id={SECTION_IDS.faq} aria-labelledby="faq-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow={t("eyebrow")} title={t("title")} align="left" />
        </div>
        <Reveal className="lg:col-span-8" delay={0.1}>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="border-border bg-surface/50 rounded-2xl border px-5 sm:px-7"
          >
            {items.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
