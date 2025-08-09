import { criticalCSS } from "@/lib/critical-css";
import { StrictMode } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Inline critical CSS for instant rendering */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preload non-critical CSS */}
        <link 
          rel="preload" 
          href="/css/non-critical.css" 
          as="style" 
          onLoad={(e) => {
            const target = e.target as HTMLLinkElement;
            target.onload = null;
            target.rel = 'stylesheet';
          }}
        />
        <noscript>
          <link rel="stylesheet" href="/css/non-critical.css" />
        </noscript>
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className="antialiased">
        <StrictMode>{children}</StrictMode>
      </body>
    </html>
  );
}
