import type { Variants, Transition } from "framer-motion";

export const easePremium: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easePremium },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easePremium },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export const floatAnimation = {
  y: [0, -12, 0],
  rotate: [0, 2, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const floatSlow = {
  y: [0, -18, 0],
  x: [0, 6, 0],
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};
