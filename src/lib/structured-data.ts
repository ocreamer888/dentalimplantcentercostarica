import { WithContext, Organization, MedicalBusiness, MedicalProcedure, FAQPage, AggregateRating, Review, Service, BreadcrumbList } from 'schema-dts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dentalimplantcentercostarica.com';
const PHONE = '+1-702-595-3955';
const BUSINESS_NAME = 'Dental Implant Center Costa Rica';

/**
 * Organization Schema - Main business entity
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo/dental-implant-center-costa-rica-logo.svg`,
      width: '200',
      height: '60',
    },
    image: `${SITE_URL}/images/DentalImplantSocials.png`,
    description: 'Premier dental implant center offering All-on-4, All-on-6, and single tooth implants in Costa Rica with US-trained dentists',
    telephone: PHONE,
    email: 'info@dentalimplantcentercostarica.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San José',
      addressLocality: 'San José',
      addressRegion: 'San José',
      addressCountry: 'CR',
    },
    sameAs: [
      'https://www.facebook.com/dentalimplantcentercostarica',
      'https://www.instagram.com/dentalimplantcentercostarica',
      'https://www.linkedin.com/company/dentalimplantcentercostarica',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'Customer Service',
      areaServed: ['US', 'CA', 'CR'],
      availableLanguage: ['English', 'Spanish'],
    },
  };
}

/**
 * Medical Business Schema - Specialized medical practice
 */
export function getMedicalBusinessSchema(): WithContext<MedicalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}#medicalbusiness`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/DentalImplantSocials.png`,
    description: 'Specializing in All-on-4, All-on-6 dental implants and full mouth restorations with US-trained dentists in Costa Rica',
    telephone: PHONE,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San José',
      addressRegion: 'San José',
      addressCountry: 'CR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '9.9281',
      longitude: '-84.0907',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    // medicalSpecialty is not a valid property on MedicalBusiness in schema-dts
    // Using knowsAbout instead to indicate medical specialty
    knowsAbout: 'Dentistry',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'] as any,
    currenciesAccepted: 'USD',
  };
}

/**
 * All-On-4 Procedure Schema
 */
export function getAllOn4ProcedureSchema(): WithContext<MedicalProcedure> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'All-on-4 Dental Implants',
    alternateName: 'All-On-Four Dental Implants',
    description: 'Complete arch restoration using just 4 strategically placed titanium implants to support a full set of prosthetic teeth. This revolutionary technique provides a permanent solution for missing teeth with faster recovery times.',
    procedureType: { '@type': 'MedicalProcedureType', name: 'Surgical' } as any,
    bodyLocation: 'Mouth' as any,
    preparation: 'Comprehensive consultation, 3D imaging, CT scans, treatment planning, and pre-surgical evaluation',
    followup: 'Regular check-ups, professional cleanings, oral hygiene maintenance, and lifetime warranty coverage',
    howPerformed: 'Surgical placement of 4 titanium implants at strategic angles followed by immediate temporary teeth, with final zirconia prosthesis after healing',
    status: 'Accepted' as any,
  } as WithContext<MedicalProcedure>;
}

/**
 * All-On-6 Procedure Schema
 */
export function getAllOn6ProcedureSchema(): WithContext<MedicalProcedure> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'All-on-6 Dental Implants',
    alternateName: 'All-On-Six Dental Implants',
    description: 'Enhanced full arch restoration with 6 strategically placed implants for maximum stability and longevity. Ideal for patients requiring superior strength and support.',
    procedureType: { '@type': 'MedicalProcedureType', name: 'Surgical' } as any,
    bodyLocation: 'Mouth' as any,
    preparation: 'Comprehensive consultation, advanced 3D imaging, CT scans, treatment planning, and pre-surgical evaluation',
    followup: 'Regular maintenance visits, professional cleanings, oral hygiene instruction, and lifetime warranty',
    howPerformed: 'Surgical placement of 6 titanium implants for superior stability, followed by temporary prosthesis and final restoration',
    status: 'Accepted' as any,
  } as WithContext<MedicalProcedure>;
}

