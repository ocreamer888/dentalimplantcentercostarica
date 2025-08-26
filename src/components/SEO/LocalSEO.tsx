'use client';

import StructuredData from '@/components/SEO/StructuredData';

interface LocalBusinessData {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  email: string;
  website: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  services: string[];
  hours: string;
  priceRange: string;
}

interface LocalSEOProps {
  businessData: LocalBusinessData;
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
  className?: string;
}

export default function LocalSEO({ businessData, reviews = [], className = '' }: LocalSEOProps) {
  // Remove unused state and useEffect
  
  // Generate LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessData.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.street,
      addressLocality: businessData.address.city,
      addressRegion: businessData.address.state,
      postalCode: businessData.address.zipCode,
      addressCountry: businessData.address.country
    },
    telephone: businessData.phone,
    email: businessData.email,
    url: businessData.website,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessData.coordinates.latitude,
      longitude: businessData.coordinates.longitude
    },
    openingHours: businessData.hours,
    priceRange: businessData.priceRange,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Implant Services',
      itemListElement: businessData.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service
        }
      }))
    },
    ...(reviews.length > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
        reviewCount: reviews.length
      },
      review: reviews.map(review => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating
        },
        reviewBody: review.reviewBody,
        datePublished: review.datePublished
      }))
    })
  };

  return (
    <>
      {/* Structured Data for Local Business */}
      <StructuredData data={localBusinessSchema}/>
      
      <section id="local-seo-section" className={`py-16 bg-white ${className}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Business Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {businessData.name}
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">📍</span>
                  <div>
                    <strong>Address:</strong><br />
                    {businessData.address.street}<br />
                    {businessData.address.city}, {businessData.address.state} {businessData.address.zipCode}<br />
                    {businessData.address.country}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">📞</span>
                  <div>
                    <strong>Phone:</strong> {businessData.phone}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✉️</span>
                  <div>
                    <strong>Email:</strong> {businessData.email}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">🕐</span>
                  <div>
                    <strong>Hours:</strong> {businessData.hours}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">💰</span>
                  <div>
                    <strong>Price Range:</strong> {businessData.priceRange}
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Services Offered
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {businessData.services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map and Contact Form */}
            <div className="space-y-6">
              {/* Interactive Map Placeholder */}
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-gray-500 mb-2">🗺️</div>
                <p className="text-gray-600">
                  Interactive map showing clinic location in {businessData.address.city}, {businessData.address.state}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Coordinates: {businessData.coordinates.latitude}, {businessData.coordinates.longitude}
                </p>
              </div>

              {/* Quick Contact Form */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Get Directions & Contact Info
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    📍 Get Directions
                  </button>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    📞 Call Now
                  </button>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    ✉️ Send Email
                  </button>
                </div>
              </div>

              {/* Reviews Summary */}
              {reviews.length > 0 && (
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-900">
                    Patient Reviews
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}
                    </div>
                    <div className="flex justify-center text-yellow-400 mb-2">
                      {'★'.repeat(Math.round(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length))}
                    </div>
                    <p className="text-yellow-800">
                      Based on {reviews.length} reviews
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Pre-built local business data for Costa Rica clinic
export const costaRicaClinicData: LocalBusinessData = {
  name: 'Dental Implant Center Costa Rica',
  address: {
    street: 'San José, Costa Rica',
    city: 'San José',
    state: 'San José',
    zipCode: '10101',
    country: 'CR'
  },
  phone: '+1-702-595-3955',
  email: 'contact@dentalimplantcentercostarica.com',
  website: 'https://dentalimplantcentercostarica.com',
  coordinates: {
    latitude: 9.9281,
    longitude: -84.0907
  },
  services: [
    'All-on-4 Dental Implants',
    'All-on-6 Dental Implants',
    'Single Tooth Implants',
    'Same-Day Dental Implants',
    'Full Mouth Reconstruction',
    'Dental Tourism Packages'
  ],
  hours: 'Monday-Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM',
  priceRange: '$$$'
};
