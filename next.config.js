/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/overview",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["cdn2.unrealengine.com"],
  },
};

module.exports = nextConfig;
