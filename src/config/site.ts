export const EXPERIENCE_START_YEAR = 2012;

export const siteConfig = {
  name: "frudev technologies",
  shortName: "frudev",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
  location: "España",
  links: {
    github: "https://github.com/frugarcia",
  },
  legal: {
    owner: "frudev technologies",
    taxId: "",
    address: "",
    updatedAt: "2026-10-22",
  },
  stats: {
    projects: 60,
    technologies: 25,
  },
} as const;

export function getYearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - EXPERIENCE_START_YEAR;
}

export const QUOTE_ANCHOR = "presupuesto";
