"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

export default function ProductOverview() {
  return (
    <section className="py-20 px-6" id="produkter">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Ett sluksystem,{" "}
            <span className="text-orange">mange muligheter</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Slidedrain er et komplett modulært sluksystem der den tekniske
            installasjonen er den samme, uansett hvilket designuttrykk
            sluttkunden velger.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product 1: Gulvsluk */}
          <FadeUp className="bg-gray-bg rounded-2xl overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/images/hero-installation.jpg"
                alt="Slidedrain Gulvsluk installert"
                width={600}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange mb-2 block">
                Teknisk VVS
              </span>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Slidedrain Gulvsluk
              </h3>
              <p className="text-[15px] text-text-light leading-[1.7] mb-4">
                Komplett modulært sluksystem med slukpotte, høydejusterbar
                slukoverdel og monteringsverktøy. SINTEF-godkjent for bruk som
                linje-, hjørne- og punktsluk.
              </p>
              <ul className="space-y-2">
                {[
                  "Trinnløs 40 mm høydejustering",
                  "Integrert slukmansjett for skrueløs montasje",
                  "Klemring i stål for kompatibilitet til alle typer membran",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-text-light"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-4 h-4 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Product 2: Slukrenner & Slukrister */}
          <FadeUp className="bg-gray-bg rounded-2xl overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden">
              {/* TODO: Stian sender eget slukrenne-bilde – placeholder bytter ut hero-duplikat */}
              <Image
                src="/images/bathroom-ullernfaret.jpg"
                alt="Slidedrain slukrenne i moderne baderom"
                width={600}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange mb-2 block">
                Synlig VVS
              </span>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Slukrenner & Slukrister
              </h3>
              <p className="text-[15px] text-text-light leading-[1.7] mb-4">
                Velg blant 25+ design med tile insert og rist som monteres ved
                flislegging. Alle design til Slidedrain Gulvsluk og andre
                sirkulære sluk på markedet.
              </p>
              <ul className="space-y-2">
                {[
                  "Tile Insert for usynlig integrering",
                  "Stor justerbarhet i bredde- og lengderetning",
                  "Slukrenner 600\u20131200 mm for storformat-fliser",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-text-light"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-4 h-4 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
