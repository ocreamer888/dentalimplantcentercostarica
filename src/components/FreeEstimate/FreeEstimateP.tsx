'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Layout/Header/Header';
import EstimateForm from "./EstimateForm";
import Footer from "../Layout/Footer";

interface FreeEstimatePProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  gradientFrom?: string;
  gradientTo?: string;
  formTitle?: string;
  formDescription?: string;
  className?: string;
}

export function FreeEstimateP({
  title = "Get a Free Estimate Now!",
  description = "Enjoy a new smile with our All-inclusive packages and a relaxing trip to Costa Rica, all for a fraction of the cost back home.",
  buttonText = "Free Estimate",
  buttonHref = "#form",
  imageSrc = "/images/hero/ivan-dental-implant-center-costa-rica-5.webp",
  imageAlt = "Dental Clinic",
  gradientFrom = 'from-purple-600',
  gradientTo = 'to-purple-400',
  formTitle = "Fill the form to get a free estimate",
  formDescription = "Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.",
  className = '',
}: FreeEstimatePProps) {
  return (
    <>
      {/* Hero Section - Cloned from HeroSection.tsx */}
      <section
        className={`relative w-full min-h-screen bg-gradient-to-br ${gradientFrom} ${gradientTo} overflow-hidden ${className}`}
        aria-labelledby="hero-title"
      >
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-0">
            
            {/* Text Content - Left Side */}
            <div className="flex flex-col gap-6 lg:gap-4 text-white order-2 lg:order-1 justify-center items-center lg:items-start">
              <h1 id="hero-title"
                className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance text-center lg:text-left"
              >
                {title}
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 text-center lg:text-left">
                {description}
              </p>
              
              <div>
                <Link
                  href={buttonHref}
                  className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-purple-50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg hover:shadow-xl">
                  {buttonText}
                </Link>
              </div>
            </div>
            
            {/* Image - Right Side with Circular Container */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] aspect-square">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-yellow-200/20 via-yellow-400/10 to-transparent overflow-hidden shadow-2xl">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, 600px"
                    className="object-contain pt-8 object-bottom"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Preserved from original FreeEstimateP */}
      <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12 -mt-8">
        <div className="lg:px-4">
          <div id="form" className="text-center px-8 py-12">
            <h2 className="text-6xl font-bold text-gray-100 mb-4">{formTitle}</h2>
            <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
              {formDescription}
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

export default FreeEstimateP;