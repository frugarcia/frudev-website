"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { getLenis } from "@/components/motion/SmoothScroll";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, QUOTE_HREF } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function MobileMenu() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const navigatingRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  const onNavigate = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split("#")[1];
    const target = hash ? document.getElementById(hash) : null;
    if (!target) {
      close();
      return;
    }
    event.preventDefault();
    navigatingRef.current = true;
    close();
    window.setTimeout(() => {
      window.history.replaceState(null, "", `#${hash}`);
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(target);
      else target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground lg:hidden"
          aria-label={t("a11y.openMenu")}
        >
          <Menu aria-hidden className="size-5!" />
        </Button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content
              asChild
              forceMount
              aria-describedby={undefined}
              onCloseAutoFocus={(event) => {
                if (navigatingRef.current) {
                  event.preventDefault();
                  navigatingRef.current = false;
                }
              }}
            >
              <motion.div
                className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] lg:hidden"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                data-lenis-prevent
              >
                <Dialog.Title className="sr-only">{t("a11y.mainNav")}</Dialog.Title>
                <div className="container-page flex h-16 shrink-0 items-center justify-between">
                  <Link href="/" onClick={close} aria-label={t("a11y.home")} className="-m-2 p-2">
                    <Logo title={siteConfig.name} />
                  </Link>
                  <Dialog.Close asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-foreground"
                      aria-label={t("a11y.closeMenu")}
                    >
                      <X aria-hidden className="size-5!" />
                    </Button>
                  </Dialog.Close>
                </div>

                <nav aria-label={t("a11y.mainNav")} className="container-page flex-1 py-6">
                  <ul className="flex flex-col">
                    {NAV_ITEMS.map((item, index) => (
                      <motion.li
                        key={item.key}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + index * 0.04 }}
                        className="border-b border-border"
                      >
                        <Link
                          href={item.href}
                          onClick={(event) => onNavigate(event, item.href)}
                          className="flex min-h-14 items-center justify-between text-2xl font-medium tracking-tight transition-colors hover:text-accent-soft"
                        >
                          {t(`nav.${item.key}`)}
                          <ArrowRight aria-hidden className="size-5 text-subtle" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="container-page flex shrink-0 flex-col gap-4 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">{t("language.label")}</span>
                    <LanguageSwitcher />
                  </div>
                  <Button asChild size="lg" className="w-full">
                    <Link href={QUOTE_HREF} onClick={(event) => onNavigate(event, QUOTE_HREF)}>
                      {t("nav.cta")}
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
