import type { Metadata } from 'next';

/**
 * Required Environment Variables for Dental Implant Center Costa Rica Metadata Utility
 * 
 * Add these to your .env.local file:
 * 
 * # Site Configuration (Required)
 * NEXT_PUBLIC_SITE_URL=https://dentalimplantcentercostarica.com
 * 
 * # Search Engine Verification Codes (Optional but Recommended)
 * GOOGLE_VERIFICATION_CODE=your_google_verification_code
 * YANDEX_VERIFICATION_CODE=your_yandex_verification_code
 * YAHOO_VERIFICATION_CODE=your_yahoo_verification_code
 * BING_VERIFICATION_CODE=your_bing_verification_code
 * 
 * # Social Media Integration (Optional)
 * FACEBOOK_APP_ID=your_facebook_app_id
 * FACEBOOK_VERIFICATION_CODE=your_facebook_domain_verification_code
 * TWITTER_HANDLE=@dentalimplantcentercostarica
 * TWITTER_CREATOR_ID=your_twitter_creator_id
 * TWITTER_SITE_ID=your_twitter_site_id
 * 
 * # Analytics & Tracking (Optional)
 * GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
 * FACEBOOK_PIXEL_ID=your_facebook_pixel_id
 * 
 * Example .env.local file:
 * NEXT_PUBLIC_SITE_URL=https://dentalimplantcentercostarica.com
 * GOOGLE_VERIFICATION_CODE=abc123def456ghi789
 * FACEBOOK_APP_ID=123456789012345
 * TWITTER_HANDLE=@dentalimplantcentercostarica
 */

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  canonical?: string;
  structuredData?: Record<string, string>;
  noindex?: boolean;
  nofollow?: boolean;
  alternateLanguages?: Record<string, string>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqData?: Array<{ question: string; answer: string }>;
  lastModified?: string;
  publishedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

// Environment Variables Configuration
const ENV_VARS = {
  // Required
  SITE_URL: 'NEXT_PUBLIC_SITE_URL',
  
  // Search Engine Verification (Optional)
  GOOGLE_VERIFICATION: 'GOOGLE_VERIFICATION_CODE',
  YANDEX_VERIFICATION: 'YANDEX_VERIFICATION_CODE', 
  YAHOO_VERIFICATION: 'YAHOO_VERIFICATION_CODE',
  BING_VERIFICATION: 'BING_VERIFICATION_CODE',
  
  // Social Media (Optional)
  FACEBOOK_APP_ID: 'FACEBOOK_APP_ID',
  FACEBOOK_VERIFICATION: 'FACEBOOK_VERIFICATION_CODE',
  TWITTER_HANDLE: 'TWITTER_HANDLE',
  TWITTER_CREATOR_ID: 'TWITTER_CREATOR_ID',  
  TWITTER_SITE_ID: 'TWITTER_SITE_ID',
  
  // Analytics (Optional)
  GOOGLE_ANALYTICS: 'GOOGLE_ANALYTICS_ID',
  FACEBOOK_PIXEL: 'FACEBOOK_PIXEL_ID'
} as const;

// Utility function to validate required environment variables
function validateEnvironment(): void {
  const siteUrl = process.env[ENV_VARS.SITE_URL];
  
  if (!siteUrl) {
    console.error(`❌ Missing required environment variable: ${ENV_VARS.SITE_URL}`);
    console.log('Please add the following to your .env.local file:');
    console.log(`${ENV_VARS.SITE_URL}=https://dentalimplantcentercostarica.com`);
  }
  
  // Warn about missing optional but recommended variables
  const recommendedVars = [
    ENV_VARS.GOOGLE_VERIFICATION,
    ENV_VARS.FACEBOOK_APP_ID,
    ENV_VARS.TWITTER_HANDLE
  ];
  
  const missingRecommended = recommendedVars.filter(varName => !process.env[varName]);
  
  if (missingRecommended.length > 0) {
    console.warn('⚠️  Missing recommended environment variables for better SEO:');
    missingRecommended.forEach(varName => console.warn(`  - ${varName}`));
  }
}

