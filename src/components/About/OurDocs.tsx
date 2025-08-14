import Image from "next/image";

export default function OurDocs() {
    return (
        
        <div className="relative flex flex-col md:flex-row gap-4 p-4 pt-12 md:p-12 -mt-8 h-full bg-white rounded-b-3xl z-20">
           
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden">
         
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-center text-black">
                        <h2 className="font-semibold pb-4 text-5xl text-center md:text-left text-purple-800 lg:text-6xl">
                        Our Leader
                        </h2>
                        <p className="text-xl text-center md:text-left  pb-8">
                        As the visionary founder of OG Center, Dr. Oscar Guzmán has revolutionized dentistry by seamlessly blending his over 15 years of implant expertise with cutting-edge technology. His passion for innovation ensures the clinic remains at the forefront of modern dental solutions, providing patients with exceptional, high-quality care. A multifaceted individual, Dr. Guzmán&apos;s interests in cars, cooking, reading, and cats add a unique dimension to his practice, reflecting a holistic approach that enriches his personalized patient care.                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col h-[60vh] justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-purple-500/70 via-purple-500/80 to-purple-600/80 backdrop-blur-2xl">
            <Image 
                        src="/images/hero/Dr.Guzman1.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="1000px"
                        quality={80}
                        loading="lazy"
                        className="object-cover rounded-3xl -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-4xl lg:text-6xl">
                        Dr. Guzman
                        </h2>
                        <p className="text-lg pb-8">
                        Dental Surgeon, specializing in Implants and Restorative Dentistry.
                        </p>
                    </div>
                </div>
            </div>
      
    )
}