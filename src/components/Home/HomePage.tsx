"use client";

import dynamic from "next/dynamic";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import Features from "@/components/Home/Features";
import Footer from "@/components/Layout/Footer";
import HeroSecs from "@/components/ui/HeroSecs";
import React from "react";

// Only load heavy components when needed with intersection observer
const Bento = dynamic(() => import("@/components/ui/Bento"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

const Pricing = dynamic(() => import("@/components/Home/Pricing"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

// Lazy load with intersection observer
const LazyAllOnFour = dynamic(() => import("@/components/Home/AllOnFour/Index"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

const LazyTestimonials = dynamic(() => import("@/components/Home/Testimonials"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

const LazyCTA = dynamic(() => import("@/components/Home/CTA"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

const LazyEstimateForm = dynamic(() => import("@/components/ui/EstimateForm"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

// Intersection Observer wrapper
const LazyComponent = ({ component: Component, ...props }: { component: React.ComponentType<any>; [key: string]: any }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? <Component {...props} /> : <LoadingSkeleton />}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <HeroSecs
        title="Expert All-On 4 Implants from $19,950"
        description="Enjoy a new smile with our All-inclusive packages and a relaxing trip to Costa Rica, all for a fraction of the cost back home."
        imageSrc="/images/Layer 1.webp"
        imageVisibility={{
          hideOnMobile: true
        }}
        imageAlt="Dental Clinic"
        linkHref="#form"
        backgroundImage="/images/hero/DentalOffice1.webp"
        backgroundVisibility={{
          hideOnMobile: true,
          showOnTablet: true,
          showOnDesktop: true
        }}
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

      <Pricing/>

      <div className="bg-gradient-to-tr from-purple-100/50 via-purple-500/50 to-purple-900/50">
        <LazyComponent component={LazyAllOnFour}/>
      </div>

      <LazyComponent component={LazyTestimonials}/>
      <LazyComponent component={LazyCTA}/>

      <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12">
        <div className="lg:px-4">
          <div id="form" className="text-center py-12">
            <h2 className="text-6xl font-bold text-gray-100 mb-4">Fill the form to get a free estimate</h2>
            <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
              Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <LazyComponent component={LazyEstimateForm} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}