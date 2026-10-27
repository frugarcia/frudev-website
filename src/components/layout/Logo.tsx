import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
  title?: string;
};

export function Logo({ className, compact = false, title }: LogoProps) {
  return (
    <Image
      src={compact ? "/images/logo-mark.svg" : "/images/logo.svg"}
      alt={title ?? ""}
      width={compact ? 140 : 240}
      height={compact ? 148 : 77}
      style={compact ? { width: 36, height: 36 } : { width: "auto", height: 40 }}
      className={cn(compact && "object-contain", className)}
    />
  );
}
