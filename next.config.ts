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
        source: "/shop",
        destination: "/produkter",
        permanent: true,
      },
      {
        source: "/nyhetsbrev",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/personvern",
        permanent: true,
      },
      {
        source: "/les-mer-om-slidedrain",
        destination: "/om-oss",
        permanent: true,
      },
      // ── Gamle WooCommerce-produktsider (/product/<slug>) ──
      // Slugs observert i GSC aug 2026 mappet til nye produktsider.
      // ":feed(feed)?" fanger også WP sine /feed/-varianter.
      {
        source: "/product/gulvsluk-slukpotte-o75-:utlop/:feed(feed)?",
        destination: "/produkter/slukpotte-75-:utlop",
        permanent: true,
      },
      {
        source: "/product/gulvsluk-slukoverdel-:variant/:feed(feed)?",
        destination: "/produkter/slukoverdel-:variant",
        permanent: true,
      },
      {
        source: "/product/slukrist-sirkulaer-:finish/:feed(feed)?",
        destination: "/produkter/sirkulaer-slukrist-:finish",
        permanent: true,
      },
      {
        source: "/product/slukrist-kvadrat-tile-insert-:finish/:feed(feed)?",
        destination: "/produkter/slukrist-tile-insert-:finish",
        permanent: true,
      },
      {
        source:
          "/product/slukrenne-eksentrisk-tile-insert-:size(\\d+)-rf-stal/:feed(feed)?",
        destination: "/produkter/slukrenne-eksentrisk-tile-:size-stal",
        permanent: true,
      },
      {
        source:
          "/product/slukrenne-eksentrisk-tile-insert-800-matt-sort/:feed(feed)?",
        destination: "/produkter/slukrenne-eksentrisk-tile-800-sort",
        permanent: true,
      },
      // Eksentrisk matt sort 900/1000/1200 finnes ikke lenger → kategoriside
      {
        source:
          "/product/slukrenne-eksentrisk-tile-insert-:size(\\d+)-matt-sort/:feed(feed)?",
        destination: "/produkter/slukrenner-tile-insert",
        permanent: true,
      },
      // 1200 matt sort finnes ikke lenger → kategoriside
      {
        source: "/product/slukrenne-tile-insert-1200-matt-sort/:feed(feed)?",
        destination: "/produkter/slukrenner-tile-insert",
        permanent: true,
      },
      {
        source: "/product/slukrenne-tile-insert-:variant/:feed(feed)?",
        destination: "/produkter/slukrenne-tile-insert-:variant",
        permanent: true,
      },
      // Ukjente/utgåtte produkt-slugs → produktoversikten
      {
        source: "/product/:rest*",
        destination: "/produkter",
        permanent: true,
      },
      // ── Gamle WordPress-PDF-er (/wp-content/uploads) ──
      // Rangerer fortsatt i Google (~150 org. klikk/år, GSC aug 2026)
      // og ga 403 etter relansering. Mappet til nye /downloads-filer.
      {
        source:
          "/wp-content/uploads/2023/01/Monteringsanvisning-Slidedrain-Model-1.pdf",
        destination:
          "/downloads/Monteringsanvisning-Slidedrain-Model-1-Slukmansjett.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2025/12/A5-Monteringsanvisning-Slidedrain-Gulvsluk-Klemring-digital-061125.pdf",
        destination:
          "/downloads/Monteringsanvisning-Slidedrain-Model-1-Klemring.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2024/01/Monteringsanvisning-Slukrenner-og-Rister.pdf",
        destination: "/downloads/Monteringsanvisning-Slidedrain-Slukrenner.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/03/Slidedrain-Model-1-FDV.pdf",
        destination: "/downloads/FDV-Slidedrain-Model-1.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2023/04/NEPD-4352-3563_Slidedrain-Model-1.pdf",
        destination: "/downloads/EPD-Slidedrain-Model-1.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2026/02/20991g.pdf",
        destination: "/downloads/TG-20991-Slidedrain-Sluksystem.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2022/10/3801s.pdf",
        destination: "/downloads/Produktsertifikat-Slidedrain-Model-1.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2024/03/Slidedrain-Produktkatalog-2024-spread.pdf",
        destination: "/produkter",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2025/06/Slidedrain-Gulvsluk-brosjyre-050325.pdf",
        destination: "/produkter/gulvsluk",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2025/06/Slidedrain-Slukrenner-Slukrister-080525.pdf",
        destination: "/produkter/slukrenner",
        permanent: true,
      },
      // Øvrige wp-content-stier (gamle bilder o.l.) → forsiden
      {
        source: "/wp-content/:rest*",
        destination: "/",
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
