/**
 * Dato for siste reelle innholdsendring per side (ISO, YYYY-MM-DD).
 *
 * Sitemapet brukte tidligere `new Date()` på alle URL-er, slik at hver
 * deploy hevdet at samtlige sider var endret i dag. Google lærer da å
 * ignorere `lastmod` helt, og vi mister ferskhetssignalet på de sidene som
 * faktisk er oppdatert.
 *
 * VIKTIG: oppdater datoen her når du endrer innholdet på en side —
 * ren refaktorering eller stilendring skal ikke bumpe datoen.
 */

/** Fallback for sider som ikke er listet. */
const DEFAULT_UPDATED = "2026-08-04";

export const pageUpdated: Record<string, string> = {
  "/": "2026-08-12",
  "/sluttkunde": "2026-08-04",
  "/rorlegger": "2026-08-04",
  "/tilvalg": "2026-08-04",
  "/installasjon": "2026-08-12",
  "/installasjon/montere-slukrenne": "2026-08-12",
  "/installasjon/ofte-stilte-sporsmal": "2026-08-12",
  "/produkter": "2026-08-04",
  "/kundehistorier": "2026-08-12",
  "/kundehistorier/rosendal-bygg": "2026-08-12",
  "/kundehistorier/total-teknisk": "2026-08-12",
  "/kundehistorier/muribo": "2026-08-12",
  "/om-oss": "2026-08-04",
  "/personvern": "2026-08-04",
  "/cookies": "2026-08-04",
};

/** Kategorisidene ble bygget og sist innholdsendret 4. august 2026. */
export const CATEGORY_PAGES_UPDATED = "2026-08-04";

/** Produktdataene (products.ts) er sist innholdsendret 12. mai 2026. */
export const PRODUCT_PAGES_UPDATED = "2026-05-12";

export function updatedAt(path: string): Date {
  return new Date(pageUpdated[path] ?? DEFAULT_UPDATED);
}
