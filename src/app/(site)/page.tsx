import HeroSection from "@/components/Home/HeroSection";
import AllOnSix from "@/components/Home/AllOnSix"
import AllOnFour from "@/components/Home/AllOnFour/Index";
import EstimateForm from "@/components/FreeEstimate/EstimateForm/index";
import  ExperimentalGrid  from "@/components/ui/ExperimentalGrid";

export default function Home() {
  return (
    <>
    <HeroSection />
    <ExperimentalGrid />
    <AllOnFour/>
    <AllOnSix />
    <EstimateForm/>
       
    </>
  );
}
