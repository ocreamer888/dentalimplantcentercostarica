'use client'

import Image from 'next/image'
import Header from '@/components/Layout/Header/Header'

export default function TreatmentsHero() {
 

  return (
        <section className="relative flex flex-col lg:flex-row h-screen rounded-b-3xl overflow-hidden justify-center lg:justify-start px-4 lg:pl-20 items-center backdrop-blur-2xl z-50">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
      <Image 
                            src="/images/labs/dentalimplantcentercostarica-lab4.webp" 
                            alt="Dental image reference #1" 
                            fill
                            priority
                            fetchPriority="high"
                            sizes="100vw"
                            className="hidden md:block relative object-top object-cover rounded-b-3xl"
                        />
      </div>
        
     <Header />

      <div className="relative isolate px-8 max-w-2xl lg:pl-20">
        <div className=" backdrop-blur-md bg-gray-900/50 p-8 rounded-3xl justify-center items-center mx-auto max-w-3xl">
          
          <div className="text-left py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-white">
            Dental Treatments
            </h1>
            <p className="pt-4 text-xl text-balance font-medium text-pretty text-center md:text-left text-white">
                Discover our dental treatments and how we can help you achieve your perfect smile
            </p>
          
            
          </div>
        </div>
     
        
      </div>
    </section>
  )
}
