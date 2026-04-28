"use client";

import FadeUp from "../FadeUp";

const benefits = [
  "Sjeldnere rens med stor vannlås — trenger rens langt sjeldnere enn tradisjonelle linjesluk",
  "Enklere renhold med færre fuger — tilpasset større flisformat",
  "Slukrist og vannlås løftes enkelt ut med medfølgende rist-verktøy",
];

export default function MaintenanceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeUp className="flex justify-center">
          <div className="w-full max-w-[360px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(40,52,71,0.15)]">
            <iframe
              src="https://player.mux.com/q0201XUCI34NOZzX02a4abAJHTXT015002hWJ14pqsptBBTE?thumbnail-time=14"
              style={{ width: "100%", border: "none", aspectRatio: "9/16" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeUp>

        <FadeUp>
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Minimalt vedlikehold
          </span>
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-5 leading-tight text-navy">
            Utviklet for{" "}
            <span className="text-orange">minimalt vedlikehold</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light mb-6">
            Slukrenne og slukrist med tile insert kan enkelt løftes ut med det
            medfølgende rist-verktøyet, og den store vannlåsen tas enkelt ut
            for rens ved behov.
          </p>
          <ul className="space-y-4">
            {benefits.map((item, i) => (
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
    </section>
  );
}
