"use client";

import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Icon } from '@iconify/react/dist/iconify.js';


export const AcrossBorders = () => {
  return (
    <AnimatedSection className="flex flex-col items-center justify-center shadow-xl rounded-3xl relative bg-gradient-to-br from-purple-600/50 via-purple-500/50 to-purple-600/50 z-20 py-8 my-8 h-full lg-px-28 backdrop-blur-2xl sm:rounded-3xl md:rounded-3xl sm:-mt-16 md:mt-16 md:mx-4 px-4 md:px-4 lg:px-12">
      <div className='flex flex-col-1 w-full mb-12 mt-12 items-center md:items-start justify-center md:justify-start '>
      <div className='w-full items-center justify-center text-center md:text-start md:items-start md:justify-start'>
      <h1 className='text-5xl md:text-7xl items-center justify-center md:items-start md:justify-start font-semibold text-purple-100'>Why Choose OG Dental?</h1>
      <h2 className="text-5xl md:text-5xl font-semibold text-center md:text-start text-purple-800 pt-4">Key Benefits</h2>
      </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full h-full lg:h-[50vh] min-h-[300px]">
        {/* Title/Description */}
        <div className="md:col-span-1 flex flex-col h-full justify-between rounded-3xl py-8 pl-4 bg-gradient-to-tr from-purple-500/60 via-purple-500/80 to-purple-600/20 backdrop-blur-2xl text-left">
          <h2 className='font-semibold text-balance text-pretty text-whit text-center md:text-start text-4xl'>Unbeatable All-Inclusive Pricing</h2>
          <Icon icon="mdi:tooth" className="h-12 w-12 text-purple-200" />
          <p className='text-white text-balance font-semibold text-center md:text-left text-pretty'>
          Flights + 4-star hotels + procedures + 24/7 concierge service
          </p>
        </div>
        
        {/* Features section: full width below */}
        <div className="md:col-span-2 flex flex-wrap justify-center items-stretch w-full max-w-full">
        <div className="flex flex-col w-full justify-center items-start text-left my-4 p-4 bg-gray-800/20 backdrop-blur-xl rounded-3xl">
        <h1 className='text-2xl text-white font-bold text-balance text-pretty'>• Board-Certified Specialists & State-of-the-Art Facility</h1>
          </div>
          <div className="flex flex-col w-full justify-center items-start my-4 p-4 bg-gray-800/20 backdrop-blur-xl rounded-3xl">
          <h1 className='text-2xl text-white font-bold text-balance text-pretty'>• 100% Satisfaction Guarantee / Best Price Match Promise</h1>
          </div>
          <div className="flex flex-col w-full justify-center items-start my-4 p-4 bg-gray-800/20 backdrop-blur-xl rounded-3xl">
          <h1 className='text-2xl text-white font-bold text-balance text-pretty'>• Full Help With Travel & Post-Procedure Care</h1>
          </div>
        </div>
          {/* Globe */}
          <div className="md:col-span-2 flex items-end justify-end bg-white/50 backdrop-blur-xl rounded-3xl w-full h-full relative min-h-[200px]">
            <Image
              src="/images/hero/DentalPassport6.webp"
              alt="Banner"
              fill
              className="object-cover object-right rounded-3xl"
            />
          </div>
      </div>
    </AnimatedSection>
  )
} 