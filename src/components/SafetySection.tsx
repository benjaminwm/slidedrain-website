"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { ShieldIcon, TrendingDownIcon, FileTextIcon } from "./icons";

const features = [
  {
    icon: <ShieldIcon className="w-6 h-6 stroke-orange" />,
    title: "Patentert innovasjon",
    desc: "Høydejusterbart system med monteringsverktøy sikrer presis plassering på badets laveste punkt og reduserer risiko for avvik og skjulte feil.",
  },
  {
    icon: <TrendingDownIcon className="w-6 h-6 stroke-orange" />,
    title: "Minimert vannskaderisiko",
    desc: "Færre komponenter i overgangen mellom sluk og membran reduserer risikoen for menneskelig svikt i den kritiske utførelsen.",
  },
  {
    icon: <FileTextIcon className="w-6 h-6 stroke-orange" />,
    title: "SINTEF-godkjent",
    desc: "Systemet tilfredsstiller TEK-krav og er dokumentert med SINTEF Teknisk Godkjenning (TG 20991).",
  },
];

export default function SafetySection() {
  return (
    <section className="py-20 px-6" id="sikkerhet">
      <div className="max-w-[1200px] mx-auto">
        {/* Intro */}
        <FadeUp className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-5 leading-tight">
            Reduser prosjektets{" "}
            <span className="text-orange">vannskaderisiko</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain er ikke bare et tilvalgskonsept, men et prisvinnende
            sluksystem utviklet for å eliminere risiko der tradisjonelle
            løsninger er mest sårbare.
          </p>
        </FadeUp>

        {/* Utfordringen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeUp>
            <Image
              src="/images/corner-installation.jpg"
              alt="Tradisjonelle feilkilder i overgangen mellom sluk og membran"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)]"
            />
          </FadeUp>
          <FadeUp>
            <span className="inline-block bg-navy/8 text-navy text-[12px] font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Utfordringen
            </span>
            <h3 className="text-[30px] max-md:text-2xl font-bold mb-4 leading-tight text-navy">
              Tradisjonelle feilkilder
            </h3>
            <p className="text-[16px] text-text-light leading-[1.7]">
              Hvert år oppstår vannskader for store verdier i overgangen
              mellom sluk og membran. Utfordringen ligger i tradisjonelle
              løsningers fragmenterte oppbygging, der flere komponenter
              monteres av ulike fag på ulike tidspunkt. Dette øker risikoen
              for feil og avvik i utførelsen.
            </p>
          </FadeUp>
        </div>

        {/* Løsningen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeUp className="lg:order-2">
            <Image
              src="/images/installation-process.jpg"
              alt="Slidedrain installasjonsprosess med monteringsverktøy"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)]"
            />
          </FadeUp>
          <FadeUp className="lg:order-1">
            <span className="inline-block bg-orange/10 text-orange text-[12px] font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Løsningen
            </span>
            <h3 className="text-[30px] max-md:text-2xl font-bold mb-4 leading-tight text-navy">
              Målsatt presisjon og skrueløs montasje
            </h3>
            <p className="text-[16px] text-text-light leading-[1.7]">
              Hvert år oppstår vannskader for store verdier i overgangen
              mellom sluk og membran. Utfordringen ligger i tradisjonelle
              løsningers fragmenterte oppbygging, der flere komponenter
              monteres av ulike fag på ulike tidspunkt. Dette øker risikoen
              for feil og avvik i utførelsen.
            </p>
          </FadeUp>
        </div>

        {/* Three features horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeUp
              key={i}
              className="bg-white rounded-xl p-7 shadow-[0_2px_16px_rgba(40,52,71,0.06)] border border-navy/6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-orange/8 rounded-xl flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h4 className="text-lg font-semibold mb-3 text-navy">{f.title}</h4>
              <p className="text-sm text-text-light leading-[1.7]">
                {f.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
