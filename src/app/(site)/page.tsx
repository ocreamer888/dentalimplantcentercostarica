import HomePageP from "@/components/Home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implant Center Costa Rica - All-On-4 Implants from $19,950",
  description: "Expert All-On 4 dental implants from $19,950. Enjoy a new smile with our all-inclusive packages and a relaxing trip to Costa Rica.",
  openGraph: {
    title: "Dental Implant Center Costa Rica - All-On-4 Implants from $19,950",
    description: "Expert All-On 4 dental implants from $19,950. Enjoy a new smile with our all-inclusive packages and a relaxing trip to Costa Rica.",
    images: ["/images/DentalImplantSocials.png"],
  },
};

export default function Home() {
  return (
    <>
      <HomePageP/>
    </>
    );
}
