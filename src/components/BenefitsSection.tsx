"use client";

import FadeUp from "./FadeUp";
import { TrendingUpIcon, DollarIcon, ClockIcon } from "./icons";

const benefits = [
  {
    icon: <TrendingUpIcon className="w-6 h-6 stroke-orange" />,
    title: "Maksimert mersalg med utvidet tilvalgsperiode",
    desc: "Ved å plassere gulvsluket i hjørnet standardiseres utførelsen i hele prosjektet. Dette åpner for tilvalg av gulvsluk til samtlige kjøpere \u2013 selv de som kommer inn sent i prosjektet. Det utvidede salgsvinduet fjerner tradisjonelle begrensninger og øker lønnsomheten per enhet.",
  },
  {
    icon: <DollarIcon className="w-6 h-6 stroke-orange" />,
    title: "Full kostnadskontroll og økt margin",
    desc: "Slidedrain fjerner risikoen for pigging og dyre avvik ved sene endringer. Ved å eliminere endringskostnader og åpne for oppgraderinger helt frem til tynnavretting, får prosjektet en økonomisk oppside som går rett på bunnlinjen.",
  },
  {
    icon: <ClockIcon className="w-6 h-6 stroke-orange" />,
    title: "Forutsigbar fremdrift og teknisk standardisering",
    desc: "Én felles teknisk løsning for rørføring, membran og tetningsdetaljer \u2013 uavhengig av hvilket visuelt slukdesign sluttkunden velger. Den identiske installasjonen sikrer en forutsigbar byggeprosess uten spesialløsninger.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-navy text-white" id="fordeler">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Forutsigbar byggeprosess{" "}
            <span className="text-orange">for alle fag</span>
          </h2>
          <p className="text-[17px] text-white/70 leading-[1.7] font-light">
            Eliminer kostbar omprosjektering og risiko for avvik på tvers av
            fag. Slidedrain sluksystem erstatter låste tekniske løsninger med
            et fleksibelt system som utvider tilvalgsvinduet, øker prosjektets
            marginer og sikrer feilfri utførelse.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <FadeUp
              key={i}
              className="bg-white/6 border border-white/10 rounded-xl p-9 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-orange/15 rounded-[10px] flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="text-[19px] font-semibold mb-3">{b.title}</h3>
              <p className="text-[15px] leading-[1.7] text-white/70">
                {b.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
