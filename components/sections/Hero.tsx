"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingNuts } from "@/components/ui/FloatingNuts";
import { scrollToSection } from "@/lib/utils";

const showcaseCategories = [
  {
    name: "Cashew",
    image: "/cashew.jpg",
  },
  {
    name: "Almonds",
    image: "/almonds.jpg",
  },
  {
    name: "Pistachio",
    image: "/pistachio.jpg",
  },
  {
    name: "Seeds & Raisins",
    image: "/kismis.jpg",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/dryfruits.jpg"
          alt="Premium Dry Fruits"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
      </div>

      <FloatingNuts count={8} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Content */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              Premium Quality Since Years
            </span>

            <h1 className="text-5xl font-black uppercase leading-none text-white md:text-7xl lg:text-8xl">
              Premium
              <br />
              Dry Fruits
            </h1>

            <p className="mt-6 text-lg text-white/75 md:text-xl">
              Fresh. Pure. Natural.
            </p>

            <div className="mt-10">
              <MagneticButton
                onClick={() => scrollToSection("products")}
                className="bg-white px-8 py-4 text-black"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            style={{ y }}
            className="relative hidden h-[650px] items-center justify-end lg:flex"
          >
            {showcaseCategories.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -20,
                  scale: 1.03,
                }}
                onClick={() => scrollToSection("products")}
                className="group absolute cursor-pointer overflow-hidden rounded-[32px] border border-white/20 backdrop-blur-xl"
                style={{
                  width: "220px",
                  height: "420px",
                  right: `${index * 120}px`,
                  zIndex: 10 - index,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>

                  <p className="mt-2 text-sm text-white/70">
                    Explore Collection
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden">
            {showcaseCategories.map((item) => (
              <div
                key={item.name}
                className="relative h-[300px] w-[200px] flex-shrink-0 overflow-hidden rounded-3xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
