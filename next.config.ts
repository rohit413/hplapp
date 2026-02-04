import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixes deprecated "domains" warning & adds safety configs
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Reduce server load for images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Safety: If upstream image hangs, don't kill server timeout in dev
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Prevent zombie processes in dev/build
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
