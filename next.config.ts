import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // QR-kode trykket på produktene peker hit
      {
        source: "/installasjonsveiledning-model-1",
        destination: "/installasjon",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slidedrain.no",
      },
      {
        protocol: "https",
        hostname: "image.mux.com",
      },
      {
        protocol: "https",
        hostname: "cdn.byggtjeneste.no",
      },
    ],
  },
};

export default nextConfig;
