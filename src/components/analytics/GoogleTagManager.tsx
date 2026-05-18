/**
 * Google Tag Manager loader.
 *
 * Single source for all client-side tracking:
 * - GA4 (config tag i GTM med Measurement ID)
 * - Meta Pixel (custom HTML tag i GTM)
 * - Google Ads conversion tracking (tag i GTM)
 *
 * Container-ID konfigureres via NEXT_PUBLIC_GTM_ID i miljøet.
 * Hvis ID mangler (f.eks. lokal dev) lastes ingenting.
 */
import Script from "next/script";

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;

  return (
    <>
      {/* Head script — laster GTM-loader */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>
    </>
  );
}

/**
 * GTM <noscript>-fallback. Må plasseres rett etter <body>-tag.
 */
export function GoogleTagManagerNoScript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
