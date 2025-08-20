import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Conditional source maps based on environment
  productionBrowserSourceMaps: process.env.ENABLE_SOURCE_MAPS === 'true',
  
  experimental: {
    serverActions: { bodySizeLimit: "10mb" },
    reactCompiler: true,
    optimizeCss: true,
    optimizePackageImports: ['tailwindcss', 'tw-animate-css', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
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
          // Remove framer-motion specific chunk since we're replacing it
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
  },
  // Add compression
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Add performance optimizations
  // swcMinify: true, // Removed - SWC minification is now default in Next.js 15+
  
  // Add this to reduce SSL warnings
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : undefined,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
              "frame-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join('; ')
          }
        ]
      }
    ];
  },
};

export default nextConfig;
