"use client";

import Image from "next/image";
import { ArrowRight } from "../icons";
import LogoBanner from "./LogoBanner";

export default function HomeHero() {
  return (
    <section className="min-h-screen max-md:min-h-0 pt-[110px] max-md:pt-[96px] bg-gradient-to-br from-white to-[#fef7f3] overflow-hidden flex flex-col">
      <div className="w-full md:w-[80%] max-w-[1600px] mx-auto px-6 py-10 max-md:py-6 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-15 max-lg:gap-8 items-center flex-1">
        <div>
          <h1 className="text-[46px] max-lg:text-[36px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 max-sm:mb-3 text-navy">
            Ett sluksystem,<br />
            <span className="text-orange">mange muligheter.</span>
          </h1>
          <p className="text-lg max-sm:text-[15px] text-text-light leading-[1.7] mb-8 max-sm:mb-6 font-light">
            Slidedrain forener skandinavisk minimalisme med et SINTEF-godkjent
            design som gir enkel installasjon, tryggere våtrom og et stilrent
            resultat med lite vedlikehold.
          </p>
          <div className="flex flex-wrap gap-3 mb-8 max-sm:mb-6">
            <a
              href="#produkter"
              className="shine-btn inline-flex items-center gap-2.5 bg-orange text-white px-8 max-sm:px-6 py-4 max-sm:py-3 rounded-lg font-semibold text-base max-sm:text-[15px] hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] hover:shadow-[0_6px_20px_rgba(251,92,19,0.4)]"
            >
              <span>Utforsk produktene</span>
              <ArrowRight />
            </a>
            <a
              href="#velg-segment"
              className="inline-flex items-center gap-2.5 bg-navy/8 text-navy px-8 max-sm:px-6 py-4 max-sm:py-3 rounded-lg font-semibold text-base max-sm:text-[15px] hover:bg-navy/15 transition-all"
            >
              Finn din løsning
            </a>
          </div>
          <div>
            <span className="block text-xs text-text-light font-medium uppercase tracking-wider mb-3">
              Kjøp i dag hos
            </span>
            <div className="flex items-center gap-6 max-sm:gap-4 flex-wrap">
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
        </div>
        <div className="max-lg:order-first">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Moderne baderom med Slidedrain slukrenne"
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="w-full rounded-2xl max-sm:rounded-xl shadow-[0_20px_60px_rgba(40,52,71,0.12)] aspect-[4/3] max-sm:aspect-[16/11] object-cover"
            priority
          />
        </div>
      </div>

      {/* Scrolling logo banner */}
      <LogoBanner />
    </section>
  );
}
