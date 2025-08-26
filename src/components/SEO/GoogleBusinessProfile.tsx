'use client';

import { useState } from 'react';
import StructuredData from '@/components/SEO/StructuredData';

interface BusinessProfile {
  name: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  services: string[];
  categories: string[];
  description: string;
  photos: string[];
}

interface GoogleBusinessProfileProps {
  businessProfile: BusinessProfile;
  className?: string;
}

export default function GoogleBusinessProfile({ 
  businessProfile, 
  className = '' 
}: GoogleBusinessProfileProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'photos' | 'reviews' | 'posts'>('info');

  // Generate LocalBusiness schema for Google Business Profile
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessProfile.name,
    description: businessProfile.description,
    url: businessProfile.website,
    telephone: businessProfile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San José',
      addressRegion: 'San José',
      addressCountry: 'CR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9281,
      longitude: -84.0907
    },
    openingHours: businessProfile.hours,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Implant Services',
      itemListElement: businessProfile.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service
        }
      }))
    },
    sameAs: [
      'https://www.facebook.com/dentalimplantcentercostarica',
      'https://www.instagram.com/dentalimplantcentercostarica'
    ]
  };

  return (
    <>
      {/* Structured Data for Local Business */}
      <StructuredData data={localBusinessSchema}/>
      
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">
            {businessProfile.name}
          </h2>
          <p className="text-blue-100">
            Optimized for Google Business Profile & Local Search
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'info', label: 'Business Info', icon: '🏢' },
              { id: 'photos', label: 'Photos', icon: '📸' },
              { id: 'reviews', label: 'Reviews', icon: '⭐' },
              { id: 'posts', label: 'Posts', icon: '📝' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'info' | 'photos' | 'reviews' | 'posts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Business Information Tab */}
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Essential Business Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={businessProfile.name}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={businessProfile.phone}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        value={businessProfile.website}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <textarea
                        value={businessProfile.address}
                        readOnly
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hours of Operation
                      </label>
                      <input
                        type="text"
                        value={businessProfile.hours}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Business Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {businessProfile.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Services Offered
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {businessProfile.services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Photos Tab */}
          {activeTab === 'photos' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Business Photos
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {businessProfile.photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">📸</span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-sm text-gray-600">
                        Photo {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Pro Tip:</strong> Upload high-quality photos of your clinic, team, and before/after results 
                  to improve your Google Business Profile ranking and attract more patients.
                </p>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Review Management
              </h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                  Review Generation Strategy
                </h4>
                <div className="space-y-3 text-yellow-700">
                  <div className="flex items-start">
                    <span className="mr-2">1.</span>
                    <div>
                      <strong>Post-Treatment Follow-up:</strong> Send review requests 1 week after treatment
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">2.</span>
                    <div>
                      <strong>Multiple Platforms:</strong> Encourage reviews on Google, Yelp, and Healthgrades
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">3.</span>
                    <div>
                      <strong>Response Protocol:</strong> Respond to all reviews within 24 hours
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">4.</span>
                    <div>
                      <strong>Review Monitoring:</strong> Track review scores and sentiment weekly
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Posts Tab */}
          {activeTab === 'posts' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Google Business Profile Posts
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Weekly Posting Schedule
                  </h4>
                  <div className="space-y-2 text-green-700">
                    <div><strong>Monday:</strong> Educational content about dental implants</div>
                    <div><strong>Wednesday:</strong> Before/after patient showcases</div>
                    <div><strong>Friday:</strong> Special offers and promotions</div>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    Post Content Ideas
                  </h4>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Patient success stories</li>
                    <li>• Dental implant education</li>
                    <li>• Costa Rica travel tips</li>
                    <li>• Special pricing offers</li>
                    <li>• Team member spotlights</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Pre-built business profile data for Costa Rica clinic
export const costaRicaBusinessProfile: BusinessProfile = {
  name: 'Dental Implant Center Costa Rica',
  address: 'San José, Costa Rica - Premier dental tourism destination',
  phone: '+1-702-595-3955',
  website: 'https://dentalimplantcentercostarica.com',
  hours: 'Monday-Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM',
  services: [
    'All-on-4 Dental Implants',
    'All-on-6 Dental Implants',
    'Single Tooth Implants',
    'Same-Day Dental Implants',
    'Full Mouth Reconstruction',
    'Dental Tourism Packages',
    'Luxury Accommodations',
    'Airport Transfers'
  ],
  categories: [
    'Dental Implant Center',
    'Dental Tourism',
    'Medical Tourism',
    'Dental Surgery',
    'Cosmetic Dentistry'
  ],
  description: 'Premier dental implant center in Costa Rica offering premium dental care at 60-70% savings compared to US prices. All-inclusive packages with luxury accommodations.',
  photos: [
    'Clinic Exterior',
    'Treatment Room',
    'Dental Team',
    'Before/After Results',
    'Luxury Accommodations',
    'Costa Rica Location'
  ]
};
