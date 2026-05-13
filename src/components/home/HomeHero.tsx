"use client";

import Image from "next/image";
import { ArrowRight } from "../icons";
import LogoBanner from "./LogoBanner";

export default function HomeHero() {
  return (
    <section className="min-h-screen pt-[110px] bg-gradient-to-br from-white to-[#fef7f3] overflow-hidden flex flex-col">
      <div className="max-w-[1600px] w-full mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-15 items-center flex-1">
        <div>
          <h1 className="text-[46px] max-lg:text-[36px] max-sm:text-[30px] font-bold leading-[1.15] mb-5 text-navy">
            Ett sluksystem,<br />
            <span className="text-orange">mange muligheter.</span>
          </h1>
          <p className="text-lg text-text-light leading-[1.7] mb-8 font-light">
            Slidedrain forener skandinavisk minimalisme med en patentert
            teknologi som setter en ny standard for våtromssikkerhet,
            vedlikehold og stilrent resultat. Norskprodusert og SINTEF-godkjent.
          </p>
          <div className="mb-8">
            <span className="block text-xs text-text-light font-medium uppercase tracking-wider mb-3">
              Kjøp i dag hos
            </span>
            <div className="flex items-center gap-6">
              <Image
                src="/images/logo-brodrenedahl.svg"
                alt="Brødrene Dahl"
                width={219}
                height={39}
                className="h-6 sm:h-7 w-auto"
              />
              <Image
                src="/images/logo-flisekompaniet.svg"
                alt="Flisekompaniet"
                width={148}
                height={39}
                className="h-6 sm:h-7 w-auto"
              />
            </div>
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
        <div className="max-lg:order-first">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Moderne baderom med Slidedrain slukrenne"
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)] aspect-[4/3] object-cover"
            priority
          />
        </div>
      </div>

      {/* Scrolling logo banner */}
      <LogoBanner />
    </section>
  );
}
