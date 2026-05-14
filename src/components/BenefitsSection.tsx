"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { TrendingUpIcon, DollarIcon, ClockIcon } from "./icons";

const benefits = [
  {
    icon: <ClockIcon className="w-6 h-6 stroke-orange" />,
    title: "Teknisk standardisering",
    desc: "En felles teknisk løsning for rørføring, membran og tetningsdetaljer \u2013 uavhengig av sluttkundens designvalg. Identisk installasjon sikrer en forutsigbar byggeprosess uten behov for spesialløsninger.",
  },
  {
    icon: <TrendingUpIcon className="w-6 h-6 stroke-orange" />,
    title: "Utvidet tilvalgsperiode",
    desc: "Ved å standardisere plasseringen av gulvsluket i hjørnet kan tilvalg tilbys gjennom hele prosjektet \u2013 også til sene kjøpere. Dette forlenger salgsvinduet og fjerner tradisjonelle begrensninger.",
  },
  {
    icon: <DollarIcon className="w-6 h-6 stroke-orange" />,
    title: "Full kostnadskontroll",
    desc: "Slidedrain reduserer risikoen for pigging og kostbare avvik ved sene endringer. Ved å eliminere endringskostnader og muliggjøre oppgraderinger helt frem til tynnavretting, styrkes prosjektets lønnsomhet direkte.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-[#FFEFE8]" id="fordeler">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
            Forutsigbar byggeprosess{" "}
            <span className="text-orange">for alle fag</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Eliminer kostbar omprosjektering og risiko for avvik på tvers av
            fag. Slidedrain sluksystem erstatter låste tekniske løsninger med
            et fleksibelt system som utvider tilvalgsvinduet, øker prosjektets
            marginer og sikrer feilfri utførelse.
          </p>
        </FadeUp>
        <FadeUp className="max-w-[900px] mx-auto mb-12">
          <Image
            src="/images/bathroom-ullernfaret.jpg"
            alt="Moderne bad med Slidedrain-installasjon"
            width={3681}
            height={2455}
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
          />
          <p className="italic text-xs text-text-light text-center mt-3">
            Bilde av Lomundal Oslo AS
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <FadeUp
              key={i}
              className="bg-white rounded-xl p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="w-12 h-12 bg-orange/10 rounded-[10px] flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="text-[19px] font-semibold mb-3 text-navy">{b.title}</h3>
              {b.desc.split(/(?<=\. )(?=[A-ZÆØÅ])/).map((para, j) => (
                <p
                  key={j}
                  className="text-[15px] leading-[1.7] text-text-light mb-3 last:mb-0"
                >
                  {para.trim()}
                </p>
              ))}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
