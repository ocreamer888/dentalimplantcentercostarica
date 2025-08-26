import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import StructuredData from '@/components/SEO/StructuredData';
import { breadcrumbConfigs } from '@/components/SEO/Breadcrumbs';

export const metadata: Metadata = generateMetadata({
  title: 'Dental Implants Cost - Save 70% in Costa Rica | Complete Price Guide',
  description: 'Compare dental implant costs: USA vs Costa Rica. All-on-4 from $19,950, All-on-6 from $24,950. Save up to $70,000 with our all-inclusive packages. Free consultation.',
  keywords: [
    'dental implants cost',
    'dental implant prices',
    'all on 4 cost',
    'dental implants costa rica',
    'cheap dental implants',
    'dental implant cost comparison'
  ],
  image: '/images/dentalimages/dentalimplant1.webp',
  canonical: '/cost',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Cost & Pricing', url: '/cost' }
  ],
  faqData: [
    {
      question: 'How much do dental implants cost in Costa Rica?',
      answer: 'Dental implants in Costa Rica start at $1,850 for single tooth implants, $19,950 for All-on-4, and $24,950 for All-on-6. This represents 60-70% savings compared to US prices.'
    },
    {
      question: 'What is included in the all-inclusive package?',
      answer: 'Our all-inclusive packages include the procedure, anesthesia, medications, luxury accommodations, airport transfers, and follow-up care. No hidden fees or surprises.'
    },
    {
      question: 'Do you offer financing for dental implants?',
      answer: 'Yes, we offer flexible financing options including 0% APR plans for 12-24 months, making dental implants affordable for patients on any budget.'
    }
  ]
});

export default function CostPage() {
  return (
    <>
      {/* Structured Data for Cost Information */}
      <StructuredData 
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Dental Implants Cost - Complete Price Guide',
          description: 'Compare dental implant costs between USA and Costa Rica. Save up to 70% with our all-inclusive packages.',
          mainEntity: {
            '@type': 'PriceSpecification',
            name: 'Dental Implant Procedures',
            description: 'Complete pricing for all dental implant procedures in Costa Rica'
          }
        }} 
       
      />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbConfigs.cost} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dental Implants Cost: Complete Price Guide
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Save up to 70% on dental implants in Costa Rica. Compare prices, 
            explore financing options, and get your personalized quote today.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              Average Savings: $30,000+
            </div>
            <p className="text-lg">Per patient compared to US prices</p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Dental Implant Cost Comparison: USA vs Costa Rica
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-semibold">Procedure</th>
                  <th className="border border-gray-300 p-4 text-center font-semibold">USA Cost</th>
                  <th className="border border-gray-300 p-4 text-center font-semibold">Costa Rica Cost</th>
                  <th className="border border-gray-300 p-4 text-center font-semibold">Savings</th>
                  <th className="border border-gray-300 p-4 text-center font-semibold">Savings %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Single Tooth Implant</td>
                  <td className="border border-gray-300 p-4 text-center">$4,500</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$1,850</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$2,650</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">59%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">All-on-4 Dental Implants</td>
                  <td className="border border-gray-300 p-4 text-center">$50,000</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$19,950</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$30,050</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">All-on-6 Dental Implants</td>
                  <td className="border border-gray-300 p-4 text-center">$65,000</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$24,950</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$40,050</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">62%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">Full Mouth Reconstruction</td>
                  <td className="border border-gray-300 p-4 text-center">$90,000</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$35,900</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$54,100</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Same-Day Dental Implants</td>
                  <td className="border border-gray-300 p-4 text-center">$55,000</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$22,950</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">$32,050</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">58%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What&apos;s Included in Your All-Inclusive Package
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Medical Care</h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• Complete procedure</li>
                <li>• Anesthesia & sedation</li>
                <li>• All medications</li>
                <li>• Post-operative care</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Accommodations</h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• Luxury hotel stay</li>
                <li>• Airport transfers</li>
                <li>• Daily transportation</li>
                <li>• Concierge service</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Materials</h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• Zirconia implants</li>
                <li>• Premium prosthetics</li>
                <li>• Lifetime warranty</li>
                <li>• Quality guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Flexible Financing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">12 Months 0% APR</h3>
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-blue-100 mb-4">Interest charges</p>
              <ul className="text-left space-y-2">
                <li>• No credit check required</li>
                <li>• Quick approval process</li>
                <li>• Fixed monthly payments</li>
                <li>• Early payment discount</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">24 Months Low Interest</h3>
              <div className="text-4xl font-bold mb-2">3.9%</div>
              <p className="text-green-100 mb-4">Annual interest rate</p>
              <ul className="text-left space-y-2">
                <li>• Lower monthly payments</li>
                <li>• Flexible terms</li>
                <li>• No prepayment penalty</li>
                <li>• Credit building opportunity</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Medical Credit</h3>
              <div className="text-4xl font-bold mb-2">0%</div>
              <p className="text-purple-100 mb-4">For qualified patients</p>
              <ul className="text-left space-y-2">
                <li>• Specialized medical financing</li>
                <li>• Extended payment terms</li>
                <li>• Competitive rates</li>
                <li>• Easy online application</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Calculate Your Savings
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cost Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span className="font-medium">US Treatment Cost:</span>
                    <span className="font-bold text-red-600">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-medium">Costa Rica Cost:</span>
                    <span className="font-bold text-green-600">$19,950</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-2 border-blue-200">
                    <span className="font-medium text-lg">Total Savings:</span>
                    <span className="font-bold text-blue-600 text-xl">$30,050</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Additional Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Luxury vacation experience
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    No waiting times
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Personal care coordinator
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Lifetime warranty
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Follow-up care included
                  </li>
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
            Frequently Asked Questions About Cost
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How much do dental implants cost in Costa Rica?
              </h3>
              <p className="text-gray-700">
                Dental implants in Costa Rica start at $1,850 for single tooth implants, $19,950 for All-on-4, 
                and $24,950 for All-on-6. This represents 60-70% savings compared to US prices.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What is included in the all-inclusive package?
              </h3>
              <p className="text-gray-700">
                Our all-inclusive packages include the procedure, anesthesia, medications, luxury accommodations, 
                airport transfers, and follow-up care. No hidden fees or surprises.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Do you offer financing for dental implants?
              </h3>
              <p className="text-gray-700">
                Yes, we offer flexible financing options including 0% APR plans for 12-24 months, 
                making dental implants affordable for patients on any budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Save Thousands on Your Dental Implants?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your personalized quote and start your journey to a beautiful smile 
            while saving up to 70% on dental implant costs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
