import { ArrowRight, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { LEGAL_PAGES, NAV_ITEMS, QUOTE_HREF } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";

export async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface/40 relative border-t pb-[env(safe-area-inset-bottom)]">
      <div className="container-page grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <Link href="/" aria-label={t("a11y.home")} className="-m-2 w-fit p-2">
            <Logo title={siteConfig.name} />
          </Link>
          <p className="text-muted max-w-sm text-sm leading-relaxed">{t("footer.tagline")}</p>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="border-border text-muted hover:border-border-strong hover:text-foreground flex size-11 items-center justify-center rounded-full border transition-colors"
            >
              <GithubIcon className="size-5" />
            </a>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={siteConfig.email}
                className="border-border text-muted hover:border-border-strong hover:text-foreground flex size-11 items-center justify-center rounded-full border transition-colors"
              >
                <Mail className="size-5" aria-hidden />
              </a>
            )}
          </div>
        </div>

        <nav aria-label={t("footer.navigation")} className="lg:col-span-3">
          <h2 className="text-foreground mb-4 text-sm font-semibold">{t("footer.navigation")}</h2>
          <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-muted hover:text-foreground flex min-h-11 items-center text-sm transition-colors sm:min-h-9"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-8 sm:flex-row md:col-span-2 lg:col-span-4 lg:flex-col">
          <nav aria-label={t("footer.legal")} className="sm:flex-1">
            <h2 className="text-foreground mb-4 text-sm font-semibold">{t("footer.legal")}</h2>
            <ul>
              {LEGAL_PAGES.map((page) => (
                <li key={page.key}>
                  <Link
                    href={page.href}
                    className="text-muted hover:text-foreground flex min-h-11 items-center text-sm transition-colors sm:min-h-9"
                  >
                    {t(`legal.${page.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="sm:flex-1">
            <h2 className="text-foreground mb-4 text-sm font-semibold">{t("footer.contact")}</h2>
            <Button asChild variant="secondary">
              <Link href={QUOTE_HREF}>
                {t("footer.contactCta")}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="container-page text-subtle flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.rights", { year })}</p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
