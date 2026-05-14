"use client";

import Link from "next/link";
import FadeUp from "./FadeUp";

export default function VideoSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video */}
        <FadeUp className="flex justify-center">
          <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(40,52,71,0.15)]">
            <iframe
              src="https://player.mux.com/uilDZqS46Gezh3hdn4mkIwBp4a3SMRb4t3jXwzsaN00M?metadata-video-title=Installasjonfilm+kort+norsk&thumbnail-time=20&start-time=20&accent-color=%23ff7300&primary-color=%23ffffff&secondary-color=%23ff7300"
              style={{ width: "100%", border: "none", aspectRatio: "1/1" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Installasjonsfilm Slidedrain"
            />
          </div>
        </FadeUp>

        {/* Text */}
        <FadeUp>
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Se det i praksis
          </span>
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-5 leading-tight text-navy">
            Teknisk montering{" "}
            <span className="text-orange">i 6 steg</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light mb-6">
            Se hvordan Slidedrain sluksystem monteres trinn for trinn. Den
            modulære oppbyggingen sikrer effektiv og feilfri installasjon for
            alle involverte fag.
          </p>
          <ul className="space-y-4 mb-6">
            {[
              "Én felles teknisk løsning for rørlegger, membranlegger og flislegger",
              "40 mm høydejustering etter at slukpotten er montert",
              "Samme gulvsluk – tilpasset over 25+ ulike design",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-text-light">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-5 h-5 shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/installasjon"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
          >
            Se hele installasjonsveiledningen
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
