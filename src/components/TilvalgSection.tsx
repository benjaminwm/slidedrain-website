"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import VideoEmbed from "./VideoEmbed";

const CDN = "https://cdn.byggtjeneste.no/nobb";

const tilvalg = [
  {
    level: "Tilvalg 1",
    title: "Basis \u2013 Hjørnerist i rustfritt stål",
    desc: "Robust og tidløst design som inngår i prosjektets standardleveranse med en prisgunstig profil som styrker konkurransekraften i entreprisen.",
    imageId: "426ca516-7f7e-4e06-b695-a36ff88015c1",
    featured: false,
  },
  {
    level: "Tilvalg 2",
    title: "Plus \u2013 Hjørnerist med Tile Insert",
    desc: "En estetisk videreutvikling av den klassiske hjørneristen som integreres sømløst med baderommets egne fliser. Ved å bytte ut stålflaten med flis blir sluket nesten usynlig for et mer stilrent uttrykk.",
    imageId: "356ad341-895f-46ea-919a-7910d7126651",
    featured: true,
  },
  {
    level: "Tilvalg 3",
    title: "Premium \u2013 Eksentrisk slukrenne med Tile Insert",
    desc: "Den ultimate oppgraderingen som forvandler hjørnesluket til en moderne slukrenne med lengder fra 700\u20131200 mm. Perfekt for storformat-fliser med ensidig fall mot vegg for en eksklusiv finish.",
    imageId: "1728db8c-b489-4797-86de-a2133072cc06",
    featured: false,
  },
];

export default function TilvalgSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="tilvalg">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Standardisert byggeprosess med{" "}
            <span className="text-orange">fleksibelt tilvalg</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain muliggjør en full teknisk standardisering med fritt
            tilvalg. Ved å benytte et hjørneplassert gulvsluk som felles teknisk
            løsning for rørføring, membran og tetningsdetaljer, sikres en
            identisk utførelse i hele prosjektet. Sluttkunden kan deretter velge
            mellom ulike synlige designnivåer sent i byggeprosessen.
          </p>
        </FadeUp>

        <VideoEmbed />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {tilvalg.map((t, i) => (
            <FadeUp
              key={i}
              className={`relative bg-white rounded-xl p-8 border overflow-hidden ${
                t.featured
                  ? "border-orange shadow-[0_4px_20px_rgba(251,92,19,0.12)]"
                  : "border-navy/8"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />
              )}
              <div className="bg-gray-bg rounded-xl flex items-center justify-center mb-6 p-4 aspect-square">
                <Image
                  src={`${CDN}/${t.imageId}/square`}
                  alt={t.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-orange mb-2">
                {t.level}
              </div>
              <h3 className="text-[22px] font-semibold mb-4">{t.title}</h3>
              <p className="text-[15px] text-text-light leading-[1.7]">
                {t.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
