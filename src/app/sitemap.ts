import type { MetadataRoute } from "next";
import { LEGAL_PAGES } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { localizedPath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/proyectos", priority: 0.8, changeFrequency: "monthly" as const },
    ...LEGAL_PAGES.map((page) => ({
      path: page.href,
      priority: 0.3,
      changeFrequency: "yearly" as const,
    })),
  ];

  return paths.flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((code) => [code, `${siteConfig.url}${localizedPath(code, path)}`]),
        ),
      },
    })),
  );
}
