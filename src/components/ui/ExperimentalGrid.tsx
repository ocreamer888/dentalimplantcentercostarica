"use client";
import React from "react";
import Image from "next/image";

export default function ExperimentalGrid() {
    return (
    <div className="flex flex-col w-full justify-center items-center h-screen bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10">
        {/* Title and Description */}
        <div className="flex flex-col max-w-7xl h-5/6 justify-center gap-4 p-4 my-16 md:my-8">
            {/* Top row */}
            <div className="flex flex-col md:flex-row gap-4 h-3/5">
                <div className="relative flex flex-col justify-between items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-pink-200/70 via-pink-300/80 to-purple-200/80 backdrop-blur-2xl">
                    <Image 
                        src="/images/allonsix1.webp" 
                        alt="Dental image reference #1" 
                        width={200} height={200}
                        className="absolute top-0 right-4 md:top-4 lg:right-20 object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-3xl md:text-6xl ">
                           Save up to 70%
                        </h2>
                        <p className="lg:text-xl w-3/5">
                        <span className="font-semibold">On Zirconia Dental ImplantsSave thousands on your full smile restoration.</span> Experience premium care with one transparent, affordable price.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 md:flex-none md:w-1/3 overflow-hidden bg-gradient-to-tr from-green-300/70 via-green-400/80 to-green-500/80 backdrop-blur-2xl">
                   
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-4xl lg:text-5xl">
                        Financing Available
                        </h2>
                        <p className="pr-12 lg:text-lg">
                       <span className="font-semibold text-xl md:text-2xl">Why pay +$50,000 for a smile?</span> Get the same elite, lifetime-guaranteed results for a fraction of the cost. It&apos;s not just a better price—it&apos;s the intelligent choice.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom row */}
            <div className="flex flex-col md:flex-row gap-4 h-3/5">
            <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 md:flex-none md:w-1/3 overflow-hidden bg-gradient-to-tr from-purple-500/70 via-purple-500/80 to-purple-600/80 backdrop-blur-2xl">
                     <Image 
                        src="/images/DentalPassport2.webp" 
                        alt="Dental image reference #1" 
                        fill
                        className="object-cover rounded-3xl -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-4xl lg:text-5xl">
                        Unbeatable All-Inclusive Pricing
                        </h2>
                        <p className="text-xl font-semibold">
                        Flights + 4-star hotels + procedures + 24/7 concierge service
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1">
                    <Image 
                        src="/images/hero/DentalPassport4.webp" 
                        alt="Dental image reference #1" 
                        fill
                        className="object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-4xl lg:text-5xl">
                        Certified Specialists
                        </h2>
                        <p className="w-3/5 lg:text-xl">
                        Achieve a durable, brilliant smile with our full Zirconia restoration. Rebuild your smile and confidence. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
            
    </div>  
    
    );
  }