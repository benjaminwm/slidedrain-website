"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const CDN = "https://cdn.byggtjeneste.no/nobb";

const modules = [
  {
    label: "Teknisk",
    title: "Slukpotte",
    desc: "Leveres med side-, bunn- eller skrått utløp (Ø75) for sømløs tilkobling til standard røropplegg.",
    images: [
      { id: "45f4deba-9a2f-4d53-930a-f86f4da7195e", alt: "Slukpotte Sideutløp" },
      { id: "07decb8c-c781-4d15-a9d3-99cf1203d253", alt: "Slukpotte Bunnutløp" },
      { id: "8ad5b7b6-8c9c-4e0f-9547-19e1532ddf5f", alt: "Slukpotte Skrått utløp" },
    ],
  },
  {
    label: "Teknisk",
    title: "Høydejusterbar slukoverdel",
    desc: "Teleskopfunksjon for 40 mm trinnløs høydejustering med integrert slukmansjett eller klemring i stål.",
    images: [
      { id: "2b80cbbb-4a19-4b47-9867-a6aec78fa29a", alt: "Slukoverdel APEX-mansjett" },
      { id: "a6097e40-733a-4e5f-9a01-a7a6ac86691f", alt: "Slukoverdel med Klemring" },
    ],
  },
  {
    label: "Synlig",
    title: "Slukrenner & Slukrister",
    desc: "Velg fritt mellom 25+ ulike design av slukrenner, hjørnerister og klassiske kvadratiske rister \u2013 uten å endre på den tekniske montasjen mellom gulvsluk og membran.",
    images: [
      { id: "c8a4aea6-2ad4-4a36-890c-d893335e7ccd", alt: "Slukrenne Tile Insert" },
      { id: "ec9e04c6-976c-4613-bb65-6f7927aac975", alt: "Slukrenne Rist" },
      { id: "356ad341-895f-46ea-919a-7910d7126651", alt: "Hjørnerist Tile Insert" },
    ],
  },
];

export default function SystemSection() {
  return (
    <section className="py-20 px-6" id="system">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Komplett modulært system for{" "}
            <span className="text-orange">maksimal fleksibilitet</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain Sluksystems modulære oppbygging skiller den tekniske
            installasjonen fra det synlige designet. Systemet er kompatibelt med
            de fleste rørkoblinger og membraner, hvor samme slukpotte har SINTEF
            Teknisk Godkjenning for å brukes som linje-, hjørne- og punktsluk.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <FadeUp
              key={i}
              className="relative bg-white rounded-xl p-9 border border-navy/8 shadow-[0_2px_16px_rgba(40,52,71,0.04)]"
            >
              <div className="absolute top-4 right-6 text-[72px] font-bold text-navy/5 leading-none">
                {i + 1}
              </div>

              {/* Label */}
              <span
                className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${
                  m.label === "Teknisk"
                    ? "bg-navy/8 text-navy"
                    : "bg-orange/10 text-orange"
                }`}
              >
                {m.label}
              </span>

              {/* Product images row */}
              <div className="flex items-center justify-start gap-2 mb-5">
                {m.images.map((img, j) => (
                  <div
                    key={j}
                    className="w-16 h-16 bg-gray-bg rounded-lg flex items-center justify-center p-1.5"
                  >
                    <Image
                      src={`${CDN}/${img.id}/square`}
                      alt={img.alt}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">{m.title}</h3>
              <p className="text-[15px] text-text-light leading-[1.7]">
                {m.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
