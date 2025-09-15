/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // 🚫 disable Turbopack, use Webpack instead
  },
  typescript: {
    // ✅ Block build if there are type errors (optional)
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
