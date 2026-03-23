"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { ShieldIcon, TrendingDownIcon, FileTextIcon } from "./icons";

const features = [
  {
    icon: <ShieldIcon className="w-5 h-5 stroke-orange" />,
    title: "Patentert innovasjon",
    desc: "Høydejusterbart system med monteringsverktøy sikrer montering på badets laveste punkt og forhindrer avvik og risiko for usynlige feil.",
  },
  {
    icon: <TrendingDownIcon className="w-5 h-5 stroke-orange" />,
    title: "Minimert vannskaderisiko",
    desc: "Eliminering av forhøyningsringer, skruer og klemringer fjerner risikoen for menneskelig svikt i den kritiske overgangen mellom sluk og membran.",
  },
  {
    icon: <FileTextIcon className="w-5 h-5 stroke-orange" />,
    title: "Sertifisert trygghet",
    desc: "Systemet tilfredsstiller TEK-krav, og det nyskapende designet er dokumentert med SINTEF Teknisk Godkjenning (TG XXXXX).",
  },
];

export default function SafetySection() {
  return (
    <section className="py-20 px-6" id="sikkerhet">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
          <FadeUp>
            <h2 className="text-4xl max-md:text-[28px] font-bold mb-5 leading-tight">
              Full valgfrihet og{" "}
              <span className="text-orange">minimal vannskaderisiko</span>
            </h2>
            <p className="text-[17px] text-text-light leading-[1.7] mb-8 font-light">
              Skreddersydd design uten tradisjonelle feilkilder. Slidedrain er
              ikke bare et tilvalgskonsept, det er et prisvinnende sluksystem
              utviklet for å eliminere risiko der tradisjonelle løsninger er på
              sitt svakeste.
            </p>

            <div className="bg-gray-bg rounded-xl p-7 mb-5 border-l-4 border-orange">
              <h4 className="text-[17px] font-semibold mb-2.5 text-navy">
                Utfordringen: Tradisjonelle feilkilder
              </h4>
              <p className="text-[15px] text-text-light leading-[1.7]">
                Hvert år oppstår det vannskader for hundrevis av millioner kroner
                i overgangen mellom sluk og membran. Problemet skyldes
                tradisjonelle løsningers fragmenterte design med
                forhøyningsringer, løse pakninger og klemring. Når ulike
                fagområder må montere separate deler på ulike tidspunkt, oppstår
                en unødvendig risiko for menneskelig svikt.
              </p>
            </div>

            <div className="bg-gray-bg rounded-xl p-7 border-l-4 border-orange">
              <h4 className="text-[17px] font-semibold mb-2.5 text-navy">
                Løsningen: Målsatt presisjon og skrueløs montasje
              </h4>
              <p className="text-[15px] text-text-light leading-[1.7]">
                Slidedrain erstatter det fragmenterte designet med et patentert
                system som sikrer nøyaktig installasjon på badets laveste punkt.
                Det høydejusterbare sluket og monteringsverktøyet eliminerer
                behovet for forhøyningsringer og løse pakninger. Ved bruk av
                smøremembran leveres systemet med integrert mansjett som gjør
                klemringen overflødig.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="space-y-5">
            <Image
              src="/images/installation-process.jpg"
              alt="Installasjonsprosess for Slidedrain"
              width={600}
              height={400}
              className="w-full rounded-xl shadow-[0_4px_20px_rgba(40,52,71,0.1)] mb-5"
            />
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-7 shadow-[0_2px_16px_rgba(40,52,71,0.06)] border border-navy/6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-orange/8 rounded-lg flex items-center justify-center">
                    {f.icon}
                  </span>
                  <h4 className="text-base font-semibold">{f.title}</h4>
                </div>
                <p className="text-sm text-text-light leading-[1.7]">
                  {f.desc}
                </p>
              </div>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
