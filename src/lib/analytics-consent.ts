export const ANALYTICS_CONSENT_COOKIE = "analytics_consent";
export const ANALYTICS_CONSENT_MAX_AGE = 60 * 60 * 24 * 365;
export const ANALYTICS_CONSENT_EVENT = "analytics-consent-change";

const MEASUREMENT_ID = /^G-[A-Z0-9]+$/;

export type AnalyticsConsent = "granted" | "denied";

export function getMeasurementId(): string | null {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!id || !MEASUREMENT_ID.test(id)) return null;
  return id;
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  const match = document.cookie.match(/(?:^|; )analytics_consent=(granted|denied)(?:;|$)/);
  return match?.[1] === "granted" || match?.[1] === "denied" ? match[1] : null;
}

function writeCookie(value: string, maxAge: number) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${ANALYTICS_CONSENT_COOKIE}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

function publish(detail: AnalyticsConsent | null) {
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail }));
}

export function writeAnalyticsConsent(value: AnalyticsConsent) {
  writeCookie(value, ANALYTICS_CONSENT_MAX_AGE);
  publish(value);
}

export function clearAnalyticsConsent() {
  writeCookie("", 0);
  publish(null);
}
