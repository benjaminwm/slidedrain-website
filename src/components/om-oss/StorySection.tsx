"use client";

import FadeUp from "../FadeUp";

const milestones = [
  {
    year: "Ideen",
    title: "Et problem som krevde en ny løsning",
    desc: "Slidedrain AS har utspring som startup fra NTNU. Hvert år oppstår vannskader for hundrevis av millioner kroner i norske bad, og selskapet ble startet for å eliminere de tradisjonelle feilkildene i overgangen mellom gulvsluk og membran.",
  },
  {
    year: "Utviklingen",
    title: "Lansering med Brødrene Dahl",
    desc: "Første produkt ble lansert i mars 2023 hos Brødrene Dahl, etter et mangeårig utviklingssamarbeid med den ledende VVS-grossisten. Alle produkter er utviklet i tett samarbeid med rørleggere, flisleggere og entreprenører.",
  },
  {
    year: "Anerkjennelse",
    title: "DOGA Nykommer og SINTEF-godkjenning",
    desc: "Den innovative teknologien ble tildelt designprisen DOGA Nykommer for sitt bidrag til å forhindre vannskader. Systemet er grundig testet og dokumentert med SINTEF Teknisk Godkjenning.",
  },
  {
    year: "I dag",
    title: "Tilgjengelig i hele Norge",
    desc: "Slidedrain har landsdekkende distribusjon gjennom Brødrene Dahl og Flisekompaniet, med en egenutviklet produktportefølje på over 20 produkter. Alle er norskproduserte i resirkulert plast og rustfritt stål.",
  },
];

export default function StorySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Vår <span className="text-orange">historie</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Fra en idé om å eliminere vannskader til et prisvinnende sluksystem
            tilgjengelig i hele Norge.
          </p>
        </FadeUp>

        <div className="relative max-w-[700px] mx-auto">
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-orange/20" />
          {milestones.map((m, i) => (
            <FadeUp key={i} className="flex gap-6 mb-10 last:mb-0 relative">
              <div className="shrink-0 w-9 h-9 rounded-full bg-white border-2 border-orange flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-orange" />
              </div>
              <div className="flex-1 pb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange mb-1 block">
                  {m.year}
                </span>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {m.title}
                </h3>
                <p className="text-[15px] text-text-light leading-[1.7]">
                  {m.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
