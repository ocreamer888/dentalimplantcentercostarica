'use client';
import EstimateForm from "./EstimateForm";
import Footer from "../Layout/Footer";
import HeroSecs from "../ui/HeroSecs";

export default function FreeEstimateP() {
    return (
        <div className="flex flex-col w-full h-full">
        
        <HeroSecs
        title="Get a Free Estimate Now!"
        description="Enjoy a new smile with our All-inclusive packages and a relaxing trip to Costa Rica, all for a fraction of the cost back home."
        imageSrc="/images/hero/ivan-dental-implant-center-costa-rica.webp"
        imageSize={{
          mobile: "w-full h-full",
          tablet: "w-full h-full",
          desktop: "w-full h-full"
        }}
        imageVisibility={{hideOnMobile: true}}
        imageAlt="Dental Clinic"
        linkHref="#form"
        backgroundImage="/images/hero/DentalOffice1.webp"
        backgroundVisibility={{hideOnMobile: true}}
        backgroundColor="bg-gradient-to-tl from-purple-400 via-purple-400/80 to-purple-400"
        buttonText="Free Estimate"
        cardButton="true"
        className="backdrop-blur-sm justify-center items-center h-full"
        CardContentClassName="md:h-1/2 flex flex-col justify-center items-center px-4 md:ml-12"
      />
         <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12 -mt-8">
                <div className="lg:px-4">
                    <div id="form" className="text-center px-8 py-12">
                        <h2 className="text-6xl font-bold text-gray-100 mb-4">Fill the form to get a free estimate</h2>
                        <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
                        Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full gap-4">
                        <EstimateForm />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}