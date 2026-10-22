import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-border bg-surface/80 relative overflow-hidden rounded-2xl border p-6 transition-colors duration-300 hover:border-border-strong sm:p-7",
        className,
      )}
      {...props}
    />
  );
}

export function IconBadge({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-accent/20 bg-accent/10 text-accent flex size-11 items-center justify-center rounded-xl border [&_svg]:size-5",
        className,
      )}
      {...props}
    />
  );
}
