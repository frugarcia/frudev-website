export const EXPERIENCE_START_YEAR = 2012;

export const siteConfig = {
  name: "frudev technologies",
  shortName: "frudev",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "web@frudev.es",
  location: "España",
  links: {
    github: "https://github.com/frugarcia",
  },
  legal: {
    owner: "FRUDEV TECHNOLOGIES, S.L.",
    taxId: "B13638200",
    address: "Ctra. Isla Menor, n.º 31, 41703 Dos Hermanas (Sevilla)",
    registry: "Registro Mercantil de Sevilla, tomo 7387, folio 219, hoja SE-138902, inscripción 1",
    updatedAt: "2026-10-23",
  },
  stats: {
    projects: 60,
    technologies: 27,
  },
} as const;

export function getYearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - EXPERIENCE_START_YEAR;
}

export const QUOTE_ANCHOR = "presupuesto";
