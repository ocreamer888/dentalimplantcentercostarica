'use client'

import Image from 'next/image'
import Header from '@/components/Layout/Header/Header'

export default function HeroContact() {


  return (
    <div className="relative overflow-hidden h-screen flex items-center rounded-b-3xl justify-center z-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/monkey-dental-implant-center-costa-rica.webp"
          alt="Background"
          fill
          className="object-cover object-left md:object-right opacity-100"
          priority
        />
      </div>
        
     <Header />

      <div className="relative isolate px-8 max-w-3xl lg:pl-20">
        <div className=" backdrop-blur-md bg-purple-900/40 shadow-lg p-8 rounded-3xl justify-center mx-auto max-w-3xl">
          
          <div className="text-center text-balance py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center tracking-tight text-white">
            Contact Us
            </h1>
            <p className="pt-4 text-lg text-balance font-medium text-pretty text-center text-white">
            Get in touch with our dental specialists for consultations and appointments.
            </p>
           
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
    </div>
  )
}
