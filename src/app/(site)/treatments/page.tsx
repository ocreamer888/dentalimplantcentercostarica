import TreatmentsHero from '@/components/Treatments/TreatmentsHero'
import Treatments from '@/components/Treatments/Treatments'
import { Metadata } from 'next'
import { ContactInfo }  from '@/components/ui/ContactInfo'
import EstimateForm from '@/components/ui/EstimateForm'
import Footer from '@/components/Layout/Footer'


export const metadata: Metadata = {
  title: 'About Us - Dental Implant Center Costa Rica',
  description: 'Discover who we are and what we do at Dental Implant Center Costa Rica',
}

export default function TreatmentsPage() {
  return (
    <>
    <TreatmentsHero />
    <Treatments />
    <div className="flex flex-col justify-center py-20 items-center w-full gap-4 bg-gradient-to-br from-purple-100/50 via-purple-500/50 to-purple-900/50">
            <ContactInfo />
            <EstimateForm />
            <Footer />
       </div>
       
    </>
  )
}
