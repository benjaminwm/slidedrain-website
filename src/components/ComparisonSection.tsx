"use client";

import FadeUp from "./FadeUp";
import { XCircleIcon, CheckCircle2Icon } from "./icons";

const challenges = [
  "Låste løsninger gjør kundetilvalg krevende etter byggestart.",
  "Kort salgsvindu gir tapte inntekter og svekket konkurransekraft.",
  "Sene kundekrav fører til kostbar omprosjektering, pigging og avvik.",
];

const solutions = [
  "Full valgfrihet frem til flislegging og en mer oversiktlig byggeprosess.",
  "Utvidet salgsvindu gir økt mersalg og høyere kundetilfredshet.",
  "Standardisert system som sikrer effektiv utførelse uten tekniske endringer.",
];

export default function ComparisonSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Utvidet tilvalgsperiode for{" "}
            <span className="text-orange">økt mersalg</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain sitt modulerbare konsept standardiserer byggeprosessen
            og muliggjør oppgraderinger langt ut i prosjektet. Når den tekniske
            utførelsen er identisk frem til flislegging, økes mersalget uten
            risiko for omprosjektering eller kostbare avvik.
          </p>
        </FadeUp>

        <FadeUp className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
          <div className="p-10 bg-red-50">
            <h3 className="text-xl font-semibold mb-7 flex items-center gap-2.5 text-red">
              <XCircleIcon />
              Utfordringen i dag
            </h3>
            {challenges.map((c, i) => (
              <div key={i} className="flex gap-3 mb-5 last:mb-0 text-[15px] leading-relaxed items-start">
                <span className="shrink-0 w-6 h-6 rounded-full bg-red/15 text-red flex items-center justify-center text-[13px] mt-0.5">
                  &#10007;
                </span>
                <span>{c}</span>
              </div>
            ))}
          </div>
          <div className="p-10 bg-green-50">
            <h3 className="text-xl font-semibold mb-7 flex items-center gap-2.5 text-green">
              <CheckCircle2Icon />
              Løsningen med Slidedrain
            </h3>
            {solutions.map((s, i) => (
              <div key={i} className="flex gap-3 mb-5 last:mb-0 text-[15px] leading-relaxed items-start">
                <span className="shrink-0 w-6 h-6 rounded-full bg-green/15 text-green flex items-center justify-center text-[13px] mt-0.5">
                  &#10003;
                </span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
