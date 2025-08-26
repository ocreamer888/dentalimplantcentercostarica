'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, unknown>;
  type: 'organization' | 'procedure' | 'faq' | 'review' | 'breadcrumb';
}

export default function StructuredData({ data }: Omit<StructuredDataProps, 'type'>) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Inject structured data into head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [data]);

  return null; // This component doesn't render anything
}

// Pre-built schemas for dental procedures
export const dentalProcedureSchemas = {
  allOn4: {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'All-on-4 Dental Implants',
    description: 'Complete arch restoration using just 4 strategically placed implants to support a full set of prosthetic teeth',
    code: {
      '@type': 'MedicalCode',
      codeValue: 'D6010',
      codingSystem: 'ADA'
    },
    bodyLocation: 'Mouth',
    preparation: 'Consultation, X-rays, treatment planning',
    followup: 'Regular check-ups, oral hygiene maintenance',
    howPerformed: 'Surgical placement of 4 implants followed by immediate temporary teeth',
    possibleComplication: 'Infection, implant failure, nerve damage',
    expectedPrognosis: 'High success rate with proper care',
    availableService: {
      '@type': 'MedicalService',
      name: 'All-on-4 Dental Implants Costa Rica',
      description: 'Premium All-on-4 treatment with luxury accommodations'
    }
  },
  
  allOn6: {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'All-on-6 Dental Implants',
    description: 'Enhanced stability with 6 implants supporting a full arch for maximum strength and longevity',
    code: {
      '@type': 'MedicalCode',
      codeValue: 'D6010',
      codingSystem: 'ADA'
    },
    bodyLocation: 'Mouth',
    preparation: 'Comprehensive consultation, 3D imaging, treatment planning',
    followup: 'Regular maintenance, professional cleanings',
    howPerformed: 'Surgical placement of 6 implants for superior stability',
    possibleComplication: 'Infection, implant failure, nerve damage',
    expectedPrognosis: 'Excellent long-term success rate',
    availableService: {
      '@type': 'MedicalService',
      name: 'All-on-6 Dental Implants Costa Rica',
      description: 'Premium All-on-6 treatment with enhanced stability'
    }
  }
};

// Organization schema for medical authority
export const medicalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Dental Implant Center Costa Rica',
  description: 'Premier dental implant center offering All-on-4, All-on-6, and single tooth implants in Costa Rica',
  url: 'https://dentalimplantcentercostarica.com',
  telephone: '+1-702-595-3955',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CR',
    addressLocality: 'San José',
    addressRegion: 'San José'
  },
  medicalSpecialty: ['Dental Implants', 'All-on-4', 'All-on-6', 'Oral Surgery', 'Dental Tourism'],
  priceRange: '$$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Financing', 'Bank Transfer'],
  availableService: [
    {
      '@type': 'MedicalService',
      name: 'All-on-4 Dental Implants',
      description: 'Complete arch restoration with 4 implants'
    },
    {
      '@type': 'MedicalService',
      name: 'All-on-6 Dental Implants',
      description: 'Enhanced stability with 6 implants'
    }
  ],
  areaServed: ['Worldwide'],
  sameAs: [
    'https://www.facebook.com/dentalimplantcentercostarica',
    'https://www.instagram.com/dentalimplantcentercostarica'
  ]
};
