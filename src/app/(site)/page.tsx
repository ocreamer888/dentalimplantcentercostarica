import HeroSection from "@/components/Home/HeroSection";
import AllOnSix from "@/components/Home/AllOnSix"
import AllOnFour from "@/components/Home/AllOnFour/Index";
import EstimateForm from "@/components/FreeEstimate/EstimateForm/index";
import { AcrossBorders } from "@/components/Home/AcrossBorders";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AllOnFour/>
    <AllOnSix />
    <AcrossBorders />
    <EstimateForm/>
       
    </>
  );
}
