import React from "react";
import { Clock, Users, Award } from "lucide-react";
import Image from "next/image";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export default function Features() {


const features: Feature[] = [
  
    {
      icon: Clock,
      title: "Quick Recovery",
      description: "Advanced techniques and technology allow for faster healing times and minimal discomfort during your dental implant journey.",
      color: "from-green-500 to-green-600"
    },
 
    {
      icon: Users,
      title: "Personalized Care",
      description: "Every patient receives individualized treatment plans and dedicated support throughout their entire dental implant process.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "We use only the highest quality titanium implants and premium materials that meet international standards.",
      color: "from-red-500 to-red-600"
    }
  ];

  
  return (
    <section className="flex flex-col justify-center items-center pt-24">
      <div className="flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 lg:pl-20 pt-40 w-full bg-white/10 backdrop-blur-2xl rounded-3xl">
        <div className="flex flex-col md:flex-row text-start justify-around items-end  gap-4">
          <h2 className="text-5xl md:text-6xl text-balance font-bold text-gray-100 w-full lg:w-4/5">Why Choose <span className="font-thin">Dental Implant Center Costa Rica</span></h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Experience world-class dental implant treatment with significant cost savings and exceptional care
          </p>
        </div>
        <div className="flex flex-col w-full md:max-w-7xl h-5/6 justify-center gap-4 my-16 md:my-8">
            {/* Top row */}
            <div className="flex flex-col md:flex-row gap-4 h-3/5">
                <div className="relative flex flex-col justify-between items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-pink-200/70 via-pink-300/80 to-purple-200/80 backdrop-blur-2xl">
                <Image 
                        src="/images/dentalimages/dentalimplant3.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="400px"
                        quality={100}
                        loading="lazy"
                        className="absolute top-0 right-4 md:top-4 lg:right-20 object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-3xl md:text-6xl ">
                           Save up to 70%
                        </h2>
                        <p className="lg:text-xl w-3/5">
                        Get the same quality dental implants at a fraction of US prices, with transparent pricing and no hidden fees.
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
                        src="/images/hero/DentalPassport2.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="200px"
                        quality={60}
                        loading="lazy"
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
                        sizes="400px"
                        quality={100}
                        loading="lazy"
                        className="object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-4xl lg:text-5xl">
                        US-Trained Dentists
                        </h2>
                        <p className="w-3/5 lg:text-lg">
                        Our dentists are US-trained and certified, ensuring the highest standards of care and expertise in dental implant procedures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-tr from-gray-400/40 via-gray-600/60 to-gray-400/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-100 mb-4">{feature.title}</h3>
              <p className="text-gray-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="relative flex flex-col justify-between w-full items-start text-white p-4 mt-8 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-pink-200/70 via-pink-300/80 to-purple-200/80 backdrop-blur-2xl">
                    <Image 
                        src="/images/vacations-all-on-4-dental-implants.webp" 
                        alt="Dental image reference #1" 
                       fill
                        sizes="600px"
                        quality={80}
                        loading="lazy"
                        className="absolute top-0 right-4 md:top-4 lg:right-20 object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-3xl md:text-6xl ">
                        Patient-First Approach
                        </h2>
                        <p className="lg:text-xl w-3/5">
                        Your comfort, safety, and satisfaction are our top priorities. We treat every patient like family.                        </p>
                    </div>
                    </div>

        {/* Additional Benefits Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Additional Benefits</h3>
            <p className="text-xl opacity-90">Everything you need for a comfortable and successful treatment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🏥</span>
              </div>
              <h4 className="font-semibold mb-2">Modern Facilities</h4>
              <p className="text-sm opacity-80">State-of-the-art dental clinics with the latest technology</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🌴</span>
              </div>
              <h4 className="font-semibold mb-2">Beautiful Location</h4>
              <p className="text-sm opacity-80">Recover in paradise with stunning beaches and nature</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✈️</span>
              </div>
              <h4 className="font-semibold mb-2">Travel Support</h4>
              <p className="text-sm opacity-80">We handle all travel arrangements and accommodations</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">📞</span>
              </div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm opacity-80">Round-the-clock assistance throughout your treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
