import Image from "next/image";

export default function LabFeatures() {



    return (
        
        <div className="flex flex-col lg:flex-row gap-4 pt-20 py-12 bg-white px-4 lg:p-20 -mt-8 h-[80vh] bg-white z-40">
            <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-purple-500/70 via-purple-500/80 to-purple-600/80 backdrop-blur-2xl">
            <Image 
                        src="/images/labs/dental-implant-center-costa-rica-laboratory-1.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="200px"
                        quality={60}
                        loading="lazy"
                        className="object-cover rounded-3xl -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-4xl lg:text-6xl">
                        High-Quality Materials
                        </h2>
                        <p className="text-xl pb-8">
                        We exclusively use biocompatible, FDA-approved materials of the highest caliber, prioritizing your safety and satisfaction.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-purple-500/70 via-purple-500/80 to-purple-600/80 backdrop-blur-2xl">
            <Image 
                        src="/images/labs/dental-implant-center-costa-rica-laboratory-1.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="800px"
                        quality={100}
                        loading="lazy"
                        className="object-cover rounded-3xl -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-4xl lg:text-6xl">
                        Timely Production
                        </h2>
                        <p className="text-xl pb-8">
                        We deliver your custom prosthesis as soon as possible, ensuring a seamless transition from treatment to restoration.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-purple-500/70 via-purple-500/80 to-purple-600/80 backdrop-blur-2xl">
            <Image 
                        src="/images/labs/dental-implant-center-costa-rica-laboratory-1.webp" 
                        alt="Dental image reference #1" 
                        fill
                        sizes="800px"
                        quality={100}
                        loading="lazy"
                        className="object-cover rounded-3xl -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-between">
                        <h2 className="font-semibold text-4xl lg:text-6xl">
                        Cutting-Edge Technology
                        </h2>
                        <p className="text-xl pb-8">
                        We utilize a wide array of cutting-edge equipment for designing and producing our dental restorations with precision and excellence.
                        </p>
                    </div>
                </div>
            </div>
      
    )
}