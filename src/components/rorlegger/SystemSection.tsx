"use client";

import FadeUp from "../FadeUp";

const modules = [
  {
    title: "Slukpotte",
    desc: "Leveres med side-, bunn- eller skrått utløp (Ø75) for sømløs tilkobling til standard røropplegg.",
  },
  {
    title: "Høydejusterbar slukoverdel",
    desc: "Teleskopfunksjon for 40 mm trinnløs høydejustering med integrert slukmansjett eller klemring i stål.",
  },
  {
    title: "Topp-del",
    desc: "Velg fritt mellom 25+ ulike design av slukrenner, hjørnerister og klassiske kvadratiske rister \u2013 uten å endre på den tekniske montasjen mellom gulvsluk og membran.",
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
              <div className="w-12 h-12 bg-orange/8 rounded-[10px] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
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
