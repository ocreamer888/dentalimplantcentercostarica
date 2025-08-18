import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 20,
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
};

export default nextConfig;
