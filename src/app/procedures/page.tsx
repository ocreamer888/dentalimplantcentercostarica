import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import StructuredData from '@/components/SEO/StructuredData';
import SEOOptimizedImage from '@/components/SEO/SEOOptimizedImage';
import { breadcrumbConfigs } from '@/components/SEO/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Dental Implant Procedures Costa Rica - All-on-4, All-on-6, Single Tooth',
  description: 'Explore all dental implant procedures in Costa Rica: All-on-4, All-on-6, single tooth implants, and more. Expert surgeons, premium materials, luxury accommodations.',
  keywords: [
    'dental implant procedures',
    'all on 4 dental implants',
    'all on 6 dental implants',
    'single tooth implant',
    'dental implants costa rica',
    'dental implant surgery'
  ],
  image: '/images/dentalimages/dentalimplant1.webp',
  canonical: '/procedures',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Procedures', url: '/procedures' }
  ]
});

const procedures = [
  {
    id: 'all-on-4',
    name: 'All-on-4 Dental Implants',
    description: 'Complete arch restoration using just 4 strategically placed implants',
    price: '$19,950',
    savings: 'Save $30,050',
    image: '/images/dentalimages/allonsix1.webp',
    features: ['Same-day teeth', 'No bone grafting', 'Immediate function', '98% success rate'],
    url: '/procedures/all-on-4'
  },
  {
    id: 'all-on-6',
    name: 'All-on-6 Dental Implants',
    description: 'Enhanced stability with 6 implants for maximum strength and longevity',
    price: '$24,950',
    savings: 'Save $40,050',
    image: '/images/dentalimages/dentalimplant4.webp',
    features: ['Superior stability', 'Better bone support', 'Long-term durability', 'Premium option'],
    url: '/procedures/all-on-6'
  },
  {
    id: 'single-tooth',
    name: 'Single Tooth Implant',
    description: 'Individual tooth replacement with titanium implant and natural-looking crown',
    price: '$1,850',
    savings: 'Save $2,650',
    image: '/images/dentalimages/dentalimplant1.webp',
    features: ['Natural appearance', 'Preserves bone', 'Easy maintenance', 'Quick recovery'],
    url: '/procedures/single-tooth'
  },
  {
    id: 'same-day',
    name: 'Same-Day Dental Implants',
    description: 'Immediate implant placement and temporary teeth in a single appointment',
    price: '$22,950',
    savings: 'Save $32,050',
    image: '/images/dentalimages/dentalimplant2.webp',
    features: ['Immediate results', 'One-day procedure', 'Minimal downtime', 'Quick recovery'],
    url: '/procedures/same-day'
  },
  {
    id: 'full-mouth',
    name: 'Full Mouth Reconstruction',
    description: 'Complete oral rehabilitation with multiple implants for both arches',
    price: '$35,900',
    savings: 'Save $54,100',
    image: '/images/dentalimages/dentalimplant3.webp',
    features: ['Complete restoration', 'Both arches', 'Luxury package', 'Comprehensive care'],
    url: '/procedures/full-mouth'
  }
];

export default function ProceduresPage() {
  return (
    <>
      {/* Structured Data for Procedures */}
      <StructuredData 
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Dental Implant Procedures Costa Rica',
          description: 'Complete list of dental implant procedures available in Costa Rica',
          itemListElement: procedures.map((proc, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'MedicalProcedure',
              name: proc.name,
              description: proc.description,
              url: `https://dentalimplantcentercostarica.com${proc.url}`
            }
          }))
        }} 
      />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbConfigs.procedures} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dental Implant Procedures Costa Rica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Choose from our comprehensive range of dental implant procedures. 
            Expert surgeons, premium materials, and luxury accommodations included.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              Starting at $1,850
            </div>
            <p className="text-lg">For single tooth implants</p>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure) => (
              <div key={procedure.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <SEOOptimizedImage
                  src={procedure.image}
                  alt={`${procedure.name} procedure in Costa Rica`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {procedure.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {procedure.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-green-600">
                      {procedure.price}
                    </div>
                    <div className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {procedure.savings}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {procedure.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={procedure.url}
                    className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Costa Rica Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Costa Rica for Dental Implants?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Surgeons</h3>
              <p className="text-gray-700">
                Board-certified dentists with 15+ years of experience in dental implant procedures. 
                Trained in the latest techniques and technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cost Savings</h3>
              <p className="text-gray-700">
                Save 60-70% compared to US prices while receiving the same quality care. 
                All-inclusive packages with no hidden fees.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Luxury Experience</h3>
              <p className="text-gray-700">
                Combine your dental treatment with a relaxing vacation. Luxury accommodations, 
                beautiful beaches, and world-class service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Quality Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Advanced Technology & Premium Quality
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                State-of-the-Art Equipment
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">🔬</span>
                  <div>
                    <strong>3D Cone Beam CT Scans:</strong> Precise imaging for optimal implant placement
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">💻</span>
                  <div>
                    <strong>Computer-Guided Surgery:</strong> Enhanced accuracy and faster recovery
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">🦷</span>
                  <div>
                    <strong>Premium Materials:</strong> Zirconia implants and prosthetics for lasting results
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">🏥</span>
                  <div>
                    <strong>Sterile Environment:</strong> Hospital-grade sterilization and safety protocols
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <SEOOptimizedImage
                src="/images/dentalimages/dentalimplant5.webp"
                alt="Advanced dental technology and equipment in Costa Rica clinic"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Rates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Proven Success Rates
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700">Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-700">Happy Patients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700">Patient Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the perfect dental implant procedure for your needs and start 
            your journey to a beautiful, confident smile.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Compare Procedures
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
