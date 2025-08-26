'use client';

import { useState } from 'react';
import StructuredData from '@/components/SEO/StructuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  className?: string;
}

export default function FAQSection({ title, faqs, className = '' }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Generate FAQ schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      {/* Structured Data for FAQ */}
      <StructuredData data={faqSchema} />
      
      <section className={`py-16 bg-white ${className}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openItems.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-gray-500 text-2xl">
                    {openItems.has(index) ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 pb-6 transition-all duration-300 ${
                    openItems.has(index) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Pre-built FAQ configurations for common dental topics
export const dentalFAQs = {
  allOn4: [
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
  ],
  
  cost: [
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
    },
    {
      question: 'How much can I save compared to US prices?',
      answer: 'Patients typically save $30,000+ on All-on-4 implants, $40,000+ on All-on-6, and $2,650+ on single tooth implants. The exact savings depend on your specific treatment needs.'
    }
  ],
  
  travel: [
    {
      question: 'How do I travel to Costa Rica for dental implants?',
      answer: 'We handle all travel arrangements including flight recommendations, airport transfers, and accommodation bookings. Most major US cities have direct flights to San José International Airport.'
    },
    {
      question: 'How long is the flight to Costa Rica?',
      answer: 'Flight times vary by departure city: Miami (2.5 hours), Los Angeles (6 hours), New York (5 hours), Houston (3.5 hours). We recommend direct flights for convenience.'
    },
    {
      question: 'What about accommodation and transportation?',
      answer: 'Luxury accommodations and airport transfers are included in all packages. We also provide daily transportation to and from the clinic during your treatment.'
    },
    {
      question: 'Do I need a visa to visit Costa Rica?',
      answer: 'US citizens do not need a visa for stays up to 90 days. Just bring a valid passport. We can help with any travel documentation requirements.'
    }
  ]
};
