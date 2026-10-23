"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { clearAnalyticsConsent, getMeasurementId } from "@/lib/analytics-consent";

export function AnalyticsConsentReset() {
  const t = useTranslations("analytics");
  if (!getMeasurementId()) return null;

  return (
    <Button
      type="button"
      variant="secondary"
      className="mt-10"
      onClick={() => clearAnalyticsConsent()}
    >
      {t("reset")}
    </Button>
  );
}
