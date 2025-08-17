import './globals.css';
import { StrictMode } from 'react';
import { criticalCSS } from '@/lib/critical-css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Inline critical CSS to prevent render blocking */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/images/hero/Dental Implants - Doctor Guzman.webp" 
          as="image" 
          type="image/webp"
        />
        
        {/* Preconnect to external domains if any */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <StrictMode>{children}</StrictMode>
      </body>
    </html>
  );
}
