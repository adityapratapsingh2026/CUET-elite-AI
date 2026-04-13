import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gold?: boolean;
  onClick?: () => void;
  hoverable?: boolean;
  "data-ocid"?: string;
}

export function GlassCard({
  children,
  className,
  gold = false,
  onClick,
  hoverable = false,
  "data-ocid": ocid,
}: GlassCardProps) {
  return (
    <div
      data-ocid={ocid}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "rounded-xl backdrop-blur-xl border transition-all duration-300",
        gold
          ? "bg-accent/5 border-accent/30 dark:border-accent/40 shadow-[0_0_20px_0_rgba(213,175,97,0.15)]"
          : "bg-white/5 dark:bg-white/3 border-white/10 dark:border-white/8",
        hoverable &&
          "cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}
