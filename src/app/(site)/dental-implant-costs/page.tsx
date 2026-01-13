import AboutIntro from '@/components/About/AboutIntro'
import OurDocs from '@/components/About/OurDocs'
import { Metadata } from 'next'
import EstimateForm from '@/components/FreeEstimate/EstimateForm'
import Footer from '@/components/Layout/Footer'
import { HeroSection } from '@/components/ui/HeroSection'

export const metadata: Metadata = {
  title: 'Dental Implant Costs - Complete Pricing Guide | Save Thousands',
  description: 'See complete dental implant costs and pricing. All-On-4 from $19,950, All-On-6 from $25,000. Compare with US prices and save 70%.',
  keywords: [
    'dental implants cost',
    'dental implant prices',
    'all on 4 cost',
    'full mouth dental implants cost',
    'dental implant pricing'
  ]
}

export default function AboutPage() {
  return (
    <>
    <HeroSection
      title="Welcome to our world-class dental clinic in Costa Rica!"
      description="Learn more about us and who we are!"
      buttonText="Learn More"
      buttonHref="#1"
      imageSrc="/images/hero/nurse-dental-implant-center-costa-rica.webp"
      imageAlt="Nurse Dental Implant Center Costa Rica"
    />
    
    <AboutIntro />
    <OurDocs />
    <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/80 to-purple-100/50 py-12 -mt-8">
                <div className="lg:px-4">
                    <div className="text-center py-12">
                        <h2 className="text-6xl font-bold text-gray-100 mb-4">Fill the form to get a free estimate</h2>
                        <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
                        Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full gap-4">
                        <EstimateForm />
                    </div>
                    <Footer />
                </div>
      </div>
    </>
  )
}
