"use client";

import Link from "next/link";
import FadeUp from "../FadeUp";
import { ArrowRight } from "../icons";

const segments = [
  {
    href: "/sluttkunde",
    tag: "Privatperson",
    title: "Har du tenkt på slukets betydning for helheten i baderommet?",
    desc: "Se hvordan Slidedrain gir deg et stilrent resultat med minimalt vedlikehold og maksimal trygghet.",
    color: "border-orange",
  },
  {
    href: "/rorlegger",
    tag: "Rørlegger & Flislegger",
    title: "Ønsker du mer fleksibilitet og enklere montering?",
    desc: "Lær om Slidedrain Sluksystems fleksibilitet og justeringsmuligheter som gir raskere og mer presis montering med færre feilkilder.",
    color: "border-green",
  },
  {
    href: "/tilvalg",
    tag: "Entreprenør & Byggherre",
    title: "Vil du gjøre ditt neste prosjekt mer lønnsomt?",
    desc: "Oppdag hvordan utvidet tilvalgsperiode kan redusere omprosjektering og øke mersalget i plassbygde bad.",
    color: "border-navy",
  },
];

export default function SegmentGuide() {
  return (
    <section className="py-20 px-6 bg-gray-bg" id="velg-segment">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Finn løsningen <span className="text-orange">for deg</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain forenkler byggeprosessen for alle fag &ndash; og gir
            sluttkunden et brukervennlig gulvsluk med minimalt vedlikehold,
            tilpasset baderommets helhetlige design.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((s) => (
            <FadeUp key={s.href}>
              <Link
                href={s.href}
                className={`block bg-white rounded-xl p-8 border-t-4 ${s.color} transition-all hover:-translate-y-1 hover:shadow-lg group h-full`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-orange mb-3 block">
                  {s.tag}
                </span>
                <h3 className="text-xl font-semibold text-navy mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] text-text-light leading-[1.7] mb-5">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-orange font-semibold text-sm group-hover:gap-3 transition-all">
                  Les mer <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
