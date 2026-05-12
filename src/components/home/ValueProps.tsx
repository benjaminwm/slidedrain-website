"use client";

import FadeUp from "../FadeUp";

const props = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Større justerbarhet",
    desc: "Millimeterpresist justerbarhet i høyden, lengden og bredden.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Mindre vedlikehold",
    desc: "Stor vannlås med minimalt vedlikehold og enkel rengjøring.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Økt fleksibilitet i prosjektet",
    desc: "Effektiv byggeprosess med fleksible tilvalg frem til flislegging.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 stroke-orange">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Redusert vannskaderisiko",
    desc: "Eliminerer kjente lekkasjepunkter som klemring og forhøyningsringer ved montering.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {props.map((p, i) => (
          <FadeUp key={i} className="text-center">
            <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              {p.icon}
            </div>
            <h3 className="text-navy font-semibold text-[15px] mb-2">
              {p.title}
            </h3>
            <p className="text-text-light text-sm leading-relaxed">{p.desc}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
