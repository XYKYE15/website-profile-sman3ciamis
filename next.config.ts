/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["o1m3bqdvkd1qv4y2.public.blob.vercel-storage.com"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
};
