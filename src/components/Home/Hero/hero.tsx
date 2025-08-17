"use client";

import Header from "@/components/Layout/Header/Header";
import Image from "next/image";

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
          <section className="relative flex flex-col lg:flex-row h-screen rounded-b-3xl overflow-hidden justify-center lg:justify-start px-4 lg:pl-20 items-center backdrop-blur-2xl z-10 mb-40 md:mb-8">
          <Image 
              src="/images/hero/Dental Implants - Doctor Guzman.webp" 
              alt="Dental image reference #1" 
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="hidden md:block relative object-top object-cover rounded-b-3xl"
          />
      <Header />


      {/* Left: Text */}
      <div className="flex w-full lg:w-1/2 justify-center items-center lg:justify-start lg:items-start">
      <div className="flex-1 flex flex-col bg-gray-900/80 backdrop-blur rounded-3xl p-4 md:p-8 md:my-8 items-center md:items-start justify-center gap-4">
      <h1 className="text-5xl font-extrabold text-balance text-center md:text-left text-pretty text-white">
      The Smile You Deserve. Expert All-On 4 Implants from 
      <span className="text-green-500 text-6xl"> $19,950</span>
      </h1>
      <p className="text-lg text-balance font-medium text-pretty text-center md:text-left text-white">
      All-inclusive packages starting at <span className="text-green-400 text-xl font-bold">$19,950.</span> Enjoy a new smile and a relaxing trip to Costa Rica, all for a fraction of the cost back home.
      </p>
      <div className="flex pt-4 gap-4">
      <button
      onClick={scrollToForm}
      className="rounded-full bg-gradient-to-t from-purple-800 via-purple-600 to-purple-600 px-12 lg:px-32 py-4 lg:text-xl font-semibold shadow-xs transition-colors"
      >
      Get My FREE Estimate
      </button>
      </div>
      </div>
      </div>
      </section>
      
        );
      }
