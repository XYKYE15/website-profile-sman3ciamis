import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "o1m3bqdvkd1qv4y2.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
}

export default nextConfig
