"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";
import { ArrowRight } from "../icons";

export default function SluttkundeCtaSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-navy to-[#1a2536] text-white">
      <FadeUp className="max-w-[800px] mx-auto text-center">
        <h2 className="text-4xl max-md:text-[28px] font-bold mb-4">
          Klar for et sømløst baderomsgulv?
        </h2>
        <p className="text-[17px] text-white/70 mb-8 font-light leading-[1.7]">
          Utforsk hele sortimentet eller besøk din nærmeste Flisekompaniet-butikk
          for personlig rådgivning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/produkter"
            className="shine-btn inline-flex items-center justify-center gap-2.5 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)]"
          >
            <span>Se alle produkter</span>
            <ArrowRight />
          </a>
          <a
            href="https://www.flisekompaniet.no/bad/sluk-og-slukrister/slukrister/?facets=%7B%22selectFilters%22%3A%5B%7B%22groupId%22%3A%22brand%22%2C%22valueId%22%3A%5B%22SLIDEDRAIN%22%5D%7D%5D%7D&sortBy=RELEVANCE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/20 transition-all border border-white/20"
          >
            Handle hos Flisekompaniet
          </a>
        </div>
        <div className="flex gap-10 justify-center items-center mt-12 opacity-60">
          <span className="text-[13px] text-white/50 uppercase tracking-wider">
            Kjøp i dag hos
          </span>
          <Image
            src="/images/logo-brodrenedahl.svg"
            alt="Brødrene Dahl"
            width={219}
            height={39}
            className="h-7 w-auto brightness-0 invert"
          />
          <Image
            src="/images/logo-flisekompaniet.svg"
            alt="Flisekompaniet"
            width={148}
            height={39}
            className="h-7 w-auto brightness-0 invert"
          />
        </div>
      </FadeUp>
    </section>
  );
}
