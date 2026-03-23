"use client";

import FadeUp from "../FadeUp";

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    step: "1",
    title: "Utforsk mulighetene",
    desc: "På våre nettsider finner du full oversikt over alle modeller, tekniske spesifikasjoner og inspirasjon som hjelper deg å velge riktig løsning for ditt prosjekt.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    step: "2",
    title: "Handle hos Flisekompaniet",
    desc: "Slidedrain kan kjøpes på nett eller direkte hos alle Flisekompaniets utsalgssteder i hele landet. Her får du hjelp til å bestille de delene du trenger for å matche dine flisvalg perfekt.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    step: "3",
    title: "Tilgjengelig for din håndverker",
    desc: "Slidedrain er en lagerført systemløsning hos Brødrene Dahl, Norges største VVS-grossist. Det betyr at din rørlegger eller entreprenør har rask tilgang til alle komponenter.",
  },
];

export default function HowToSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="slik-gjor-du">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Slik realiserer du{" "}
            <span className="text-orange">drømmebadet</span> med Slidedrain
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Vi samarbeider med de største aktørene i bransjen for å gjøre veien
            fra planlegging til ferdig bad så enkel som mulig.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <FadeUp
              key={s.step}
              className="bg-white rounded-xl p-9 border border-navy/8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-[72px] font-bold text-navy/5 leading-none">
                {s.step}
              </div>
              <div className="w-12 h-12 bg-orange/8 rounded-[10px] flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-[15px] text-text-light leading-[1.7]">
                {s.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
