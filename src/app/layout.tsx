import './globals.css';
import { StrictMode } from 'react';
import { CSSLoader } from '@/components/ui/CSSLoader';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <head>
       
        {/* Preconnect to external domains if any */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
      <StrictMode>
          {children}
          <CSSLoader />
        </StrictMode>
      </body>
    </html>
  );
}
