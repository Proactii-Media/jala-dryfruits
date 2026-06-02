"use client";

import { motion } from "framer-motion";
import { floatAnimation, floatSlow } from "@/lib/motion";
import { cn } from "@/lib/utils";

const nuts = ["🥜", "🌰", "✨", "🫘", "🌿"];

interface FloatingNutsProps {
  className?: string;
  count?: number;
}

export function FloatingNuts({ className, count = 8 }: FloatingNutsProps) {
  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: nuts[i % nuts.length],
    left: `${10 + (i * 11) % 80}%`,
    top: `${5 + (i * 13) % 85}%`,
    size: 1.2 + (i % 3) * 0.4,
    delay: i * 0.4,
    slow: i % 2 === 0,
  }));

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute select-none opacity-[0.12] md:opacity-[0.18]"
          style={{
            left: item.left,
            top: item.top,
            fontSize: `${item.size}rem`,
          }}
          animate={item.slow ? floatSlow : floatAnimation}
          transition={{
            ...(item.slow ? floatSlow.transition : floatAnimation.transition),
            delay: item.delay,
          }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
}
