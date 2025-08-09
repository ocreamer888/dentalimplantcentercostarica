import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb'
    },
    // Add React Compiler configuration
    reactCompiler: true
  }
};

export default nextConfig;
