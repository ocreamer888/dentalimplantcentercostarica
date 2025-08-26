import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import StructuredData from '@/components/SEO/StructuredData';
import SEOOptimizedImage from '@/components/SEO/SEOOptimizedImage';
import { breadcrumbConfigs } from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = generateMetadata({
  title: 'Dental Implants Los Angeles - Save $30K+ in Costa Rica | Free Consultation',
  description: 'Get dental implants in Costa Rica from Los Angeles. Save $30K+ vs LA prices. All-on-4 from $19,950. Direct flights, luxury packages. Free consultation available.',
  keywords: [
    'dental implants los angeles',
    'dental implants costa rica from LA',
    'all on 4 los angeles',
    'dental tourism los angeles',
    'cheap dental implants los angeles',
    'dental implants abroad from LA'
  ],
  image: '/images/dentalimages/dentalimplant1.webp',
  canonical: '/locations/los-angeles',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Los Angeles', url: '/locations/los-angeles' }
  ]
});

export default function LosAngelesPage() {
  return (
    <>
      {/* Structured Data for Local Business */}
      <StructuredData 
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Dental Implant Center Costa Rica - Los Angeles Consultation',
          description: 'Dental implant consultation services for Los Angeles residents seeking affordable treatment in Costa Rica',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Los Angeles',
            addressRegion: 'CA',
            addressCountry: 'US'
          },
          areaServed: 'Los Angeles, California',
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 34.0522,
              longitude: -118.2437
            },
            geoRadius: '50 miles'
          }
        }} 
       
      />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbConfigs.losAngeles} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-700 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dental Implants Los Angeles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Save $30,000+ on dental implants by traveling from Los Angeles to Costa Rica. 
            All-inclusive packages with luxury accommodations and direct flights.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">$30K+</div>
              <div className="text-sm">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300">6 Hours</div>
              <div className="text-sm">Flight Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300">$19,950</div>
              <div className="text-sm">All-on-4 Package</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel from LA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Travel from Los Angeles to Costa Rica for Dental Implants?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Massive Cost Savings</h3>
              <p className="text-gray-700">
                Save $30,000+ compared to Los Angeles prices. All-on-4 implants cost $19,950 
                in Costa Rica vs $50,000+ in LA.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy Travel</h3>
              <p className="text-gray-700">
                Direct flights from LAX to San José in just 6 hours. We handle all travel 
                arrangements and airport transfers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Luxury Experience</h3>
              <p className="text-gray-700">
                Combine dental treatment with a relaxing vacation. Luxury accommodations, 
                beautiful beaches, and world-class service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison LA vs Costa Rica */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Los Angeles vs Costa Rica: Dental Implant Costs
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Los Angeles, CA</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">All-on-4 Implants</span>
                    <span className="font-bold text-red-600">$50,000+</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Single Tooth Implant</span>
                    <span className="font-bold text-red-600">$4,500+</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Consultation Fee</span>
                    <span className="font-bold text-red-600">$200+</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Insurance Deductible</span>
                    <span className="font-bold text-red-600">$2,000+</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Estimated Cost</span>
                    <span className="text-red-600">$56,700+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Costa Rica Package</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">All-on-4 Implants</span>
                    <span className="font-bold text-green-600">$19,950</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Luxury Accommodations</span>
                    <span className="font-bold text-green-600">Included</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Airport Transfers</span>
                    <span className="font-bold text-green-600">Included</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Consultation</span>
                    <span className="font-bold text-green-600">Free</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Package Cost</span>
                    <span className="text-green-600">$19,950</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              Total Savings: <span className="text-green-600">$36,750+</span>
            </div>
            <p className="text-lg text-gray-600">
              Plus luxury vacation experience in beautiful Costa Rica
            </p>
          </div>
        </div>
      </section>

      {/* Travel Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Travel from Los Angeles to Costa Rica
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Easy Travel from LAX
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✈️</span>
                  <div>
                    <strong>Direct Flights:</strong> LAX to San José International Airport (SJO)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">⏰</span>
                  <div>
                    <strong>Flight Time:</strong> Approximately 6 hours
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">💰</span>
                  <div>
                    <strong>Flight Cost:</strong> $400-800 round trip (varies by season)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">🕐</span>
                  <div>
                    <strong>Time Zone:</strong> Costa Rica is 2 hours ahead of Los Angeles
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800">
                  <strong>Pro Tip:</strong> Book flights 2-3 months in advance for the best rates. 
                  We can help you find the most affordable options.
                </p>
              </div>
            </div>
            <div>
              <SEOOptimizedImage
                src="/images/dentalimages/dentalimplant2.webp"
                alt="Dental tourism from Los Angeles to Costa Rica - beautiful clinic and accommodations"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LA Patient Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Los Angeles Patients Share Their Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-gray-600">Beverly Hills, CA</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;I saved over $35,000 getting my All-on-4 implants in Costa Rica. The flight 
                from LAX was easy, and the treatment was amazing. I&rsquo;m so glad I made the trip!&rdquo;
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael J.</div>
                  <div className="text-gray-600">Santa Monica, CA</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Coming from LA, I was worried about the travel, but everything was perfect. 
                The clinic was world-class and I saved a fortune. Highly recommend!&rdquo;
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Save $30K+ from Los Angeles?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of LA residents who have transformed their smiles while saving 
            thousands on dental implants in Costa Rica.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Get Free LA Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              View Travel Packages
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
