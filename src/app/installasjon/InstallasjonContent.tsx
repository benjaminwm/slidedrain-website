"use client";

import { useState } from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const gulvslukSteps = [
  {
    step: 1,
    title: "Installer slukpotten",
    desc: "Lag et Ø182 mm hull i sponplaten, eller bygg en ramme med trebjelkelaget. Plasser slukpotten i hullet og koble utløpet på avløpsrøret. Skru potten fast med rustfrie skruer med forsenket hode. Plasser monteringsverktøyet på slukpotten og kontroller at den er installert i vater.",
    note: "Flensen på slukpotten er designet for å passe i et Ø215 mm nedfreset spor.",
  },
  {
    step: 2,
    title: "Still inn monteringsverktøyet",
    desc: "Plasser monteringsverktøyet på slukpotten og kontroller at det står i vater. Still den ytre forskalingsringen inn til ønsket gulvhøyde ved hjelp av måleskalaen på sidene. Skalaen måler 0–40 mm fra flensen av slukpotten.",
    note: "Påfør litt silikon på verktøyet der støpen vil være i kontakt, for enkel løsning etterpå.",
  },
  {
    step: 3,
    title: "Støp gulvet",
    desc: "Legg gulvstøpen mens verktøyet fortsatt er plassert på slukpotten, ferdig innstilt til ønsket gulvhøyde. Fyll på med støpemasse helt til gulvet er på linje med kanten markert med piler. La monteringsverktøyet stå i ro til støpen har herdet ferdig.",
  },
  {
    step: 4,
    title: "Ta vekk monteringsverktøyet",
    desc: "Kontroller at gulvstøpen er herdet i henhold til leverandørens brukerveiledning. Vrikk forsiktig på forskalingsringen og ta den av. Gjør det samme med kjernen. Fjern smuss og rund av kantene på støpen dersom de er skarpe.",
  },
  {
    step: 5,
    title: "Skyv slukoverdelen ned i slukpotten",
    desc: "Ta ut vannlåsen og legg den til sides. Sjekk at veggene i slukpotten er frie for smuss. Smør leppepakningen med silikon. Styr snap-låsene på slukoverdelen inn mot matchende mot-snaps i slukpotten, og dytt ned helt til slukoverdelen går i flukt med gulvet.",
    note: "NB! Snap-låsene lar seg ikke demontere etter de går i lås!",
  },
  {
    step: 6,
    title: "Stryk ut slukmansjetten våt-i-våt",
    desc: "Brett slukmansjetten inn mot midten av innløpet. Påfør smøremembran på gulvet under slukmansjetten. Stryk mansjetten ut over den våte smøremembranen uten kroll. Påfør et nytt lag med smøremembran på oversiden. Installer vannlåsen ved å først fukte o-ringen og så dytte den ned.",
  },
];

const renneSteps = [
  {
    step: 1,
    title: "Plasser slukrennen",
    desc: "Plasser rennen over gulvsluket slik at du kan planlegge flisleggingen av gulvet. Kontroller at vannlåsen kan frigjøres. Ved vegg-nær installasjon, plasser rennen etter flislegging av vegg.",
  },
  {
    step: 2,
    title: "Påfør flislim og fest rennen",
    desc: "Påfør flislim og fest rennen i ønsket plassering. For å få samme høyde på ferdig flislagt gulv og tile insert, må flislimet på utsiden av rennen bygge 5,5 mm mer enn flislimet under rennen.",
    note: "Ved flistykkelser under 9,5 mm må du påføre ekstra flislim på utsiden av rennen.",
  },
  {
    step: 3,
    title: "Legg gulvflisene rundt rennen",
    desc: "Legg gulvflisene rundt rennen. Sørg for at flisene legges i en høyde som vil være lik som høyden til din flislagte tile insert.",
  },
  {
    step: 4,
    title: "Tilskjær og lim flis til tile inserten",
    desc: "Kutt flis tilpasset målene til tile inserten. Bruk vannbestandig monteringslim eller flislim ved festing av flis.",
    note: "Ved flistykkelser under 9,5 mm må du påføre et lag med flislim eller ekstra monteringslim under flis i tile inserten.",
  },
  {
    step: 5,
    title: "Fug flisene og installer tile inserten",
    desc: "Fug flisene rundt slukrennen. Rengjør rennen og plasser den flislagte tile inserten i rennen. Du har nå installert slukrennen!",
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
                    href="https://slidedrain.no/wp-content/uploads/2024/04/Monteringsanvisning-Slidedrain-Model-1.pdf"
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
                    href="https://slidedrain.no/wp-content/uploads/2024/04/Slidedrain-Model-1-FDV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    Bruk og vedlikehold (FDV)
                  </a>
                </div>
              </FadeUp>
              {gulvslukSteps.map((s, i) => (
                <FadeUp
                  key={s.step}
                  className="mb-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="bg-gray-bg rounded-xl p-6">
                    <div className="flex items-start gap-4">
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

              <FadeUp className="mt-10">
                <h3 className="text-xl font-bold text-navy mb-3">
                  Rengjøring av vannlås
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7] mb-3">
                  Vannlåsen har en klassisk design bestående av to deler. Du bør
                  rense vannlås og sluk hvert halvår, eller ved behov.
                </p>
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
                  Installasjon av slukrenne med tile insert
                </h2>
                <p className="text-[15px] text-text-light leading-relaxed mb-4">
                  Slukrennen har en maksimal justering på 50 mm i bredden og
                  105 mm i lengden. Ved vegg-nær plassering: monter slukpotten
                  med avstand X = T &minus; 8 mm fra vegg uten fliser, der T er
                  veggtykkelsen.
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
                </div>
              </FadeUp>
              {renneSteps.map((s, i) => (
                <FadeUp
                  key={s.step}
                  className="mb-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="bg-gray-bg rounded-xl p-6">
                    <div className="flex items-start gap-4">
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
