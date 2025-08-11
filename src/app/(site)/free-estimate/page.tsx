import EstimateHero from "@/components/FreeEstimate/EstimateHero";
import EstimateForm from "@/components/FreeEstimate/EstimateForm";
import { Metadata } from "next";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Free Estimate - Dental Implant Center Costa Rica",
  description: "Get a free estimate for your dental needs",
}

export default function FreeEstimatePage() {
  return (
    <>
  <EstimateHero />
  <EstimateForm />
  <Footer />
    </>
  );
}