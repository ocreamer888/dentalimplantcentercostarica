'use client'

import Image from 'next/image'
import Header from '@/components/Layout/Header/Header'
import ImagePreloader from '../ui/ImagePreloader';

export default function LabsHero() {
  const scrollToimp = () => {
    const formElement = document.getElementById('imp');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

      const imagesToPreload = [
  "/images/labs/dentalimplantcentercostarica-laboratory.webp",
  // Add more images as needed
];

  return (
        <section className="relative flex flex-col lg:flex-row h-screen rounded-b-3xl overflow-hidden justify-center lg:justify-start px-4 lg:pl-20 items-center backdrop-blur-2xl -mt-12 z-50">
      {/* Background image */}
      <ImagePreloader images={imagesToPreload} priority={true} />
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/labs/dentalimplantcentercostarica-laboratory.webp"
          alt="Background"
          fill
          className="object-cover object-left md:object-right opacity-100"
          priority
        />
      </div>
        
     <Header />

      <div className="relative isolate px-8 max-w-3xl lg:pl-20">
        <div className=" backdrop-blur-md bg-gray-900/50 p-8 rounded-3xl justify-center items-center mx-auto max-w-3xl">
          
          <div className="text-left py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-white">
            Discover Our Laboratory
            </h1>
            <p className="pt-4 text-lg text-balance font-medium text-pretty text-center md:text-left text-white">
                Discover the Benefits of Choosing a Quality Dental Laboratory - Dental Implants Costa Rica      
            </p>
            <div className="mt-8 flex items-center justify-center md:justify-start md:items-center gap-x-6">
              <button
                onClick={scrollToimp}
                className="rounded-full bg-yellow-500 text-black px-12 py-4 text-md font-semibold shadow-xs hover:bg-yellow-600 transition-colors"
              >
                Learn More
              </button>
          
            </div>
            
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
        
      </div>
    </section>
  )
}
