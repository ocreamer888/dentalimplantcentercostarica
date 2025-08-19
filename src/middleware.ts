import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// A list of all supported country codes on the site.
const SUPPORTED_COUNTRIES = ['us', 'ca']; // Add more countries as you support them

// 1. Specify protected and public routes
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  // Clone the request headers so we can modify them
  const requestHeaders = new Headers(request.headers);

  // Get the user's country from Cloudflare headers, Vercel headers, or a fallback for local dev
  const country =
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-vercel-ip-country')?.toLowerCase() ||
    'US'; // Default to 'US' for local development

  // Store the country in the request headers
  requestHeaders.set('x-country', country);

  // Generate a nonce for Content Security Policy
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  requestHeaders.set('x-nonce', nonce);

  // Clone the URL to modify it
  const url = request.nextUrl.clone();

  // Skip middleware for static files
  if (PUBLIC_FILE.test(url.pathname)) {
    return NextResponse.next();
  }

  let response;
  const { pathname } = url;
  const countryCode = country.toLowerCase();
  const pathCountry = pathname.split('/')[1];

  // If the path is not prefixed with a supported country, rewrite it.
  if (!SUPPORTED_COUNTRIES.includes(pathCountry)) {
    // For the root path, rewrite to /us, not /us/
    const newPath = pathname === '/' ? '' : pathname;
    url.pathname = `/${countryCode}${newPath}`;
    response = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  } else {
    // Path is already localized, pass through but with updated headers.
    response = NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Set the Content Security Policy header - OPTIMIZED for Next.js
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' blob: data: https:;
    connect-src 'self' https://www.google-analytics.com https://graph.facebook.com;
    frame-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  response.headers.set(
    'Content-Security-Policy',
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  );

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
