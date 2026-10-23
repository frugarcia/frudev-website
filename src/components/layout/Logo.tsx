import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
  title?: string;
};

export function Logo({ className, compact = false, title }: LogoProps) {
  return (
    <img
      src={compact ? "/images/logo-mark.svg" : "/images/logo.svg"}
      alt={title ?? ""}
      className={cn(compact ? "size-9 object-contain" : "h-10 w-auto", className)}
    />
  );
}