// Validate environment on module load
if (typeof window === 'undefined') {
  validateEnvironment();
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Utility function to format phone number
function formatPhoneNumber(phone: string): string {
  // Remove non-digit characters and validate
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }
  return phone; // Return original if can't format
}

// Utility function to safely get environment variables with validation
function getEnvVar(key: string, fallback: string = ''): string {
  const value = process.env[key];
  
  if (!value && !fallback) {
    console.warn(`⚠️  Environment variable ${key} is not set and no fallback provided`);
  }
  
  return value || fallback;
}

// Get all environment variables with proper validation
function getEnvironmentConfig() {
  return {
    siteUrl: getEnvVar(ENV_VARS.SITE_URL, 'https://dentalimplantcentercostarica.com'),
    googleVerification: getEnvVar(ENV_VARS.GOOGLE_VERIFICATION),
    yandexVerification: getEnvVar(ENV_VARS.YANDEX_VERIFICATION),
    yahooVerification: getEnvVar(ENV_VARS.YAHOO_VERIFICATION),
    bingVerification: getEnvVar(ENV_VARS.BING_VERIFICATION),
    facebookAppId: getEnvVar(ENV_VARS.FACEBOOK_APP_ID),
    facebookVerification: getEnvVar(ENV_VARS.FACEBOOK_VERIFICATION),
    twitterHandle: getEnvVar(ENV_VARS.TWITTER_HANDLE, '@dentalimplantcentercostarica'),
    twitterCreatorId: getEnvVar(ENV_VARS.TWITTER_CREATOR_ID),
    twitterSiteId: getEnvVar(ENV_VARS.TWITTER_SITE_ID),
    googleAnalytics: getEnvVar(ENV_VARS.GOOGLE_ANALYTICS),
    facebookPixel: getEnvVar(ENV_VARS.FACEBOOK_PIXEL)
  };
}

