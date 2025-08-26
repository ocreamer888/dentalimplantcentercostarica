'use client';

import { useState } from 'react';

interface Procedure {
  id: string;
  name: string;
  costaRicaCost: number;
  usaCost: number;
  description: string;
}

const procedures: Procedure[] = [
  {
    id: 'single-tooth',
    name: 'Single Tooth Implant',
    costaRicaCost: 1850,
    usaCost: 4500,
    description: 'Individual tooth replacement'
  },
  {
    id: 'all-on-4',
    name: 'All-on-4 Dental Implants',
    costaRicaCost: 19950,
    usaCost: 50000,
    description: 'Complete arch restoration with 4 implants'
  },
  {
    id: 'all-on-6',
    name: 'All-on-6 Dental Implants',
    costaRicaCost: 24950,
    usaCost: 65000,
    description: 'Premium stability with 6 implants'
  },
  {
    id: 'full-mouth',
    name: 'Full Mouth Reconstruction',
    costaRicaCost: 35900,
    usaCost: 90000,
    description: 'Complete oral rehabilitation'
  }
];

export default function CostCalculator() {
  const [selectedProcedure, setSelectedProcedure] = useState<string>('all-on-4');
  const [patientCount, setPatientCount] = useState<number>(1);
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  const selectedProc = procedures.find(p => p.id === selectedProcedure);
  const costaRicaTotal = selectedProc ? selectedProc.costaRicaCost * patientCount : 0;
  const usaTotal = selectedProc ? selectedProc.usaCost * patientCount : 0;
  const savings = usaTotal - costaRicaTotal;
  const savingsPercentage = usaTotal > 0 ? Math.round((savings / usaTotal) * 100) : 0;

  const additionalServiceCosts = {
    'bone-grafting': 800,
    'sinus-lift': 1200,
    'extractions': 300,
    'sedation': 500,
    'accommodations': 0 // Included in package
  };

  const additionalTotal = additionalServices.reduce((sum, service) => {
    return sum + (additionalServiceCosts[service as keyof typeof additionalServiceCosts] || 0);
  }, 0);

  const finalCostaRicaTotal = costaRicaTotal + additionalTotal;

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Dental Implant Cost Calculator
      </h2>
      
      {/* Procedure Selection */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-4 text-gray-900">
          Select Your Procedure
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {procedures.map((procedure) => (
            <div
              key={procedure.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedProcedure === procedure.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedProcedure(procedure.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{procedure.name}</h3>
                  <p className="text-sm text-gray-600">{procedure.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">
                    ${procedure.costaRicaCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    ${procedure.usaCost.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Count */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-4 text-gray-900">
          Number of Patients
        </label>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setPatientCount(Math.max(1, patientCount - 1))}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
          >
            -
          </button>
          <span className="text-2xl font-bold text-gray-900 w-16 text-center">
            {patientCount}
          </span>
          <button
            onClick={() => setPatientCount(patientCount + 1)}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-4 text-gray-900">
          Additional Services (Optional)
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(additionalServiceCosts).map(([service, cost]) => (
            <label key={service} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={additionalServices.includes(service)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAdditionalServices([...additionalServices, service]);
                  } else {
                    setAdditionalServices(additionalServices.filter(s => s !== service));
                  }
                }}
                className="w-5 h-5 text-blue-600"
              />
              <span className="text-gray-700 capitalize">
                {service.replace('-', ' ')} {cost > 0 && `(+$${cost})`}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Cost Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Base Procedure Cost:</span>
            <span>${costaRicaTotal.toLocaleString()}</span>
          </div>
          {additionalTotal > 0 && (
            <div className="flex justify-between">
              <span>Additional Services:</span>
              <span>${additionalTotal.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Accommodations & Transfers:</span>
            <span className="text-green-600">Included</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Costa Rica Cost:</span>
            <span className="text-green-600">${finalCostaRicaTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Savings Comparison */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-xl font-semibold mb-2 text-red-700">US Treatment Cost</h3>
          <div className="text-3xl font-bold text-red-600">
            ${usaTotal.toLocaleString()}
          </div>
          <p className="text-red-600">Per patient</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Costa Rica Total</h3>
          <div className="text-3xl font-bold text-green-600">
            ${finalCostaRicaTotal.toLocaleString()}
          </div>
          <p className="text-green-600">All-inclusive package</p>
        </div>
      </div>

      {/* Total Savings */}
      <div className="bg-blue-50 p-6 rounded-lg text-center mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">
          Total Savings: ${savings.toLocaleString()}
        </h3>
        <p className="text-blue-700 text-lg">
          That&apos;s a {savingsPercentage}% savings while enjoying luxury accommodations in Costa Rica!
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
          Get Free Consultation
        </button>
        <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
          Download Price Guide
        </button>
        <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
          Compare Procedures
        </button>
      </div>

      {/* Trust Signals */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-2">5,000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}