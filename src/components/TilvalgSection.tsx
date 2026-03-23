"use client";

import { LayersIcon, GridIcon, StarIcon } from "./icons";
import FadeUp from "./FadeUp";

const tilvalg = [
  {
    level: "Tilvalg 1",
    title: "Basis \u2013 Hjørnerist i rustfritt stål",
    desc: "Robust og tidløst design som inngår i prosjektets standardleveranse med en prisgunstig profil som styrker konkurransekraften i entreprisen.",
    icon: <LayersIcon className="w-7 h-7 stroke-orange" />,
    featured: false,
  },
  {
    level: "Tilvalg 2",
    title: "Plus \u2013 Hjørnerist med Tile Insert",
    desc: "En estetisk videreutvikling av den klassiske hjørneristen som integreres sømløst med baderommets egne fliser. Ved å bytte ut stålflaten med flis blir sluket nesten usynlig for et mer stilrent uttrykk.",
    icon: <GridIcon className="w-7 h-7 stroke-orange" />,
    featured: true,
  },
  {
    level: "Tilvalg 3",
    title: "Premium \u2013 Eksentrisk slukrenne med Tile Insert",
    desc: "Den ultimate oppgraderingen som forvandler hjørnesluket til en moderne slukrenne med lengder fra 700\u20131200 mm. Perfekt for storformat-fliser med ensidig fall mot vegg for en eksklusiv finish.",
    icon: <StarIcon className="w-7 h-7 stroke-orange" />,
    featured: false,
  },
];

export default function TilvalgSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="tilvalg">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Standardiserte tilvalg &ndash;{" "}
            <span className="text-orange">fra funksjonelt til eksklusivt</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain muliggjør en full teknisk standardisering med fritt
            tilvalg. Ved å benytte et hjørneplassert gulvsluk som felles teknisk
            løsning for rørføring, membran og tetningsdetaljer, sikres en
            identisk utførelse i hele prosjektet. Sluttkunden kan deretter velge
            mellom ulike synlige designnivåer sent i byggeprosessen.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tilvalg.map((t) => (
            <FadeUp
              key={t.level}
              className={`bg-white rounded-xl p-9 border transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden ${
                t.featured
                  ? "border-orange shadow-[0_4px_20px_rgba(251,92,19,0.12)]"
                  : "border-navy/8"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />
              )}
              <div className="w-14 h-14 bg-orange/8 rounded-xl flex items-center justify-center mb-5">
                {t.icon}
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
