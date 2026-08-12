/**
 * Innhold for installasjonsguidene.
 *
 * Lå tidligere inne i en klientkomponent med faner (`activeTab === … &&`),
 * som gjorde at bare den aktive fanen havnet i server-HTML — resten var
 * usynlig for Google og AI-crawlere. Dataene er nå trukket ut hit slik at
 * hver guide er en egen server-rendret rute:
 *
 *   /installasjon                          → gulvsluk (steg 1–6 + klemring)
 *   /installasjon/montere-slukrenne        → slukrenner og rister
 *   /installasjon/ofte-stilte-sporsmal     → FAQ
 */

/**
 * De tre guidene, i rekkefølge. Én kilde for undermeny, sitemap og
 * kryss-lenking fra produktsider.
 */
export const installGuides = [
  {
    href: "/installasjon",
    label: "Gulvsluk",
    navLabel: "Montere gulvsluk",
  },
  {
    href: "/installasjon/montere-slukrenne",
    label: "Slukrenner & Rister",
    navLabel: "Montere slukrenne",
  },
  {
    href: "/installasjon/ofte-stilte-sporsmal",
    label: "Ofte stilte spørsmål",
    navLabel: "Ofte stilte spørsmål",
  },
] as const;

export type Step = {
  step: number;
  title: string;
  desc: string;
  image: string;
  note?: string;
};

export type Download = {
  href: string;
  label: string;
};

export type Faq = {
  q: string;
  a: string | string[];
};

/** Mux playback-ID for installasjonsfilmen (gulvsluk). */
export const INSTALL_VIDEO_PLAYBACK_ID =
  "uilDZqS46Gezh3hdn4mkIwBp4a3SMRb4t3jXwzsaN00M";

export const INSTALL_VIDEO_EMBED_URL =
  `https://player.mux.com/${INSTALL_VIDEO_PLAYBACK_ID}` +
  "?metadata-video-title=Installasjonfilm+kort+norsk&thumbnail-time=20&start-time=20" +
  "&accent-color=%23ff7300&primary-color=%23ffffff&secondary-color=%23ff7300";

export const INSTALL_VIDEO_THUMBNAIL_URL =
  `https://image.mux.com/${INSTALL_VIDEO_PLAYBACK_ID}/thumbnail.jpg?time=20`;

/**
 * Publiseringsdato for installasjonsfilmen. Brukes i VideoObject-schema
 * (uploadDate er påkrevd for rich results). Satt til datoen filmen ble
 * lagt ut på nettsiden — juster hvis den faktiske datoen er en annen.
 */
export const INSTALL_VIDEO_UPLOAD_DATE = "2026-05-19";

