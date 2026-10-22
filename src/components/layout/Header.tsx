"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, QUOTE_HREF } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-colors duration-300",
        scrolled
          ? "border-border/80 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3 lg:h-18">
        <Link href="/" aria-label={t("a11y.home")} className="-m-2 flex min-h-11 items-center p-2">
          <Logo
            title={siteConfig.name}
            withTagline={false}
            className="sm:hidden lg:inline-flex xl:hidden"
          />
          <Logo
            title={siteConfig.name}
            className="hidden sm:inline-flex lg:hidden xl:inline-flex"
          />
        </Link>

        <nav aria-label={t("a11y.mainNav")} className="hidden lg:block">
          <ul className="flex items-center xl:gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="rounded-full px-2.5 py-2 text-sm whitespace-nowrap text-muted transition-colors hover:text-foreground xl:px-3"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden lg:inline-flex" />
          <Button asChild size="sm" className="px-4">
            <Link href={QUOTE_HREF}>
              <span className="hidden min-[360px]:inline">{t("nav.cta")}</span>
              <span className="min-[360px]:hidden">{t("quote.eyebrow")}</span>
              <ArrowRight
                aria-hidden
                className="hidden transition-transform group-hover/button:translate-x-0.5 sm:block"
              />
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
