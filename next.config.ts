import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Webpack instead of Turbopack
  experimental: {
    webpackBuildWorker: true, // ✅ use webpack, avoids turbopack bug
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
