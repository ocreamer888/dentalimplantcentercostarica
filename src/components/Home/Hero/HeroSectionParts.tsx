import React from 'react';
import Image from 'next/image';

export const HeroTitleDoc = () => (
  <>
    <h1 className="text-7xl md:text-[68px] lg:text-[110px] text-black font-semibold mb-1 animate-fade-in text-center md:text-left lg:text-left">
      Dental
    </h1>
    <h1 className="text-7xl md:text-[72px] lg:text-[116px] text-black !font-semibold mb-1 animate-fade-in text-center md:text-left lg:text-left">
      Re
      <span className='font-semibold'>
        Implants
      </span>
      ned
    </h1>
    <p className="hidden md:block lg:block mt-4 mb-8 text-lg text-gray-600 animate-fade-in-up ml-0 md:ml-4 text-left pr-20 md:text-left">
    We are building a new era of medical tourism where <span className='font-semibold'>privacy and speed are non-negotiable.</span> 
    </p>
  </>
);


export const HeroImage = ({ className = '', alt = 'Dr. Guzman' }: { className?: string; alt?: string }) => (
  <Image
    src="/images/Layer 1.webp"
    alt={alt}
    className={`object-contain animate-fade-in-up ${className}`}
    width={800}
    height={800}
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
    quality={85}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  />
);

export const HeroBookDemoButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cta-button group md:w-4/5 lg:w-4/5 flex items-center justify-center bg-gradient-to-t from-blue-600 to-blue-500 text-white font-semibold mt-8 py-4 rounded-full shadow-xg hover:shadow-xl transition-all duration-300 !z-20 ease-in-out transform hover:scale-105 active:scale-100"
  >
    <span className="text-lg">Book a Demo</span>
  </button>
);

export const WaitlistButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cta-button group w-full md:w-4/5 lg:w-3/5 flex items-center justify-center bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500 text-white font-semibold mt-8 py-4 rounded-full shadow-xg hover:shadow-xl transition-all duration-300 !z-20 ease-in-out transform hover:scale-105 active:scale-100"
  >
    <span className="text-lg">Join Waitlist</span>
  </button>
);

export const EstimateButton: React.FC<{ scrollToForm: () => void }> = ({ scrollToForm }) => (
    
<button
onClick={scrollToForm}
className="rounded-full bg-yellow-400 text-black px-32 py-4 text-xl font-semibold shadow-xs hover:bg-yellow-600 transition-colors"
 >
Get My FREE Estimate
 </button>  
)
