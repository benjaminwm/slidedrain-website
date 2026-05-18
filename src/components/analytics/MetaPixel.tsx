/**
 * Meta Pixel (Facebook/Instagram Ads).
 *
 * BEST PRACTICE: Last Meta Pixel som en Custom HTML-tag inne i GTM
 * istedenfor å bruke denne komponenten direkte. Da samler du all
 * marketing-tracking i GTM og slipper duplikat-eventer.
 *
 * Hvis du likevel vil laste Meta Pixel direkte (f.eks. fordi GTM er
 * blokkert eller du foretrekker direkte kontroll), sett
 * NEXT_PUBLIC_META_PIXEL_ID i env. Hvis tom, lastes ingenting.
 *
 * Consent Mode v2 håndteres ikke automatisk av Meta — vi bruker
 * et eget flagg på pixel-init basert på cookie-consent, og fbq
 * blokkeres helt før samtykke er gitt.
 */
import Script from "next/script";

export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          (function() {
            // Definer fbq-stub men IKKE init pixel før samtykke gitt
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
              n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');

            // Init pixel kun hvis marketing-consent allerede er gitt
            try {
              var m = document.cookie.match(/(?:^|; )sd-consent=([^;]+)/);
              if (m) {
                var parsed = JSON.parse(decodeURIComponent(m[1]));
                if (parsed && parsed.marketing) {
                  fbq('init', '${pixelId}');
                  fbq('track', 'PageView');
                }
              }
            } catch (e) {}

            // Lytt etter consent-update events fra CookieBanner
            window.addEventListener('sd-consent-update', function(e) {
              if (e && e.detail && e.detail.marketing) {
                if (!window._fbPixelInited) {
                  fbq('init', '${pixelId}');
                  fbq('track', 'PageView');
                  window._fbPixelInited = true;
                }
              }
            });
          })();
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
