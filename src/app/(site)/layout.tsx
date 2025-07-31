import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Implant Center Costa Rica",
  description: "Save up to 70% on your new smile while discovering Costa Rica!",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`justify-center items-center ${geistSans.variable} ${geistMono.variable}`}>
      {children}
    </div>
  );
}
