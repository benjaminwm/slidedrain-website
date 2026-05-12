"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const CDN = "https://cdn.byggtjeneste.no/nobb";

const features = [
  {
    pill: "Monteringsverktøy",
    title: "Trinnløs høydejustering",
    accent: "0–40 mm",
    image: "/images/rorlegger/hoydejustering.webp",
    imageAlt: "Slidedrain monteringsverktøy med høydejustering",
    body: "Slukoverdelen kan høydejusteres trinnløst inntil 40 mm etter at slukpotta er montert, slik at sluket enkelt plasseres på badets laveste punkt. Monteringsverktøyet fungerer som forskaling med integrert vater og måleskala, og er gjenbrukbart prosjekt etter prosjekt.",
    bullets: [
      "Ingen forhøyningsringer eller fastsatte trinn",
      "Vater og måleskala bygget inn i verktøyet",
      "Samme verktøy fungerer for både rørlegger og flislegger",
    ],
  },
  {
    pill: "Apex-mansjett",
    title: "Skrueløs overgang til membran",
    accent: "uten klemring",
    image: "/images/rorlegger/slukmansjett.webp",
    imageAlt: "Slidedrain slukoverdel med integrert Apex-mansjett",
    body: "Slukoverdelen leveres med ferdig påstøpt slukmansjett som legges vått-i-vått med smøremembran eller foliemembran. Resultatet er en sømløs og tett overgang uten skruer, klemring eller forhøyningsring – og dermed færre kritiske lekkasjepunkter.",
    bullets: [
      "Godkjent for alle SINTEF-godkjente smøremembraner og foliemembraner",
      "Ingen skruer i membransjiktet",
      "Reduserer kjente feilkilder ved overgangen sluk–membran",
    ],
  },
  {
    pill: "Klemring i stål",
    title: "Full membrankompatibilitet",
    accent: "alle membraner",
    imageSrc: `${CDN}/a6097e40-733a-4e5f-9a01-a7a6ac86691f/square`,
    imageAlt: "Slidedrain slukoverdel med klemring i stål",
    body: "Trenger prosjektet baneveremembran eller vinyl? Slidedrain leveres også med slukoverdel med klemring i stål (Ø170 × 3,75 mm). Da fungerer Slidedrain Sluksystem med alle typer membraner – uten å endre på resten av installasjonen.",
    bullets: [
      "Smøremembran, foliemembran og baneveremembran",
      "Klemring i stål for varig fastsetting",
      "Bytt mellom Apex og klemring med samme slukpotte",
    ],
  },
];

export default function ProductFeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
            Bygget for rørleggerens{" "}
            <span className="text-orange">hverdag</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Tre tekniske valg som gjør monteringen raskere, mer fleksibel og
            mindre avhengig av millimeterpresisjon på byggeplass.
          </p>
        </FadeUp>

        <div className="space-y-16">
          {features.map((f, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FadeUp className="flex justify-center">
                <div className="w-full max-w-[520px] bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(40,52,71,0.08)]">
                  {f.imageSrc ? (
                    <Image
                      src={f.imageSrc}
                      alt={f.imageAlt}
                      width={1024}
                      height={1024}
                      className="w-full h-auto"
                      unoptimized
                    />
                  ) : (
                    <Image
                      src={f.image!}
                      alt={f.imageAlt}
                      width={1024}
                      height={858}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </FadeUp>

              <FadeUp>
                <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                  {f.pill}
                </span>
                <h3 className="text-[32px] max-md:text-[24px] font-bold leading-[1.2] mb-5 text-navy">
                  {f.title}{" "}
                  <span className="text-orange">{f.accent}</span>
                </h3>
                <p className="text-[16px] text-text-light leading-[1.7] font-light mb-6">
                  {f.body}
                </p>
                <ul className="space-y-3">
                  {f.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[15px] text-text-light"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth={2}
                        className="w-5 h-5 shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
