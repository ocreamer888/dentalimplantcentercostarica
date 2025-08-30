import { Metadata } from 'next'
import { ContactInfo }  from '@/components/ui/ContactInfo'
import EstimateForm from '@/components/FreeEstimate/EstimateForm'
import Footer from '@/components/Layout/Footer'
import HeroSecs from '@/components/ui/HeroSecs'
import TreatmentsD from '@/components/Treatments/TreatmentsD'


export const metadata: Metadata = {
  title: 'Affordable Dental Implants - Save 70% | All-Inclusive Pricing',
  description: 'Get affordable dental implants starting at $19,950. All-On-4 and All-On-6 procedures with transparent pricing. Free consultation and financing available.',
  keywords: [
    'affordable dental implants',
    'cheap dental implants',
    'dental implants cost',
    'all on 4 implants',
    'full mouth dental implants',
    'dental implant prices'
  ]
}

export default function TreatmentsPage() {
  return (
    <>
   
    <HeroSecs
        title="Discover Our Dental Treatments"
        description="We are verifieded dental smile confidence providers. Let's start today!"
        imageSrc=""
        imageAlt="Dental Clinic"
        linkHref="#treatments"
        backgroundImage="/images/labs/dentalimplantcentercostarica-lab4.webp"
        backgroundColor="bg-gradient-to-tl from-purple-400/40 via-purple-500/40 to-purple-900/50"
        buttonText="Learn More"
        cardButton="true"
        className="backdrop-blur-sm justify-center items-center h-full"
        CardContentClassName="md:h-1/2 flex flex-col justify-center items-center px-4 md:ml-12"
      />
      <div className=" bg-white mx-auto px-4 -mt-8">
      <TreatmentsD />
      </div>
      <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12">

                <div className="flex flex-col justify-center items-center lg:px-4">
                    <div className="text-center py-12">
                        <h2 className="text-6xl font-bold text-gray-100 mb-4">Fill the form to get a free estimate</h2>
                        <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
                        Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-4/5 gap-4">
                        <ContactInfo />
                        <EstimateForm />
                    </div>
                    <Footer />
                </div>
                </div>
       
    </>
  )
}
