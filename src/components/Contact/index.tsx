'use client'
import { Metadata } from 'next';
import ContactForm from '../ui/contactForm';
import HeroSecs from '../ui/HeroSecs';
import Footer from '../Layout/Footer';

export const metadata: Metadata = {
  title: 'Contact Us - Implant Center Costa Rica',
  description: 'Get in touch with our dental specialists for consultations and appointments.',
};

export default function ContactPage() {
  return (
    <>
     <HeroSecs
        title="Contact Dental Implant Center Costa Rica"
        description="We are verifieded dental smile confidence providers. Let's start today!"
        imageSrc=""
        imageAlt="Dental Clinic"
        linkHref="#contact"
        backgroundImage="/images/all-on-4-dental-vacations.webp"
        backgroundColor="bg-gradient-to-tl from-purple-400/10 via-purple-500/0 to-purple-900/10"
        buttonText="Learn More"
        cardButton="true"
        className=""
      />
    <div className="relative flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-purple-100/50 via-purple-500/50 to-purple-900/50 md:px-8 -mt-8 h-auto pt-28 w-full">

    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div id="contact" className="grid lg:grid-cols-2 gap-4">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-purple-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-purple-600 mt-1 mr-3">📍</span>
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">Curridabat, 200m Sur de Pops<br />San José, Costa Rica</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-600 mt-1 mr-3">⏰</span>
                  <div>
                    <p className="font-medium text-gray-800">24/7</p>
                    <p className="text-gray-600">We are here for you</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-600 mt-1 mr-3">📞</span>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+1 (702) 595-3955</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-600 mt-1 mr-3">✉️</span>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">ivan@dentalimplantcentercostarica.com</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
            
           
          </div>
        </div>
        <Footer />
      </div>
    </div>
    </div>
    </>
  );
}