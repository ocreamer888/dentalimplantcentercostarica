import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { generateMetadata } from "@/lib/metadata";
import { StrictMode } from 'react';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = generateMetadata({
  title: "Dental Implant Center Costa Rica",
  description: "Save up to 70% on your new smile while discovering Costa Rica!",
  keywords: [
    "dental implants",
    "all on four", 
    "dental tourism",
    "all on six"
  ],
  image: "/images/DentalImplantSocials.png",
  canonical: "/",
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      <div className={`justify-center items-center ${geistSans.variable} ${geistMono.variable}`}>
      <StrictMode>
          {children}
        </StrictMode>
      </div>
    </>
  );
}
