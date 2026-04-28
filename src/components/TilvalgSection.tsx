"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import VideoEmbed from "./VideoEmbed";

const tilvalg = [
  {
    level: "Tilvalg 1 – Basis",
    title: "Hjørnerist i Børstet Stål",
    desc: "Robust og tidløst design som kan inngå i prosjektets standardleveranse, med en prisgunstig løsning som styrker konkurransekraften i entreprisen.",
    insituImage: "/images/tilvalg-1-insitu.png",
    featured: false,
  },
  {
    level: "Tilvalg 2 – Pluss",
    title: "Hjørnerist med Tile Insert",
    desc: "En estetisk videreutvikling av den klassiske hjørneristen som integreres sømløst med baderommets egne fliser. Ved å erstatte stålflaten med flis blir sluket nærmest usynlig og gir et mer stilrent uttrykk.",
    insituImage: "/images/tilvalg-2-insitu.png",
    featured: false,
  },
  {
    level: "Tilvalg 3 – Premium",
    title: "Slukrenne med Tile Insert",
    desc: "En oppgradering som forvandler hjørnesluket til en moderne slukrenne i lengder fra 700–1200 mm med eksentrisk utskjæring. Tilpasset storformat-fliser og ensidig fall mot vegg for en eksklusiv finish.",
    insituImage: "/images/tilvalg-3-insitu.png",
    featured: false,
  },
];

export default function TilvalgSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="tilvalg">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Samme gulvsluk,{" "}
            <span className="text-orange">flere kundevalg</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Ved å bruke Slidedrain som felles teknisk løsning sikres lik
            utførelse i hele prosjektet, uavhengig av kundens designvalg. Dette
            standardiserer tekniske detaljer, utvider tilvalgsvinduet og
            effektiviserer byggeprosessen.
          </p>
        </FadeUp>

        <VideoEmbed />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {tilvalg.map((t, i) => (
            <FadeUp
              key={i}
              className={`relative bg-white rounded-xl overflow-hidden border ${
                t.featured
                  ? "border-orange shadow-[0_4px_20px_rgba(251,92,19,0.12)]"
                  : "border-navy/8"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange z-10" />
              )}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={t.insituImage}
                  alt={`${t.title} installert`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-orange mb-2">
                  {t.level}
                </div>
                <h3 className="text-[22px] font-semibold mb-4">{t.title}</h3>
                <p className="text-[15px] text-text-light leading-[1.7]">
                  {t.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
