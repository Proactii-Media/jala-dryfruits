import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jala Dryfruits and Spices | Premium Dryfruits Wholesale Vapi",
  description:
    "Jala Dryfruits and Spices provides premium quality dryfruits, spices, and seeds with trusted sourcing and wholesale pricing in Vapi, Gujarat.",
  keywords: [
    "dryfruits",
    "spices",
    "cashew wholesale",
    "almonds",
    "pistachio",
    "Vapi",
    "Jala dryfruits",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Jala Dryfruits and Spices",
    description:
      "Premium dryfruits, spices & seeds. Quality you can trust. Taste you will remember.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-cream font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
