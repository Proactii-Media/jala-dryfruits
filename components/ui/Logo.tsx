import Image from "next/image";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { height: 36, className: "h-9 w-auto max-w-[140px]" },
  md: { height: 48, className: "h-12 w-auto max-w-[200px]" },
  lg: { height: 72, className: "h-[4.5rem] w-auto max-w-[300px] sm:h-20 sm:max-w-[340px]" },
  xl: { height: 120, className: "h-24 w-auto max-w-[420px] sm:h-28 sm:max-w-[480px] md:h-32 md:max-w-[540px]" },
} as const;

type LogoSize = keyof typeof sizeMap;

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
  onDark?: boolean;
}

export function Logo({ size = "md", className, priority, onDark }: LogoProps) {
  const { height, className: sizeClass } = sizeMap[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center",
        onDark && "rounded-xl bg-white px-2 py-1 shadow-soft",
        className
      )}
    >
      <Image
        src="/images/logo.png"
        alt="Jala Dryfruits and Spices"
        width={Math.round(height * 3.2)}
        height={height}
        priority={priority}
        className={cn("object-contain object-left", sizeClass)}
      />
    </span>
  );
}
