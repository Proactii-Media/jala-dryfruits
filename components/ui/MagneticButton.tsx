"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  onClick,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-shadow",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