export function generateMetadata({
  title,
  description,
  image = '/DentalImplantSocials.png',
  url,
  type = 'website',
  keywords,
  canonical,
  structuredData,
  noindex = false,
  nofollow = false,
  alternateLanguages,
  breadcrumbs,
  faqData,
  lastModified,
  publishedTime,
  author,
  category,
  tags
}: GenerateMetadataProps): Metadata {
  const env = getEnvironmentConfig();
  const siteUrl = env.siteUrl;
  
  // Validate site URL
  if (!isValidUrl(siteUrl)) {
    console.warn('Invalid NEXT_PUBLIC_SITE_URL provided, using default');
  }
  
  // Dynamic title optimization with better fallback
  const fullTitle = title ? `${title} | Dental Implant Center Costa Rica` : 'Dental Implant Center Costa Rica: Premium Dental Care at Affordable Prices';
  
  // Enhanced description with CTAs and better keyword integration
  const fullDescription = description || 'Get premium dental implants in Costa Rica at up to 70% savings. All-inclusive packages with verified dentists, luxury accommodations, and comprehensive care.';

  // Enhanced keywords with long-tail variations and semantic search optimization
  const defaultKeywords: string[] = [
    'dental implants costa rica',
    'all on four costa rica',
    'all on six costa rica',
    'zirconia dental implants',
    'dental implant cost',
    'dental tourism costa rica',
    'dental implants abroad',
    'affordable dental implants',
    'dental implant surgery',
    'dental implant procedure',
    'dental implant treatment',
    'dental implant consultation',
    'dental implant specialist',
    'dental implant dentist',
    'dental implant clinic',
    'dental implant center',
    'dental implant packages',
    'dental implant all inclusive',
    'dental implant recovery',
    'dental implant aftercare'
  ];

  // TypeScript-safe keyword combination
  let finalKeywords: string[];
  if (keywords && keywords.length > 0) {
    finalKeywords = [...keywords, ...defaultKeywords];
  } else {
    finalKeywords = defaultKeywords;
  }

  // Add tags to keywords if provided
  if (tags && tags.length > 0) {
    finalKeywords = [...finalKeywords, ...tags];
  }

  // Enhanced image URL handling with validation and optimization parameters
  let absoluteImageUrl = image;
  if (!/^https?:\/\//i.test(image)) {
    const imagePath = image.startsWith('/') ? image : `/${image}`;
    absoluteImageUrl = `${siteUrl}${imagePath}`;
  }

  // Validate constructed image URL
  if (!isValidUrl(absoluteImageUrl)) {
    console.warn('Invalid image URL constructed, using fallback');
    absoluteImageUrl = `${siteUrl}/DentalImplantSocials.png`;
  }

  // Add image optimization parameters for better performance
  const optimizedImageUrl = `${absoluteImageUrl}?w=1200&h=630&q=85&fit=crop`;

  // Build canonical URL with validation
  let canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  if (!isValidUrl(canonicalUrl)) {
    console.warn('Invalid canonical URL, using site URL');
    canonicalUrl = siteUrl;
  }

  // Generate enhanced structured data
  const enhancedStructuredData = generateEnhancedStructuredData({
    title: fullTitle,
    description: fullDescription,
    url: url || siteUrl,
    image: optimizedImageUrl,
    breadcrumbs,
    faqData,
    lastModified,
    publishedTime,
    author,
    category,
    type
  });

  // Get environment variables with validation
  const {
    googleVerification,
    yandexVerification, 
    yahooVerification,
    bingVerification,
    facebookVerification,
    facebookAppId,
    twitterCreatorId,
    twitterSiteId,
    twitterHandle
  } = env;

  // Enhanced metadata object with comprehensive SEO features
  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: finalKeywords,
    authors: [{ name: author || 'Dental Implant Center Costa Rica Team' }],
    creator: 'Dental Implant Center Costa Rica',
    publisher: 'Dental Implant Center Costa Rica',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      ...(alternateLanguages && { languages: alternateLanguages }),
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      ...(googleVerification && { google: googleVerification }),
      ...(yandexVerification && { yandex: yandexVerification }),
      ...(yahooVerification && { yahoo: yahooVerification }),
      other: {
        ...(bingVerification && { 'msvalidate.01': bingVerification }),
        ...(facebookVerification && { 'facebook-domain-verification': facebookVerification }),
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: url || siteUrl,
      siteName: 'Dental Implant Center Costa Rica',
      images: [
        {
          url: optimizedImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: 'image/png',
          secureUrl: optimizedImageUrl,
        },
      ],
      locale: 'en_US',
      type,
      countryName: 'United States',
      emails: ['contact@dentalimplantcentercostarica.com'],
      phoneNumbers: [formatPhoneNumber('+1 (702) 595-3955')],
      faxNumbers: [],
      ttl: 86400,
      ...(publishedTime && { publishedTime }),
      ...(lastModified && { modifiedTime: lastModified }),
      ...(author && { authors: [author] }),
      ...(category && { section: category }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [optimizedImageUrl],
      creator: twitterHandle,
      site: twitterHandle,
      ...(twitterCreatorId && { creatorId: twitterCreatorId }),
      ...(twitterSiteId && { siteId: twitterSiteId }),
    },
    other: {
      // Only include Facebook App ID if provided
      ...(facebookAppId && { 'fb:app_id': facebookAppId }),
      
      // App configuration
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#2563eb',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Dental Implant Center Costa Rica',
      'application-name': 'Dental Implant Center Costa Rica',
      'msapplication-config': '/browserconfig.xml',
      'mobile-web-app-capable': 'yes',
      'viewport': 'width=device-width, initial-scale=1, maximum-scale=5',
      'X-UA-Compatible': 'IE=edge',
      'referrer': 'origin-when-cross-origin',
      'color-scheme': 'light dark',
      'format-detection': 'telephone=no,date=no,address=no,email=no',
      'HandheldFriendly': 'true',
      'MobileOptimized': '320',
      'cleartype': 'on',
      'imagetoolbar': 'no',
      
      // Only include verification codes if provided
      ...(googleVerification && { 'google-site-verification': googleVerification }),
      ...(yandexVerification && { 'yandex-verification': yandexVerification }),
      ...(bingVerification && { 'msvalidate.01': bingVerification }),
      
      // Structured data
      ...enhancedStructuredData,
    },
  };

  // Add custom structured data if provided
  if (structuredData) {
    try {
      metadata.other = {
        ...metadata.other,
        ...structuredData,
      };
    } catch (error) {
      console.error('Error adding custom structured data:', error);
    }
  }

  return metadata;
}

