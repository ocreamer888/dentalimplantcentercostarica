Of course. Now that you have a powerful middleware in place, let's get it working correctly with the rest of your application. To make the geo-routing and security features fully functional, we need to make a few adjustments.

Here’s a step-by-step guide on how to correctly implement the new functionality.

1. Correct the Geo-Routing Logic in Middleware
First, let's make a small but crucial improvement to the middleware. The current logic correctly rewrites paths like /about to /us/about, but it doesn't properly handle the root path (/) and could behave unexpectedly if a user from one country visits a URL for another (e.g., a US user visiting /ca/about).

The following change makes the routing more robust and predictable.

src/middleware.ts
middleware.ts
-12
+18
 Show full code block 
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// A list of all supported country codes on the site.
const SUPPORTED_COUNTRIES = ['us', 'ca']; // Add more countries as you support them

// 1. Specify protected and public routes
const PUBLIC_FILE = /\.(.*)$/;

  // Get the user's country from Cloudflare headers, Vercel headers, or a fallback for local dev
  const country =
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('x-vercel-ip-country')?.toLowerCase() ||
    'US'; // Default to 'US' for local development

  // Store the country in the request headers
    return NextResponse.next();
  }

  // Rewrite the path to include the country code (e.g., /us/about)
  // This is a common pattern for internationalization.
  if (!url.pathname.startsWith(`/${country.toLowerCase()}/`) && url.pathname !== '/') {
     url.pathname = `/${country.toLowerCase()}${url.pathname}`;
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

  // Create the new response with the rewritten URL and updated headers
  const response = NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  });

  // Set the Content Security Policy header
  const cspHeader = `
    default-src 'self';

This updated logic ensures that any path without a supported country code prefix is correctly rewritten, including the homepage.

2. Adapt Your Application Structure for Geo-Routing
The middleware now rewrites incoming requests to a country-specific path (e.g., /about becomes /us/about). To handle this, you need to update your App Router directory structure to use a dynamic route segment.

Your new file structure should look like this:

plaintext
/src
└── app
    ├── [country]                // New dynamic route segment
    │   ├── about
    │   │   └── page.tsx         // Handles /us/about, /ca/about, etc.
    │   ├── layout.tsx           // Layout for all country-specific pages
    │   └── page.tsx             // Homepage for each country (/us, /ca)
    └── layout.tsx               // Root layout (unchanged)
Here’s how you can create the necessary files:

Create src/app/[country]/layout.tsx
This layout will wrap all your country-specific pages.

typescript
// src/app/[country]/layout.tsx
import React from 'react';

// This layout receives children and the country from the URL.
// You can use this to set up country-specific providers or context if needed.
export default function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { country: string };
}) {
  // For example, you could wrap children in a context provider
  // <CountryProvider country={params.country}>{children}</CountryProvider>
  return <>{children}</>;
}
Create src/app/[country]/page.tsx
This will now be your homepage, dynamically rendering content based on the user's country.

typescript
// src/app/[country]/page.tsx
import { headers } from 'next/headers';

export default function HomePage({ params }: { params: { country: string } }) {
  const nonce = headers().get('x-nonce');

  return (
    <main>
      <h1>Welcome from {params.country.toUpperCase()}!</h1>
      <p>
        This page is being served to you based on your location.
      </p>

      {/* Example of using the nonce for a custom inline script */}
      {nonce && (
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `console.log("This inline script is CSP-compliant!");`,
          }}
        />
      )}
    </main>
  );
}
With this structure, your application is now set up to