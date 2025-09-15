import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // disable Turbopack (use stable Webpack instead)
  },
  typescript: {
    ignoreBuildErrors: false, // set true only if TS errors block build
  },
  eslint: {
    ignoreDuringBuilds: true, // prevent eslint errors from breaking prod build
  },
  images: {
    domains: ["localhost"], // add your image domains if needed
  },
  reactStrictMode: true, // recommended
};

export default nextConfig;
