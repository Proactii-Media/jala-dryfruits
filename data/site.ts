export const siteConfig = {
  name: "Jala Dryfruits and Spices",
  shortName: "Jala",
  tagline: "Premium Dryfruits & Spices",
  description:
    "Jala Dryfruits and Spices provides premium quality dryfruits, spices, and seeds with trusted sourcing and wholesale pricing.",
  logo: "/images/logo.png",
  url: "https://jaladryfruits.com",
};

export const navLinks = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "about" },
  { label: "Products", href: "products" },
  { label: "Contact", href: "contact" },
  { label: "Brand", href: "brandstory" },
] as const;

export const contactInfo = {
  owner: "Dev Thakkar",
  phone: "96645 47427",
  phoneHref: "tel:+919664547427",
  email: "jaladryfruitsandspices@gmail.com",
  emailHref: "mailto:jaladryfruitsandspices@gmail.com",
  address: [
    "B-102, Sunrise Society,",
    "Near Haria Hospital,",
    "Behind Mistie Store,",
    "Charwada Road, Gunjan,",
    "Vapi - 396195,",
    "Valsad, Gujarat",
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0!2d72.9!3d20.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIyJzEyLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
};

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Premium Products" },
  { value: "500+", label: "Happy Clients" },
  { value: "100%", label: "Quality Assured" },
] as const;

export const features = [
  {
    title: "Premium Quality",
    description:
      "Handpicked dryfruits and spices sourced from trusted farms and suppliers worldwide.",
    icon: "award" as const,
  },
  {
    title: "Trusted Wholesale Supplier",
    description:
      "Competitive wholesale pricing for retailers, distributors, and bulk buyers across India.",
    icon: "shield" as const,
  },
  {
    title: "Fresh Products",
    description:
      "Regular fresh stock with proper storage and packaging to preserve natural taste.",
    icon: "leaf" as const,
  },
  {
    title: "Fast Delivery",
    description:
      "Reliable and timely delivery across Gujarat and nationwide shipping on request.",
    icon: "truck" as const,
  },
] as const;

export const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919664547427",
    icon: "whatsapp" as const,
  },
  {
    label: "Email",
    href: "mailto:jaladryfruitsandspices@gmail.com",
    icon: "mail" as const,
  },
  { label: "Phone", href: "tel:+919664547427", icon: "phone" as const },
] as const;
