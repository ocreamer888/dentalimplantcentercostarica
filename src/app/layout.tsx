import './globals.css';
import { StrictMode } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Ensure CSS is loaded with proper priority */}
        <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
        
        {/* Critical CSS inline - keep this */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body { margin: 0; font-family: system-ui, sans-serif; }
            .hero-section { min-height: 100vh; }
            .loading-skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: loading 1.5s infinite; }
            @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
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
