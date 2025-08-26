// Create this file to serve /locations route
import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { breadcrumbConfigs } from '@/components/SEO/Breadcrumbs';
import Image from 'next/image';
import { MapPin, Clock, Phone, Plane, DollarSign, Shield, Heart } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Dental Implant Locations - Costa Rica Dental Tourism | Implant Center Costa Rica',
  description: 'Discover our premier dental implant center in Costa Rica. Save up to 70% on dental implants while enjoying a dental vacation in paradise.',
  canonical: '/locations',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' }
  ]
});

export default function LocationsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbConfigs.locations} />
      </div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Dental Destination in Paradise
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience world-class dental care in Costa Rica, where cutting-edge technology meets 
              tropical beauty. Save up to 70% on dental implants while discovering one of the world&apos;s 
              most beautiful countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>JCI Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                <span>Patient-First Care</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span>70% Savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Location Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Location Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Implant Center Costa Rica
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Located in the heart of San José, our state-of-the-art dental facility combines 
                  modern technology with warm Costa Rican hospitality. Our clinic is easily accessible 
                  from Juan Santamaría International Airport and offers a comfortable, welcoming 
                  environment for international patients.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">Curridabat, 200m Sur de Pops<br />San José, Costa Rica</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Hours</h3>
                      <p className="text-gray-600">24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Contact</h3>
                      <p className="text-gray-600">+1 (702) 595-3955<br />ivan@dentalimplantcentercostarica.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location Image */}
              <div className="relative">
                <Image
                  src="/images/costa-rica-dental-center.webp"
                  alt="Dental Implant Center Costa Rica"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Costa Rica Section */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Costa Rica for Dental Care?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Costa Rica has emerged as a global leader in dental tourism, offering the perfect 
              combination of quality, affordability, and adventure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Significant Cost Savings</h3>
              <p className="text-gray-600">
                Save up to 70% on dental procedures compared to US prices, including 
                All-on-4 implants starting at just $14,950.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">World-Class Standards</h3>
              <p className="text-gray-600">
                Our facilities meet international healthcare standards with state-of-the-art 
                equipment and highly trained dental professionals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dental Vacation</h3>
              <p className="text-gray-600">
                Combine your dental treatment with exploring Costa Rica&apos;s beautiful beaches, 
                rainforests, and vibrant culture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Information */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Travel Image */}
              <div className="relative">
                <Image
                  src="/images/dental-vacations-costa-rica.webp"
                  alt="Dental Vacations in Costa Rica"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-2xl"></div>
              </div>
              
              {/* Travel Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Planning Your Dental Trip
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We make your dental journey to Costa Rica seamless and enjoyable. From airport 
                  pickup to accommodation recommendations, we handle all the details.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Airport Transportation</h3>
                      <p className="text-gray-600">Complimentary airport pickup and drop-off from Juan Santamaría International Airport</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Accommodation</h3>
                      <p className="text-gray-600">Partner hotels with special rates for our patients, located near our clinic</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Treatment Timeline</h3>
                      <p className="text-gray-600">Most procedures completed in 3-7 days, allowing time for recovery and exploration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Follow-up Care</h3>
                      <p className="text-gray-600">Comprehensive post-treatment support and virtual follow-up consultations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Costa Rica Highlights */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover Costa Rica While You Heal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take advantage of your recovery time to explore one of the world&apos;s most 
              biodiverse and beautiful countries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pacific Beaches</h3>
              <p className="text-sm text-gray-600">Relax on pristine beaches just hours from our clinic</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌴</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rainforests</h3>
              <p className="text-sm text-gray-600">Explore lush jungles and diverse wildlife</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌋</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Volcanoes</h3>
              <p className="text-sm text-gray-600">Visit active volcanoes and hot springs</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Culture</h3>
              <p className="text-sm text-gray-600">Experience rich Costa Rican heritage and cuisine</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Dental Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get your free consultation and discover how much you can save on dental implants 
              while experiencing the beauty of Costa Rica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/dental-implant-consultation"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </a>
              <a
                href="/affordable-dental-implants"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Procedures
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
