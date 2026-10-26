import { Column, Row, Section, Text } from "@react-email/components";
import type { CSSProperties } from "react";
import { emailFontFamily } from "./email-layout";

export type QuoteRow = {
  label: string;
  value: string;
};

export const previewQuoteRows: QuoteRow[] = [
  { label: "Tipo de proyecto", value: "Web corporativa, API o integración" },
  { label: "Presupuesto aproximado", value: "10.000 - 25.000 €" },
  { label: "¿Para cuándo lo necesitas?", value: "En 1-3 meses" },
  { label: "Nombre", value: "Ana García" },
  { label: "Email", value: "ana@example.com" },
  { label: "Empresa", value: "Ejemplo S.L." },
  { label: "Teléfono", value: "+34 600 000 000" },
  {
    label: "Cuéntanos un poco más",
    value:
      "Queremos renovar la web corporativa y conectar el catálogo con el ERP.\nEl plazo de lanzamiento es el segundo trimestre.",
  },
];

export function QuoteRows({ rows }: { rows: QuoteRow[] }) {
  return (
    <Section style={table}>
      {rows.map((row, index) => (
        <Row key={row.label} style={index < rows.length - 1 ? rowDivider : undefined}>
          <Column style={cell}>
            <Text style={label}>{row.label}</Text>
            <Text style={value}>{row.value}</Text>
          </Column>
        </Row>
      ))}
    </Section>
  );
}

const table: CSSProperties = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e6ebf2",
  borderRadius: "12px",
  padding: "4px 16px",
};

const cell: CSSProperties = {
  verticalAlign: "top",
  padding: "12px 0",
};

const rowDivider: CSSProperties = {
  borderBottom: "1px solid #e6ebf2",
};

const label: CSSProperties = {
  margin: "0 0 2px",
  fontFamily: emailFontFamily,
  fontSize: "12px",
  lineHeight: "18px",
  fontWeight: 600,
  color: "#64748b",
};

const value: CSSProperties = {
  margin: 0,
  fontFamily: emailFontFamily,
  fontSize: "15px",
  lineHeight: "22px",
  color: "#0f172a",
  whiteSpace: "pre-wrap",
};
