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

const brandImages = [
  "/brand/exotic1.jpeg",
  "/brand/exotic2.jpeg",
  "/brand/exotic3.jpeg",
  "/brand/exotic4.jpeg",
  "/brand/exotic5.jpeg",
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
        {/* Brand Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-charcoal md:text-3xl">
              Exotic Fusion Collection
            </h3>

            <p className="mt-2 text-charcoal/60">
              Premium quality dry fruits and spices packed with freshness and
              care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {brandImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl shadow-soft"
              >
                <Image
                  src={image}
                  alt={`Exotic Fusion ${index + 1}`}
                  width={400}
                  height={500}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
