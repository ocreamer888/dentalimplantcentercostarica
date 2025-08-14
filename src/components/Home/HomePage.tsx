'use client';
import AllOnFour from "@/components/Home/AllOnFour/Index";
import EstimateForm from "@/components/ui/EstimateForm";
import Hero from "@/components/Home/Hero/hero";
import Bento from "@/components/ui/Bento";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Home/Pricing";
import Features from "@/components/Home/Features";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Bento/>
      <Pricing />
      <AllOnFour/>
      <Testimonials />
      <CTA />
      <EstimateForm />
      
    </>
  );
}
