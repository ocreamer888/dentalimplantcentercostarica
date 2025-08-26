import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Conditional source maps based on environment
  productionBrowserSourceMaps: process.env.ENABLE_SOURCE_MAPS === 'true',
  
  experimental: {
    serverActions: { bodySizeLimit: "50mb" }, // Increase from 10mb to 50mb
    reactCompiler: true,
    // Remove this line as it conflicts with Tailwind v4
    // optimizePackageImports: ['tailwindcss', 'tw-animate-css', 'lucide-react'],
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
  
  // Remove assetPrefix as it can cause issues
  // assetPrefix: process.env.NODE_ENV === 'development' ? '' : undefined,

  // Add CSP headers for development
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development' 
              ? "script-src 'self' 'unsafe-eval' 'unsafe-inline';" 
              : "script-src 'self';"
          }
        ],
      },
    ];
  },
};

export default nextConfig;
