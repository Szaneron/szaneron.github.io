import type { ButtonHTMLAttributes } from "react";
import { cn } from "@lib/utils";

type Variant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** Optional Lucide icon rendered before the label */
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs tracking-wide",
        "transition-all duration-250 cursor-pointer",
        variant === "primary" &&
          "px-5 py-2.5 rounded-full bg-accent text-bg font-medium hover:bg-accent-2",
        variant === "ghost" &&
          "px-5 py-2.5 rounded-full border border-line-3 text-ink hover:border-accent hover:text-accent",
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
