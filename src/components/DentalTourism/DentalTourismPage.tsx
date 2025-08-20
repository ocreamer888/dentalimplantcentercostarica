"use client";

import HeroSecs from "@/components/ui/HeroSecs";
import React from "react";


export default function DentalTourismPage() {
  return (
    <>
      <HeroSecs
        title="Expert All-On 4 Implants from $19,950"
        description="Enjoy a new smile with our All-inclusive packages and a relaxing trip to Costa Rica, all for a fraction of the cost back home."
        imageSrc="/images/Dental-tourism-Costa-Rica-frog.webp"
        imageVisibility={{hideOnMobile: true}}
        imageAlt="Dental Clinic"
        linkHref="#form"
        backgroundImage="/images/hero/DentalOffice1.webp"
        backgroundVisibility={{hideOnMobile: true}}
        backgroundColor="bg-gradient-to-tl from-purple-400/70 via-purple-600/60 to-purple-900/50"
        buttonText="Free Estimate"
        cardButton="true"
        className="backdrop-blur-sm"
      />

    </>
  );
}

