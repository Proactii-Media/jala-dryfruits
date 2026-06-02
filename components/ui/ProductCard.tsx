"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerItem } from "@/lib/motion";
import type { Product } from "@/data/products";
import { MessageCircle } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-glow"
    >
      {/* Full Card Image */}
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Content on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl font-semibold text-white">
            {product.name}
          </h3>

          <p className="mt-2 text-sm text-white/80 line-clamp-2">
            {product.description}
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="mt-4 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
