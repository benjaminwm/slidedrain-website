/**
 * Setter Google Consent Mode v2 default state FØR noen analytics-tags
 * lastes. Må monteres så høyt opp i tree som mulig (rootlayout)
 * og før GoogleTagManager-komponenten.
 *
 * Default = ALT NEKTET (utenom security_storage). CookieBanner
 * oppdaterer dette etter brukerens samtykke.
 */
import Script from "next/script";

export default function ConsentMode() {
  return (
    <Script id="consent-mode-default" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500
        });
        gtag('set', 'ads_data_redaction', true);
        gtag('set', 'url_passthrough', true);
      `}
    </Script>
  );
}
