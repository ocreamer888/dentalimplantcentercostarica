import './globals.css';
import { StrictMode } from 'react';
import { Metadata } from 'next';
import { getOrganizationSchema, getMedicalBusinessSchema, renderJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://dentalimplantcentercostarica.com'),
  title: {
    default: 'Dental Implant Center Costa Rica - All-On-4 Zirconia Implants from $19,950',
    template: '%s | Dental Implant Center Costa Rica'
  },
  description: 'Save up to 70% on premium dental implants in Costa Rica. All-inclusive packages with verified dentists, luxury accommodations. Free consultation available.',
  keywords: [
    'dental implants costa rica',
    'all on four costa rica',
    'all on six costa rica',
    'zirconia dental implants',
    'dental implant cost',
    'dental tourism costa rica'
  ],
  authors: [{ name: 'Dental Implant Center Costa Rica' }],
  creator: 'Dental Implant Center Costa Rica',
  publisher: 'Dental Implant Center Costa Rica',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dentalimplantcentercostarica.com',
    siteName: 'Dental Implant Center Costa Rica',
    title: 'Dental Implant Center Costa Rica - All-On-4 Zirconia Implants from $19,950',
    description: 'Save up to 70% on premium dental implants in Costa Rica. All-inclusive packages with verified dentists, luxury accommodations.',
    images: [
      {
        url: '/images/DentalImplantSocials.png',
        width: 1200,
        height: 630,
        alt: 'Dental Implant Center Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Implant Center Costa Rica - All-On-4 Zirconia Implants from $19,950',
    description: 'Save up to 70% on premium dental implants in Costa Rica. All-inclusive packages with verified dentists, luxury accommodations.',
    images: ['/images/DentalImplantSocials.png'],
  },
  other: {
    'msapplication-TileColor': '#8B5CF6',
    'theme-color': '#8B5CF6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Dental Implant Center Costa Rica',
    'application-name': 'Dental Implant Center Costa Rica',
    'mobile-web-app-capable': 'yes',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    'X-UA-Compatible': 'IE=edge',
    referrer: 'origin-when-cross-origin',
    'color-scheme': 'light dark',
    'format-detection': 'telephone=no,date=no,address=no,email=no',
    HandheldFriendly: 'true',
    MobileOptimized: '320',
    cleartype: 'on',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = getOrganizationSchema();
  const medicalBusinessSchema = getMedicalBusinessSchema();

  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(organizationSchema)}
        />
        {/* Structured Data - Medical Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(medicalBusinessSchema)}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Critical CSS inlining for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body { 
              margin: 0; 
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              line-height: 1.6;
              color: #1f2937;
            }
            .hero-section { 
              min-height: 100vh; 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .loading-skeleton { 
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); 
              background-size: 200% 100%; 
              animation: loading 1.5s infinite; 
            }
            @keyframes loading { 
              0% { background-position: 200% 0; } 
              100% { background-position: -200% 0; } 
            }
            /* Performance optimizations */
            * { box-sizing: border-box; }
            img { max-width: 100%; height: auto; }
            .text-balance { text-wrap: balance; }
            .text-pretty { text-wrap: pretty; }
          `
        }} />
      </head>
      <body className="antialiased">
        <StrictMode>
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