// Enhanced structured data generator with error handling and environment validation
function generateEnhancedStructuredData({
  title,
  description,
  url,
  image,
  breadcrumbs,
  faqData,
  lastModified,
  publishedTime,
  author,
  category,
  type
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqData?: Array<{ question: string; answer: string }>;
  lastModified?: string;
  publishedTime?: string;
  author?: string;
  category?: string;
  type?: string;
}) {
  const structuredData: Record<string, string> = {};
  const env = getEnvironmentConfig();

  try {
    // BreadcrumbList schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredData['breadcrumb-list'] = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: isValidUrl(crumb.url) ? crumb.url : `${getEnvVar('NEXT_PUBLIC_SITE_URL', 'https://dentalimplantcentercostarica.com')}${crumb.url}`
        }))
      });
    }

    // FAQPage schema
    if (faqData && faqData.length > 0) {
      structuredData['faq-page'] = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      });
    }

    // Article schema for blog posts
    if (type === 'article') {
      structuredData['article'] = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        author: {
          '@type': 'Person',
          name: author || 'Dental Implant Center Costa Rica Team'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dental Implant Center Costa Rica',
          logo: {
            '@type': 'ImageObject',
            url: `${env.siteUrl}/DentalImplantSocials.png`
          }
        },
        ...(publishedTime && { datePublished: publishedTime }),
        ...(lastModified && { dateModified: lastModified }),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        },
        ...(category && { articleSection: category })
      });
    }

    // WebPage schema for all pages
    structuredData['webpage'] = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      url: url,
      ...(lastModified && { dateModified: lastModified }),
      ...(publishedTime && { datePublished: publishedTime }),
      publisher: {
        '@type': 'Organization',
        name: 'Dental Implant Center Costa Rica',
        url: getEnvVar('NEXT_PUBLIC_SITE_URL', 'https://dentalimplantcentercostarica.com')
      }
    });
  } catch (error) {
    console.error('Error generating structured data:', error);
  }

  return structuredData;
}

