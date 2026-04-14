"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

export default function StandardiseringSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <FadeUp className="flex justify-center">
            <Image
              src="/images/hjorneplassert-gulvsluk.png"
              alt="Hjørneplassert gulvsluk med tre ulike designalternativer"
              width={700}
              height={400}
              className="w-full max-w-[560px]"
            />
          </FadeUp>

          {/* Right: Text */}
          <FadeUp>
            <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
              Hjørneplassert gulvsluk
            </span>
            <h2 className="text-[32px] max-md:text-[26px] font-bold leading-[1.2] mb-5 text-navy">
              Standardiser byggeprosjektet fra{" "}
              <span className="text-orange">planlegging til flislegging</span>
            </h2>
            <p className="text-[17px] text-text-light leading-[1.7] font-light mb-6">
              Standardiser byggeprosjektet fra planlegging til flislegging, ved å
              forenkle prosjektering, innkjøp og montering av gulvsluk for alle
              flislagte bad.
            </p>
            <ul className="space-y-3">
              {[
                "Én teknisk løsning for alle bad i prosjektet",
                "Designvalg utsettes til flislegging",
                "Eliminerer omprosjektering ved sene kundeendringer",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-text-light"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth={2}
                    className="w-5 h-5 shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
