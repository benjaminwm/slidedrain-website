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

      // ── Gamle WordPress-URL-er (nettsiden før mai 2026) ──
      // Kartlagt via Wayback Machine, se docs/url-inventory.md.
      // Query-parametere (gclid, utm_* osv.) bevares automatisk.
      {
        source: "/kontakt",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/aktuelt",
        destination: "/om-oss",
        permanent: true,
      },
      // Bloggposter og datoarkiv: /2020/11/05/nemitek-nytt-sluk…
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:rest*",
        destination: "/om-oss",
        permanent: true,
      },
      {
        source: "/produkter/renner-rister/slukrister",
        destination: "/produkter/slukrister",
        permanent: true,
      },
      {
        source: "/produkter/renner-rister/hjornerister",
        destination: "/produkter/hjornerister",
        permanent: true,
      },
      // Fanger også /produkter/renner-rister og …/slukrenner
      {
        source: "/produkter/renner-rister/:rest*",
        destination: "/produkter/slukrenner",
        permanent: true,
      },
      {
        source: "/produkter/slukrenner-slukrister",
        destination: "/produkter/slukrenner",
        permanent: true,
      },
      {
        source: "/installasjon/gulvsluk",
        destination: "/installasjon",
        permanent: true,
      },
      {
        source: "/installasjon/slukrenner-rister",
        destination: "/installasjon",
        permanent: true,
      },
      {
        source: "/category/:rest*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/",
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
