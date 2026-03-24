"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pt-[140px] pb-20 px-6 bg-gradient-to-br from-white to-[#fef7f3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
        <div>
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Om Slidedrain
          </span>
          <h1 className="text-[42px] max-lg:text-[34px] max-sm:text-[28px] font-bold leading-[1.2] mb-5 text-navy">
            Norsk innovasjon for{" "}
            <span className="text-orange">tryggere bad</span>
          </h1>
          <p className="text-lg text-text-light leading-[1.7] font-light">
            Slidedrain er utviklet i tett samarbeid med norske håndverkere for
            norske forhold. Vår patenterte teknologi eliminerer de vanligste
            årsakene til vannskader i overgangen mellom gulvsluk og membran.
          </p>
        </div>
        <div className="flex justify-center items-center max-lg:order-first">
          <Image
            src="/images/team-meeting.jpg"
            alt="Slidedrain-teamet diskuterer produktutvikling"
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
