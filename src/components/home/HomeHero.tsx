"use client";

import Image from "next/image";
import { ArrowRight } from "../icons";

export default function HomeHero() {
  return (
    <section className="pt-[140px] pb-20 px-6 bg-gradient-to-br from-white to-[#fef7f3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
        <div className="flex justify-center items-center max-lg:order-first">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Moderne baderom med Slidedrain slukrenne"
            width={600}
            height={450}
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
            priority
          />
        </div>
        <div>
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Neste generasjons gulvsluk
          </span>
          <h1 className="text-[46px] max-lg:text-[36px] max-sm:text-[30px] font-bold leading-[1.15] mb-5 text-navy">
            Ett sluksystem,<br />
            <span className="text-orange">mange muligheter.</span>
          </h1>
          <p className="text-lg text-text-light leading-[1.7] mb-8 font-light">
            Slidedrain forener skandinavisk minimalisme med en patentert
            teknologi som setter en ny standard for våtromssikkerhet,
            vedlikehold og stilrent resultat. Norskprodusert og SINTEF-godkjent.
          </p>
          <div className="flex items-center gap-5 mb-8">
            <span className="text-xs text-text-light font-medium uppercase tracking-wider">
              Tilgjengelig hos
            </span>
            <Image
              src="https://slidedrain.no/wp-content/uploads/2022/05/BD-Logo-neg-2linjers-300x71.png"
              alt="Brødrene Dahl"
              width={100}
              height={24}
              className="h-5 w-auto opacity-40 hover:opacity-70 transition-opacity"
            />
            <Image
              src="https://slidedrain.no/wp-content/uploads/2022/05/flisekompaniet_logo_neg-300x49.png"
              alt="Flisekompaniet"
              width={100}
              height={24}
              className="h-5 w-auto opacity-40 hover:opacity-70 transition-opacity"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#produkter"
              className="inline-flex items-center gap-2.5 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] hover:shadow-[0_6px_20px_rgba(251,92,19,0.4)]"
            >
              Utforsk produktene
              <ArrowRight />
            </a>
            <a
              href="#velg-segment"
              className="inline-flex items-center gap-2.5 bg-navy/8 text-navy px-8 py-4 rounded-lg font-semibold text-base hover:bg-navy/15 transition-all"
            >
              Finn din løsning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
