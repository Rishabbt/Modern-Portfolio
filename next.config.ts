import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ This forces Webpack instead of Turbopack
  experimental: {
    webpackBuildWorker: true,
    turbo: {
      rules: {}, // must be an object, not boolean
    },
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
