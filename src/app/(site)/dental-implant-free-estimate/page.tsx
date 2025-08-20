import FreeEstimateP from "@/components/FreeEstimate/FreeEstimateP";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Free Estimate - Dental Implant Center Costa Rica",
  description: "Get a free estimate for your dental needs",
}

export default function FreeEstimatePage() {
  return (
    <FreeEstimateP/>
  );
}