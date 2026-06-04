"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { CategoryCard } from "./CategoryCard";
import { products } from "@/data/products";

type CategoryType =
  | "cashew"
  | "almonds"
  | "pistachio"
  | "other"
  | "walnut"
  | "date"
  | "fig";

const productsByCategory = {
  cashew: products.filter((p) => p.category === "cashew"),
  almonds: products.filter((p) => p.category === "almonds"),
  pistachio: products.filter((p) => p.category === "pistachio"),
  other: products.filter((p) => p.category === "other"),
};

const categoryCards = [
  {
    id: "cashew",
    title: "Cashew Nuts",
    image: "/cashew.jpg",
  },
  {
    id: "almonds",
    title: "Almonds",
    image: "/kacha-badam.jpg",
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
  {
    id: "walnut",
    title: "Walnut",
    image: "/walnut.jpg",
  },
  {
    id: "date",
    title: "Dates",
    image: "/dates.jpg",
  },
  {
    id: "fig",
    title: "Fig",
    image: "/fig.jpg",
  },
];

export function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("cashew");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts =
    productsByCategory[selectedCategory as keyof typeof productsByCategory] ||
    [];

  const handleCategoryClick = (category: CategoryType) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <AnimatedSection
      id="products"
      className="relative bg-white/40 py-20 md:py-28"
    >
      {" "}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {" "}
        <SectionHeading
          label="Our Products"
          title="Premium Selection"
          description="Choose a category to explore our premium collection."
        />
        {/* Categories */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              active={false}
              onClick={() => handleCategoryClick(category.id as CategoryType)}
            />
          ))}
        </div>
        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="fixed left-1/2 top-1/2 z-[60] max-h-[85vh] w-[95%] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8"
              >
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-charcoal">
                      {
                        categoryCards.find((c) => c.id === selectedCategory)
                          ?.title
                      }
                    </h3>

                    <p className="mt-2 text-charcoal/60">
                      Premium quality products from Jala Dryfruits & Spices.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-xl transition hover:bg-gray-200"
                  >
                    ✕
                  </button>
                </div>

                {/* Coming Soon Categories */}
                {["walnut", "date", "fig"].includes(selectedCategory) ? (
                  <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-black/5 bg-gradient-to-b from-white to-gray-50 px-8 text-center">
                    <span className="text-sm font-medium uppercase tracking-[0.3em] text-primary/70">
                      Coming Soon
                    </span>

                    <h3 className="mt-4 text-4xl font-bold text-charcoal">
                      {selectedCategory === "walnut"
                        ? "Premium Walnuts"
                        : selectedCategory === "date"
                          ? "Premium Dates"
                          : "Premium Figs"}
                    </h3>

                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/60">
                      We're currently expanding our collection and carefully
                      selecting the finest quality products for this category.
                    </p>

                    <p className="mt-2 text-charcoal/50">
                      Available soon from Jala Dryfruits & Spices.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
