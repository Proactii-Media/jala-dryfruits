"use client";

import { MapPin, Phone, Mail, User } from "lucide-react";

import { navLinks, siteConfig, contactInfo } from "@/data/site";
import { scrollToSection } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/5 bg-charcoal text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Company */}
          <div>
            <Logo size="xl" onDark />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/50">
              {siteConfig.description}
            </p>

            <div className="mt-6">
              <span className="rounded-full bg-primary/20 px-4 py-2 text-xs font-medium text-secondary">
                Premium Dry Fruits & Spices Since 2010
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-cream">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-cream/50 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-cream">
              Contact Information
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <User className="mt-0.5 h-5 w-5 text-secondary" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-cream/40">
                    Owner
                  </p>

                  <p className="text-sm text-cream/70">{contactInfo.owner}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-secondary" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-cream/40">
                    Phone
                  </p>

                  <a
                    href={contactInfo.phoneHref}
                    className="text-sm text-cream/70 transition-colors hover:text-secondary"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-secondary" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-cream/40">
                    Email
                  </p>

                  <a
                    href={contactInfo.emailHref}
                    className="text-sm text-cream/70 transition-colors hover:text-secondary"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-secondary" />

                <div>
                  <p className="text-xs uppercase tracking-wide text-cream/40">
                    Address
                  </p>

                  <p className="text-sm leading-relaxed text-cream/70">
                    {contactInfo.address.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-cream/40 md:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <p>Premium Dry Fruits & Spices • Vapi, Gujarat</p>
        </div>
      </div>
    </footer>
  );
}
