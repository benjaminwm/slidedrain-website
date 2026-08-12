/**
 * Kategorisider under /produkter/[slug].
 *
 * Hver landing-kategori er en SEO-landingsside som grupperer én eller
 * flere produktkategorier fra products.ts. Slugs deler namespace med
 * produkt-slugs i [slug]-ruten — produktoppslag prøves først, deretter
 * disse. Brukes som final URLs i Google Ads (docs/keyword-landing-map.md).
 */
import { productCategories, type ProductCategory } from "./products";

export interface LandingCategory {
  /** URL-segment under /produkter/ */
  slug: string;
  /** H1 på siden */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Badge-tekst over H1 */
  badge: string;
  /** Ingress under H1 */
  intro: string;
  /** Avsnitt som rendres under produktgridene */
  body: string[];
  /** IDer fra productCategories som vises på siden */
  categoryIds: string[];
  /**
   * Kort FAQ per kategori. Rendres på siden og emitteres som FAQPage-schema.
   * Svarene skal være korte, konkrete og siterbare — de er like mye rettet
   * mot AI-assistenter som mot Google. Faktagrunnlag: SINTEF TG 20991.
   */
  faqs: { q: string; a: string }[];
}

export const landingCategories: LandingCategory[] = [
  {
    slug: "gulvsluk",
    title: "Gulvsluk til bad og våtrom",
    metaTitle: "Gulvsluk til bad og våtrom | Slidedrain",
    metaDescription:
      "Neste generasjons gulvsluk for bad, dusj og våtrom. SINTEF Teknisk Godkjenning (TG 20991), løsninger for alle membraner. Kjøp hos Brødrene Dahl og Flisekompaniet.",
    badge: "Gulvsluk",
    intro:
      "Slidedrain er neste generasjons gulvsluk for bad, dusj og våtrom. Slukpotten og slukoverdelen utgjør kjernen i systemet — med SINTEF Teknisk Godkjenning (TG 20991), i tråd med kravene i TEK17 og med løsninger for alle membraner på markedet.",
    body: [
      "Gulvsluket monteres i to trinn: Slukpotten kobles til avløpsrøret og danner fundamentet, mens slukoverdelen monteres på slukpotten og sikrer vanntett overgang til membranen. Det gjenbrukbare monteringsverktøyet sikrer presis installasjon på badets laveste punkt.",
      "Samme slukpotte kan kombineres med kvadratiske og sirkulære slukrister, hjørnerister og slukrenner. Dermed kan uttrykket på badet — dusjsluk i hjørnet, synlig rist eller flislagt slukrenne — velges og endres uten å bytte sluket under.",
    ],
    categoryIds: ["slukpotter", "slukoverdeler", "monteringsverktoy"],
    faqs: [
      {
        q: "Kan Slidedrain Gulvsluk brukes som eneste sluk i våtrommet?",
        a: "Ja. Kravet er minimum 0,8 l/s dreneringskapasitet når det installeres kun ett sluk i våtrommet. Slidedrain Gulvsluk har 1,0 l/s.",
      },
      {
        q: "Kan gulvsluket monteres i trebjelkelag?",
        a: "Ja. Sluket kan støpes inn i betongdekke eller monteres i trebjelkelag med påstøp. I trebjelkelag må avløpsrøret klamres så nær koblingen mot sluket som mulig.",
      },
      {
        q: "Hvor mye kan sluket høydejusteres?",
        a: "Slukoverdelen kan høydejusteres inntil 40 mm i forhold til slukpotten, slik at den kommer i plan med ferdig gulv. Monteringsverktøyet målsetter høyden under støp.",
      },
      {
        q: "Hvilket utløp finnes?",
        a: "Slukpotten leveres med Ø75 mm sideutløp, bunnutløp eller skrått utløp.",
      },
    ],
  },
  {
    slug: "slukrenner",
    title: "Slukrenner og linjesluk",
    metaTitle: "Slukrenner og linjesluk til bad | Slidedrain",
    metaDescription:
      "Slukrenner (linjesluk) i 600–1200 mm: Tile Insert for usynlig flislagt rist, eksentrisk utløp for ensidig fall, eller klassisk rist i børstet stål og matt sort.",
    badge: "Slukrenner",
    intro:
      "Slukrenner — også kalt linjesluk eller rennesluk — samler vannet langs én linje og gir rene gulvflater med fall én vei. Slidedrain leverer slukrenner med Tile Insert for flislagt, nesten usynlig rist, eksentriske renner for ensidig fall mot vegg, og klassiske renner med rist i børstet stål eller matt sort. Tilgjengelig i lengder fra 600 til 1200 mm.",
    body: [
      "For deg som ser etter et designsluk gir Tile Insert-løsningen en helt flislagt overflate der bare en smal spalte er synlig — perfekt til moderne storformat-fliser.",
      "Alle slukrennene bygger på samme SINTEF-godkjente slukpotte som resten av Slidedrain-systemet, og alle varer er lagerført hos Brødrene Dahl og Flisekompaniet med NOBB- og NRF-nummer.",
    ],
    categoryIds: ["slukrenner-tile", "slukrenner-eksentrisk", "slukrenner"],
    faqs: [
      {
        q: "Hva er forskjellen på slukrenne, linjesluk og rennesluk?",
        a: "Det er tre navn på det samme: et avlangt sluk som samler vannet langs én linje, i stedet for et rundt punktsluk. Slidedrain leverer dem i lengder fra 600 til 1200 mm.",
      },
      {
        q: "Passer slukrennen på gulvsluket jeg allerede har?",
        a: "Slidedrain Slukrenner passer med alle sirkulære gulvsluk. Rennen monteres over membranen og kan justeres 50 mm i bredden og 105 mm i lengden over en Ø130 mm vannlås.",
      },
      {
        q: "Hva er eksentrisk utløp?",
        a: "Eksentriske slukrenner har hullet forskjøvet mot den ene siden, slik at gulvet kan legges med ensidig fall mot vegg. Det er særlig nyttig for storformat-fliser som ellers må deles opp.",
      },
      {
        q: "Hvor mye vann tar slukrennen unna?",
        a: "Alle slukrenner og slukrister er testet til over 0,8 liter i sekundet. Slukene har belastningsklasse K3, bekreftet ved prøving etter NS-EN 1253.",
      },
    ],
  },
  {
    slug: "slukrenner-tile-insert",
    title: "Slukrenner med Tile Insert",
    metaTitle: "Slukrenner med Tile Insert – flislagt rist | Slidedrain",
    metaDescription:
      "Slukrenner med Tile Insert: risten flislegges med gulvets egen flis og sluket integreres usynlig. Lengder 600–1200 mm, med sentrert eller eksentrisk utløp.",
    badge: "Tile Insert",
    intro:
      "Tile Insert betyr at risten flislegges med samme flis som gulvet — slukrennen integreres nesten usynlig i baderomsgulvet. Tilgjengelig i lengder fra 600 til 1200 mm, med sentrert utløp eller eksentrisk utløp for ensidig fall mot vegg.",
    body: [
      "Eksentriske slukrenner har hullet forskjøvet mot den ene siden, slik at gulvet kan legges med ensidig fall mot vegg — spesielt egnet for storformat-fliser der man vil unngå oppdeling av flisene.",
      "Tile Insert finnes også som kvadratiske slukrister og hjørnerister, alt på samme SINTEF-godkjente sluksystem.",
    ],
    categoryIds: ["slukrenner-tile", "slukrenner-eksentrisk"],
    faqs: [
      {
        q: "Hva er en tile insert?",
        a: "En rist som flislegges med gulvets egen flis, slik at sluket blir nesten usynlig. Bare en smal spalte rundt risten er synlig i ferdig gulv.",
      },
      {
        q: "Hvilken flistykkelse passer?",
        a: "Ved flistykkelser under 9,5 mm må du påføre et ekstra lag flislim eller monteringslim under flisen i tile inserten, og tilsvarende ekstra flislim på utsiden av rennen.",
      },
      {
        q: "Hvordan rengjøres en tile insert-renne?",
        a: "Løft tile inserten med det medfølgende rist-verktøyet, spyl rennen med dusjen og fjern smuss. Unngå harde skrubber og sterke kjemikalier på sortlakkerte produkter.",
      },
    ],
  },
  {
    slug: "slukrister",
    title: "Slukrister i børstet stål og matt sort",
    metaTitle: "Slukrister i børstet stål og matt sort | Slidedrain",
    metaDescription:
      "Kvadratiske og sirkulære slukrister til Slidedrain-systemet — med eller uten Tile Insert, i børstet stål eller matt sort. Byttes uten å endre sluket under.",
    badge: "Slukrister",
    intro:
      "Kvadratiske og sirkulære slukrister til Slidedrain-systemet — med eller uten Tile Insert. Velg børstet stål for et klassisk uttrykk eller matt sort for moderne bad. Risten monteres på slukoverdelen og kan byttes uten å endre sluket under.",
    body: [
      "Slukristen er den synlige delen av gulvsluket. Med Slidedrain er risten et tilvalg: samme slukpotte og overdel kan kombineres med kvadratisk rist, sirkulær rist, Tile Insert eller slukrenne — og valget kan endres senere.",
    ],
    categoryIds: ["slukrister"],
    faqs: [
      {
        q: "Kan jeg bytte slukrist uten å bytte sluket?",
        a: "Ja. Risten monteres på slukoverdelen og kan byttes uten å endre sluket under. Samme slukpotte kan kombineres med kvadratisk rist, sirkulær rist, tile insert, hjørnerist eller slukrenne.",
      },
      {
        q: "Hvilken slukrist passer til vinylgulv?",
        a: "Den sirkulære slukristen er utviklet for slukoverdel med klemring, som er godkjent for vinylbelegg.",
      },
      {
        q: "Finnes ristene i sort?",
        a: "Ja, slukristene leveres i børstet stål og matt sort, med eller uten tile insert.",
      },
    ],
  },
  {
    slug: "hjornerister",
    title: "Hjørnerister — sluk i hjørnet",
    metaTitle: "Hjørnerister – hjørnesluk med Tile Insert | Slidedrain",
    metaDescription:
      "Hjørnesluk med Tile Insert: Slidedrains hjørnerister (297 × 297 mm) plasseres i hjørnet av dusjsonen og maksimerer bruken av storformat-fliser.",
    badge: "Hjørnerister",
    intro:
      "Ser du etter hjørnesluk? Slidedrains hjørnerister med Tile Insert (297 × 297 mm) plasseres i hjørnet av dusjsonen og lar deg utnytte storformat-fliser maksimalt — på samme SINTEF-godkjente slukpotte som resten av systemet.",
    body: [
      "Risten flislegges med gulvets egen flis, slik at sluket nærmest forsvinner i hjørnet. Vannet ledes til hjørnet med diagonalt fall, og gulvflaten kan legges med hele fliser uten oppdeling rundt et sentrert sluk.",
    ],
    categoryIds: ["hjornerister"],
    faqs: [
      {
        q: "Hvor stor er hjørneristen?",
        a: "Hjørneristen med tile insert måler 297 × 297 mm og plasseres i hjørnet av dusjsonen.",
      },
      {
        q: "Hvorfor velge hjørnesluk?",
        a: "Vannet ledes til hjørnet med diagonalt fall, slik at gulvflaten kan legges med hele storformat-fliser uten oppdeling rundt et sentrert sluk.",
      },
      {
        q: "Kan jeg bytte fra hjørnerist til slukrenne senere?",
        a: "Ja. Med hjørneplassert gulvsluk kan du bytte slukdesign fra hjørnerist til slukrenne med eksentrisk utløp uten å flytte selve gulvsluket.",
      },
    ],
  },
];

export function getLandingBySlug(slug: string): LandingCategory | null {
  return landingCategories.find((l) => l.slug === slug) ?? null;
}

export function getLandingProductCategories(
  landing: LandingCategory
): ProductCategory[] {
  return landing.categoryIds
    .map((id) => productCategories.find((c) => c.id === id))
    .filter((c): c is ProductCategory => !!c);
}
