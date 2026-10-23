import { QUOTE_ANCHOR } from "./site";

export const SECTION_IDS = {
  services: "services",
  build: "what-we-build",
  process: "process",
  whyUs: "why-us",
  stack: "stack",
  faq: "faq",
  quote: QUOTE_ANCHOR,
} as const;

export const PROJECTS_HREF = "/proyectos";

export const NAV_ITEMS = [
  { key: "services", href: `/#${SECTION_IDS.services}` },
  { key: "build", href: `/#${SECTION_IDS.build}` },
  { key: "projects", href: PROJECTS_HREF },
  { key: "process", href: `/#${SECTION_IDS.process}` },
  { key: "whyUs", href: `/#${SECTION_IDS.whyUs}` },
  { key: "stack", href: `/#${SECTION_IDS.stack}` },
  { key: "faq", href: `/#${SECTION_IDS.faq}` },
] as const;

export const QUOTE_HREF = `/#${SECTION_IDS.quote}`;

export const LEGAL_PAGES = [
  { key: "notice", href: "/legal/aviso-legal" },
  { key: "privacy", href: "/legal/privacidad" },
  { key: "cookies", href: "/legal/cookies" },
] as const;
