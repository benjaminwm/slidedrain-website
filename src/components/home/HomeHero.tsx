"use client";

import Image from "next/image";
import { ArrowRight } from "../icons";
import LogoBanner from "./LogoBanner";

export default function HomeHero() {
  return (
    <section className="min-h-screen pt-[140px] bg-gradient-to-br from-white to-[#fef7f3] overflow-hidden flex flex-col justify-between">
      <div className="max-w-[1200px] mx-auto px-6 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center flex-1">
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
              src="/images/logo-brodrenedahl.png"
              alt="Brødrene Dahl"
              width={140}
              height={32}
              className="h-7 w-auto"
            />
            <Image
              src="/images/logo-flisekompaniet.png"
              alt="Flisekompaniet"
              width={140}
              height={32}
              className="h-7 w-auto"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#produkter"
              className="shine-btn inline-flex items-center gap-2.5 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] hover:shadow-[0_6px_20px_rgba(251,92,19,0.4)]"
            >
              <span>Utforsk produktene</span>
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
      </div>

      {/* Scrolling logo banner */}
      <LogoBanner />
    </section>
  );
}
