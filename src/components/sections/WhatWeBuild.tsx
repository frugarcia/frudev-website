import { FileText, LayoutDashboard, Lock, Table, Workflow } from "lucide-react";
import { getMessages, getTranslations } from "next-intl/server";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card, IconBadge } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/config/navigation";
import { cn } from "@/lib/utils";
import {
  AuthMock,
  AutomationMock,
  DashboardMock,
  DocumentsMock,
  TableMock,
  type MockLabels,
} from "./mockups";

const ITEMS = [
  { key: "dashboards", Icon: LayoutDashboard, Mock: DashboardMock, span: "md:col-span-2" },
  { key: "auth", Icon: Lock, Mock: AuthMock, span: "" },
  { key: "documents", Icon: FileText, Mock: DocumentsMock, span: "" },
  { key: "tables", Icon: Table, Mock: TableMock, span: "md:col-span-2" },
  { key: "automation", Icon: Workflow, Mock: AutomationMock, span: "md:col-span-2 lg:col-span-3" },
] as const;

export async function WhatWeBuild() {
  const t = await getTranslations("build");
  const messages = await getMessages();
  const labels = messages.build.mock satisfies MockLabels;

  return (
    <Section id={SECTION_IDS.build} aria-labelledby="build-title">
      <SectionHeading
        id="build-title"
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <Stagger className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {ITEMS.map(({ key, Icon, Mock, span }) => (
          <StaggerItem key={key} className={cn("h-full", span)}>
            <Card className="flex h-full flex-col gap-6 p-0 sm:p-0">
              <div className="border-border bg-background/60 relative overflow-hidden border-b p-4 sm:p-6">
                <Mock labels={labels} />
              </div>
              <div className="flex items-start gap-4 px-6 pb-6 sm:px-7 sm:pb-7">
                <IconBadge className="size-10">
                  <Icon aria-hidden />
                </IconBadge>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight">{t(`items.${key}.title`)}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
