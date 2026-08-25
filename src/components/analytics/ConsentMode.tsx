/**
 * Setter Google Consent Mode v2 default state FØR noen analytics-tags
 * lastes. Må monteres så høyt opp i tree som mulig (rootlayout)
 * og før GoogleTagManager-komponenten.
 *
 * Default = ALT NEKTET (utenom security_storage). CookieBanner
 * oppdaterer dette etter brukerens samtykke.
 *
 * VIKTIG: hvis brukeren allerede HAR tatt et valg, må det valget
 * gjenspeiles her — synkront, i samme beforeInteractive-script — og
 * ikke først når CookieBanner hydreres. GTM venter bare
 * `wait_for_update` millisekunder på en consent-oppdatering før den
 * evaluerer All Pages-taggene, og React-hydrering rekker sjelden
 * innenfor det vinduet. Tags som krever samtykke (Meta Pixel og
 * LinkedIn Insight har `ad_storage` som krav i GTM-PHPZ59V) ble derfor
 * forkastet selv for brukere som hadde samtykket, og GA4s landings-
 * page_view gikk ut cookieless (gcs=G100) med tapt kampanjekilde.
 *
 * Dette utvider ikke sporingen: det gjelder kun brukere som allerede
 * har gjort et aktivt valg, og nekt håndteres likt som før.
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

        // Gjenopprett et allerede lagret samtykke umiddelbart.
        // Må holdes i synk med toConsentMode() i src/lib/analytics.ts.
        (function () {
          try {
            var stored = null;
            var m = document.cookie.match(/(?:^|; )sd-consent=([^;]+)/);
            if (m) {
              stored = JSON.parse(decodeURIComponent(m[1]));
            } else {
              // Legacy: brukere som samtykket før cookien ble tatt i bruk
              var legacy = localStorage.getItem('cookie-consent');
              if (legacy) stored = JSON.parse(legacy);
            }
            if (!stored) return;

            var analytics = !!stored.analytics;
            var marketing = !!stored.marketing;
            gtag('consent', 'update', {
              analytics_storage: analytics ? 'granted' : 'denied',
              ad_storage: marketing ? 'granted' : 'denied',
              ad_user_data: marketing ? 'granted' : 'denied',
              ad_personalization: marketing ? 'granted' : 'denied',
              functionality_storage: 'granted',
              personalization_storage: analytics ? 'granted' : 'denied',
              security_storage: 'granted'
            });
          } catch (e) {}
        })();
      `}
    </Script>
  );
}
