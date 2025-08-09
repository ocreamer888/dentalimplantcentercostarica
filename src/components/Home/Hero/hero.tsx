"use client";

import Image from "next/image";
import Header from "@/components/Layout/Header/Header";

export default function Hero2() {

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
    <section className="relative flex flex-col lg:flex-row h-[96vh] m-4 rounded-3xl overflow-hidden justify-center lg:justify-start px-4 lg:pl-20 items-center backdrop-blur-2xl z-10 mb-40 md:mb-8">
                    <Image 
                        src="/images/Dental Implants - Doctor Guzman.webp" 
                        alt="Dental image reference #1" 
                        fill
                        className="relative object-top object-cover rounded-b-3xl"
                    />
      <Header />
      
        
        {/* Left: Text */}
        <div className="flex w-full lg:w-1/2 justify-center items-center lg:justify-start lg:items-start">
        <div className="flex-1 flex flex-col bg-purple-900/80 backdrop-blur rounded-3xl p-4 md:p-8 md:my-8 items-center md:items-start justify-center gap-4">
          <h1 className="text-5xl font-extrabold text-balance text-center md:text-left text-pretty text-white">
          Reimagine Your Smile.
            <span className="text-white"> Reclaim Your Confidence.</span>
          </h1>
          <p className="text-xl text-balance font-medium text-pretty text-center md:text-left text-white">
            Full-Arch Dental Implants from only <span className="text-green-400 text-3xl font-bold">$19,950</span> all included! – <span className="font-bold">The #1 Dental Tourism Destination</span>
            </p>
          <div className="flex pt-4 gap-4">
          <button
                onClick={scrollToForm}
                className="rounded-full bg-yellow-400 text-black px-12 lg:px-32 py-4 lg:text-xl font-semibold shadow-xs hover:bg-yellow-600 transition-colors"
              >
                Get My FREE Estimate
              </button>
          </div>
        </div>
        </div>
      </section>
      )
    }