export const gulvslukSteps: Step[] = [
  {
    step: 1,
    title: "Installer slukpotten",
    desc: "Lag et Ø182 mm hull i sponplaten, eller bygg en ramme med trebjelkelaget. Plasser slukpotten i hullet og koble utløpet på avløpsrøret. Skru potten fast med rustfrie skruer med forsenket hode. Plasser monteringsverktøyet på slukpotten og kontroller at den er installert i vater.",
    note: "Flensen på slukpotten er designet for å passe i et Ø215 mm nedfreset spor.",
    image: "/images/installasjon/steg-1.webp",
  },
  {
    step: 2,
    title: "Still inn monteringsverktøyet",
    desc: "Plasser monteringsverktøyet på slukpotten og kontroller at det står i vater. Still den ytre forskalingsringen inn til ønsket gulvhøyde ved hjelp av måleskalaen på sidene. Skalaen måler 0–40 mm fra flensen av slukpotten.",
    note: "Påfør litt silikon på verktøyet der støpen vil være i kontakt, for enkel løsning etterpå.",
    image: "/images/installasjon/steg-2.webp",
  },
  {
    step: 3,
    title: "Støp gulvet",
    desc: "Legg gulvstøpen mens verktøyet fortsatt er plassert på slukpotten, ferdig innstilt til ønsket gulvhøyde. Fyll på med støpemasse helt til gulvet er på linje med kanten markert med piler. La monteringsverktøyet stå i ro til støpen har herdet ferdig.",
    image: "/images/installasjon/steg-3.webp",
  },
  {
    step: 4,
    title: "Ta vekk monteringsverktøyet",
    desc: "Kontroller at gulvstøpen er herdet i henhold til leverandørens brukerveiledning. Vrikk forsiktig på forskalingsringen og ta den av. Gjør det samme med kjernen. Fjern smuss og rund av kantene på støpen dersom de er skarpe.",
    image: "/images/installasjon/steg-4.webp",
  },
  {
    step: 5,
    title: "Skyv slukoverdelen ned i slukpotten",
    desc: "Ta ut vannlåsen og legg den til sides. Sjekk at veggene i slukpotten er frie for smuss. Smør leppepakningen med silikon. Styr snap-låsene på slukoverdelen inn mot matchende mot-snaps i slukpotten, og dytt ned helt til slukoverdelen går i flukt med gulvet.",
    note: "NB! Snap-låsene lar seg ikke demontere etter de går i lås!",
    image: "/images/installasjon/steg-5-apex.webp",
  },
  {
    step: 6,
    title: "Stryk ut slukmansjetten våt-i-våt",
    desc: "Brett slukmansjetten inn mot midten av innløpet. Påfør smøremembran på gulvet under slukmansjetten. Stryk mansjetten ut over den våte smøremembranen uten kroll. Påfør et nytt lag med smøremembran på oversiden. Installer vannlåsen ved å først fukte o-ringen og så dytte den ned.",
    image: "/images/installasjon/steg-6-apex.webp",
  },
];

export const klemringSteps: Step[] = [
  {
    step: 5,
    title: "Sett slukoverdelen ned i slukpotten",
    desc: "Ta ut vannlåsen og legg den til side. Sjekk at slukpotten er fri for smuss. Smør leppepakningen med silikon. Styr snap-låsene på slukoverdelen inn mot matchende mot-snaps i slukpotten, og dytt ned helt til slukoverdelen går i flukt med gulvet. Installer baneveremembranen i henhold til leverandørens anvisning, og kutt et lite hull i membranen over slukåpningen.",
    note: "NB! Snap-låsene lar seg ikke demontere etter de går i lås!",
    image: "/images/installasjon/steg-5-klemring.webp",
  },
  {
    step: 6,
    title: "Form membranen og stram klemringen",
    desc: "Varm opp membranen og tre skruene gjennom klemringen uten å stramme. Form membranen rundt klemringen mens den avkjøles. Trykk klemringen ned mens du strammer skruene med skrutrekker. Trim hullet langs kanten av klemringen. Installer vannlåsen ved å først fukte o-ringen og så dytte den ned.",
    note: "Unngå å varme opp membranen for mye, da plasten kan mykne.",
    image: "/images/installasjon/steg-6-klemring.webp",
  },
];

export const renneTileSteps: Step[] = [
  {
    step: 1,
    title: "Plasser slukrennen",
    desc: "Plasser rennen over gulvsluket slik at du kan planlegge flisleggingen av gulvet. Kontroller at vannlåsen kan frigjøres. Ved vegg-nær installasjon, plasser rennen etter flislegging av vegg.",
    image: "/images/installasjon/renne-tile-1.webp",
  },
  {
    step: 2,
    title: "Påfør flislim og fest rennen",
    desc: "Påfør flislim og fest rennen i ønsket plassering. For å få samme høyde på ferdig flislagt gulv og tile insert, må flislimet på utsiden av rennen bygge 5,5 mm mer enn flislimet under rennen.",
    note: "Ved flistykkelser under 9,5 mm må du påføre ekstra flislim på utsiden av rennen.",
    image: "/images/installasjon/renne-tile-2.webp",
  },
  {
    step: 3,
    title: "Legg gulvflisene rundt rennen",
    desc: "Legg gulvflisene rundt rennen. Sørg for at flisene legges i en høyde som vil være lik som høyden til din flislagte tile insert.",
    image: "/images/installasjon/renne-tile-3.webp",
  },
  {
    step: 4,
    title: "Tilskjær og lim flis til tile inserten",
    desc: "Kutt flis tilpasset målene til tile inserten (785,8 × 185,8 mm). Bruk vannbestandig monteringslim eller flislim ved festing av flis.",
    note: "Ved flistykkelser under 9,5 mm må du påføre et lag med flislim eller ekstra monteringslim under flis i tile inserten.",
    image: "/images/installasjon/renne-tile-4.webp",
  },
  {
    step: 5,
    title: "Fug flisene og installer tile inserten",
    desc: "Fug flisene rundt slukrennen. Rengjør rennen og plasser den flislagte tile inserten i rennen. Du har nå installert slukrennen!",
    image: "/images/installasjon/renne-tile-5.webp",
  },
];

