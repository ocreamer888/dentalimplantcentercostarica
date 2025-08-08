'use client'

import Image from 'next/image'
import Header from '@/components/Layout/Header/Header'

export default function Hero() {

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
    <div className="relative overflow-hidden h-[96vh] flex items-center m-4 rounded-3xl justify-left">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/Dental Implants - Doctor Guzman.webp"
          alt="Background"
          fill
          className="object-cover object-left md:object-right opacity-100"
          priority
        />
      </div>
        
     <Header />

      <div className="relative isolate px-8 w-3/5 lg:pl-8">
        <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl justify-left mx-auto max-w-3xl">
          <div className="text-left py-8">
            <h1 className="text-7xl font-semibold text-balance text-pretty text-center md:text-left tracking-tight text-white">
            Reimagine Your Smile. Reclaim Your Confidence.           
            </h1>
            <p className="pt-4 text-lg text-balance font-medium text-pretty text-center md:text-left text-white">
            Full-Arch Dental Implants from only <span className="text-yellow-400 text-2xl font-bold">$14,950</span> in Costa Rica – <span className="font-bold">The #1 Dental Tourism Destination</span>            </p>
            <div className="mt-8 flex items-center justify-center md:justify-start md:items-center gap-x-6">
            <button
                onClick={scrollToForm}
                className="rounded-full bg-yellow-500 text-black px-12 py-4 text-md font-semibold shadow-xs hover:bg-yellow-600 transition-colors"
              >
                Get My FREE Estimate
              </button>
          
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}
