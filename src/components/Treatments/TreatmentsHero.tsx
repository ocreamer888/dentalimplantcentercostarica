'use client'

import Image from 'next/image'
import Header from '@/components/Layout/Header/Header'

export default function TreatmentsHero() {
 
  
  const scrollToIntro = () => {
    const formElement = document.getElementById('treatments');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
        <section className="relative flex flex-col lg:flex-row h-screen rounded-b-3xl overflow-hidden justify-center lg:justify-start px-4 lg:pl-20 items-center backdrop-blur-2xl z-50 bg-gradient-to-br from-purple-500 to-purple-800">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
<Image 
    src="/images/labs/dentalimplantcentercostarica-lab4.webp" 
    alt="Dental image reference #1" 
    fill
    quality={100}
    priority
    className="hidden md:block relative object-top object-cover rounded-b-3xl"
/>
      </div>

     <Header />

      <div className="relative isolate px-8 max-w-2xl lg:pl-20">
        <div className="p-8 rounded-3xl bg-gradient-to-tr from-black/0 via-black/40 to-transparent backdrop-blur-xl justify-center items-center mx-auto max-w-3xl">
          
          <div className="text-left  py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-white">
            Dental Treatments
            </h1>
            <p className="pt-4 text-xl text-balance font-medium text-pretty text-center md:text-left text-white">
                Discover our dental treatments and how we can help you achieve your perfect smile
            </p>
          </div>
          <div className="flex pt-4 gap-4">
          <button
                onClick={scrollToIntro}
                className="rounded-full bg-gradient-to-t from-purple-800 via-purple-600 to-purple-600 px-12 lg:px-32 py-4 lg:text-xl font-semibold shadow-xs transition-colors"
              >
                Learn More
              </button>
          </div>
        </div>
     
        
      </div>
    </section>
  )
}
