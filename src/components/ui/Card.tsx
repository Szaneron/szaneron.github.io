import type { HTMLAttributes } from "react";
import { cn } from "@lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Enable bg hover transition (default true) */
  hover?: boolean;
  /** Padding preset — "default" uses the design system card pad */
  padding?: "default" | "none";
}

export function Card({
  hover = true,
  padding = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg",
        padding === "default" && "p-[clamp(28px,3.5vw,50px)]",
        hover && "transition-colors duration-300 hover:bg-bg-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
