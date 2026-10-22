import { getTranslations } from "next-intl/server";
import { Counter } from "@/components/motion/Counter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getYearsOfExperience, siteConfig } from "@/config/site";
import { MARQUEE_TECH } from "@/config/stack";

export async function TrustBar() {
  const t = await getTranslations("trust");

  const stats = [
    { value: getYearsOfExperience(), prefix: "+", suffix: "", label: t("years") },
    { value: siteConfig.stats.projects, prefix: "+", suffix: "", label: t("projects") },
    { value: siteConfig.stats.technologies, prefix: "+", suffix: "", label: t("technologies") },
    { value: 100, prefix: "", suffix: "%", label: t("satisfaction") },
  ];

  return (
    <section aria-label={t("years")} className="border-border bg-surface/30 relative border-y">
      <div className="container-page">
        <Stagger className="divide-border grid grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col gap-1 px-2 py-8 sm:px-6 sm:py-10">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="text-foreground text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl lg:text-5xl"
              />
              <span className="text-muted text-sm text-pretty">{stat.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <div className="border-border mask-fade-x overflow-hidden border-t py-5" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 pr-10 hover:[animation-play-state:paused]">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, index) => (
            <span key={`${tech}-${index}`} className="text-subtle font-mono text-sm whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
