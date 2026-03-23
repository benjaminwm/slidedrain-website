"use client";

import FadeUp from "../FadeUp";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Færre fuger, enklere renhold",
    desc: "Slidedrain slukrenne er optimalisert for store fliser i dusjsonen. Dette gir et moderne uttrykk med færre fuger, noe som fjerner de mest krevende områdene å holde rene.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Sjeldnere rens med stor vannlås",
    desc: "Slidedrain er designet med og for sirkulære sluk med stor vannlås. Det gir langt mindre vedlikehold enn tradisjonelle linjesluk, da store vannlåser må renses betydelig sjeldnere.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Enkel tilgang ved behov",
    desc: "Skulle du trenge å komme til for å renholde, er systemet designet slik at vannlåsen enkelt kan tas ut og settes inn igjen. Det gjør den årlige sjekken unnagjort på sekunder.",
  },
];

export default function MaintenanceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Betydelig{" "}
            <span className="text-orange">mindre vedlikehold</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeUp
              key={i}
              className="bg-white rounded-xl p-9 border border-navy/8 shadow-[0_2px_16px_rgba(40,52,71,0.04)] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-orange/8 rounded-[10px] flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-[15px] text-text-light leading-[1.7]">
                {f.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
