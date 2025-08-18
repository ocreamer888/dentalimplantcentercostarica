import AboutIntro from '@/components/About/AboutIntro'
import OurDocs from '@/components/About/OurDocs'
import { Metadata } from 'next'
import EstimateForm from '@/components/ui/EstimateForm'
import Footer from '@/components/Layout/Footer'
import HeroSecs from '@/components/ui/HeroSecs'



export const metadata: Metadata = {
  title: 'About Us - Dental Implant Center Costa Rica',
  description: 'Discover who we are and what we do at Dental Implant Center Costa Rica',
}

export default function AboutPage() {
  return (
    <>
    <HeroSecs
        title="Welcome to our world-class dental clinic in Costa Rica!"
        description="Learn more about us and who we are!"
        imageSrc=""
        imageAlt="Dental Clinic"
        linkHref="#treatments"
        backgroundImage="/images/hero/DentalPassport7.webp"
        backgroundColor="bg-gradient-to-tl from-purple-400/0 via-purple-500/0 to-purple-900/50"
        buttonText="Learn More"
        cardButton="true"
        className=""
      />
    <AboutIntro />
    <OurDocs />
    <div className="bg-gradient-to-tl from-purple-900/50 via-purple-500/50 to-purple-100/50 py-12 -mt-8">
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
