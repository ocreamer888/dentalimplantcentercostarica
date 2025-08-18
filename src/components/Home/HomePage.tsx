'use client';
import AllOnFour from "@/components/Home/AllOnFour/Index";
import EstimateForm from "@/components/ui/EstimateForm";
import Bento from "@/components/ui/Bento";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Home/Pricing";
import Features from "@/components/Home/Features";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Layout/Footer";
import { Suspense } from 'react';
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import HeroSecs from "@/components/ui/HeroSecs";

export default function Home() {
  return (
    <>

      <HeroSecs
        title="Expert All-On 4 Implants from $19,950"
        description="Enjoy a new smile with our All-inclusive packages and a relaxing trip to Costa Rica, all for a fraction of the cost back home."
        imageSrc="/images/Layer 1.webp"
        imageAlt="Dental Clinic"
        linkHref="#form"
        backgroundImage="/images/hero/DentalOffice1.webp"
        backgroundColor="bg-gradient-to-tl from-purple-400/70 via-purple-600/60 to-purple-900/50"
        buttonText="Free Estimate"
        cardButton="true"
      />
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
      
      <Suspense fallback={<LoadingSkeleton />}>
      
        <Testimonials />
      </Suspense>
      <CTA />

     <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12">
                <div className="lg:px-4">
                    <div id="form" className="text-center py-12">
                        <h2 className="text-6xl font-bold text-gray-100 mb-4">Fill the form to get a free estimate</h2>
                        <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
                        Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full gap-4">
                        <EstimateForm />
                    </div>
                    <Footer />
                </div>
      </div>
    </>
  );
}

