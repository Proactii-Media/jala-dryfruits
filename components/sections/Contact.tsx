"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User, Send } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { contactInfo, socialLinks } from "@/data/site";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { useState } from "react";

const socialIconMap = {
  whatsapp: "💬",
  mail: "✉️",
  phone: "📞",
} as const;

export function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      alert("Message Sent!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="relative bg-white/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          label="Contact Us"
          title="Let's Start a Conversation"
          description="Reach out for wholesale pricing, bulk orders, product availability, or any business inquiries."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                icon: User,
                title: "Owner",
                content: contactInfo.owner,
              },
              {
                icon: Phone,
                title: "Phone",
                content: contactInfo.phone,
                href: contactInfo.phoneHref,
              },
              {
                icon: Mail,
                title: "Email",
                content: contactInfo.email,
                href: contactInfo.emailHref,
              },
              {
                icon: MapPin,
                title: "Address",
                content: contactInfo.address.join(" "),
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white p-6 shadow-soft transition-all hover:shadow-xl"
              >
                <card.icon className="mb-4 h-6 w-6 text-primary" />

                <h3 className="font-semibold text-charcoal">{card.title}</h3>

                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block text-sm text-charcoal/70 transition-colors hover:text-primary"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {card.content}
                  </p>
                )}
              </motion.div>
            ))}

            {/* Social Card */}
            <motion.div
              variants={staggerItem}
              className="col-span-full rounded-3xl bg-primary p-6 text-white"
            >
              <h3 className="text-lg font-semibold">Connect With Us</h3>

              <p className="mt-2 text-sm text-white/70">
                Follow us for product updates, offers, and new arrivals.
              </p>

              <div className="mt-5 flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-lg backdrop-blur transition-transform hover:scale-110"
                  >
                    {socialIconMap[s.icon]}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white p-8 shadow-soft"
          >
            <h3 className="text-2xl font-bold text-charcoal">
              Send Us a Message
            </h3>

            <p className="mt-2 text-charcoal/60">
              Have questions about products, wholesale pricing, or bulk orders?
              We'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">
                  Full Name
                </label>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">
                  Email Address
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <label className="mb-2 block text-sm font-medium text-charcoal">
                Phone Number
              </label>

              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-primary"
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">
                  Message
                </label>

                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center rounded-2xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}

                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
