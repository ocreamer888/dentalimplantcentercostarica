import ImagePreloader from "../ui/ImagePreloader";
import CardTwoExample from "../ui/CardTwoExample";

export default function OurDocs() {
     const imagesToPreload = [
  "/images/hero/Dr.Guzman1.webp",
  // Add more images as needed
];
    return (
        
        <div className="relative flex flex-col md:flex-row gap-4 p-4 pt-12 md:p-12 -mt-8 h-full bg-white rounded-b-3xl z-20">
           <ImagePreloader images={imagesToPreload} priority={true} />
                {/* <div className="relative flex flex-col w-full justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden">
         
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-center text-black">
                        <h2 className="font-semibold pb-4 text-5xl text-center md:text-left text-gray-800 lg:text-6xl">
                        Our Main Specialist
                        </h2>
                        <p className="text-xl text-center md:text-left  pb-8">
                        As the visionary founder of OG Center, Dr. Oscar Guzmán has revolutionized dentistry by seamlessly blending his over 15 years of implant expertise with cutting-edge technology. His passion for innovation ensures the clinic remains at the forefront of modern dental solutions, providing patients with exceptional, high-quality care. A multifaceted individual, Dr. Guzmán&apos;s interests in cars, cooking, reading, and cats add a unique dimension to his practice, reflecting a holistic approach that enriches his personalized patient care.                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col h-auto py-8 justify-start items-center text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-t from-purple-600/70 via-purple-500/60 to-purple-500/50 backdrop-blur-2xl">

               <CardTwo
                      title="Example Card Two"
                      description="This is the second example of the CardTwo component."
                      imageSrc="/images/hero/Dr.Guzman1.webp"
                      imageAlt="Example image two"
                    />
                  </div>
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-xl lg:text-4xl">
                        Dr. Guzman
                        </h2>
                        <p className="text-lg pb-8">
                        Dental Surgeon, specializing in Implants and Restorative Dentistry.
                        </p>
                    </div> */}
                    <CardTwoExample/>
                </div>
            
      
    )
}