/**
 * Single Tooth Implant Procedure Schema
 */
export function getSingleToothImplantSchema(): WithContext<MedicalProcedure> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Single Tooth Dental Implant',
    description: 'Individual tooth replacement using a single titanium implant post and custom porcelain crown. Perfect solution for replacing one missing tooth.',
    procedureType: { '@type': 'MedicalProcedureType', name: 'Surgical' } as any,
    bodyLocation: 'Mouth' as any,
    preparation: 'Consultation, X-rays, treatment planning, and site evaluation',
    followup: 'Follow-up appointments, crown placement, and regular check-ups',
    howPerformed: 'Surgical placement of single titanium implant followed by healing period and custom crown attachment',
    status: 'Accepted' as any,
  } as WithContext<MedicalProcedure>;
}

/**
 * Service Schema for All-On-4
 */
export function getAllOn4ServiceSchema(): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/procedures/all-on-4#service`,
    name: 'All-on-4 Dental Implants Costa Rica',
    description: 'Premium All-on-4 treatment package including 4 titanium implants, full arch prosthesis, surgery, temporary and final zirconia prosthesis, with lifetime warranty',
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'All-on-4 Dental Implant Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'All-on-4 Dental Implants',
            description: 'Complete arch restoration with 4 implants',
          },
          price: '19950',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
  };
}

/**
 * FAQ Page Schema
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Aggregate Rating Schema
 */
export function getAggregateRatingSchema(
  ratingValue: number = 4.8,
  reviewCount: number = 127
): AggregateRating {
  return {
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    bestRating: '5',
    worstRating: '1',
    ratingCount: reviewCount,
    reviewCount: reviewCount,
  } as AggregateRating;
}

/**
 * Review Schema
 */
export function getReviewSchema(
  author: string,
  rating: number,
  reviewBody: string,
  datePublished: string
): Review {
  return {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody,
    datePublished,
  };
}

/**
 * Breadcrumb Schema
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Common FAQ for dental implants
 */
export const commonDentalImplantFAQs = [
  {
    question: 'How much do All-on-4 dental implants cost in Costa Rica?',
    answer: 'All-on-4 dental implants in Costa Rica cost $19,950, which is up to 70% less than the $50,000+ typically charged in the United States. Our all-inclusive package includes the surgery, implants, temporary and final prosthesis, accommodations, and lifetime warranty.',
  },
  {
    question: 'How long does the All-on-4 procedure take?',
    answer: 'The All-on-4 procedure typically takes 5-7 days in Costa Rica. This includes initial consultation, surgery, placement of temporary teeth, and follow-up appointments. You will receive temporary teeth on the same day as surgery, and final zirconia prosthesis after healing is complete.',
  },
  {
    question: 'Are the dentists in Costa Rica qualified?',
    answer: 'Yes, our dentists are US-trained and internationally certified specialists in dental implantology and oral surgery. They have extensive experience with All-on-4 and All-on-6 procedures, and maintain the highest standards of care using the latest technology.',
  },
  {
    question: 'What is included in the All-on-4 package price?',
    answer: 'Our all-inclusive package includes: 4 titanium implants, full arch prosthesis, pre-surgery consultation, surgery and placement, temporary prosthesis, final zirconia prosthesis, airport transfers, hotel accommodations, follow-up care, and lifetime warranty on implants.',
  },
  {
    question: 'Is traveling to Costa Rica for dental implants safe?',
    answer: 'Yes, Costa Rica is a safe and popular destination for dental tourism. Our facilities are modern and accredited, following international safety standards. We provide comprehensive support including airport transfers, accommodations, and 24/7 assistance throughout your stay.',
  },
  {
    question: 'What is the success rate of All-on-4 dental implants?',
    answer: 'All-on-4 dental implants have a success rate of over 95% when performed by experienced specialists. Our dentists use premium titanium implants and advanced surgical techniques to ensure optimal results. All implants come with a lifetime warranty.',
  },
];

/**
 * Helper function to render JSON-LD script tag
 */
export function renderJsonLd(schema: WithContext<any>) {
  return {
    __html: JSON.stringify(schema),
  };
}