export const renneRistSteps: Step[] = [
  {
    step: 1,
    title: "Plasser slukrennen",
    desc: "Plasser rennen over gulvsluket slik at du kan planlegge flisleggingen av gulvet. Kontroller at vannlåsen kan frigjøres. Ved vegg-nær installasjon, plasser rennen etter flislegging av vegg.",
    image: "/images/installasjon/renne-rist-1.webp",
  },
  {
    step: 2,
    title: "Påfør flislim og fest rennen",
    desc: "Påfør flislim og fest rennen i ønsket plassering. Rennen må plasseres i en høyde som tilsvarer 1 mm lavere enn flisgulvet. Slukrennen bygger totalt 9 mm, mens rennen bygger 8 mm.",
    image: "/images/installasjon/renne-rist-2.webp",
  },
  {
    step: 3,
    title: "Legg gulvflisene rundt rennen",
    desc: "Legg gulvflisene rundt rennen. Flisene legges 1 mm over rennen, i samme høyde som risten.",
    image: "/images/installasjon/renne-rist-3.webp",
  },
  {
    step: 4,
    title: "Fug flisene og installer risten",
    desc: "Fug flisene rundt slukrennen, inkludert over kantene. Etter herding rengjør du rennen, fjerner beskyttelsesfolien på risten og plasserer den i rennen.",
    image: "/images/installasjon/renne-rist-4.webp",
  },
];

export const gulvslukDownloads: Download[] = [
  {
    href: "/downloads/Monteringsanvisning-Slidedrain-Model-1-Slukmansjett.pdf",
    label: "Monteringsanvisning – Slukmansjett",
  },
  {
    href: "/downloads/Monteringsanvisning-Slidedrain-Model-1-Klemring.pdf",
    label: "Monteringsanvisning – Klemring",
  },
  {
    href: "/downloads/FDV-Slidedrain-Model-1.pdf",
    label: "Bruk og vedlikehold (FDV)",
  },
  {
    href: "/downloads/Produktsertifikat-Slidedrain-Model-1.pdf",
    label: "Teknisk Godkjenning",
  },
  {
    href: "/downloads/EPD-Slidedrain-Model-1.pdf",
    label: "Miljødeklarasjon (EPD)",
  },
  {
    href: "/downloads/Slidedrain-BIM-modeller.zip",
    label: "BIM-modeller (IFC/RFA/SAT)",
  },
];

export const renneDownloads: Download[] = [
  {
    href: "/downloads/Monteringsanvisning-Slidedrain-Slukrenner.pdf",
    label: "Monteringsanvisning (PDF)",
  },
  {
    href: "/downloads/Produktsertifikat-Slidedrain-Model-1.pdf",
    label: "Teknisk Godkjenning",
  },
  {
    href: "/downloads/EPD-Slidedrain-Model-1.pdf",
    label: "Miljødeklarasjon (EPD)",
  },
  {
    href: "/downloads/Slidedrain-BIM-modeller.zip",
    label: "BIM-modeller (IFC/RFA/SAT)",
  },
];

