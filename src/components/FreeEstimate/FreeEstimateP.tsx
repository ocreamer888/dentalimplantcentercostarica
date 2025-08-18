'use client';
import EstimateForm from "../ui/EstimateForm";
import Footer from "../Layout/Footer";
import HeroSecs from "../ui/HeroSecs";

export default function FreeEstimateP() {
    return (
        <div className="flex flex-col w-full h-full">
        
         <HeroSecs
        title="Free Dental Estimate!"
        description="We will be back to you within 24 hours!"
        imageSrc=""
        imageAlt="Dental Clinic"
        linkHref="#form"
        backgroundImage="/images/hero/DentalPassport1.webp"
        backgroundColor=""
        buttonText="Learn More"
        cardButton="true"
        className=""
      />
         <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12 -mt-8">
                <div className="lg:px-4">
                    <div id="form" className="text-center py-12">
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