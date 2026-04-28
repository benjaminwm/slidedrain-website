"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

/**
 * Erstatter de 4 verdi-badgene i TrustBar.
 * NB: bildene under er placeholders – Stian sender:
 *  - SINTEF: close-up av Slukrenne fra Lommundal med SINTEF-Teknisk godkjent logo over
 *  - DOGA: Slidedrain Gulvsluk med Monteringsverktøy fra Melhus med DOGA-logo over
 */
export default function SintefDogaSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SINTEF Teknisk Godkjenning */}
        <FadeUp className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(40,52,71,0.04)]">
          <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
            {/* TODO: bytt til close-up av Slukrenne fra Lommundal */}
            <Image
              src="/images/slukpotte-installed.jpg"
              alt="Slidedrain Slukrenne installert"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            {/* SINTEF-logo overlay */}
            <div className="absolute top-5 right-5 bg-white/95 rounded-xl px-4 py-3 shadow-lg flex flex-col items-center">
              <span className="text-[10px] font-bold text-navy uppercase tracking-wider">
                SINTEF
              </span>
              <span className="text-[10px] font-semibold text-navy/70">
                Teknisk Godkjenning
              </span>
              <span className="text-[10px] text-text-light mt-0.5">
                TG 20991
              </span>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-4 leading-tight">
              Et komplett sluksystem med SINTEF Teknisk Godkjenning
            </h3>
            <p className="text-[15px] text-text-light leading-[1.7]">
              Slidedrain Sluksystem er tildelt SINTEF Teknisk Godkjenning
              (TG&nbsp;20991) – en uavhengig bekreftelse på at systemet oppfyller
              norske krav til dokumentasjon og teknisk ytelse.
            </p>
            <p className="text-[15px] text-text-light leading-[1.7] mt-3">
              Godkjenningen gjelder systemet i sin helhet, slik at du kan bygge
              trygt i henhold til gjeldende regelverk.
            </p>
          </div>
        </FadeUp>

        {/* DOGA – Prisvinnende design, utviklet i Norge */}
        <FadeUp className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(40,52,71,0.04)]">
          <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
            {/* TODO: bytt til Slidedrain Gulvsluk med Monteringsverktøy fra Melhus */}
            <Image
              src="/images/product-packaging.jpg"
              alt="Slidedrain Gulvsluk med monteringsverktøy"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            {/* DOGA-logo overlay */}
            <div className="absolute top-5 right-5 bg-white/95 rounded-xl px-4 py-3 shadow-lg flex flex-col items-center">
              <span className="text-[10px] font-bold text-orange uppercase tracking-wider">
                DOGA
              </span>
              <span className="text-[10px] font-semibold text-navy/70">
                Merket Nykommer
              </span>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl max-md:text-xl font-bold text-navy mb-4 leading-tight">
              Prisvinnende design, utviklet i Norge
            </h3>
            <p className="text-[15px] text-text-light leading-[1.7]">
              Slidedrain Gulvsluk er en patentert innovasjon produsert i Norge,
              utviklet fra en idé av flislegger Thomas Nygård. Konseptet er
              vinner av designprisen DOGA-merket Nykommer.
            </p>
            <blockquote className="mt-4 pl-4 border-l-2 border-orange italic text-[14px] text-text-light leading-[1.7]">
              «Slidedrain er svært gjennomarbeidet og godt presentert, fra
              hvordan de reduserer klimaavtrykket i produksjonen, til fokuset på
              brukervennlighet og enkel installasjon. Dette er rett og slett
              produktdesign av imponerende kvalitet.»
              <footer className="mt-2 not-italic text-xs text-text-light/70">
                – Juryen, DOGA-merket Nykommer
              </footer>
            </blockquote>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
