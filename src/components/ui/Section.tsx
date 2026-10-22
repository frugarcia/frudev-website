import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Section({ className, children, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("relative py-20 sm:py-24 lg:py-32", className)} {...props}>
      <div className="container-page">{children}</div>
    </section>
  );
}
