import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the user's country from Cloudflare headers or IP geolocation
  const country = request.headers.get('cf-ipcountry') || 
                  request.headers.get('x-vercel-ip-country') ||
                  getCountryFromIP(request.headers.get('x-forwarded-for'));

  // Serve different content based on location
  if (country === 'US') {
    // US-specific content (insurance, travel from US)
    console.log('Serving US-specific content');
    // Add US-specific headers or cookies here
  } else if (country === 'CA') {
    // Canadian content (different regulations)
    console.log('Serving Canadian content');
    // Add Canadian-specific headers or cookies here
  } else if (country) {
    // General international content
    console.log(`Serving international content for ${country}`);
    // Add international-specific headers or cookies here
  } else {
    // Unknown location - default behavior
    console.log('Location unknown, serving default content');
  }

  // Add security headers
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

// Helper function to get country from IP address
function getCountryFromIP(ip: string | null): string | null {
  if (!ip) return null;
  
  // For local development, allow all traffic
  if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return 'US';
  }
  
  return null; // Return null to allow traffic if we can't determine country
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

