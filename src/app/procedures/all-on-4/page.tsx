import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import StructuredData from '@/components/SEO/StructuredData';
import SEOOptimizedImage from '@/components/SEO/SEOOptimizedImage';
import { breadcrumbConfigs } from '@/components/SEO/Breadcrumbs';
import { dentalProcedureSchemas } from '@/components/SEO/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'All-on-4 Dental Implants Costa Rica - Save $30K+ | Same Day Teeth',
  description: 'Get All-on-4 dental implants in Costa Rica from $19,950. Save 60% vs USA prices. Same-day teeth with experienced surgeons. Free consultation.',
  keywords: [
    'all on 4 dental implants',
    'all on 4 cost',
    'same day teeth Costa Rica',
    'all on 4 dental implants cost',
    'all on 4 procedure',
    'all on 4 recovery'
  ],
  image: '/images/dentalimages/allonsix1.webp',
  canonical: '/procedures/all-on-4',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Procedures', url: '/procedures' },
    { name: 'All-on-4 Dental Implants', url: '/procedures/all-on-4' }
  ],
  faqData: [
    {
      question: 'What are All-on-4 dental implants?',
      answer: 'All-on-4 dental implants are a revolutionary technique that uses just 4 strategically placed implants to support a full arch of prosthetic teeth, providing immediate function and natural appearance.'
    },
    {
      question: 'How much do All-on-4 implants cost in Costa Rica?',
      answer: 'All-on-4 dental implants in Costa Rica start at $19,950, which is 60% less than the $50,000+ cost in the United States, including all-inclusive packages with luxury accommodations.'
    },
    {
      question: 'How long does the All-on-4 procedure take?',
      answer: 'The All-on-4 procedure typically takes 2-3 hours per arch, with patients receiving temporary teeth the same day. Full recovery and permanent teeth placement occurs within 3-6 months.'
    },
    {
      question: 'Are All-on-4 implants permanent?',
      answer: 'Yes, All-on-4 implants are designed to last a lifetime with proper care. The titanium implants fuse with your jawbone, providing permanent stability for your prosthetic teeth.'
    },
    {
      question: 'What is the success rate of All-on-4 implants?',
      answer: 'All-on-4 dental implants have a 98% success rate when performed by experienced surgeons. Our Costa Rica clinic maintains this high success rate through advanced technology and skilled professionals.'
    }
  ]
});

export default function AllOn4Page() {
  return (
    <>
      {/* Structured Data for Rich Snippets */}
      <StructuredData 
        data={dentalProcedureSchemas.allOn4} 
      />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbConfigs.allOn4} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            All-on-4 Dental Implants Costa Rica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Get a complete new smile in just one day with our revolutionary All-on-4 technique. 
            Save up to $30,000 compared to US prices while enjoying luxury accommodations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">$19,950</div>
              <div className="text-sm">All-Inclusive Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300">60%</div>
              <div className="text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300">Same Day</div>
              <div className="text-sm">Teeth Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is All-on-4 Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What Are All-on-4 Dental Implants?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                All-on-4 dental implants represent a breakthrough in dental implant technology, 
                offering patients a complete smile restoration using just four strategically placed 
                titanium implants. This innovative approach eliminates the need for bone grafting 
                in most cases and provides immediate function with temporary teeth on the same day.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The technique was developed by Nobel Biocare and has been clinically proven to 
                provide excellent long-term results. By angling the posterior implants at 45 degrees, 
                we can maximize bone contact and stability, even in patients with significant bone loss.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  Key Benefits of All-on-4:
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Immediate teeth placement (same day)</li>
                  <li>• No bone grafting required in most cases</li>
                  <li>• Faster recovery and healing</li>
                  <li>• Natural-looking, permanent results</li>
                  <li>• Cost-effective compared to traditional methods</li>
                </ul>
              </div>
            </div>
            <div>
              <SEOOptimizedImage
                src="/images/dentalimages/allonsix1.webp"
                alt="All-on-4 dental implants procedure showing four implants supporting full arch"
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
            All-on-4 Cost Comparison: Costa Rica vs USA
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-600">United States</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">$50,000+</div>
              <p className="text-gray-600 mb-4">Average cost per arch</p>
              <ul className="space-y-2 text-gray-700">
                <li>• High insurance deductibles</li>
                <li>• Additional consultation fees</li>
                <li>• Separate accommodation costs</li>
                <li>• Limited financing options</li>
                <li>• Long waiting times</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Costa Rica</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">$19,950</div>
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
              Total Savings: <span className="text-green-600">$30,050+</span>
            </div>
            <p className="text-lg text-gray-600">
              Plus luxury vacation experience in beautiful Costa Rica
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            All-on-4 Procedure: Step-by-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Consultation & Planning</h3>
              <p className="text-gray-700">
                Comprehensive examination, 3D imaging, and treatment planning. 
                We&apos;ll assess your oral health and create a personalized treatment plan.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Implant Placement</h3>
              <p className="text-gray-700">
                Four titanium implants are strategically placed in your jawbone. 
                The procedure takes 2-3 hours per arch under IV sedation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Immediate Teeth</h3>
              <p className="text-gray-700">
                Temporary teeth are attached the same day, giving you immediate 
                function and a beautiful smile while you heal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            All-on-4 Recovery Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Day 1-3: Immediate Recovery</h3>
                  <p className="text-gray-700">
                    Mild discomfort and swelling are normal. You&apos;ll have temporary teeth 
                    and can eat soft foods. Follow post-operative care instructions carefully.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Week 1-2: Healing Phase</h3>
                  <p className="text-gray-700">
                    Swelling decreases, and you can gradually return to normal activities. 
                    Continue with soft foods and gentle oral hygiene.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Month 1-3: Osseointegration</h3>
                  <p className="text-gray-700">
                    Implants fuse with your jawbone. You can eat most foods normally. 
                    Regular check-ups ensure proper healing.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Month 3-6: Final Restoration</h3>
                  <p className="text-gray-700">
                    Permanent zirconia teeth are placed. Enjoy your new smile with 
                    full function and natural appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions About All-on-4
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What are All-on-4 dental implants?
              </h3>
              <p className="text-gray-700">
                All-on-4 dental implants are a revolutionary technique that uses just 4 strategically 
                placed implants to support a full arch of prosthetic teeth, providing immediate 
                function and natural appearance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How much do All-on-4 implants cost in Costa Rica?
              </h3>
              <p className="text-gray-700">
                All-on-4 dental implants in Costa Rica start at $19,950, which is 60% less than 
                the $50,000+ cost in the United States, including all-inclusive packages with 
                luxury accommodations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How long does the All-on-4 procedure take?
              </h3>
              <p className="text-gray-700">
                The All-on-4 procedure typically takes 2-3 hours per arch, with patients receiving 
                temporary teeth the same day. Full recovery and permanent teeth placement occurs 
                within 3-6 months.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Are All-on-4 implants permanent?
              </h3>
              <p className="text-gray-700">
                Yes, All-on-4 implants are designed to last a lifetime with proper care. The titanium 
                implants fuse with your jawbone, providing permanent stability for your prosthetic teeth.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What is the success rate of All-on-4 implants?
              </h3>
              <p className="text-gray-700">
                All-on-4 dental implants have a 98% success rate when performed by experienced surgeons. 
                Our Costa Rica clinic maintains this high success rate through advanced technology 
                and skilled professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your New Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have transformed their smiles 
            with All-on-4 dental implants in Costa Rica.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              View Before & After Photos
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
