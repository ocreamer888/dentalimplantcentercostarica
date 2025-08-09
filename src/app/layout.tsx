import './globals.css';
import { StrictMode } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StrictMode>{children}</StrictMode>
      </body>
    </html>
  );
}
