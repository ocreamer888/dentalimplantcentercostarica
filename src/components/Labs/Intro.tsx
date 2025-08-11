'use client'

import Image from 'next/image'

export default function Intro() {

  return (
    <div className="relative overflow-hidden h-[96vh] flex items-center -mt-4 rounded-b-3xl justify-left z-30">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/labs/dentalimplantcentercostarica-laboratory.webp"
          alt="Background"
          fill
          className="object-cover object-left md:object-right opacity-100"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent rounded-3xl"></div>
      <div className="relative isolate px-8 w-1/2 lg:pl-20">
        <div className=" backdrop-blur bg-gray-900/80 p-8 rounded-3xl justify-center items-center mx-auto w-full text-white">
          
          <div className="text-left py-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-gray-100">
            An Innovative Approach
            </h1>
            <p className="pt-4 text-xl text-balance font-medium text-pretty text-center md:text-left text-gray-200">
            At OG Dental Center, our dental laboratory leads with innovation, delivering superior quality and aesthetics backed by over four years of excellence. We&apos;ve established ourselves as one of Costa Rica&apos;s most technologically advanced labs, pushing the boundaries of digital dentistry. Our highly trained team of dental mechanics seamlessly blends hands-on expertise with cutting-edge digital tools, enabling us to extend our exceptional service nationwide. By using only premium products and materials, we ensure the functionality and long-lasting durability of every restoration.
            </p>
          
            
          </div>
        </div>
       
        
      </div>
    </div>
  )
}
