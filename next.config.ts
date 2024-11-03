// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // /api로 시작하는 모든 경로를
        destination: 'https://api.stg.dankkume.com/api/:path*', // 실제 API 서버로 프록시
      },
    ];
  },
  trailingSlash: false,  // 슬래시가 자동으로 붙지 않도록 설정 (옵션)
};

export default nextConfig;
