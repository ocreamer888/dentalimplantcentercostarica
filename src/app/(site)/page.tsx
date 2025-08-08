import AllOnSix from "@/components/Home/AllOnSix"
import AllOnFour from "@/components/Home/AllOnFour/Index";
import EstimateForm from "@/components/FreeEstimate/EstimateForm/index";
import  ExperimentalGrid  from "@/components/ui/ExperimentalGrid";
import Hero from "@/components/Home/Hero/hero";
import Bento from "@/components/ui/Bento";

export default function Home() {
  return (
    <>
    <Hero />
    <ExperimentalGrid />
    <Bento/>
    <AllOnFour/>
    <AllOnSix />
    <EstimateForm />
       
    </>
  );
}
