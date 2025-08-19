import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. Specify protected and public routes
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  // Clone the request headers so we can modify them
  const requestHeaders = new Headers(request.headers);

  // Get the user's country from Cloudflare headers, Vercel headers, or a fallback for local dev
  const country =
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-vercel-ip-country') ||
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

  // Rewrite the path to include the country code (e.g., /us/about)
  // This is a common pattern for internationalization.
  if (!url.pathname.startsWith(`/${country.toLowerCase()}/`) && url.pathname !== '/') {
     url.pathname = `/${country.toLowerCase()}${url.pathname}`;
  }

  // Create the new response with the rewritten URL and updated headers
  const response = NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  });

  // Set the Content Security Policy header
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
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
