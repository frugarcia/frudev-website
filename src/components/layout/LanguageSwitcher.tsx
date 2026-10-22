"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav
      aria-label={t("label")}
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface/60 p-1 font-mono text-xs",
        className,
      )}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            hrefLang={code}
            lang={code}
            aria-current={active ? "true" : undefined}
            aria-label={t(code)}
            className={cn(
              "flex h-9 min-w-11 items-center justify-center rounded-full px-2.5 uppercase transition-colors lg:h-7 lg:min-w-9",
              active ? "bg-surface-2 text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            {code}
          </Link>
        );
      })}
    </nav>
  );
}
