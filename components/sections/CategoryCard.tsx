"use client";

import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  active: boolean;
  onClick: () => void;
}

export function CategoryCard({
  title,
  image,
  active,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative h-72 cursor-pointer overflow-hidden rounded-3xl border-4 transition-all duration-300 ${
        active ? "border-primary scale-105" : "border-transparent"
      }`}
    >
      <Image src={image} alt={title} fill className="object-cover" />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
}