// Predefined metadata for common pages with enhanced structured data
export const metadataConfig = {
  home: {
    title: 'Dental Implant Center Costa Rica: Premium Dental Care at Affordable Prices',
    description: 'Get premium dental implants in Costa Rica at up to 70% savings. All-inclusive packages with verified dentists, luxury accommodations, and comprehensive care.',
    keywords: ['dental implants costa rica', 'all on four costa rica', 'all on six costa rica', 'zirconia dental implants', 'dental implant cost', 'dental tourism costa rica', 'dental implants abroad', 'affordable dental implants'],
    image: '/DentalImplantSocials.png',
    canonical: '/',
    breadcrumbs: [
      { name: 'Home', url: '/' }
    ],
    faqData: [
      {
        question: 'What is Dental Implant Center Costa Rica?',
        answer: 'Dental Implant Center Costa Rica is a premier dental tourism platform that connects patients with verified dental professionals in Costa Rica, offering all-inclusive packages with luxury accommodations and comprehensive care.'
      },
      {
        question: 'How does Dental Implant Center Costa Rica ensure quality care?',
        answer: 'All dental professionals on our platform undergo rigorous verification processes including license validation, background checks, and peer reviews to ensure the highest quality of care.'
      },
      {
        question: 'What payment methods does Dental Implant Center Costa Rica accept?',
        answer: 'We accept cash payments, credit cards, and traditional bank transfers, providing secure and transparent payment processing for all dental implant procedures.'
      }
    ],
    structuredData: {
      'organization': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization',
        name: 'Dental Implant Center Costa Rica',
        description: 'Premier dental tourism platform connecting patients with verified dental professionals in Costa Rica',
        url: getEnvironmentConfig().siteUrl,
        logo: `${getEnvironmentConfig().siteUrl}/DentalImplantSocials.png`,
        medicalSpecialty: ['Dental Tourism', 'Dental Implants', 'All on Four', 'All on Six'],
        availableService: [
          {
            '@type': 'MedicalService',
            name: 'Dental Implant Procedures',
            description: 'Premium dental implant treatments in Costa Rica'
          },
          {
            '@type': 'MedicalService', 
            name: 'All-Inclusive Dental Packages',
            description: 'Complete dental care packages with luxury accommodations'
          }
        ],
        paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
        areaServed: ['Worldwide'],
        sameAs: [
          `https://twitter.com/${getEnvironmentConfig().twitterHandle.replace('@', '')}`,
          'https://linkedin.com/company/dentalimplantcentercostarica'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: formatPhoneNumber('+1 (702) 595-3955'),
          contactType: 'customer service',
          availableLanguage: ['English', 'Spanish']
        }
      })
    }
  },
  
  freeEstimate: {
    title: 'Get Free Dental Implant Quote | Dental Implant Center Costa Rica',
    description: 'Get your free dental implant quote today. Connect with verified dental professionals in Costa Rica. Transparent pricing, secure payments, and comprehensive care coordination.',
    keywords: ['free dental implant quote', 'dental implant cost', 'dental implant consultation', 'dental implants costa rica', 'all on four costa rica', 'all on six costa rica'],
    image: '/DentalImplantSocials.png',
    canonical: '/free-estimate',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Free Estimate', url: '/free-estimate' }
    ],
    faqData: [
      {
        question: 'How do I get a free dental implant quote?',
        answer: 'Fill out our comprehensive form including your location, treatment type, and 5 images of your mouth. You will receive your free quote within 24 hours after submitting the form.'
      },
      {
        question: 'Is it safe to get dental implants through Dental Implant Center Costa Rica?',
        answer: 'Yes, we ensure safety through verified dental providers, secure payment processing, and comprehensive care coordination throughout your dental implant journey.'
      },
      {
        question: 'What support does Dental Implant Center Costa Rica provide during treatment?',
        answer: 'We provide 24/7 support including travel coordination, luxury accommodation assistance, translation services, and ongoing care coordination throughout your dental implant treatment.'
      }
    ],
    structuredData: {
      'medical-webpage': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Free Dental Implant Quote',
        description: 'Get your free dental implant quote from verified professionals in Costa Rica',
        url: `${getEnvironmentConfig().siteUrl}/free-estimate`,
        mainEntity: {
          '@type': 'MedicalOrganization',
          name: 'Dental Implant Center Costa Rica',
          medicalSpecialty: ['Dental Tourism', 'Dental Implants'],
          availableService: {
            '@type': 'MedicalService',
            name: 'Free Dental Implant Consultation',
            description: 'Get free quotes for dental implant procedures in Costa Rica'
          }
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: formatPhoneNumber('+1 (702) 595-3955'),
          contactType: 'customer service',
          availableLanguage: ['English', 'Spanish']
        }
      })
    }
  }
};

// Utility function for generating hreflang tags
export function generateHreflangTags(baseUrl: string, path: string, availableLocales: string[] = ['en', 'es']) {
  if (!isValidUrl(baseUrl)) {
    console.warn('Invalid base URL provided for hreflang tags');
    return [];
  }
  
  return availableLocales.map(locale => ({
    hreflang: locale,
    href: `${baseUrl}/${locale}${path}`
  }));
}

// Utility function for generating sitemap entries
export function generateSitemapEntry(
  url: string, 
  lastModified?: string, 
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly', 
  priority: number = 0.5
) {
  if (!isValidUrl(url)) {
    console.warn('Invalid URL provided for sitemap entry');
    return null;
  }
  
  return {
    url,
    lastModified: lastModified || new Date().toISOString(),
    changeFrequency,
    priority: Math.max(0, Math.min(1, priority)) // Clamp priority between 0 and 1
  };
}