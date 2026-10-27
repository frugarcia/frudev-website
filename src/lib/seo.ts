import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export function localizedPath(locale: string, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}

export function buildAlternates(locale: string, path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const code of routing.locales) {
    languages[code] = localizedPath(code, path);
  }
  languages["x-default"] = localizedPath(routing.defaultLocale, path);
  return {
    canonical: localizedPath(locale, path),
    languages,
  };
}
