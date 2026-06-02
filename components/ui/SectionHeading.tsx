"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-xl",
        className
      )}
    >
      {label && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-charcoal/70 md:text-lg">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-primary to-secondary",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
