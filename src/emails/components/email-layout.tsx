import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties, ReactNode } from "react";
import { siteConfig } from "../../config/site";

export const emailFontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const logoWidth = 196;
const logoHeight = 63;

type EmailLayoutProps = {
  locale: string;
  preview: string;
  children: ReactNode;
};

export function EmailLayout({ locale, preview, children }: EmailLayoutProps) {
  return (
    <Html lang={locale}>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={header}>
            <Img
              src={`${siteConfig.url}/images/logo-lockup.png`}
              alt={siteConfig.name}
              width={logoWidth}
              height={logoHeight}
              style={logo}
            />
          </Section>
          <Section style={accent}>&nbsp;</Section>
          <Section style={content}>{children}</Section>
          <Section style={footer}>
            <Text style={footerText}>{siteConfig.legal.owner}</Text>
            <Text style={footerText}>{siteConfig.legal.address}</Text>
            <Link href={`mailto:${siteConfig.email}`} style={footerLink}>
              {siteConfig.email}
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body: CSSProperties = {
  margin: 0,
  padding: "32px 12px",
  backgroundColor: "#eef2f6",
  fontFamily: emailFontFamily,
  color: "#0f172a",
};

const card: CSSProperties = {
  width: "100%",
  maxWidth: "560px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden",
};

const header: CSSProperties = {
  backgroundColor: "#05070b",
  padding: "28px 32px",
  textAlign: "center",
};

const logo: CSSProperties = {
  display: "block",
  margin: "0 auto",
  width: `${logoWidth}px`,
  height: "auto",
};

const accent: CSSProperties = {
  backgroundColor: "#38bdf8",
  height: "4px",
  lineHeight: "4px",
  fontSize: "4px",
};

const content: CSSProperties = {
  padding: "32px",
};

const footer: CSSProperties = {
  padding: "20px 32px 28px",
  borderTop: "1px solid #e6ebf2",
};

const footerText: CSSProperties = {
  margin: "0 0 4px",
  fontFamily: emailFontFamily,
  fontSize: "12px",
  lineHeight: "18px",
  color: "#64748b",
};

const footerLink: CSSProperties = {
  fontFamily: emailFontFamily,
  fontSize: "12px",
  lineHeight: "18px",
  color: "#64748b",
  textDecoration: "underline",
};
