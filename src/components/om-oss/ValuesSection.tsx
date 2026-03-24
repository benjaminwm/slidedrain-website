"use client";

import FadeUp from "../FadeUp";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: "Innovasjon",
    desc: "Vi utfordrer etablerte løsninger med patentert teknologi som setter nye standarder for lekkasjesikkerhet.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Kvalitet",
    desc: "SINTEF-godkjent og produsert i Norge med de høyeste krav til materialvalg og teknisk levetid.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Samarbeid med fagfolk",
    desc: "Utviklet i tett dialog med rørleggere, flisleggere og entreprenører for å løse reelle utfordringer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Bærekraft",
    desc: "Produsert av 100 % resirkulert plast med full miljødokumentasjon (EPD) for BREEAM-kompatible prosjekter.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-6 bg-navy text-white">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Våre <span className="text-orange">verdier</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeUp
              key={i}
              className="bg-white/6 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors text-center"
            >
              <div className="w-12 h-12 bg-orange/15 rounded-xl flex items-center justify-center mx-auto mb-5">
                {v.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{v.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
