"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";
import VideoEmbed from "./VideoEmbed";

const CDN = "https://cdn.byggtjeneste.no/nobb";

const tilvalg = [
  {
    level: "Tilvalg 1 \u2013 Basis",
    title: "Hjørnerist i Børstet Stål",
    desc: "Robust og tidløst design som kan inngå i prosjektets standardleveranse, med en prisgunstig løsning som styrker konkurransekraften i entreprisen.",
    productImage: "/images/tilvalg-1-product.png",
    insituImage: "/images/tilvalg-1-insitu.png",
    featured: false,
  },
  {
    level: "Tilvalg 2 \u2013 Pluss",
    title: "Hjørnerist med Tile Insert",
    desc: "En estetisk videreutvikling av den klassiske hjørneristen som integreres sømløst med baderommets egne fliser. Ved å erstatte stålflaten med flis blir sluket nærmest usynlig og gir et mer stilrent uttrykk.",
    productImage: `${CDN}/356ad341-895f-46ea-919a-7910d7126651/square`,
    insituImage: "/images/tilvalg-2-insitu.png",
    featured: false,
  },
  {
    level: "Tilvalg 3 \u2013 Premium",
    title: "Slukrenne med Tile Insert",
    desc: "En oppgradering som forvandler hjørnesluket til en moderne slukrenne i lengder fra 700\u20131200 mm med eksentrisk utskjæring. Tilpasset storformat-fliser og ensidig fall mot vegg for en eksklusiv finish.",
    productImage: "/images/tilvalg-3-product.png",
    insituImage: "/images/tilvalg-3-insitu.png",
    featured: false,
  },
];

export default function TilvalgSection() {
  const [showInsitu, setShowInsitu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInsitu((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
              className={`relative bg-white rounded-xl p-8 border overflow-hidden ${
                t.featured
                  ? "border-orange shadow-[0_4px_20px_rgba(251,92,19,0.12)]"
                  : "border-navy/8"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />
              )}
              <div className="bg-gray-bg rounded-xl flex items-center justify-center mb-6 p-4 aspect-square relative overflow-hidden">
                <Image
                  src={t.productImage}
                  alt={t.title}
                  width={400}
                  height={400}
                  className={`absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain transition-opacity duration-700 ${
                    showInsitu ? "opacity-0" : "opacity-100"
                  }`}
                  unoptimized
                />
                <Image
                  src={t.insituImage}
                  alt={`${t.title} installert`}
                  width={600}
                  height={600}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    showInsitu ? "opacity-100" : "opacity-0"
                  }`}
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
