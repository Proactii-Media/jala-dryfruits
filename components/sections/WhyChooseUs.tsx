"use client";

import { motion } from "framer-motion";
import { Award, Shield, Leaf, Truck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/site";
import { staggerContainer, staggerItem } from "@/lib/motion";

const iconMap = {
  award: Award,
  shield: Shield,
  leaf: Leaf,
  truck: Truck,
} as const;

export function WhyChooseUs() {
  return (
    <AnimatedSection className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="The Jala Difference"
          description="We combine premium sourcing, wholesale expertise, and reliable service to deliver dryfruits you can trust."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-glow"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-glow"
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <h3 className="font-serif text-xl font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
