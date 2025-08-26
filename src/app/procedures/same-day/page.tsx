import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import StructuredData from '@/components/SEO/StructuredData';
import SEOOptimizedImage from '@/components/SEO/SEOOptimizedImage';

export const metadata: Metadata = generateMetadata({
  title: 'Same Day Dental Implants Costa Rica - Teeth in One Day from $22,950',
  description: 'Get new teeth in one day with same-day dental implants. Save $32K+ vs USA. Experienced surgeons, immediate results.',
  keywords: [
    'same day dental implants',
    'teeth in one day',
    'immediate dental implants',
    'same day teeth costa rica',
    'dental implants same day',
    'immediate load implants'
  ],
  image: '/images/dentalimages/dentalimplant2.webp',
  canonical: '/procedures/same-day',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Procedures', url: '/procedures' },
    { name: 'Same-Day Dental Implants', url: '/procedures/same-day' }
  ],
  faqData: [
    {
      question: 'What are same-day dental implants?',
      answer: 'Same-day dental implants allow you to receive temporary teeth immediately after implant placement, giving you a complete smile in just one day instead of waiting months for traditional implants.'
    },
    {
      question: 'How much do same-day implants cost in Costa Rica?',
      answer: 'Same-day dental implants in Costa Rica cost $22,950, representing a savings of over $32,000 compared to US prices of $55,000+. This includes the complete all-inclusive package.'
    },
    {
      question: 'Are same-day implants as good as traditional implants?',
      answer: 'Yes, same-day implants have the same long-term success rate as traditional implants when performed by experienced surgeons. The main difference is immediate function versus waiting for healing.'
    }
  ]
});

export default function SameDayPage() {
  return (
    <>
      {/* Structured Data for Same-Day Implants */}
      <StructuredData 
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: 'Same-Day Dental Implants',
          description: 'Immediate implant placement and temporary teeth in a single appointment',
          code: {
            '@type': 'MedicalCode',
            codeValue: 'D6010',
            codingSystem: 'ADA'
          },
          bodyLocation: 'Mouth',
          preparation: 'Consultation, 3D imaging, treatment planning',
          followup: 'Regular check-ups, oral hygiene maintenance',
          howPerformed: 'Immediate implant placement with temporary teeth attachment',
          possibleComplication: 'Infection, implant failure, nerve damage',
          expectedPrognosis: 'High success rate with immediate function',
          availableService: {
            '@type': 'MedicalService',
            name: 'Same-Day Dental Implants Costa Rica',
            description: 'Immediate teeth replacement with same-day results'
          }
        }} 
      />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={[
          { name: 'Home', url: '/' },
          { name: 'Procedures', url: '/procedures' },
          { name: 'Same-Day Dental Implants', url: '/procedures/same-day', current: true }
        ]} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Same-Day Dental Implants Costa Rica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Get your new smile in just one day! Same-day dental implants provide immediate 
            function and beautiful results while saving you thousands.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">$22,950</div>
              <div className="text-sm">All-Inclusive Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300">58%</div>
              <div className="text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300">1 Day</div>
              <div className="text-sm">To New Smile</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Same-Day Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What Are Same-Day Dental Implants?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Same-day dental implants, also known as immediate load implants, allow you to 
                receive temporary teeth immediately after implant placement. This revolutionary 
                technique eliminates the waiting period typically associated with traditional 
                dental implants.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Using advanced technology and precise planning, our experienced surgeons can 
                place implants and attach temporary teeth in a single appointment, giving you 
                immediate function and a beautiful smile while your implants heal and integrate 
                with your jawbone.
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-emerald-900">
                  Key Benefits of Same-Day Implants:
                </h3>
                <ul className="space-y-2 text-emerald-800">
                  <li>• Immediate teeth placement</li>
                  <li>• No waiting period</li>
                  <li>• Immediate function</li>
                  <li>• Natural appearance</li>
                  <li>• Faster overall treatment</li>
                </ul>
              </div>
            </div>
            <div>
              <SEOOptimizedImage
                src="/images/dentalimages/dentalimplant2.webp"
                alt="Same-day dental implants showing immediate teeth placement"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Same-Day Implants Cost Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-600">United States</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">$55,000+</div>
              <p className="text-gray-600 mb-4">Average cost per arch</p>
              <ul className="space-y-2 text-gray-700">
                <li>• High insurance deductibles</li>
                <li>• Additional consultation fees</li>
                <li>• Separate accommodation costs</li>
                <li>• Limited financing options</li>
                <li>Long waiting times</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Costa Rica</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">$22,950</div>
              <p className="text-gray-600 mb-4">All-inclusive package</p>
              <ul className="space-y-2 text-gray-700">
                <li>• No hidden fees</li>
                <li>• Luxury accommodations included</li>
                <li>• Airport transfers provided</li>
                <li>• Flexible financing available</li>
                <li>Immediate treatment availability</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Total Savings: <span className="text-green-600">$32,050+</span>
            </div>
            <p className="text-lg text-gray-600">
              Plus luxury vacation experience in beautiful Costa Rica
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Same-Day Implant Procedure Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Morning</h3>
                <p className="text-gray-700">
                  Arrive at clinic, final consultation, and preparation for procedure
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Procedure</h3>
                <p className="text-gray-700">
                  Implant placement and immediate temporary teeth attachment (2-3 hours)
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Afternoon</h3>
                <p className="text-gray-700">
                  Recovery period, instructions, and you leave with your new smile
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Follow-up</h3>
                <p className="text-gray-700">
                  Regular check-ups and permanent teeth placement after healing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Same-Day Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your new teeth in just one day and save over $32,000 compared to US prices. 
            Book your free consultation today!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors">
              View Before & After Photos
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
