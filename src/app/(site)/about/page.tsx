import AboutHero from '@/components/About/AboutHero'
import AboutIntro from '@/components/About/AboutIntro'
import OurDocs from '@/components/About/OurDocs'
import ContactUs from '@/components/ui/ContactUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Dental Implant Center Costa Rica',
  description: 'Discover who we are and what we do at Dental Implant Center Costa Rica',
}

export default function AboutPage() {
  return (
    <>
    <AboutHero />
    <AboutIntro />
    <OurDocs />
    <ContactUs />
    </>
  )
}
