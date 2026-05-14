"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Norsk design og produksjon",
    desc: "Slidedrain er utviklet i tett samarbeid med håndverkere og har produksjon i Norge. Den innovative løsningen er designet for å forebygge vannskader, og ble tildelt designprisen DOGA Nykommer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Testet og godkjent av SINTEF",
    desc: "Slidedrain har løsninger for alle membraner på markedet med Teknisk Godkjenning fra SINTEF. Dette gir en grundig testet og trygg løsning.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Redusert risiko for vannskader",
    desc: "Vannskader i våtrom skyldes ofte overgangen mellom sluk og membran. Slidedrain Sluksystem har et unikt design som eliminerer kjente feilkilder og reduserer risikoen for vannskader.",
  },
];

export default function InnovationSection() {
  return (
    <section className="py-20 px-6 bg-[#FFEFE8]" id="innovasjon">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
            Norsk prisvinnende{" "}
            <span className="text-orange">innovasjon</span>
          </h2>
        </FadeUp>
        <FadeUp className="max-w-[900px] mx-auto mb-12">
          <Image
            src="/images/henning-utendors.webp"
            alt="Henning fra Slidedrain med Slukoverdel-produktbokser"
            width={1600}
            height={1067}
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
          />
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeUp key={i}>
              <div className="w-12 h-12 bg-orange/10 rounded-[10px] flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-[19px] font-semibold mb-3 text-navy">{f.title}</h3>
              <p className="text-[15px] leading-[1.7] text-text-light">
                {f.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
