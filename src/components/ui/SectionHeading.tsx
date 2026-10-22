import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "border-accent/25 bg-accent/10 text-accent-soft inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs tracking-wider uppercase",
        className,
      )}
    >
      <span className="bg-accent size-1.5 rounded-full" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base text-pretty sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
