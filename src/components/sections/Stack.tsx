import { Cloud, Database, Monitor, Server } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/config/navigation";
import { STACK } from "@/config/stack";

export async function Stack() {
  const t = await getTranslations("stack");
  const groups = [
    { key: "frontend", Icon: Monitor, items: STACK.frontend },
    { key: "backend", Icon: Server, items: STACK.backend },
    { key: "cloud", Icon: Cloud, items: STACK.cloud },
    { key: "data", Icon: Database, items: t.raw("dataItems") as string[] },
  ] as const;

  return (
    <Section id={SECTION_IDS.stack} aria-labelledby="stack-title">
      <SectionHeading
        id="stack-title"
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2 lg:gap-5">
        {groups.map(({ key, Icon, items }) => (
          <StaggerItem key={key} className="h-full">
            <Card className="flex h-full flex-col gap-5">
              <div className="flex items-center gap-3">
                <Icon aria-hidden className="size-5 text-accent" />
                <h3 className="text-base font-semibold tracking-tight">{t(`groups.${key}`)}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/40 hover:text-foreground sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
