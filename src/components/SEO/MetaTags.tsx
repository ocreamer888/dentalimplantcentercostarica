'use client';

import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function MetaTags({
  title,
  description,
  keywords = [],
  image = '/images/DentalImplantSocials.png',
  url,
  type = 'website',
  canonical,
  noindex = false,
  nofollow = false
}: MetaTagsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dentalimplantcentercostarica.com';
  const fullTitle = `${title} | Dental Implant Center Costa Rica`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Default keywords for dental implants
  const defaultKeywords = [
    'dental implants costa rica',
    'all on four costa rica',
    'all on six costa rica',
    'zirconia dental implants',
    'dental implant cost',
    'dental tourism costa rica'
  ];

  const finalKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Dental Implant Center Costa Rica" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Dental Implant Center Costa Rica" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no,date=no,address=no,email=no" />
      
      {/* Medical Website Specific */}
      <meta name="medical:specialty" content="Dental Implants" />
      <meta name="medical:procedure" content="All-on-4, All-on-6, Single Tooth Implants" />
      <meta name="medical:location" content="Costa Rica" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Head>
  );
}
