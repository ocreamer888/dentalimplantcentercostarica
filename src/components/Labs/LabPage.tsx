import LabsHero from "@/components/Labs/LabsHero";
import Intro from "@/components/Labs/Intro";
import DentalLab from "@/components/Labs/DentalLab";
import LabFeatures from "@/components/Labs/LabFeatures";
import VidSection from "./VidSection";
import { ContactInfo }from "@/components/ui/ContactInfo"
import EstimateForm from "../ui/EstimateForm";
import Footer from "../Layout/Footer";
export default function LabPage() {
  return (
    <section>
      <LabsHero />
      <DentalLab />
      <Intro />
      <LabFeatures />
      <VidSection /> 
     <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12 -mt-8">
                <div className="lg:px-4">
                    <div className="text-center py-12">
                        <h2 className="text-6xl font-bold text-gray-100 mb-4">Fill the form to get a free estimate</h2>
                        <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
                        Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full gap-4">
                        <ContactInfo />
                        <EstimateForm />
                    </div>
                    <Footer />
                </div>
      </div>
    </section>
  );
}