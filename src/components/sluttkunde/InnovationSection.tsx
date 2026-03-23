"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 stroke-orange">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Norsk design og produksjon",
    desc: "Slidedrain er utviklet i tett samarbeid med norske håndverkere for norske forhold, med egen produksjon i Norge. Den innovative teknologiske løsningen er utformet for å forhindre vannskader, og ble for dette tildelt designprisen DOGA Nykommer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 stroke-orange">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Eliminerer vannskaderisiko",
    desc: "Slidedrain sin patenterte teknologi sikrer en trygg overgang mellom sluk og membran \u2013 et av de mest kritiske lekkasjepunktene i et våtrom. Ved å fjerne tradisjonelle feilkilder som forhøyningsring, klemring og skruer, setter Slidedrain en ny standard for lekkasjesikkerhet.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 stroke-orange">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Trygghet i hele badets levetid",
    desc: "Slidedrain er kompatibel med de fleste membraner på markedet, og er grundig testet og dokumentert med Teknisk Godkjenning fra SINTEF. Dette sikrer en installasjon med høy teknisk levetid og materialkvalitet som er bygget for å vare.",
  },
];

export default function InnovationSection() {
  return (
    <section className="py-20 px-6 bg-navy text-white" id="innovasjon">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Prisvinnende <span className="text-orange">innovasjon</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <Image
              src="/images/team-meeting.jpg"
              alt="Slidedrain teamet diskuterer innovasjon"
              width={600}
              height={400}
              className="w-full rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            />
          </FadeUp>
          <div className="space-y-6">
            {features.map((f, i) => (
              <FadeUp
                key={i}
                className="bg-white/6 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-orange/15 rounded-lg flex items-center justify-center">
                    {f.icon}
                  </span>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="text-[15px] leading-[1.7] text-white/70">
                  {f.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
