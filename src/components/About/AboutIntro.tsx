'use client'


export default function AboutIntro() {

  return (
    <div className="relative overflow-hidden h-full md:h-[96vh] bg-white flex items-center -mt-8 p-4 pt-20 md:p-12 rounded-b-3xl justify-center z-40">
     
      <div className="flex flex-col relative isolate px-8 w-full">
        <div className="backdrop-blur gap-8 rounded-3xl justify-center items-center mx-auto w-full h-full">
          
          <div className="flex flex-col md:flex-row justify-center h-full items-end text-left gap-4">
            <h1 className="flex flex-row inline w-full lg:w-1/2 text-5xl md:text-7xl text-balance text-pretty font-semibold text-center md:text-left tracking-tight text-gray-900">
           Dental Implant Center<span className="text-purple-500"> Costa Rica</span>
            </h1>
            <div className="w-full lg:w-1/2 gap-4 text-left">
            <p className="text-xl text-balance font-medium text-pretty text-center md:text-left text-gray-900">
            <span className="font-bold">Our in-house dental laboratory at OG Health Center</span> empowers us to deliver personalized, immediate solutions tailored to each patient&apos;s needs. Supported by an interdisciplinary team of skilled dentists, technicians, and ceramists—chosen for their expertise, precision, and dedication—we simplify treatments, enhance quality of life, and achieve optimal results.
            </p>
            </div>
            
           
          </div>
        </div>
        
      </div>
    </div>
  )
}
