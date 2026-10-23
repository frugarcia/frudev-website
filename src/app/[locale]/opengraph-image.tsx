import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { getYearsOfExperience, siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "hero" });
  const tTrust = await getTranslations({ locale: locale as Locale, namespace: "trust" });
  const logo = await readFile(join(process.cwd(), "public/images/logo-lockup.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "radial-gradient(circle at 20% 0%, #0c4a6e 0%, #05070b 55%)",
        color: "#e8edf5",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={280} height={90} alt="" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {`${t("titleStart")} `}
          <span style={{ color: "#38bdf8", margin: "0 18px" }}>{t("titleHighlight")}</span>
          {t("titleEnd")}
        </div>
        <div style={{ fontSize: 28, color: "#8f9bb0", display: "flex" }}>
          {`+${getYearsOfExperience()} ${tTrust("years")} · Python · Go · Java · Cloud`}
        </div>
      </div>
    </div>,
    size,
  );
}
