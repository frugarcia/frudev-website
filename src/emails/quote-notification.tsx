import { Button, Text } from "@react-email/components";
import type { CSSProperties } from "react";
import { EmailLayout, emailFontFamily } from "./components/email-layout";
import { previewQuoteRows, QuoteRows, type QuoteRow } from "./components/quote-rows";

const localeNames: Record<string, string> = {
  es: "Español",
  en: "English",
};

type QuoteNotificationProps = {
  locale: string;
  preview: string;
  rows: QuoteRow[];
  localeLabel: string;
  replyTo: string;
};

function QuoteNotification({
  locale,
  preview,
  rows,
  localeLabel,
  replyTo,
}: QuoteNotificationProps) {
  const localeName = localeNames[locale] ?? locale;

  return (
    <EmailLayout locale={locale} preview={preview}>
      <Text style={titleStyle}>{preview}</Text>
      <QuoteRows rows={rows} />
      <Text style={localeStyle}>
        {localeLabel}: {localeName}
      </Text>
      <Button href={`mailto:${replyTo}`} style={replyButton}>
        {replyTo}
      </Button>
    </EmailLayout>
  );
}

export default Object.assign(QuoteNotification, {
  PreviewProps: {
    locale: "es",
    preview: "Nueva solicitud de presupuesto de Ana García.",
    rows: previewQuoteRows,
    localeLabel: "Idioma",
    replyTo: "ana@example.com",
  } satisfies QuoteNotificationProps,
});

const titleStyle: CSSProperties = {
  margin: "0 0 20px",
  fontFamily: emailFontFamily,
  fontSize: "22px",
  lineHeight: "30px",
  fontWeight: 600,
  color: "#0f172a",
};

const localeStyle: CSSProperties = {
  margin: "20px 0 0",
  fontFamily: emailFontFamily,
  fontSize: "13px",
  lineHeight: "20px",
  color: "#64748b",
};

const replyButton: CSSProperties = {
  display: "inline-block",
  marginTop: "16px",
  backgroundColor: "#05070b",
  borderRadius: "8px",
  padding: "12px 18px",
  fontFamily: emailFontFamily,
  fontSize: "14px",
  fontWeight: 600,
  color: "#e8edf5",
  textDecoration: "none",
};
