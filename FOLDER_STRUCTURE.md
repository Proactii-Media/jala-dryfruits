# Jalaram Dryfruits — Project Structure

```
jala-dryfruits/
├── app/
│   ├── globals.css          # Tailwind v4 theme & custom utilities
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   ├── loading.tsx          # Route loading skeleton
│   └── page.tsx             # Single-page landing (all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav, mobile menu, CTA
│   │   ├── Footer.tsx       # Quick links, copyright, social
│   │   └── ScrollToTop.tsx  # Floating scroll-to-top button
│   ├── sections/
│   │   ├── Hero.tsx         # Split hero with parallax showcase
│   │   ├── About.tsx        # Stats, experience badge
│   │   ├── Products.tsx     # Filter tabs + product grid
│   │   ├── WhyChooseUs.tsx  # Feature cards with icons
│   │   ├── Inquiry.tsx      # Glassmorphism form + validation
│   │   └── Contact.tsx      # Contact cards + map embed
│   └── ui/
│       ├── AnimatedSection.tsx
│       ├── FloatingNuts.tsx
│       ├── GlassCard.tsx
│       ├── MagneticButton.tsx
│       ├── ProductCard.tsx
│       ├── ProductCardSkeleton.tsx
│       └── SectionHeading.tsx
├── data/
│   ├── products.ts          # Categories & product catalog
│   └── site.ts              # Nav, contact, stats, features
├── lib/
│   ├── motion.ts            # Framer Motion variants
│   └── utils.ts             # cn(), scrollToSection()
└── public/
    └── images/
        └── products/        # SVG placeholder images
```

## Design Tokens

| Token     | Value     |
|-----------|-----------|
| Background| `#f8f6f2` |
| Primary   | `#7a1f2b` |
| Secondary | `#d4a762` |
| Accent    | `#8fbf5a` |
| Text      | `#2b2b2b` |

## Commands

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
```
