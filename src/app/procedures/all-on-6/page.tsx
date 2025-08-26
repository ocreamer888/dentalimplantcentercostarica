import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import StructuredData from '@/components/SEO/StructuredData';
import SEOOptimizedImage from '@/components/SEO/SEOOptimizedImage';
import { breadcrumbConfigs } from '@/components/SEO/Breadcrumbs';
import { dentalProcedureSchemas } from '@/components/SEO/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'All-on-6 Dental Implants Costa Rica - Premium Stability from $24,950',
  description: 'All-on-6 dental implants with superior stability. Save $40K+ vs USA. Expert surgeons, luxury recovery. Book free consultation today.',
  keywords: [
    'all on 6 dental implants',
    'all on 6 cost',
    'all on 6 vs all on 4',
    'dental implants costa rica',
    'full arch dental implants',
    'premium dental implants'
  ],
  image: '/images/dentalimages/dentalimplant4.webp',
  canonical: '/procedures/all-on-6',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Procedures', url: '/procedures' },
    { name: 'All-on-6 Dental Implants', url: '/procedures/all-on-6' }
  ],
  faqData: [
    {
      question: 'What is the difference between All-on-4 and All-on-6?',
      answer: 'All-on-6 uses 6 implants instead of 4, providing superior stability and support. This option is ideal for patients with better bone density who want maximum strength and longevity.'
    },
    {
      question: 'How much do All-on-6 implants cost in Costa Rica?',
      answer: 'All-on-6 dental implants in Costa Rica cost $24,950, representing a savings of over $40,000 compared to US prices of $65,000+. This includes the complete all-inclusive package.'
    },
    {
      question: 'Who is a good candidate for All-on-6 implants?',
      answer: 'Ideal candidates have good bone density, want maximum stability, and prefer the premium option. All-on-6 is perfect for patients who want the strongest possible foundation for their new smile.'
    }
  ]
});

export default function AllOn6Page() {
  return (
    <>
      {/* Structured Data for All-on-6 */}
      <StructuredData 
        data={dentalProcedureSchemas.allOn6} 
      />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbConfigs.allOn6} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            All-on-6 Dental Implants Costa Rica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Experience the ultimate in dental implant stability with our premium All-on-6 technique. 
            Six strategically placed implants for maximum strength and longevity.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">$24,950</div>
              <div className="text-sm">Premium Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300">62%</div>
              <div className="text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300">6 Implants</div>
              <div className="text-sm">Maximum Stability</div>
            </div>
          </div>
        </div>
      </section>

      {/* All-on-4 vs All-on-6 Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            All-on-4 vs All-on-6: Which is Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">All-on-4 Implants</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$19,950</div>
              <p className="text-gray-600 mb-4">Cost-effective solution</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 4 strategically placed implants</li>
                <li>• Ideal for moderate bone loss</li>
                <li>• Faster procedure time</li>
                <li>• Lower cost option</li>
                <li>• Good stability</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">All-on-6 Implants</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-2">$24,950</div>
              <p className="text-gray-600 mb-4">Premium stability option</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 6 strategically placed implants</li>
                <li>• Maximum stability and support</li>
                <li>• Better long-term durability</li>
                <li>• Premium materials included</li>
                <li>• Superior chewing power</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              <strong>Recommendation:</strong> Choose All-on-6 if you want maximum stability and 
              are willing to invest in the premium option for long-term results.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of All-on-6 Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose All-on-6 Dental Implants?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Superior Stability</h3>
              <p className="text-gray-700">
                Six implants provide maximum support and stability, ensuring your new teeth 
                feel natural and secure during all activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Long-term Durability</h3>
              <p className="text-gray-700">
                The additional implants distribute chewing forces more evenly, 
                leading to better long-term success and implant longevity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Enhanced Function</h3>
              <p className="text-gray-700">
                Enjoy better chewing power and confidence with the strongest possible 
                foundation for your prosthetic teeth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                All-on-6 Procedure Details
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The All-on-6 procedure is our premium dental implant solution, designed for 
                patients who want the ultimate in stability and long-term success. This advanced 
                technique uses six strategically placed implants to support a full arch of teeth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-3 text-xl">1</span>
                  <div>
                    <strong>Comprehensive Planning:</strong> 3D imaging and computer-guided 
                    treatment planning for optimal implant placement.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-3 text-xl">2</span>
                  <div>
                    <strong>Strategic Placement:</strong> Six implants positioned for maximum 
                    bone contact and stability.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-3 text-xl">3</span>
                  <div>
                    <strong>Immediate Function:</strong> Temporary teeth attached the same day 
                    for immediate use.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-3 text-xl">4</span>
                  <div>
                    <strong>Final Restoration:</strong> Permanent zirconia teeth placed after 
                    healing for lasting beauty.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SEOOptimizedImage
                src="/images/dentalimages/dentalimplant4.webp"
                alt="All-on-6 dental implants showing six implants supporting full arch"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recovery & Aftercare Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Recovery & Aftercare for All-on-6 Implants
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Immediate Recovery (Days 1-7)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Mild swelling and discomfort (manageable with medication)</li>
                  <li>• Soft food diet recommended</li>
                  <li>• Gentle oral hygiene practices</li>
                  <li>• Avoid strenuous activities</li>
                  <li>• Regular follow-up appointments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Long-term Care</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Regular dental check-ups every 6 months</li>
                  <li>• Professional cleaning and maintenance</li>
                  <li>• Proper oral hygiene routine</li>
                  <li>• Avoid smoking and excessive alcohol</li>
                  <li>• Protect implants from trauma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions About All-on-6
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What is the difference between All-on-4 and All-on-6?
              </h3>
              <p className="text-gray-700">
                All-on-6 uses 6 implants instead of 4, providing superior stability and support. 
                This option is ideal for patients with better bone density who want maximum 
                strength and longevity.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How much do All-on-6 implants cost in Costa Rica?
              </h3>
              <p className="text-gray-700">
                All-on-6 dental implants in Costa Rica cost $24,950, representing a savings of 
                over $40,000 compared to US prices of $65,000+. This includes the complete 
                all-inclusive package.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Who is a good candidate for All-on-6 implants?
              </h3>
              <p className="text-gray-700">
                Ideal candidates have good bone density, want maximum stability, and prefer the 
                premium option. All-on-6 is perfect for patients who want the strongest possible 
                foundation for their new smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Premium Stability?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose All-on-6 for the ultimate in dental implant stability and long-term success. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
              Compare with All-on-4
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
