"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/data/site";
import { cn, scrollToSection } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-black/5 bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-black/20 backdrop-blur-md",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:py-5">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="flex items-center rounded-lg transition-opacity hover:opacity-90"
            aria-label="Go to home"
          >
            <div className="scale-125 lg:scale-150 origin-left">
              <Logo priority />
            </div>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "text-sm font-semibold tracking-wide transition-all duration-300",
                    scrolled
                      ? "text-charcoal hover:text-primary"
                      : "text-white hover:text-yellow-300",
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={() => handleNav("contact")}
              className="hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 sm:inline-flex"
            >
              Get Inquiry
            </MagneticButton>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-all lg:hidden",
                scrolled
                  ? "bg-white text-charcoal shadow-lg"
                  : "border border-white/20 bg-white/20 text-white backdrop-blur-md",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[min(340px,90vw)] flex-col bg-white p-8 pt-24 shadow-2xl"
            >
              <ul className="flex flex-col gap-7">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.05,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNav(link.href)}
                      className="text-2xl font-bold text-charcoal transition-colors hover:text-primary"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <MagneticButton
                onClick={() => handleNav("contact")}
                className="mt-auto w-full rounded-full bg-primary py-4 text-white"
              >
                Get Inquiry
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
