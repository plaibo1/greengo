import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import { Product } from "@/components/Product";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Prices />
      <Feature />
      <CTA />
      <Product />
      <FAQ />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
