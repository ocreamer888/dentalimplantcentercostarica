'use client'

import Image from 'next/image'
import Header from '@/components/Layout/Header/Header'

export default function AboutHero() {


  return (
        <section className="relative flex flex-col lg:flex-row h-screen rounded-b-3xl overflow-hidden justify-center lg:justify-start px-4 lg:pl-20 items-center backdrop-blur-2xl bg-gradient-to-br from-purple-500 to-purple-800 z-50">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
      <Image 
                        src="/images/hero/DentalPassport6.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="1000px"
                        quality={100}
                        loading="lazy"
                        className="hidden md:block object-cover object-left md:object-right -z-10"
                    />
      </div>
        
     <Header />

      <div className="relative isolate px-8 max-w-4xl">
        <div className="rounded-3xl justify-center items-center mx-auto max-w-5xl">
          
          <div className="text-left py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-white">
            Welcome to our world-class dental clinic in Costa Rica!
            </h1>
            <p className="pt-4 text-xl text-balance font-medium text-pretty text-center md:text-left text-white">
                Discover who we are and what we do at Dental Implant Center Costa Rica
            </p>
          
            
          </div>
        </div>
      </div>
    </section>
  )
}
