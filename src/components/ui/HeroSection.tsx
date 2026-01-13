import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Layout/Header/Header';

interface HeroSectionProps {
  title: string | React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export function HeroSection({
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  gradientFrom = 'from-purple-600',
  gradientTo = 'to-purple-400',
  className = '',
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full min-h-screen bg-gradient-to-br ${gradientFrom} ${gradientTo} overflow-hidden ${className}`}
      aria-labelledby="hero-title">
        <Header />
      {/* Container with padding and max-width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen">
        {/* Grid Layout - automatically responsive */}
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
              {/* Circular container with gradient background */}
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
  );
}
