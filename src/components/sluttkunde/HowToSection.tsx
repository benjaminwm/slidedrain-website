"use client";

import Image from "next/image";
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
    title: "Velg ditt design",
    desc: "På våre nettsider finner du full oversikt over modeller, tekniske spesifikasjoner og inspirasjon som hjelper deg å velge riktig løsning til ditt prosjekt.",
    href: "/produkter",
    linkLabel: "Finn sluk og design",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    step: "2",
    title: "Planlegg med håndverkeren",
    desc: "Del dine valg og bruk dem i planleggingen sammen med håndverkeren, slik at du sikrer riktig Slidedrain-løsning og en enkel installasjon fra start.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    step: "3",
    title: "Kjøp hos forhandler",
    desc: "Din håndverker kan bestille Slidedrain via proffhandelen hos Brødrene Dahl eller Flisekompaniet. Hos Flisekompaniet kan du også kjøpe selv og se utvalgte modeller i utstilling.",
  },
];

export default function HowToSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="slik-gjor-du">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Slik realiserer du{" "}
            <span className="text-orange">ditt drømmebad</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Vi samarbeider med de største aktørene i bransjen for å gjøre veien
            fra planlegging til ferdig bad så enkel som mulig.
          </p>
        </FadeUp>
        <FadeUp className="max-w-[900px] mx-auto mb-12">
          <Image
            src="/images/bathroom-ullernfaret.jpg"
            alt="Moderne bad med Slidedrain-installasjon"
            width={3681}
            height={2455}
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
          />
          <p className="italic text-xs text-text-light text-center mt-3">
            Bilde av Lomundal Oslo AS
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
              {s.href && (
                <a
                  href={s.href}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
                >
                  {s.linkLabel}
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
