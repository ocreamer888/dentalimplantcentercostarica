import "./globals.css";
import { StrictMode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical CSS */}
        <link
          rel="preload"
          href="/_next/static/css/app/globals.css"
          as="style"
        />
      </head>
      <body className="antialiased">
        <StrictMode>
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
