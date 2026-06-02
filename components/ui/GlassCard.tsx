import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/40 bg-white/50 p-6 shadow-soft backdrop-blur-xl md:p-8",
        "ring-1 ring-black/[0.03]",
        className
      )}
    >
      {children}
    </div>
  );
}
