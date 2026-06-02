import { Logo } from "@/components/ui/Logo";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cream">
      <Logo size="lg" priority />
      <div className="h-1 w-24 overflow-hidden rounded-full bg-primary/15">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
      </div>
    </div>
  );
}
