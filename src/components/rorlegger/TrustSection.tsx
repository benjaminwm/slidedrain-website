"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

type Logo = { src: string; alt: string; heightClass: string };

type Item = {
  logos: Logo[];
  title: string;
  desc: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
};

const items: Item[] = [
  {
    logos: [
      {
        src: "/images/badges/badge-sintef.png",
        alt: "SINTEF Teknisk Godkjenning",
        heightClass: "h-12 sm:h-14",
      },
    ],
    title: "SINTEF Teknisk Godkjenning",
    desc: "Slidedrain tilfredsstiller alle krav i TEK17 og er grundig testet og dokumentert (TG 20991).",
    href: "/downloads/Produktsertifikat-Slidedrain-Model-1.pdf",
    linkLabel: "Last ned Produktsertifikatet",
    external: true,
  },
  {
    logos: [
      {
        src: "/images/logo-brodrenedahl.svg",
        alt: "Brødrene Dahl",
        heightClass: "h-5 sm:h-6",
      },
      {
        src: "/images/logo-flisekompaniet.svg",
        alt: "Flisekompaniet",
        heightClass: "h-4 sm:h-5",
      },
    ],
    title: "Lagerført over hele Norge",
    desc: "Slidedrain Sluksystem er lagerført hos Brødrene Dahl og Flisekompaniet – klart for rask levering til ditt prosjekt.",
    href: "https://www.dahl.no/merker/slidedrain",
    linkLabel: "Se hos Brødrene Dahl",
    external: true,
  },
  {
    logos: [
      {
        src: "/images/badges/badge-norge-produsert.svg",
        alt: "Norge produsert",
        heightClass: "h-12 sm:h-14",
      },
      {
        src: "/images/badges/badge-epd.png",
        alt: "EPD-Norge",
        heightClass: "h-12 sm:h-14",
      },
    ],
    title: "Norskprodusert med EPD",
    desc: "Produsert i Norge av 100 % resirkulert plast, med full miljødokumentasjon for prosjekter med miljøkrav (BREEAM).",
    href: "/downloads/EPD-Slidedrain-Model-1.pdf",
    linkLabel: "Last ned EPD-dokumentet",
    external: true,
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Godkjent, lagerført og{" "}
            <span className="text-orange">tilgjengelig</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Vi vet at hverdagen krever løsninger som er godkjente og
            tilgjengelige.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeUp
              key={i}
              className="bg-white rounded-xl p-9 border border-navy/8 shadow-[0_2px_16px_rgba(40,52,71,0.04)]"
            >
              <div className="flex items-center gap-4 mb-5 h-12 sm:h-14">
                {item.logos.map((logo, j) => (
                  <Image
                    key={j}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={56}
                    className={`w-auto object-contain ${logo.heightClass}`}
                  />
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-[15px] text-text-light leading-[1.7]">
                {item.desc}
              </p>
              {item.href && (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
                >
                  {item.linkLabel}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
