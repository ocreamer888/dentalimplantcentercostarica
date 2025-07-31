'use client'

import Image from 'next/image'
import Header from '@/components/Layout/Header'

export default function Hero2() {


  return (
    <div className="relative overflow-hidden h-[96vh] flex items-center m-4 rounded-3xl justify-left">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/DentalPassport7.webp"
          alt="Background"
          fill
          className="object-cover object-left md:object-right opacity-100"
          priority
        />
      </div>
        
     <Header />

      <div className="relative isolate px-8 max-w-3xl lg:pl-20">
        <div className=" backdrop-blur-md p-8 rounded-3xl justify-left mx-auto max-w-3xl">
          
          <div className="text-left py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-white">
            Get a Perfect Smile in Costa Rica and Save Thousands
            </h1>
            <p className="pt-4 text-lg text-balance font-medium text-pretty text-center md:text-left text-white">
            World-Class Dental Care from a US & German-Trained Specialist. See Your Transformation in as Little as One Visit.
            </p>
            <div className="mt-8 flex items-center justify-center md:justify-start md:items-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-yellow-500 text-black px-12 py-4 text-md font-semibold shadow-xs hover:bg-yellow-600"
              >
                Get My FREE Estimate
              </a>
          
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
    </div>
  )
}
