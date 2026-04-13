import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export function GoldButton({
  children,
  variant = "solid",
  size = "md",
  loading = false,
  className,
  disabled,
  ...props
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    solid:
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_16px_0_rgba(213,175,97,0.4)] hover:shadow-[0_0_24px_0_rgba(213,175,97,0.6)]",
    outline:
      "border border-accent/60 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_12px_0_rgba(213,175,97,0.3)]",
    ghost: "text-accent hover:bg-accent/10",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      {children}
    </button>
  );
}
