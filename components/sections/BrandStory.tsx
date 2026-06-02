"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const highlights = [
  "15+ Years Industry Experience",
  "Premium Quality Products",
  "Freshly Packed & Hygienic",
  "Retail, Wholesale & Commercial Supply",
];

export function BrandStory() {
  return (
    <AnimatedSection id="brandstory" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src="/exotic.png"
                alt="Exotic Fusion"
                width={700}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Our Premium Brand
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold text-charcoal md:text-5xl">
              Exotic Fusion
            </h2>

            <p className="mt-6 leading-relaxed text-charcoal/70">
              Exotic Fusion is the premium brand of Jala Dryfruits & Spices,
              offering a wide range of high-quality dry fruits and spices backed
              by over 15 years of industry experience.
            </p>

            <p className="mt-4 leading-relaxed text-charcoal/70">
              Our brand stands for exceptional quality, freshness, and authentic
              taste, providing carefully sourced and expertly packed products
              for retail, wholesale, and commercial customers.
            </p>

            <p className="mt-4 leading-relaxed text-charcoal/70">
              Exotic Fusion combines tradition, quality, and trust to deliver
              the finest flavors and nutrition in every pack.
            </p>

            <div className="mt-8 grid gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
