import { Text } from "@react-email/components";
import type { CSSProperties } from "react";
import { EmailLayout, emailFontFamily } from "./components/email-layout";
import { previewQuoteRows, QuoteRows, type QuoteRow } from "./components/quote-rows";

type QuoteConfirmationProps = {
  locale: string;
  preview: string;
  greeting: string;
  body: string;
  summaryTitle: string;
  rows: QuoteRow[];
  signature: string;
};

function QuoteConfirmation({
  locale,
  preview,
  greeting,
  body,
  summaryTitle,
  rows,
  signature,
}: QuoteConfirmationProps) {
  return (
    <EmailLayout locale={locale} preview={preview}>
      <Text style={greetingStyle}>{greeting}</Text>
      <Text style={bodyStyle}>{body}</Text>
      <Text style={summaryStyle}>{summaryTitle}</Text>
      <QuoteRows rows={rows} />
      <Text style={signatureStyle}>{signature}</Text>
    </EmailLayout>
  );
}

export default Object.assign(QuoteConfirmation, {
  PreviewProps: {
    locale: "es",
    preview: "Hemos recibido tu proyecto y te responderemos en menos de 24 horas laborables.",
    greeting: "Hola Ana,",
    body: "Gracias por contarnos tu proyecto. Lo estamos revisando y te responderemos en menos de 24 horas laborables con los siguientes pasos.",
    summaryTitle: "Resumen de tu solicitud",
    rows: previewQuoteRows,
    signature: "El equipo de frudev technologies",
  } satisfies QuoteConfirmationProps,
});

const greetingStyle: CSSProperties = {
  margin: "0 0 12px",
  fontFamily: emailFontFamily,
  fontSize: "22px",
  lineHeight: "30px",
  fontWeight: 600,
  color: "#0f172a",
};

const bodyStyle: CSSProperties = {
  margin: "0 0 24px",
  fontFamily: emailFontFamily,
  fontSize: "15px",
  lineHeight: "24px",
  color: "#334155",
};

const summaryStyle: CSSProperties = {
  margin: "0 0 12px",
  fontFamily: emailFontFamily,
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 600,
  color: "#0f172a",
};

const signatureStyle: CSSProperties = {
  margin: "24px 0 0",
  fontFamily: emailFontFamily,
  fontSize: "15px",
  lineHeight: "24px",
  color: "#0f172a",
};
