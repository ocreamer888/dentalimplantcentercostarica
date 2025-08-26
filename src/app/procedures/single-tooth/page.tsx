import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import StructuredData from '@/components/SEO/StructuredData';
import SEOOptimizedImage from '@/components/SEO/SEOOptimizedImage';

export const metadata: Metadata = generateMetadata({
  title: 'Single Tooth Implant Costa Rica - Natural Results from $1,850',
  description: 'Replace single tooth with premium implant in Costa Rica. Save 60% vs USA prices. Natural-looking results. Free consultation available.',
  keywords: [
    'single tooth implant',
    'single tooth implant cost',
    'dental implant single tooth',
    'single tooth replacement',
    'dental implants costa rica',
    'tooth implant cost'
  ],
  image: '/images/dentalimages/dentalimplant1.webp',
  canonical: '/procedures/single-tooth',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Procedures', url: '/procedures' },
    { name: 'Single Tooth Implant', url: '/procedures/single-tooth' }
  ],
  faqData: [
    {
      question: 'How much does a single tooth implant cost in Costa Rica?',
      answer: 'Single tooth implants in Costa Rica start at $1,850, which is 60% less than the $4,500+ cost in the United States. This includes the complete procedure and premium materials.'
    },
    {
      question: 'How long does a single tooth implant take?',
      answer: 'The single tooth implant procedure takes 1-2 hours, with the implant placed in one appointment. You\'ll receive a temporary crown immediately, with the permanent crown placed after 3-4 months of healing.'
    },
    {
      question: 'Are single tooth implants permanent?',
      answer: 'Yes, single tooth implants are designed to last a lifetime with proper care. The titanium implant fuses with your jawbone, providing permanent stability for your replacement tooth.'
    }
  ]
});

export default function SingleToothPage() {
  return (
    <>
      {/* Structured Data for Single Tooth Implant */}
      <StructuredData 
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: 'Single Tooth Implant',
          description: 'Individual tooth replacement with titanium implant and natural-looking crown',
          code: {
            '@type': 'MedicalCode',
            codeValue: 'D6010',
            codingSystem: 'ADA'
          },
          bodyLocation: 'Mouth',
          preparation: 'Consultation, X-rays, treatment planning',
          followup: 'Regular check-ups, oral hygiene maintenance',
          howPerformed: 'Surgical placement of titanium implant followed by crown attachment',
          possibleComplication: 'Infection, implant failure, nerve damage',
          expectedPrognosis: 'High success rate with proper care',
          availableService: {
            '@type': 'MedicalService',
            name: 'Single Tooth Implant Costa Rica',
            description: 'Premium single tooth replacement with natural results'
          }
        }} 
      />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={[
          { name: 'Home', url: '/' },
          { name: 'Procedures', url: '/procedures' },
          { name: 'Single Tooth Implant', url: '/procedures/single-tooth', current: true }
        ]} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Single Tooth Implant Costa Rica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Replace missing teeth with natural-looking, permanent dental implants. 
            Save 60% compared to US prices while enjoying luxury accommodations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">$1,850</div>
              <div className="text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300">60%</div>
              <div className="text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300">1-2 Hours</div>
              <div className="text-sm">Procedure Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Single Tooth Implant Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What is a Single Tooth Implant?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A single tooth implant is the most advanced and natural way to replace a missing tooth. 
                It consists of a titanium post that&apos;s surgically placed into your jawbone, acting as a 
                replacement root, topped with a custom-made crown that matches your natural teeth perfectly.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Unlike traditional bridges that require grinding down adjacent healthy teeth, single tooth 
                implants preserve your natural tooth structure and provide a permanent solution that looks, 
                feels, and functions just like your natural teeth.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-teal-900">
                  Benefits of Single Tooth Implants:
                </h3>
                <ul className="space-y-2 text-teal-800">
                  <li>• Natural appearance and feel</li>
                  <li>• Preserves bone structure</li>
                  <li>• No damage to adjacent teeth</li>
                  <li>• Permanent solution</li>
                  <li>• Easy maintenance</li>
                </ul>
              </div>
            </div>
            <div>
              <SEOOptimizedImage
                src="/images/dentalimages/dentalimplant1.webp"
                alt="Single tooth implant showing titanium post and natural-looking crown"
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
            Single Tooth Implant Cost Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-600">United States</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">$4,500+</div>
              <p className="text-gray-600 mb-4">Average cost per implant</p>
              <ul className="space-y-2 text-gray-700">
                <li>• High insurance deductibles</li>
                <li>• Additional consultation fees</li>
                <li>• Separate crown costs</li>
                <li>• Limited financing options</li>
                <li>• Long waiting times</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Costa Rica</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">$1,850</div>
              <p className="text-gray-600 mb-4">All-inclusive package</p>
              <ul className="space-y-2 text-gray-700">
                <li>• No hidden fees</li>
                <li>• Premium crown included</li>
                <li>• Luxury accommodations</li>
                <li>• Flexible financing</li>
                <li>Immediate treatment</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Total Savings: <span className="text-green-600">$2,650+</span>
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
            Single Tooth Implant Procedure: Step-by-Step
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Consultation & Planning</h3>
              <p className="text-gray-700">
                Comprehensive examination, X-rays, and 3D imaging to plan optimal 
                implant placement and design your custom crown.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Implant Placement</h3>
              <p className="text-gray-700">
                Titanium implant is surgically placed into your jawbone. The procedure 
                takes 1-2 hours under local anesthesia.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Healing Period</h3>
              <p className="text-gray-700">
                Temporary crown is placed immediately. Implant fuses with jawbone 
                over 3-4 months for permanent stability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Final Crown</h3>
              <p className="text-gray-700">
                Custom-designed permanent crown is attached to the implant, 
                completing your natural-looking smile restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Recovery Timeline for Single Tooth Implants
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Day 1-3: Immediate Recovery</h3>
                  <p className="text-gray-700">
                    Mild discomfort and swelling are normal. You&apos;ll have a temporary crown and can eat 
                    soft foods. Follow post-operative care instructions carefully.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
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
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Month 1-3: Osseointegration</h3>
                  <p className="text-gray-700">
                    Implant fuses with your jawbone. You can eat most foods normally. 
                    Regular check-ups ensure proper healing.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Month 3-4: Final Restoration</h3>
                  <p className="text-gray-700">
                    Permanent crown is placed. Enjoy your new smile with full function 
                    and natural appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions About Single Tooth Implants
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How much does a single tooth implant cost in Costa Rica?
              </h3>
              <p className="text-gray-700">
                Single tooth implants in Costa Rica start at $1,850, which is 60% less than 
                the $4,500+ cost in the United States. This includes the complete procedure 
                and premium materials.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How long does a single tooth implant take?
              </h3>
              <p className="text-gray-700">
                The single tooth implant procedure takes 1-2 hours, with the implant placed 
                in one appointment. You&apos;ll receive a temporary crown immediately, with the 
                permanent crown placed after 3-4 months of healing.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Are single tooth implants permanent?
              </h3>
              <p className="text-gray-700">
                Yes, single tooth implants are designed to last a lifetime with proper care. 
                The titanium implant fuses with your jawbone, providing permanent stability 
                for your replacement tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Restore Your Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your single tooth implant in Costa Rica and save thousands while 
            enjoying a luxury dental vacation experience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors">
              View Before & After Photos
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
