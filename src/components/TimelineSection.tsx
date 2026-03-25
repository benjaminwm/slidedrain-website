"use client";

import FadeUp from "./FadeUp";
import {
  BookOpenIcon,
  PackageIcon,
  WrenchIcon,
  CheckCircleIcon,
} from "./icons";

const steps = [
  {
    icon: <BookOpenIcon className="w-[22px] h-[22px] stroke-orange" />,
    tag: "Oppstart",
    tagColor: "bg-blue-500/12 text-blue-600",
    title: "Prosjektering",
    desc: "Alle designvalg tegnes inn uten behov for omprosjektering.",
    active: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="5" fill="#22c55e" stroke="#22c55e" />
      </svg>
    ),
    tag: "Tilvalg åpnes",
    tagColor: "bg-green/12 text-green",
    title: "Full valgfrihet",
    desc: "Full valgfrihet for kunden helt frem til støping av fall.",
    active: true,
  },
  {
    icon: <PackageIcon className="w-[22px] h-[22px] stroke-orange" />,
    tag: "Varelevering 1",
    tagColor: "bg-orange/12 text-orange",
    title: "Slukpotte leveres",
    desc: "Slukpotte leveres til byggeplass.",
    active: false,
  },
  {
    icon: <WrenchIcon className="w-[22px] h-[22px] stroke-orange" />,
    tag: "Installasjon",
    tagColor: "bg-blue-500/12 text-blue-600",
    title: "Rørlegging",
    desc: "Slukpotten installeres på prosjektert plassering.",
    active: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="5" fill="#ef4444" stroke="#ef4444" />
      </svg>
    ),
    tag: "Tilvalg stenges",
    tagColor: "bg-red/12 text-red",
    title: "Design låses",
    desc: "Valg av synlig design låses og bestilles etter kundens ønske.",
    active: true,
  },
  {
    icon: <PackageIcon className="w-[22px] h-[22px] stroke-orange" />,
    tag: "Varelevering 2",
    tagColor: "bg-orange/12 text-orange",
    title: "Design og verktøy leveres",
    desc: "Monteringsverktøy, slukoverdel og valgt design leveres.",
    active: false,
  },
  {
    icon: <CheckCircleIcon className="w-[22px] h-[22px] stroke-orange" />,
    tag: "Ferdigstilling",
    tagColor: "bg-blue-500/12 text-blue-600",
    title: "Flislegging",
    desc: "Fall støpes med monteringsverktøy før membran og valgt design monteres.",
    active: true,
  },
];

export default function TimelineSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="logistikk">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Logistikk og fremdrift{" "}
            <span className="text-orange">i prosjektet</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain leveres modulært gjennom Brødrene Dahl og
            Flisekompaniet. Systemet sikrer at vareflyten følger byggets
            fremdrift og maksimerer salgsvinduet for tilvalg.
          </p>
        </FadeUp>

        <div className="relative max-w-[800px] mx-auto">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-orange/20" />
          {steps.map((s, i) => (
            <FadeUp
              key={i}
              className="flex gap-6 mb-8 last:mb-0 relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-white border-2 z-10 ${
                  s.active
                    ? "border-orange bg-orange/5"
                    : "border-orange/30"
                }`}
              >
                {s.icon}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(40,52,71,0.06)] border border-navy/6 flex-1">
                <span
                  className={`inline-block text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded mb-2 ${s.tagColor}`}
                >
                  {s.tag}
                </span>
                <h4 className="text-base font-semibold mb-1.5">{s.title}</h4>
                <p className="text-sm text-text-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp
          className="text-center mt-8 text-sm text-text-light max-w-[700px] mx-auto"
          style={{ transitionDelay: `${steps.length * 120}ms` }}
        >
          <strong>Fleksibel logistikk:</strong> Monteringsverktøy og slukoverdel
          kan leveres sammen med slukpotten i Varelevering 1, for en samlet
          leveranse av alt teknisk utstyr til rørfaget.
        </FadeUp>
      </div>
    </section>
  );
}
