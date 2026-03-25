"use client";

import FadeUp from "./FadeUp";

export default function VideoSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video */}
        <FadeUp className="flex justify-center">
          <div className="w-full max-w-[360px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(40,52,71,0.15)]">
            <iframe
              src="https://player.mux.com/V9LeahuWNKZNGNCK007IfljcMptA5A2sK8wN00aiMHs02A?autoplay=1&muted=1&loop=1"
              style={{ width: "100%", border: "none", aspectRatio: "9/16" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeUp>

        {/* Text */}
        <FadeUp>
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Se det i praksis
          </span>
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-5 leading-tight text-navy">
            Fra installasjon til{" "}
            <span className="text-orange">ferdig resultat</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light mb-6">
            Se hvordan Slidedrain Sluksystem monteres trinn for trinn. Den
            modulære oppbyggingen sikrer en effektiv og feilfri installasjon
            for alle involverte fagområder.
          </p>
          <ul className="space-y-4">
            {[
              "Én felles teknisk løsning for rørlegger, membranlegger og flislegger",
              "Trinnløs høydejustering med patentert monteringsverktøy",
              "Designvalg monteres ved flislegging – uten omprosjektering",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-text-light">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-5 h-5 shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
