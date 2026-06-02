export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl bg-white shadow-soft">
      <div className="aspect-square bg-cream-dark" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-2/3 rounded-lg bg-cream-dark" />
        <div className="h-4 w-full rounded-lg bg-cream-dark/70" />
        <div className="h-10 w-full rounded-full bg-cream-dark" />
      </div>
    </div>
  );
}
