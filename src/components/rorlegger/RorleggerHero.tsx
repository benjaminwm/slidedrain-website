"use client";

import Image from "next/image";
import { ArrowRight } from "../icons";

export default function RorleggerHero() {
  return (
    <section className="pt-[140px] pb-20 px-6 bg-gradient-to-br from-white to-[#fef7f3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
        <div>
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            For rørleggere & flisleggere
          </span>
          <h1 className="text-[42px] max-lg:text-[34px] max-sm:text-[28px] font-bold leading-[1.2] mb-5 text-navy">
            Utviklet med fagfolk{" "}
            <span className="text-orange">for fagfolk</span>
          </h1>
          <p className="text-lg text-text-light leading-[1.7] mb-8 font-light">
            Slidedrain Sluksystem forenkler monteringen og samspillet mellom alle
            involverte fag. Systemet er utviklet for å eliminere kjente
            feilkilder og minimere vannskaderisikoen ved gulvsluk og membran.
          </p>
          <a
            href="#problemer"
            className="inline-flex items-center gap-2.5 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)] hover:shadow-[0_6px_20px_rgba(251,92,19,0.4)]"
          >
            Se fordelene for ditt fag
            <ArrowRight />
          </a>
        </div>
        <div className="flex justify-center items-center max-lg:order-first">
          <Image
            src="/images/slukpotte-installed.jpg"
            alt="Slidedrain slukpotte installert på byggeplass"
            width={600}
            height={450}
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
