import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Conditional source maps based on environment
  productionBrowserSourceMaps: process.env.ENABLE_SOURCE_MAPS === 'true',
  
  // React Compiler (moved from experimental in Next.js 16)
  reactCompiler: true,
  
  experimental: {
    serverActions: { 
      bodySizeLimit: process.env.NODE_ENV === 'production' ? "10mb" : "50mb" 
    },
    // Remove this line as it conflicts with Tailwind v4
    // optimizePackageImports: ['tailwindcss', 'tw-animate-css', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Acknowledge Turbopack as default bundler (Next.js 16+)
  // This allows webpack config below to coexist
  turbopack: {},
  
  // Optimize webpack for better chunking
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Generate source maps but don't expose them publicly
      config.devtool = 'hidden-source-map';
      
      // Better chunk splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      };
      
      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    return config;
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 160, 192, 200, 230, 256, 320, 348, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dentalimplantcentercostarica.com',
      },
    ],
    // Allow query strings on local images (Next.js 16+)
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
  },
  
  // Add compression
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Remove assetPrefix as it can cause issues
  // assetPrefix: process.env.NODE_ENV === 'development' ? '' : undefined,

  // Add comprehensive security headers
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';
    
    return [
      {
        source: '/:path*',
        headers: [
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: isDev 
              ? "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" 
              : "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';"
          },
          // X-Frame-Options
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Referrer-Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Permissions-Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Strict-Transport-Security (only in production)
          ...(!isDev ? [{
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }] : []),
          // X-XSS-Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // X-DNS-Prefetch-Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
