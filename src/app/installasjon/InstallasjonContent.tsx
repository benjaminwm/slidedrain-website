"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

type Step = {
  step: number;
  title: string;
  desc: string;
  image: string;
  note?: string;
};

const gulvslukSteps: Step[] = [
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

const klemringSteps: Step[] = [
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

const renneTileSteps: Step[] = [
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

const renneRistSteps: Step[] = [
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

const faqs = [
  {
    q: "Må jeg kjøpe slukmansjetten separat?",
    a: "Nei. Slukmansjettene kommer ferdig påstøpt og tilkuttet slukoverdelen. Alt du behøver å gjøre er å smøre godkjent membran våt i våt, i henhold til membranleverandørens instrukser.",
  },
  {
    q: "Hvor lenge kan jeg bruke monteringsverktøyet?",
    a: "Monteringsverktøyet er designet for å være robust og tåle forhold som kan oppstå på byggeplass. Dersom du skyller monteringsverktøyet og fjerner smuss etter bruk, så skal det vare i lang tid.",
  },
  {
    q: "Hvilken type slukrist passer til Slidedrain Model 1?",
    a: "Du kan benytte vanlige sirkulære og rektangulære slukrister med ramme til flisbelagt gulv. Det viktigste er å sørge for at det er mulig å få ut vannlåsen, som har en diameter på Ø126 mm.",
  },
  {
    q: "Må jeg kjøpe alle tre gulvsluk-produktene?",
    a: "Du er nødt til å ha både slukpotte, slukoverdel og monteringsverktøy for en optimal installasjon. Monteringsverktøyet er gjenbrukbart, så du behøver ikke å kjøpe dette nytt for hvert sluk.",
  },
  {
    q: "Hva slags membran kan jeg benytte?",
    a: "Slidedrain Model 1 sin slukoverdel med Apex-mansjett kan benyttes med alle SINTEF-godkjente påstryknings- og foliemembraner. Slukoverdel med klemring kan i tillegg benyttes med baneväremembraner.",
  },
  {
    q: "Hva slags gulvsluk kan jeg bruke med slukrennene?",
    a: "Slidedrain Slukrenner passer med alle sirkulære gulvsluk. Vi anbefaler Slidedrain Gulvsluk for mest mulig fleksibilitet og sikkerhet.",
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

type Tab = "gulvsluk" | "renner" | "faq";

export default function InstallasjonContent() {
  const [activeTab, setActiveTab] = useState<Tab>("gulvsluk");

  const tabs: { id: Tab; label: string }[] = [
    { id: "gulvsluk", label: "Gulvsluk" },
    { id: "renner", label: "Slukrenner & Rister" },
    { id: "faq", label: "Ofte stilte spørsmål" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-12 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Installasjonsveiledning
          </span>
          <h1 className="text-[42px] max-lg:text-[34px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 text-navy">
            Slik installerer du{" "}
            <span className="text-orange">Slidedrain</span>
          </h1>
          <p className="text-lg text-text-light leading-[1.7] font-light max-w-[700px] mx-auto mb-10">
            Slidedrain Gulvsluk, Slukrenner og Slukrister er designet for stor
            fleksibilitet under installasjon. Følg steg-for-steg guiden under.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeTab === t.id
                    ? "bg-orange text-white"
                    : "bg-gray-bg text-text-light hover:text-navy"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          {activeTab === "gulvsluk" && (
            <>
              <FadeUp>
                <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-3">
                  Installasjon av gulvsluket på 6 steg
                </h2>
                <p className="text-[15px] text-text-light leading-relaxed mb-4">
                  Stegene inkluderer installasjon av slukoverdel med integrert
                  Apex-mansjett. For installasjon i støpt dekke, start fra steg 2.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <a
                    href="/downloads/Monteringsanvisning-Slidedrain-Model-1-Slukmansjett.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Monteringsanvisning – Slukmansjett
                  </a>
                  <a
                    href="/downloads/Monteringsanvisning-Slidedrain-Model-1-Klemring.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Monteringsanvisning – Klemring
                  </a>
                  <a
                    href="/downloads/FDV-Slidedrain-Model-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Bruk og vedlikehold (FDV)
                  </a>
                  <a
                    href="/downloads/Produktsertifikat-Slidedrain-Model-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Produktsertifikat
                  </a>
                  <a
                    href="/downloads/EPD-Slidedrain-Model-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Miljødeklarasjon (EPD)
                  </a>
                  <a
                    href="/downloads/Slidedrain-BIM-modeller.zip"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    BIM-modeller (IFC/RFA/SAT)
                  </a>
                </div>
              </FadeUp>
              {gulvslukSteps.map((s, i) => (
                <FadeUp
                  key={s.step}
                  className="mb-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <div className="bg-white border-b border-navy/5">
                      <Image
                        src={s.image}
                        alt={`Steg ${s.step}: ${s.title}`}
                        width={1024}
                        height={768}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-6 flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
                        {s.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy text-[16px] mb-2">
                          {s.title}
                        </h3>
                        <p className="text-[14px] text-text-light leading-[1.7]">
                          {s.desc}
                        </p>
                        {s.note && (
                          <p className="text-[13px] text-orange mt-2 font-medium">
                            {s.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <FadeUp className="mt-12">
                <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                  Alternativ: Slukoverdel med klemring
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-6">
                  Bruker du slukoverdel med klemring (for baneveremembran), er
                  steg 1–4 identiske. Følg disse stegene for steg 5 og 6 i
                  stedet:
                </p>
              </FadeUp>
              {klemringSteps.map((s, i) => (
                <FadeUp
                  key={`klem-${s.step}`}
                  className="mb-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <div className="bg-white border-b border-navy/5">
                      <Image
                        src={s.image}
                        alt={`Klemring steg ${s.step}: ${s.title}`}
                        width={1024}
                        height={765}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-6 flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
                        {s.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy text-[16px] mb-2">
                          {s.title}
                        </h3>
                        <p className="text-[14px] text-text-light leading-[1.7]">
                          {s.desc}
                        </p>
                        {s.note && (
                          <p className="text-[13px] text-orange mt-2 font-medium">
                            {s.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <FadeUp className="mt-12 bg-gray-bg rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy mb-4">
                  Membrankompatibilitet
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-[14px]">
                  <div>
                    <h4 className="font-semibold text-orange mb-2">
                      Slukoverdel med Apex-mansjett
                    </h4>
                    <p className="text-text-light leading-[1.7]">
                      Kompatibel med alle SINTEF-godkjente smøremembraner og
                      foliemembraner.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-2">
                      Slukoverdel med klemring
                    </h4>
                    <p className="text-text-light leading-[1.7]">
                      Kompatibel med alle SINTEF-godkjente smøremembraner,
                      foliemembraner og baneveremembraner.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp className="mt-12">
                <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                  Rengjøring av vannlås
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                  Vannlåsen har en klassisk design bestående av to deler. Du bør
                  rense vannlås og sluk hvert halvår, eller ved behov.
                </p>
                <div className="bg-gray-bg rounded-xl overflow-hidden mb-5">
                  <div className="bg-white">
                    <Image
                      src="/images/installasjon/vannlas-rengjoring.webp"
                      alt="Rengjøring av vannlås til Slidedrain gulvsluk"
                      width={1010}
                      height={1024}
                      className="w-full h-auto max-w-md mx-auto"
                    />
                  </div>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-[14px] text-text-light leading-[1.7]">
                  <li>Løsne vannlåsen fra sluket ved å dra i håndtaket merket &ldquo;Pull&rdquo;.</li>
                  <li>Del vannlåsen i to ved å klemme sammen de to stiplede områdene på underdelen.</li>
                  <li>Spyl delene med vann for å fjerne smuss. Benytt en børste der smusset sitter godt fast.</li>
                  <li>Monter vannlåsen igjen ved å dytte de to delene sammen til du hører et klikk. Fukt pakningen og dytt den ned i sluket.</li>
                </ol>
              </FadeUp>
            </>
          )}

          {activeTab === "renner" && (
            <>
              <FadeUp>
                <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-3">
                  Installasjon av slukrenner og rister
                </h2>
                <p className="text-[15px] text-text-light leading-relaxed mb-4">
                  Slidedrain Slukrenner installeres ovenfor membranen og passer
                  med alle sirkulære gulvsluk. Velg mellom variant med
                  flislagt tile insert eller med rist.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <a
                    href="https://slidedrain.no/wp-content/uploads/2024/04/Monteringsanvisning-Slukrenner-og-Rister.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Monteringsanvisning (PDF)
                  </a>
                  <a
                    href="/downloads/Produktsertifikat-Slidedrain-Model-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Produktsertifikat
                  </a>
                  <a
                    href="/downloads/EPD-Slidedrain-Model-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Miljødeklarasjon (EPD)
                  </a>
                  <a
                    href="/downloads/Slidedrain-BIM-modeller.zip"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    BIM-modeller (IFC/RFA/SAT)
                  </a>
                </div>
              </FadeUp>

              <FadeUp className="mt-4">
                <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                  Posisjonering av gulvsluk og slukrenne
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                  Slukrennen kan justeres opptil 50 mm i bredden og 105 mm i
                  lengden over et tradisjonelt sirkulært gulvsluk med Ø130 mm
                  vannlås. Det gir stor frihet i plasseringen uten at
                  rørleggeren må treffe millimeterpresist.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <Image
                      src="/images/installasjon/vannlas-sentrering-1.webp"
                      alt="Vannlås-sentrering del 1"
                      width={1024}
                      height={553}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <Image
                      src="/images/installasjon/vannlas-sentrering-2.webp"
                      alt="Vannlås-sentrering del 2"
                      width={1024}
                      height={542}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </FadeUp>

              <FadeUp className="mt-4">
                <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                  Veggnær plassering av gulvsluket
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                  Ved veggnær installasjon plasseres slukpotten med avstand{" "}
                  <strong className="text-navy">X = T − 8 mm</strong> fra
                  veggen uten fliser, der T er veggtykkelsen. Dette sentrerer
                  slukrennen over vannlåsen og gir 25 mm justeringsmulighet.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <Image
                      src="/images/installasjon/veggnar-A.webp"
                      alt="Veggnær plassering steg A"
                      width={1024}
                      height={661}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <Image
                      src="/images/installasjon/veggnar-B.webp"
                      alt="Veggnær plassering steg B"
                      width={1024}
                      height={660}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </FadeUp>

              <FadeUp className="mt-4">
                <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                  Slukrenne med Tile Insert
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-6">
                  Tile insert-varianten flislegges av flislegger og blir
                  nærmest usynlig i gulvet.
                </p>
              </FadeUp>
              {renneTileSteps.map((s, i) => (
                <FadeUp
                  key={`tile-${s.step}`}
                  className="mb-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <div className="bg-white border-b border-navy/5">
                      <Image
                        src={s.image}
                        alt={`Tile insert steg ${s.step}: ${s.title}`}
                        width={1024}
                        height={811}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-6 flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
                        {s.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy text-[16px] mb-2">
                          {s.title}
                        </h3>
                        <p className="text-[14px] text-text-light leading-[1.7]">
                          {s.desc}
                        </p>
                        {s.note && (
                          <p className="text-[13px] text-orange mt-2 font-medium">
                            {s.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <FadeUp className="mt-12">
                <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                  Slukrenne med Rist
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-6">
                  Med rist-varianten leveres en ferdig produsert rist som
                  monteres i rennen etter flislegging.
                </p>
              </FadeUp>
              {renneRistSteps.map((s, i) => (
                <FadeUp
                  key={`rist-${s.step}`}
                  className="mb-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <div className="bg-white border-b border-navy/5">
                      <Image
                        src={s.image}
                        alt={`Rist steg ${s.step}: ${s.title}`}
                        width={1024}
                        height={811}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-6 flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
                        {s.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy text-[16px] mb-2">
                          {s.title}
                        </h3>
                        <p className="text-[14px] text-text-light leading-[1.7]">
                          {s.desc}
                        </p>
                        {s.note && (
                          <p className="text-[13px] text-orange mt-2 font-medium">
                            {s.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <FadeUp className="mt-12">
                <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                  Rengjøring av slukrennen
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                  Løft risten og legg den til siden. For tile insert-varianten
                  benyttes det medfølgende rist-verktøyet til løfting. Spyl
                  slukrennen med dusjen og fjern smuss.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <Image
                      src="/images/installasjon/rengjoring-tile-1.webp"
                      alt="Løft tile insert med medfølgende verktøy"
                      width={1024}
                      height={490}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-gray-bg rounded-xl overflow-hidden">
                    <Image
                      src="/images/installasjon/rengjoring-tile-2.webp"
                      alt="Spyl slukrennen og fjern smuss"
                      width={1024}
                      height={490}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="bg-orange/8 border-l-4 border-orange rounded-r-lg p-4">
                  <p className="text-[13px] text-navy leading-[1.6]">
                    <strong className="text-orange">Advarsel:</strong> Bruk av
                    harde skrubber og sterke kjemikalier medfører risiko for
                    skade på lakken på de sortlakkerte produktene.
                  </p>
                </div>
              </FadeUp>
            </>
          )}

          {activeTab === "faq" && (
            <>
              <FadeUp>
                <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-8">
                  Ofte stilte spørsmål
                </h2>
              </FadeUp>
              {faqs.map((f, i) => (
                <FadeUp
                  key={i}
                  className="mb-4"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <details className="bg-gray-bg rounded-xl p-5 group">
                    <summary className="font-semibold text-navy text-[15px] cursor-pointer list-none flex items-center justify-between">
                      {f.q}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 shrink-0 ml-3 transition-transform group-open:rotate-180">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <p className="text-[14px] text-text-light leading-[1.7] mt-3">
                      {f.a}
                    </p>
                  </details>
                </FadeUp>
              ))}

              <FadeUp className="mt-10 text-center">
                <p className="text-[15px] text-text-light mb-2">
                  Fikk du ikke svar på det du lurer på?
                </p>
                <a
                  href="mailto:kontakt@slidedrain.no"
                  className="text-orange font-semibold text-sm hover:underline"
                >
                  Send oss en e-post →
                </a>
              </FadeUp>
            </>
          )}
        </div>
      </section>
    </>
  );
}
