'use client';
import CardThree from "../ui/CardThree";

export default function OurDocs() {
  
    return (
        
        <div className="relative flex flex-col md:flex-row gap-4 p-4 pt-12 md:p-12 -mt-8 w-full h-full bg-white rounded-b-3xl z-20">
                 <div className="relative flex flex-col w-full justify-end items-center text-white p-4 rounded-3xl flex-1 overflow-hidden">
         
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-center text-black">
                        <h2 className="font-semibold pb-4 text-5xl text-center md:text-left text-gray-800 lg:text-6xl">
                        Our Main Specialist
                        </h2>
                        <p className="text-xl text-center md:text-left  pb-8">
                        As the visionary founder of OG Center, Dr. Oscar Guzmán has revolutionized dentistry by seamlessly blending his over 15 years of implant expertise with cutting-edge technology. His passion for innovation ensures the clinic remains at the forefront of modern dental solutions, providing patients with exceptional, high-quality care. A multifaceted individual, Dr. Guzmán&apos;s interests in cars, cooking, reading, and cats add a unique dimension to his practice, reflecting a holistic approach that enriches his personalized patient care.                        </p>
                    </div>
                </div>
              
                <CardThree
                  title="Dr. Oscar Guzmán"
                  description="Board-Certified Implant Specialist with 15+ years of experience."
                  imageSrc="/images/hero/Layer 1.webp"
                  imageAlt="Dr. Oscar Guzmán"
                />
         
                   
                </div>
            
      
    )
}
