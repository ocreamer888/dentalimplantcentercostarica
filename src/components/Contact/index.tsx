'use client';
import React from 'react';
import ContactForm from '../ui/contactForm';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header/Header';

interface ContactPageProps {
  title?: string;
  description?: string;
  heroImage?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  className?: string;
}

export function ContactPage({
  title = 'Contact Us!',
  description = "Ready for a new smile? Don't monkey around! Reach out to Ivan at Dental Implant Center Costa Rica",
  heroImage = '/images/hero/monkey-dental-implant-center-costa-rica.webp',
  gradientFrom = 'from-purple-100/50',
  gradientVia = 'via-purple-500/50',
  gradientTo = 'to-purple-900/50',
  className = '',
}: ContactPageProps) {
  return (
    <section
      className={`relative w-full min-h-screen ${className}`}
      aria-labelledby="contact-title"
    >
      <Header />
      
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-[60vh] min-h-[400px] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center items-center h-full relative z-20 text-center text-white">
            <h1
              id="contact-title"
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance mb-6"
            >
              {title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className={`relative w-full bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} py-16 lg:py-24`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-semibold text-purple-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="text-purple-600 text-2xl mt-1 mr-3" aria-hidden="true">📍</span>
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Address</p>
                      <p className="text-gray-600">
                        Curridabat, 200m Sur de Pops<br />
                        San José, Costa Rica
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-purple-600 text-2xl mt-1 mr-3" aria-hidden="true">⏰</span>
                    <div>
                      <p className="font-medium text-gray-800 mb-1">24/7</p>
                      <p className="text-gray-600">We are here for you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-purple-600 text-2xl mt-1 mr-3" aria-hidden="true">📞</span>
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Phone</p>
                      <a
                        href="tel:+17025953955"
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      >
                        +1 (702) 595-3955
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-purple-600 text-2xl mt-1 mr-3" aria-hidden="true">✉️</span>
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Email</p>
                      <a
                        href="mailto:ivan@dentalimplantcentercostarica.com"
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-200 break-all"
                      >
                        ivan@dentalimplantcentercostarica.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}