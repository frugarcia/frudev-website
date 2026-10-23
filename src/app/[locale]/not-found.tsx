import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="container-page flex min-h-dvh flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="text-gradient font-mono text-7xl font-semibold sm:text-8xl">404</span>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("title")}</h1>
      <p className="max-w-md text-muted">{t("description")}</p>
      <Button asChild variant="secondary">
        <Link href="/">
          <ArrowLeft aria-hidden />
          {t("back")}
        </Link>
      </Button>
    </div>
  );
}
