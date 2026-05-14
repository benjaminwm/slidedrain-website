"use client";

import FadeUp from "../FadeUp";
import VideoEmbed from "../VideoEmbed";

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Større justerbarhet og enklere montering",
    desc: "Slidedrain er et fleksibelt sluksystem som kan tilpasses i høyde, bredde og dybde. Unikt monteringsverktøy og justerbare komponenter gir en effektiv og presis installasjon hver gang.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Økt fleksibilitet gjennom hele byggeprosjektet",
    desc: "Sluksystemet er kompatibelt med alle typer membraner og legger til rette for en mer standardisert byggeprosess. Med hjørneplassert slukpotte kan man enkelt velge mellom hjørnerist og slukrenne senere i prosjektet, noe som gir større fleksibilitet og økt mersalg.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Redusert risiko og minimalt vedlikehold",
    desc: "Slidedrains patenterte teknologi eliminerer tradisjonelle feilkilder i overgangen mellom gulvsluk og membran, og reduserer risikoen for vannskader betydelig. Samtidig er alle løsninger designet med stor vannlås som gir minimalt behov for vedlikehold.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="problemer">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Slik gjør Slidedrain{" "}
            <span className="text-orange">byggeprosessen enklere</span>
          </h2>
        </FadeUp>
        <VideoEmbed />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <FadeUp
              key={i}
              className="bg-white rounded-xl p-8 border border-navy/8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-orange/8 rounded-[10px] flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-[15px] text-text-light leading-[1.7]">
                {p.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
