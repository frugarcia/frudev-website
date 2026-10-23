import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Clients } from "@/components/sections/Clients";
import { Cta } from "@/components/sections/Cta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { WhyUs } from "@/components/sections/WhyUs";
import { JsonLd } from "@/components/seo/JsonLd";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <JsonLd locale={locale as Locale} />
      <Hero />
      <TrustBar />
      <Clients />
      <Services />
      <Cta variant="afterServices" />
      <WhatWeBuild />
      <Process />
      <Cta variant="afterProcess" />
      <WhyUs />
      <Stack />
      <Faq />
      <QuoteSection />
    </>
  );
}
