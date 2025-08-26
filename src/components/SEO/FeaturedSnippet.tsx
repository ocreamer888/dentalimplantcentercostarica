'use client';

import { useState } from 'react';
import StructuredData from '@/components/SEO/StructuredData';

interface FeaturedSnippetProps {
  question: string;
  answer: string;
  type: 'paragraph' | 'list' | 'table' | 'steps';
  listItems?: string[];
  tableData?: Array<{ [key: string]: string }>;
  steps?: Array<{ step: string; description: string }>;
  className?: string;
}

export default function FeaturedSnippet({
  question,
  answer,
  type,
  listItems = [],
  tableData = [],
  steps = [],
  className = ''
}: FeaturedSnippetProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate appropriate schema based on type
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    };

    switch (type) {
      case 'list':
        return {
          ...baseSchema,
          acceptedAnswer: {
            ...baseSchema.acceptedAnswer,
            text: listItems.join('. ')
          }
        };
      case 'table':
        return {
          ...baseSchema,
          acceptedAnswer: {
            ...baseSchema.acceptedAnswer,
            text: tableData.map(row => Object.values(row).join(': ')).join('. ')
          }
        };
      case 'steps':
        return {
          ...baseSchema,
          acceptedAnswer: {
            ...baseSchema.acceptedAnswer,
            text: steps.map((step, index) => `${index + 1}. ${step.step}: ${step.description}`).join('. ')
          }
        };
      default:
        return baseSchema;
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'list':
        return (
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      
      case 'table':
        return (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  {Object.keys(tableData[0] || {}).map((header, index) => (
                    <th key={index} className="border border-gray-300 p-3 text-left font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex} className="border border-gray-300 p-3">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'steps':
        return (
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{step.step}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return <p className="text-gray-700 leading-relaxed">{answer}</p>;
    }
  };

  return (
    <>
      {/* Structured Data for Featured Snippet */}
      <StructuredData data={generateSchema()}/>
      
      <div className={`bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg ${className}`}>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            {question}
          </h3>
          <div className="text-blue-600 text-sm">
            Featured Answer
          </div>
        </div>
        
        <div className="mb-4">
          {renderContent()}
        </div>
        
        {/* Expandable content for longer answers */}
        {type === 'paragraph' && answer.length > 200 && (
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
            
            {isExpanded && (
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  {answer}
                </p>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-blue-200">
          <div className="flex items-center text-blue-600 text-sm">
            <span className="mr-2"></span>
            <span>This answer is optimized to appear in Google&apos;s featured snippet</span>
          </div>
        </div>
      </div>
    </>
  );
}

// Pre-built featured snippet configurations for common dental questions
export const dentalFeaturedSnippets = {
  cost: {
    question: 'How much do dental implants cost?',
    answer: 'Dental implants cost varies by procedure: Single tooth implants start at $1,850, All-on-4 implants cost $19,950, and All-on-6 implants cost $24,950 in Costa Rica. This represents 60-70% savings compared to US prices.',
    type: 'paragraph' as const
  },
  
  allOn4VsAllOn6: {
    question: 'What is the difference between All-on-4 and All-on-6 dental implants?',
    answer: 'All-on-4 uses 4 implants for cost-effective restoration, while All-on-6 uses 6 implants for maximum stability and support.',
    type: 'table' as const,
    tableData: [
      { Feature: 'Number of Implants', 'All-on-4': '4 implants', 'All-on-6': '6 implants' },
      { Feature: 'Cost', 'All-on-4': '$19,950', 'All-on-6': '$24,950' },
      { Feature: 'Stability', 'All-on-4': 'Good', 'All-on-6': 'Maximum' },
      { Feature: 'Best For', 'All-on-4': 'Cost-effective solution', 'All-on-6': 'Premium stability option' }
    ]
  },
  
  procedureSteps: {
    question: 'What are the steps for getting dental implants?',
    answer: 'The dental implant process involves consultation, implant placement, healing period, and final restoration.',
    type: 'steps' as const,
    steps: [
      { step: 'Consultation', description: 'Comprehensive examination and treatment planning' },
      { step: 'Implant Placement', description: 'Surgical placement of titanium implants' },
      { step: 'Healing Period', description: '3-6 months for osseointegration' },
      { step: 'Final Restoration', description: 'Attachment of permanent prosthetic teeth' }
    ]
  }
};
