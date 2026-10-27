"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import {
  ANALYTICS_CONSENT_EVENT,
  getMeasurementId,
  readAnalyticsConsent,
  writeAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsConsent() {
  const measurementId = getMeasurementId();
  const t = useTranslations("analytics");
  const pathname = usePathname();
  const trackedPath = useRef<string | null>(null);
  const consentRef = useRef<AnalyticsConsent | null | undefined>(undefined);
  const [consent, setConsent] = useState<AnalyticsConsent | null | undefined>(undefined);

  useEffect(() => {
    setConsent(readAnalyticsConsent());
    const onChange = (event: Event) => {
      setConsent((event as CustomEvent<AnalyticsConsent | null>).detail);
    };
    window.addEventListener(ANALYTICS_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !measurementId || consent === undefined) return;

    const previous = consentRef.current;
    consentRef.current = consent;

    if (consent === "granted") {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    } else if (consent === "denied") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
    }

    const becameGranted = consent === "granted" && previous !== undefined && previous !== "granted";
    if (becameGranted) {
      window.gtag?.("event", "page_view", { page_path: pathname });
      trackedPath.current = pathname;
      return;
    }

    if (trackedPath.current === null) {
      trackedPath.current = pathname;
      return;
    }
    if (trackedPath.current === pathname) return;
    trackedPath.current = pathname;
    window.gtag?.("config", measurementId, { page_path: pathname });
  }, [consent, measurementId, pathname]);

  if (!measurementId || consent !== null) return null;

  return (
    <div
      role="region"
      aria-label={t("regionLabel")}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-xl"
    >
      <div className="container-page flex flex-col gap-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-pretty text-muted">
          {t("banner")}{" "}
          <Link href="/legal/cookies" className="text-foreground underline underline-offset-4">
            {t("policy")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => writeAnalyticsConsent("denied")}
          >
            {t("reject")}
          </Button>
          <Button type="button" size="sm" onClick={() => writeAnalyticsConsent("granted")}>
            {t("accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
