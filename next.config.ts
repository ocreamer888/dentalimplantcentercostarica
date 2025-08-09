import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb'
    },
    // Add React Compiler configuration
    reactCompiler: true
  },
  // Modern browser support - only target browsers that support ES2020+
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for modern browsers
  swcMinify: true,
  // Configure browser targets for modern browsers only
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Target modern browsers only
      config.target = ['web', 'es2020'];
    }
    return config;
  },
  // Enable font optimization
  optimizeFonts: true,
};

export default nextConfig;
