"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

/**
 * Erstatter de 4 verdi-badgene i TrustBar.
 * NB: bakgrunnsbildene er placeholders – Stian sender:
 *  - SINTEF: close-up av Slukrenne fra Lommundal
 *  - DOGA: Slidedrain Gulvsluk med Monteringsverktøy fra Melhus
 */
export default function SintefDogaSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SINTEF Teknisk Godkjenning + EPD */}
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
            {/* SINTEF + EPD-merker overlay */}
            <div className="absolute top-5 right-5 bg-white/95 rounded-xl px-4 py-3 shadow-lg flex items-center gap-4">
              <Image
                src="/images/badges/badge-sintef.png"
                alt="SINTEF Teknisk Godkjenning"
                width={64}
                height={64}
                className="h-14 w-auto"
              />
              <div className="w-px h-12 bg-navy/10" />
              <Image
                src="/images/badges/badge-epd.png"
                alt="EPD-Norge"
                width={48}
                height={64}
                className="h-14 w-auto"
              />
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
            <a
              href="https://www.sintefcertification.no/Product/Download/11692"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Last ned her
            </a>
          </div>
        </FadeUp>

        {/* DOGA – Prisvinnende design + Norskprodusert */}
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
            {/* DOGA + Norskprodusert-merker overlay */}
            <div className="absolute top-5 right-5 bg-white/95 rounded-xl px-4 py-3 shadow-lg flex flex-col items-center gap-2">
              <Image
                src="/images/badges/badge-doga.png"
                alt="DOGA Merket Nykommer"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
              <div className="w-full h-px bg-navy/10" />
              <Image
                src="/images/badges/badge-nit-norsk.jpg"
                alt="Norskprodusert"
                width={200}
                height={50}
                className="h-7 w-auto"
              />
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
            <a
              href="https://doga.no/forbilder-og-eksempler/slidedrain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
            >
              Les juryens vurdering på doga.no
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
