"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductCardSkeleton } from "@/components/ui/ProductCardSkeleton";
import { CategoryCard } from "./CategoryCard";

import { products, type ProductCategory } from "@/data/products";

import { staggerContainer } from "@/lib/motion";

const categoryCards = [
  {
    id: "cashew",
    title: "Cashew Nuts",
    image: "/cashew.jpg",
  },
  {
    id: "almonds",
    title: "Almonds",
    image: "/almonds.jpg",
  },
  {
    id: "pistachio",
    title: "Pistachio",
    image: "/pistachio.jpg",
  },
  {
    id: "other",
    title: "Kismis & Seeds",
    image: "/kismis.jpg",
  },
];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>();

  const [loading, setLoading] = useState(false);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <AnimatedSection
      id="products"
      className="relative bg-white/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          label="Our Products"
          title="Premium Selection"
          description="Choose a category to explore our products."
        />

        {/* CATEGORY CARDS */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              active={selectedCategory === category.id}
              onClick={() =>
                setSelectedCategory(category.id as ProductCategory)
              }
            />
          ))}
        </div>

        {/* PRODUCTS */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
