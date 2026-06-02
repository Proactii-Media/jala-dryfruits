export type ProductCategory = "cashew" | "almonds" | "pistachio" | "other";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
}

const img = (slug: string) => `/images/products/${slug}.svg`;

export const categoryData = [
  {
    id: "cashew",
    title: "Cashew Nuts",
    image: "/images/categories/cashew.jpg",
  },
  {
    id: "almonds",
    title: "Almonds",
    image: "/images/categories/almond.jpg",
  },
  {
    id: "pistachio",
    title: "Pistachio",
    image: "/images/categories/pistachio.jpg",
  },
  {
    id: "other",
    title: "Kismis & Seeds",
    image: "/images/categories/kismis.jpg",
  },
];

export const products = [
  {
    id: "w400",
    name: "W400",
    category: "cashew",
    image: "/products/w400.png",
  },
  {
    id: "w320",
    name: "W320",
    category: "cashew",
    image: "/products/w320.png",
  },
  {
    id: "w240",
    name: "W240",
    category: "cashew",
    image: "/products/w240.png",
  },
  {
    id: "ssp",
    name: "SSP",
    category: "cashew",
    image: "/products/ssp.jpeg",
  },
  {
    id: "swp",
    name: "SWP",
    category: "cashew",
    image: "/products/swp.png",
  },
  {
    id: "jk",
    name: "JK",
    category: "cashew",
    image: "/products/jk.png",
  },
  {
    id: "jh",
    name: "Jh",
    category: "cashew",
    image: "/products/jh.png",
  },

  {
    id: "ca-regular",
    name: "California Regular",
    category: "almonds",
    image: "/products/ca-almond.png",
  },

  {
    id: "ca-jumbo",
    name: "California Jumbo",
    category: "almonds",
    image: "/products/jumbo-almond.jpg",
  },

  {
    id: "independent-almond",
    name: "Independent Almond",
    category: "almonds",
    image: "/almond.jpg",
  },

  {
    id: "pista-salted-full-jumbo",
    name: "Pista Salted Full Jumbo",
    category: "pistachio",
    image: "/products/jumbo-pistachio.jpg",
  },

  {
    id: "pista-salted-medium",
    name: "Pista Salted Medium",
    category: "pistachio",
    image: "/products/medium-pista.jpg",
  },

  {
    id: "sada-pista",
    name: "Sada Pista",
    category: "pistachio",
    image: "/products/sada-pista.jpg",
  },

  {
    id: "kismis",
    name: "Yellow Kismis",
    category: "other",
    image: "/products/kismiss.jpeg",
  },

  {
    id: "black-kismis",
    name: "Black Kismis without Seeds",
    category: "other",
    image: "/products/black-kismis.jpg",
  },

  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    category: "other",
    image: "/products/pumpkin-seeds.jpg",
  },
];

export function getProductsByCategory(category: ProductCategory | "all") {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
