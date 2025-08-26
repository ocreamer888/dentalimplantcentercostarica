'use client';

import { useState } from 'react';
import SEOOptimizedImage from '@/components/SEO/SEOOptimizedImage';

interface ComparisonFeature {
  feature: string;
  allOn4: string;
  allOn6: string;
  singleTooth: string;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: 'Number of Implants',
    allOn4: '4 implants',
    allOn6: '6 implants',
    singleTooth: '1 implant'
  },
  {
    feature: 'Best For',
    allOn4: 'Complete arch restoration',
    allOn6: 'Maximum stability',
    singleTooth: 'Single tooth replacement'
  },
  {
    feature: 'Procedure Time',
    allOn4: '2-3 hours per arch',
    allOn6: '3-4 hours per arch',
    singleTooth: '1-2 hours'
  },
  {
    feature: 'Recovery Time',
    allOn4: '3-6 months',
    allOn6: '3-6 months',
    singleTooth: '2-4 months'
  },
  {
    feature: 'Cost Costa Rica',
    allOn4: '$19,950',
    allOn6: '$24,950',
    singleTooth: '$1,850'
  },
  {
    feature: 'Cost USA',
    allOn4: '$50,000+',
    allOn6: '$65,000+',
    singleTooth: '$4,500'
  },
  {
    feature: 'Savings',
    allOn4: '$30,050+',
    allOn6: '$40,050+',
    singleTooth: '$2,650'
  },
  {
    feature: 'Success Rate',
    allOn4: '98%',
    allOn6: '98%',
    singleTooth: '98%'
  },
  {
    feature: 'Bone Requirements',
    allOn4: 'Moderate',
    allOn6: 'Good',
    singleTooth: 'Minimal'
  },
  {
    feature: 'Maintenance',
    allOn4: 'Low',
    allOn6: 'Low',
    singleTooth: 'Very Low'
  }
];

export default function ProcedureComparison() {
  const [selectedComparison, setSelectedComparison] = useState<string>('all-on-4-vs-all-on-6');

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Dental Implant Procedure Comparison
      </h2>

      {/* Comparison Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        <button
          onClick={() => setSelectedComparison('all-on-4-vs-all-on-6')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            selectedComparison === 'all-on-4-vs-all-on-6'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All-on-4 vs All-on-6
        </button>
        <button
          onClick={() => setSelectedComparison('all-procedures')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            selectedComparison === 'all-procedures'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Procedures
        </button>
      </div>

      {/* All-on-4 vs All-on-6 Comparison */}
      {selectedComparison === 'all-on-4-vs-all-on-6' && (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <SEOOptimizedImage
                src="/images/dentalimages/allonsix1.webp"
                alt="All-on-4 dental implants showing four implants"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-blue-600">All-on-4 Implants</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$19,950</div>
              <p className="text-gray-600 mb-4">Cost-effective solution</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• 4 strategically placed implants</li>
                <li>• Ideal for moderate bone loss</li>
                <li>• Faster procedure time</li>
                <li>• Lower cost option</li>
                <li>• Good stability</li>
              </ul>
            </div>
            <div className="text-center">
              <SEOOptimizedImage
                src="/images/dentalimages/dentalimplant4.webp"
                alt="All-on-6 dental implants showing six implants"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-indigo-600">All-on-6 Implants</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$24,950</div>
              <p className="text-gray-600 mb-4">Premium stability option</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• 6 strategically placed implants</li>
                <li>• Maximum stability and support</li>
                <li>• Better long-term durability</li>
                <li>• Premium materials included</li>
                <li>• Superior chewing power</li>
              </ul>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              Expert Recommendation
            </h3>
            <p className="text-blue-800">
              <strong>Choose All-on-4</strong> if you want a cost-effective solution with good stability. 
              <strong>Choose All-on-6</strong> if you want maximum stability and are willing to invest 
              in the premium option for long-term results. Both procedures have excellent success rates 
              and will give you a beautiful, functional smile.
            </p>
          </div>
        </div>
      )}

      {/* All Procedures Comparison Table */}
      {selectedComparison === 'all-procedures' && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left font-semibold">Feature</th>
                <th className="border border-gray-300 p-4 text-center font-semibold">Single Tooth</th>
                <th className="border border-gray-300 p-4 text-center font-semibold">All-on-4</th>
                <th className="border border-gray-300 p-4 text-center font-semibold">All-on-6</th>
                <th className="border border-gray-300 p-4 text-center font-semibold">Full Mouth</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 p-4 font-medium">{feature.feature}</td>
                  <td className="border border-gray-300 p-4 text-center">{feature.singleTooth}</td>
                  <td className="border border-gray-300 p-4 text-center">{feature.allOn4}</td>
                  <td className="border border-gray-300 p-4 text-center">{feature.allOn6}</td>
                  <td className="border border-gray-300 p-4 text-center">
                    {feature.feature === 'Number of Implants' ? '8+ implants' :
                     feature.feature === 'Best For' ? 'Complete restoration' :
                     feature.feature === 'Procedure Time' ? '6-8 hours' :
                     feature.feature === 'Recovery Time' ? '3-6 months' :
                     feature.feature === 'Cost Costa Rica' ? '$35,900' :
                     feature.feature === 'Cost USA' ? '$90,000+' :
                     feature.feature === 'Savings' ? '$54,100+' :
                     feature.feature === 'Success Rate' ? '98%' :
                     feature.feature === 'Bone Requirements' ? 'Good' :
                     'Low'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Need Help Choosing the Right Procedure?
        </h3>
        <p className="text-gray-600 mb-6">
          Our expert team will help you select the perfect dental implant solution for your needs.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
            Get Free Consultation
          </button>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
            View Before & After Photos
          </button>
        </div>
      </div>
    </div>
  );
}
