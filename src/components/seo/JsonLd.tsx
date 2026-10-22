import { getTranslations } from "next-intl/server";
import { EXPERIENCE_START_YEAR, siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";

const SERVICE_KEYS = ["management", "web", "apis", "automation", "cloud", "maintenance"] as const;

export async function JsonLd({ locale }: { locale: Locale }) {
  const tMeta = await getTranslations({ locale, namespace: "meta" });
  const tServices = await getTranslations({ locale, namespace: "services" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const url = `${siteConfig.url}/${locale}`;
  const faq = tFaq.raw("items") as Array<{ q: string; a: string }>;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.svg`,
        foundingDate: String(EXPERIENCE_START_YEAR),
        sameAs: [siteConfig.links.github],
        ...(siteConfig.email ? { email: siteConfig.email } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: siteConfig.name,
        url,
        description: tMeta("description"),
        image: `${url}/opengraph-image`,
        parentOrganization: { "@id": `${siteConfig.url}/#organization` },
        areaServed: ["ES", "EU", "Worldwide"],
        knowsLanguage: ["es", "en"],
        address: { "@type": "PostalAddress", addressCountry: "ES" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: tServices("title"),
          itemListElement: SERVICE_KEYS.map((key) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: tServices(`items.${key}.title`),
              description: tServices(`items.${key}.description`),
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