export const faqs: Faq[] = [
  {
    q: "Må jeg kjøpe slukmansjetten separat?",
    a: "Nei. Slukoverdelen leveres med en ferdig integrert slukmansjett. Det eneste du trenger å gjøre er å påføre godkjent membran vått-i-vått, i henhold til membranleverandørens anvisninger.",
  },
  {
    q: "Hvor lenge kan jeg bruke monteringsverktøyet?",
    a: "Monteringsverktøyet er designet for å være robust og tåle forhold som kan oppstå på byggeplass. Dersom du skyller monteringsverktøyet og fjerner smuss etter bruk, så skal det vare i lang tid.",
  },
  {
    q: "Hvilken type slukrist passer til Slidedrain Gulvsluk?",
    a: [
      "Du kan benytte vanlige rektangulære slukrister med ramme til flisbelagt gulv. Det viktigste er å sikre at vannlåsen, som har en diameter på Ø126 mm, enkelt kan tas ut for rengjøring og vedlikehold.",
      "Slidedrain sine egne slukrister og slukrenner er spesielt utviklet for bruk med Slidedrain Gulvsluk, og gir stor fleksibilitet under installasjonen.",
      "Slidedrain sin sirkulære slukrist er utviklet for slukoverdelen med klemring, og er beregnet for bruk på vinylgulv.",
    ],
  },
  {
    q: "Fungerer Slidedrain Gulvsluk til vinylgulv?",
    a: [
      "Ja. Slidedrain Gulvsluk kan benyttes med vinylgulv ved bruk av slukoverdel med klemring i rustfritt stål. Løsningen er også kompatibel med andre typer membraner.",
      "Slidedrain sin sirkulære slukrist er spesielt utviklet for slukoverdelen med klemring, og er beregnet for bruk sammen med vinylgulv.",
    ],
  },
  {
    q: "Må jeg kjøpe alle tre gulvsluk-produktene?",
    a: [
      "Monteringsverktøyet kan gjenbrukes i fremtidige prosjekter, slik at du ikke trenger å kjøpe dette på nytt ved hver installasjon.",
      "Slidedrain Gulvsluk kan benyttes som punktsluk, linjesluk eller hjørnesluk. Løsningen kombineres med kvadratisk slukrist, slukrenne eller hjørnerist fra produktserien Slidedrain Slukrenner og Slukrister.",
      "Slidedrain Sluksystem har teknisk godkjenning fra SINTEF og er utviklet for sikker og fleksibel installasjon i moderne våtrom.",
    ],
  },
  {
    q: "Hva slags membran kan jeg benytte?",
    a: [
      "Slidedrain Gulvsluk sin Slukoverdel med påstøpt mansjett kan brukes med alle SINTEF-godkjente påstrykningsmembraner og foliemembraner.",
      "Se oversikt her: https://www.sintefcertification.no/Contents/Index/29",
      "Slidedrain Slukoverdel med klemring kan brukes med alle SINTEF-godkjente påstrykningsmembraner, foliemembraner og banevaremembraner.",
    ],
  },
  {
    q: "Hva slags gulvsluk kan jeg bruke til Slidedrain Slukrenner og Slukrister?",
    a: [
      "Slidedrain Slukrenner og Slukrister passer med alle sirkulære gulvsluk, og kan benyttes i henhold til bestemmelsene i TEK17 og Byggforskserien.",
      "For maksimal fleksibilitet, optimal tilpasning og en trygg installasjon anbefaler vi bruk sammen med Slidedrain Gulvsluk.",
      "Slidedrain Sluksystem har SINTEF Teknisk Godkjenning, og forutsetter at systemet benyttes i sin helhet med Slidedrain Gulvsluk i kombinasjon med Slidedrain Slukrenner og Slukrister.",
    ],
  },
  {
    q: "Hvor mye vekt tåler slukrennene?",
    a: "De tåler minst 200 kg. Slukrennene er sertifisert i henhold til EN 1253-1, belastningsklasse K3, med vektbelastningstest på 300 kg.",
  },
  {
    q: "Hvor mye vann kan slukrennene ta unna?",
    a: "Alle slukrenner og slukrister er testet til å drenere vann med en kapasitet på over 0,8 liter/sekund, i henhold til Norsk Standard.",
  },
];

/** Flat tekst av et FAQ-svar — brukes i FAQPage-schema. */
export function faqAnswerText(a: Faq["a"]): string {
  return Array.isArray(a) ? a.join(" ") : a;
}
