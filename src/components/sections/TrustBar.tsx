import { getTranslations } from "next-intl/server";
import { Counter } from "@/components/motion/Counter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PROJECTS_HREF } from "@/config/navigation";
import { getYearsOfExperience, siteConfig } from "@/config/site";
import { MARQUEE_TECH } from "@/config/stack";
import { Link } from "@/i18n/navigation";

export async function TrustBar() {
  const t = await getTranslations("trust");

  const stats = [
    { value: getYearsOfExperience(), prefix: "+", suffix: "", label: t("years") },
    {
      value: siteConfig.stats.projects,
      prefix: "+",
      suffix: "",
      label: t("projects"),
      href: PROJECTS_HREF,
    },
    { value: siteConfig.stats.technologies, prefix: "+", suffix: "", label: t("technologies") },
    { value: 100, prefix: "", suffix: "%", label: t("satisfaction") },
  ];

  return (
    <section aria-label={t("years")} className="relative border-y border-border bg-surface/30">
      <div className="container-page">
        <Stagger className="grid grid-cols-2 divide-border lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => {
            const body = (
              <>
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-3xl font-semibold tracking-tight text-foreground tabular-nums sm:text-4xl lg:text-5xl"
                />
                <span
                  className={
                    stat.href
                      ? "text-sm text-pretty text-muted underline decoration-border underline-offset-4 group-hover:text-foreground"
                      : "text-sm text-pretty text-muted"
                  }
                >
                  {stat.label}
                </span>
              </>
            );
            return (
              <StaggerItem key={stat.label} className="flex">
                {stat.href ? (
                  <Link
                    href={stat.href}
                    className="group flex flex-1 flex-col gap-1 rounded-2xl px-2 py-8 outline-offset-4 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent sm:px-6 sm:py-10"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="flex flex-1 flex-col gap-1 px-2 py-8 sm:px-6 sm:py-10">
                    {body}
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
      <div className="overflow-hidden border-t border-border mask-fade-x py-5" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 pr-10 hover:[animation-play-state:paused]">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="font-mono text-sm whitespace-nowrap text-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
