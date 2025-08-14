import TreatmentsHero from '@/components/Treatments/TreatmentsHero'
import Treatments from '@/components/Treatments/Treatments'
import ContactUs from '@/components/ui/ContactUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Dental Implant Center Costa Rica',
  description: 'Discover who we are and what we do at Dental Implant Center Costa Rica',
}

export default function TreatmentsPage() {
  return (
    <>
    <TreatmentsHero />
    <Treatments />
    <ContactUs />
    </>
  )
}
