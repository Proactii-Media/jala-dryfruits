"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloatingNuts } from "@/components/ui/FloatingNuts";

import { stats } from "@/data/site";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <FloatingNuts count={6} className="opacity-40" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          label="About Us"
          title="Trusted Name In Premium Dry Fruits & Spices"
          description="Delivering quality, freshness, and trust through premium dry fruits and spices backed by over 15 years of industry expertise."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-soft">
              <div className="relative h-[500px] md:h-[650px]">
                <Image
                  src="/dryfruits.jpg"
                  alt="Jala Dryfruits & Spices"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-primary backdrop-blur">
                    Premium Quality Since 2010
                  </span>
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div
                variants={staggerItem}
                className="absolute -right-4 -top-4 z-20 flex h-28 w-28 items-center justify-center rounded-full bg-primary text-white shadow-xl"
              >
                <div className="text-center">
                  <span className="block font-serif text-3xl font-bold">
                    15+
                  </span>
                  <span className="text-[11px] uppercase tracking-widest">
                    Years
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                About Jala Dryfruits & Spices
              </span>

              <h3 className="mt-5 font-serif text-3xl font-bold text-charcoal md:text-4xl">
                Trusted Trading Partner For Premium Dry Fruits & Spices
              </h3>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="space-y-5 text-charcoal/70"
            >
              <p className="leading-relaxed">
                Jala Dryfruits & Spices is a trusted name in the trading and
                supply of premium-quality dry fruits and spices. With over 15
                years of industry experience, we have built a strong reputation
                for delivering products that meet the highest standards of
                freshness, purity, and quality.
              </p>

              <p className="leading-relaxed">
                Our extensive market knowledge, reliable sourcing network, and
                commitment to customer satisfaction have helped us serve
                wholesalers, retailers, food manufacturers, and businesses
                across various markets.
              </p>

              <p className="leading-relaxed">
                We carefully procure our products from trusted growers and
                suppliers to ensure consistent quality, competitive pricing, and
                dependable availability. From nutritious dry fruits to aromatic
                spices, every product is selected with a focus on authenticity,
                taste, and freshness.
              </p>

              <p className="leading-relaxed">
                At Jala Dryfruits & Spices, we believe in building long-term
                relationships through honesty, reliability, and exceptional
                service, making us a preferred trading partner for customers
                seeking quality products and dependable supply solutions.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div variants={staggerItem} className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
                <Award className="mt-1 h-8 w-8 text-secondary" />

                <div>
                  <h4 className="font-semibold text-charcoal">
                    Industry Experience
                  </h4>

                  <p className="mt-1 text-sm text-charcoal/60">
                    More than 15 years of expertise in sourcing, trading, and
                    supplying premium-quality products.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
                <ShieldCheck className="mt-1 h-8 w-8 text-primary" />

                <div>
                  <h4 className="font-semibold text-charcoal">
                    Quality Assurance
                  </h4>

                  <p className="mt-1 text-sm text-charcoal/60">
                    Every product undergoes careful selection and quality checks
                    to ensure freshness, purity, and customer satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="rounded-3xl bg-white p-8 shadow-soft transition-all hover:shadow-glow"
              >
                <span className="font-serif text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </span>

                <p className="mt-3 text-charcoal/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Premium Banner */}
          <motion.div
            variants={staggerItem}
            className="mt-6 rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 text-white"
          >
            <h3 className="text-2xl font-bold">Quality, Trust & Consistency</h3>

            <p className="mt-3 max-w-3xl text-white/85">
              Backed by 15+ years of industry expertise, Jala Dryfruits & Spices
              delivers premium dry fruits and spices through trusted sourcing,
              reliable supply networks, competitive pricing, and a strong
              commitment to customer satisfaction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
