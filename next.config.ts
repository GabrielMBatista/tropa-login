import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://gabrielmarquesbatista.com https://shell-frontend-beta.vercel.app http://localhost:3000 http://localhost:3001;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
