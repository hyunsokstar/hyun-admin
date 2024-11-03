// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.stg.dankkume.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
