"use client";

import Image from "next/image";
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
    title: "Sømløst flismønster",
    desc: "Flislegg slukrennen eller slukristen med samme flis som gulvet, og gjør sluket nærmest usynlig. Resultatet er et helhetlig, minimalistisk uttrykk hvor flismønsteret flyter uavbrutt.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Perfekt for store flisformater",
    desc: "Slidedrain er tilpasset moderne storformat-fliser og reduserer behovet for oppstykking av flisene. Resultatet er rene linjer, færre fuger og et mer eksklusivt uttrykk.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: "Designvalg for enhver stil",
    desc: "Velg mellom slukrenne med innfelt flis, diskré hjørnesluk eller klassisk rist. Slidedrain gir deg løsninger som løfter helheten på badet.",
  },
];

export default function DesignSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="design">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Skapt for et{" "}
            <span className="text-orange">stilrent baderom</span>
          </h2>
        </FadeUp>
        <FadeUp className="max-w-[900px] mx-auto mb-12">
          <Image
            src="/images/hero-render.png"
            alt="Slidedrain slukrenne installert på dusjgulv"
            width={1301}
            height={731}
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
          />
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
