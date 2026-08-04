/**
 * Klient-side analytics helpers.
 *
 * Sentralt API for å pushe events til dataLayer (som GTM henter til
 * GA4, Meta Pixel og Google Ads). Alle calls er trygge å gjøre uten
 * samtykke — GTM-triggere bør være gated på consent type i selve GTM.
 *
 * Bruk:
 *   trackEvent("contact_submit", { source: "tilvalg" });
 *   trackConversion("contact_lead");
 */

export type ConsentState = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  functionality_storage: "granted" | "denied";
  personalization_storage: "granted" | "denied";
  security_storage: "granted";
};

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export const CONSENT_COOKIE = "sd-consent";
export const CONSENT_VERSION = 1;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Push et event til dataLayer. GTM plukker det opp og videresender til
 * GA4 / Meta / Ads basert på triggere konfigurert i GTM.
 */
export function trackEvent(
  event: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

const CTA_ORIGIN_KEY = "sd-cta-origin";

/**
 * Spor klikk på en "Book et møte"-CTA og husk plasseringen i
 * sessionStorage, slik at contact_form_submit senere kan rapportere
 * hvilken CTA som ledet brukeren til skjemaet (cta_origin). Overlever
 * navigasjon (f.eks. MeetingsSlideIn → /#kontakt) men ikke ny fane.
 */
export function trackBookMeetingClick(ctaLocation: string) {
  trackEvent("book_meeting_click", { cta_location: ctaLocation });
  try {
    sessionStorage.setItem(CTA_ORIGIN_KEY, ctaLocation);
  } catch {}
}

/**
 * Les siste CTA-plassering brukeren klikket på, eller null hvis
 * brukeren scrollet/navigerte til skjemaet uten CTA-klikk.
 */
export function readCtaOrigin(): string | null {
  try {
    return sessionStorage.getItem(CTA_ORIGIN_KEY);
  } catch {
    return null;
  }
}

/**
 * Push en konvertering. Bruker samme dataLayer-pattern men med
 * standard "conversion"-event som GTM mapper til riktig Ads/Meta event.
 */
export function trackConversion(
  conversionId: string,
  params: Record<string, unknown> = {}
) {
  trackEvent("conversion", { conversion_id: conversionId, ...params });
}

/**
 * Konverter brukervalgt cookie-consent til Consent Mode v2 state.
 */
export function toConsentMode(c: CookieConsent): ConsentState {
  return {
    analytics_storage: c.analytics ? "granted" : "denied",
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    personalization_storage: c.analytics ? "granted" : "denied",
    security_storage: "granted",
  };
}

/**
 * Skriv consent til både localStorage (legacy) og cookie (så det
 * potensielt kan leses server-side om vi senere vil ha SSR-tracking).
 */
export function persistConsent(c: CookieConsent) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("cookie-consent", JSON.stringify(c));
  } catch {}
  // Cookie: max-age 12 mnd, SameSite=Lax, no Secure i dev
  const value = encodeURIComponent(JSON.stringify({ ...c, v: CONSENT_VERSION }));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax${secure}`;
}

/**
 * Les nåværende consent (klient-side). Returnerer null hvis bruker
 * ikke har valgt enda.
 */
export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  // 1) Prøv cookie
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]+)`));
  if (match) {
    try {
      const parsed = JSON.parse(decodeURIComponent(match[1]));
      return {
        necessary: true,
        analytics: !!parsed.analytics,
        marketing: !!parsed.marketing,
      };
    } catch {}
  }
  // 2) Fallback til legacy localStorage
  try {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return {
      necessary: true,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
    };
  } catch {
    return null;
  }
}

/**
 * Oppdater Google Consent Mode v2 etter brukerens valg.
 */
export function updateConsentMode(c: CookieConsent) {
  if (typeof window === "undefined") return;
  const state = toConsentMode(c);
  window.dataLayer = window.dataLayer || [];
  // VIKTIG: Consent Mode gjenkjenner KUN gtag sin arguments-form
  // (gtag('consent','update',{...})). En vanlig array som
  // dataLayer.push(['consent','update',{...}]) blir IKKE tolket som en
  // consent-kommando, og analytics_storage forblir 'denied' for alltid.
  // Vi bruker derfor gtag-shimen (definert i ConsentMode) som pusher
  // selve arguments-objektet — med en lokal fallback hvis den mangler.
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", state);
  } else {
    const gtag: (...args: unknown[]) => void = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    gtag("consent", "update", state);
  }
  // Trigger en event så GTM kan re-fyre tags som ble blokkert
  window.dataLayer.push({ event: "consent_update", ...state });
}
