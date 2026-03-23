"use client";

import FadeUp from "../FadeUp";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 3v18" />
      </svg>
    ),
    title: "Sammenhengende flismønster",
    desc: "Ved å flislegge slukrennen eller slukristen med samme flis som resten av baderomsgulvet, gjør du sluket nesten usynlig. Dette lar flismønsteret flyte uavbrutt over hele gulvet for et perfekt, minimalistisk resultat.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Perfekt for store flisformater",
    desc: "Slidedrain er skreddersydd for moderne storformat-fliser. Det tilpassede formatet eliminerer behovet for oppstykking av flisene, noe som sikrer en eksklusiv finish med rene linjer og færre fuger.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: "Designvalg for enhver stil",
    desc: "Enten du drømmer om en elegant slukrenne med innfelt flis, et diskré hjørnesluk eller en klassisk rist, tilbyr Slidedrain et bredt utvalg av løsninger som komplementerer stilen på ditt bad.",
  },
];

export default function DesignSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="design">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Designet for et{" "}
            <span className="text-orange">sømløst uttrykk</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeUp
              key={i}
              className="bg-white rounded-xl p-9 border border-navy/8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-orange/8 rounded-xl flex items-center justify-center mb-5">
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
