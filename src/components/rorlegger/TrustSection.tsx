"use client";

import FadeUp from "../FadeUp";

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "SINTEF Teknisk Godkjenning",
    desc: "Slidedrain tilfredsstiller alle krav i TEK17 og er grundig testet og dokumentert (TG 20991).",
    href: "/downloads/TG-20991-Slidedrain-Sluksystem.pdf",
    linkLabel: "Last ned TG-dokumentet",
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Lagerført hos Brødrene Dahl",
    desc: "Alt teknisk utstyr, fra slukpotter til monteringsverktøy, er lagerført hos Norges største VVS-grossist for rask levering til byggeplass.",
    href: "https://www.dahl.no/merker/slidedrain",
    linkLabel: "Se hos Brødrene Dahl",
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
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
              <div className="w-12 h-12 bg-orange/8 rounded-[10px] flex items-center justify-center mb-5">
                {item.icon}
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
