import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <BrandStory />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
