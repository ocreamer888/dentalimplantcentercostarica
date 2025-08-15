'use client'

import Image from 'next/image';
import Header from '@/components/Layout/Header/Header';
import ImagePreloader from '../ui/ImagePreloader';

export default function EstimateHero() {

   const imagesToPreload = [
  "/images/hero/DentalPassport4.webp",
  // Add more images as needed
];
  return (
        <section className="relative flex flex-col lg:flex-row h-screen rounded-b-3xl overflow-hidden justify-center lg:justify-start px-4 lg:pl-20 items-center backdrop-blur-2xl z-50">
      {/* Background image */}
      <ImagePreloader images={imagesToPreload} priority={true} />
      <div className="absolute inset-0 -z-20">
      <Image 
                        src="/images/hero/DentalPassport4.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="1000px"
                        quality={100}
                        loading="lazy"
                        className="hidden md:block object-cover object-left -z-10"
                    />
      </div>
        
     <Header />

      <div className="relative isolate px-8 max-w-2xl lg:pl-20">
        <div className=" backdrop-blur-md bg-gray-900/50 p-8 rounded-3xl justify-center items-center mx-auto max-w-3xl">
          
          <div className="text-left py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-white">
            Get a Free Estimate
            </h1>
            <p className="pt-4 text-xl text-balance font-medium text-pretty text-center md:text-left text-white">
                Fill out the form below to get a free estimate for your dental needs
            </p>
          
            
          </div>
        </div>
      </div>
    </section>
  )
}
