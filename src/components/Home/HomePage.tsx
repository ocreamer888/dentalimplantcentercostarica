'use client';
import AllOnFour from "@/components/Home/AllOnFour/Index";
import EstimateForm from "@/components/ui/EstimateForm";
import Hero from "@/components/Home/Hero/hero";
import Bento from "@/components/ui/Bento";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Home/Pricing";
import Features from "@/components/Home/Features";
import CTA from "@/components/Home/CTA";
import { ContactInfo } from "@/components/ui/ContactInfo";
import Footer from "@/components/Layout/Footer";



export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-gradient-to-br from-purple-100/50 via-purple-500/50 to-purple-900/50">
        <Features/>
      </div>
      <div className="bg-gradient-to-tr from-purple-100/50 via-purple-500/50 to-purple-900/50">
        <Bento/>
      </div>
      <Pricing />
      <div className="bg-gradient-to-tr from-purple-100/50 via-purple-500/50 to-purple-900/50">
        <AllOnFour/>
      </div>
      
      <Testimonials />
      <CTA />
      <div className="flex flex-col justify-center py-20 items-center w-full gap-4 bg-gradient-to-br from-purple-100/50 via-purple-500/50 to-purple-900/50">
            <ContactInfo />
            <EstimateForm />
            <Footer />
       </div>
      
    </>
  );
}
