import HeroSection from "@/components/Home/HeroSection";
import AllOnSix from "@/components/Home/AllOnSix"
import AllOnFour from "@/components/Home/AllOnFour/Index";
import EstimateForm from "@/components/FreeEstimate/EstimateForm/index";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AllOnSix />
    <AllOnFour/>
    <EstimateForm/>
       
    </>
  );
}
