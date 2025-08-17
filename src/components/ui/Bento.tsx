"use client";
import { lazy, Suspense } from "react";
import ImageSlider from "./ImageSlider";

// Lazy load ImageSlider for better performance
const LazyImageSlider = lazy(() => import("./ImageSlider"));

// Image loading skeleton component
const ImageSliderSkeleton = () => (
  <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-gray-200 animate-pulse rounded-3xl">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-3xl"></div>
  </div>
);

interface BentoProps {
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

// Optimized image data with preload hints
const imageData = [
  {
    id: "primary-comparison",
    beforeImage: "/images/dentalimages/ao4-before.webp",
    afterImage: "/images/dentalimages/ao4-completed.webp",
    priority: true, // First visible image gets priority
    alt: {
      before: "Patient's teeth before All-On-4 dental implant treatment",
      after: "Patient's beautiful smile after All-On-4 dental implant completion"
    }
  },
  {
    id: "secondary-comparison",
    beforeImage: "/images/dentalimages/need-implants-all-on-four.webp",
    afterImage: "/images/dentalimages/all-on-four-completed.webp",
    priority: false,
    alt: {
      before: "Patient needing All-On-4 dental implants",
      after: "Completed All-On-4 dental implant restoration"
    }
  },
  {
    id: "tertiary-comparison",
    beforeImage: "/images/dentalimages/need-implants-replace-all-teeth.webp",
    afterImage: "/images/dentalimages/all-teeth-replaced-ao4.webp",
    priority: false,
    alt: {
      before: "Patient needing full mouth dental implant replacement",
      after: "All teeth replaced with All-On-4 dental implants"
    }
  },
  {
    id: "quaternary-comparison",
    beforeImage: "/images/dentalimages/dental_implants_done.webp",
    afterImage: "/images/dentalimages/need-dental-implants.webp",
    priority: false,
    alt: {
      before: "Completed dental implant procedure",
      after: "Patient who needed dental implants"
    }
  }
];

export default function Bento({ 
  className = "" 
}: BentoProps) {
 
  const scrollToForm = () => {
    const formElement = document.getElementById('estimate-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };



  return (
    <section 
      className={`w-full ${className}`}
    >
      {/* Preload critical images */}
      
      <div className="flex flex-col justify-center items-center p-12 lg:pl-20 py-40">
        <h3 className="text-6xl text-balance text-pretty font-semibold pb-8">
          Specializing in All-On-X <span className="font-thin">Dental Implants & Full Mouth Restorations</span>
        </h3>
      </div>
      
      <div className="flex justify-center w-full mx-auto px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mb-12">
          <div className="flex flex-col justify-center space-y-6 bg-white/10 p-4 rounded-3xl">
            <div>
              <span className="block pb-8 text-8xl text-white font-bold">Before & After</span>
              
              {/* Primary comparison - loads immediately with priority */}
              <div className="mb-6">
                <ImageSlider 
                  beforeImage={imageData[0].beforeImage}
                  afterImage={imageData[0].afterImage}
                  className="priority-image"
                  priority={true}
                  loading="eager"
                />
              </div>
            </div>

            {/* Secondary comparison - lazy loaded */}
            <div>
              <Suspense fallback={<ImageSliderSkeleton />}>
                <LazyImageSlider 
                  beforeImage={imageData[1].beforeImage}
                  afterImage={imageData[1].afterImage}
                />
              </Suspense>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Feature Card 1 */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4">
              <div className="flex flex-col justify-between h-full">
                
                {/* Tertiary comparison - lazy loaded */}
                <div className="pb-4">
                  <Suspense fallback={<ImageSliderSkeleton />}>
                    <LazyImageSlider 
                      beforeImage={imageData[2].beforeImage}
                      afterImage={imageData[2].afterImage}
                    />
                  </Suspense>
                </div>
                
                {/* Quaternary comparison - lazy loaded */}
                <div>
                  <Suspense fallback={<ImageSliderSkeleton />}>
                    <LazyImageSlider 
                      beforeImage={imageData[3].beforeImage}
                      afterImage={imageData[3].afterImage}
                    />
                  </Suspense>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="mt-4">
              <button 
                onClick={scrollToForm} 
                className="w-full py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Get started with your dental implant consultation"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
