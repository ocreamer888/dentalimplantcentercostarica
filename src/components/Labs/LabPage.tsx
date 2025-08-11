import LabsHero from "@/components/Labs/LabsHero";
import Intro from "@/components/Labs/Intro";
import DentalLab from "@/components/Labs/DentalLab";
import LabFeatures from "@/components/Labs/LabFeatures";
import VidSection from "./VidSection";
import ContactForm from "@/components/ui/contactForm";
export default function LabPage() {
  return (
    <section>
      <LabsHero />
      <DentalLab />
      <Intro />
      <LabFeatures />
      <VidSection /> 
      <ContactForm />
    </section>
  );
}