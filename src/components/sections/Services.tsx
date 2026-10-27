import {
  Brain,
  Check,
  Cloud,
  Globe,
  LayoutDashboard,
  Plug,
  Smartphone,
  Workflow,
  Wrench,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card, IconBadge } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/config/navigation";

const SERVICES = [
  { key: "management", Icon: LayoutDashboard },
  { key: "web", Icon: Globe },
  { key: "apps", Icon: Smartphone },
  { key: "ai", Icon: Brain },
  { key: "apis", Icon: Plug },
  { key: "automation", Icon: Workflow },
  { key: "cloud", Icon: Cloud },
  { key: "maintenance", Icon: Wrench },
] as const;

export async function Services() {
  const t = await getTranslations("services");

  return (
    <Section id={SECTION_IDS.services} aria-labelledby="services-title">
      <SectionHeading
        id="services-title"
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {SERVICES.map(({ key, Icon }) => {
          const features = t.raw(`items.${key}.features`) as string[];
          return (
            <StaggerItem key={key} className="h-full">
              <Card className="group flex h-full flex-col gap-5">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <IconBadge>
                  <Icon aria-hidden />
                </IconBadge>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
                <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
