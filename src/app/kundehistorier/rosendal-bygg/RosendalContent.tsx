"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function RosendalContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/kundehistorier"
            className="inline-flex items-center gap-1.5 text-sm text-text-light hover:text-navy mb-6 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Alle kundehistorier
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                Kundehistorie
              </span>
              <h1 className="text-[42px] max-lg:text-[34px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 text-navy">
                Rosendal Bygg:{" "}
                <span className="text-orange">
                  Fra planlegging til ferdig bad
                </span>
              </h1>
              <p className="text-lg text-text-light leading-[1.7] font-light mb-6">
                Se hvordan Rosendal Bygg bruker Slidedrain Sluksystem for
                enklere planlegging, raskere montasje og tryggere bad i sine
                byggeprosjekter.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-navy/8">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-lg shrink-0">
                  RB
                </div>
                <div>
                  <p className="font-semibold text-navy text-[15px]">
                    Rosendal Bygg
                  </p>
                  <p className="text-sm text-text-light">
                    Byggeprosjekt med Slidedrain Sluksystem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center max-lg:order-first">
              <Image
                src="/images/kundehistorier/rosendal-2.jpg"
                alt="Rosendal Bygg – installasjon av Slidedrain slukpotte"
                width={700}
                height={394}
                className="w-full rounded-2xl shadow-[0_20px_60px_rgba(40,52,71,0.12)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story content */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Intro */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Utfordringen
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8]">
              For Rosendal Bygg var det viktig å finne en løsning som forenklet
              koordineringen mellom fagområdene og samtidig ga sluttkunden
              valgfrihet sent i byggeprosessen. Tradisjonelle slukløsninger
              krevde tidlige beslutninger som ofte førte til omprosjektering
              og forsinkelser.
            </p>
          </FadeUp>

          {/* Image 1 - Phone planning */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/rosendal-1.jpg"
              alt="Digital planlegging av baderomsoppsett med Slidedrain"
              width={800}
              height={450}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Digital planlegging – flisoppsett og slukplassering tegnes inn
              direkte på mobilen.
            </p>
          </FadeUp>

          {/* Solution */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Løsningen
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-6">
              Ved å velge Slidedrain Sluksystem kunne Rosendal Bygg standardisere
              den tekniske utførelsen for alle bad i prosjektet. Slukpotten
              plasseres i hjørnet under byggets rørleggerarbeider, mens det
              synlige designvalget utsettes til flislegging.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "📐",
                  title: "Enklere planlegging",
                  desc: "Én teknisk løsning for alle bad, uavhengig av designvalg.",
                },
                {
                  icon: "⚡",
                  title: "Raskere montasje",
                  desc: "Færre deler og skrueløs teknologi gir raskere installasjon.",
                },
                {
                  icon: "🛡️",
                  title: "Tryggere bad",
                  desc: "Patentert system eliminerer tradisjonelle feilkilder.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-bg rounded-xl p-5 text-center"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h4 className="font-semibold text-navy text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Image 2 - Installation */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/rosendal-2.jpg"
              alt="Installasjon av Slidedrain slukpotte på byggeplass"
              width={800}
              height={450}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Slukpotten plasseres i hjørnet under rørleggerarbeidet – den
              modulære oppbyggingen gjør koordineringen enkel.
            </p>
          </FadeUp>

          {/* Result */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Resultatet
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-6">
              Med Slidedrain fikk Rosendal Bygg en forutsigbar byggeprosess
              der alle fagområder jobbet mot samme tekniske standard. Sluttkundene
              fikk full valgfrihet på designet helt frem til flislegging,
              noe som økte kundetilfredsheten og fjernet behovet for kostbar
              omprosjektering.
            </p>
            <div className="bg-navy rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">0</p>
                  <p className="text-sm text-white/70">Omprosjekteringer</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">100%</p>
                  <p className="text-sm text-white/70">Standardisert utførelse</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">Utvidet</p>
                  <p className="text-sm text-white/70">Tilvalgsvindu for kunden</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Image 3 - Overview */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/rosendal-3.jpg"
              alt="Oversikt over baderom under bygging med Slidedrain"
              width={800}
              height={450}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Baderommet tar form – slukpotten er allerede på plass og klar
              for neste steg.
            </p>
          </FadeUp>

          {/* Quote */}
          <FadeUp>
            <blockquote className="border-l-4 border-orange pl-6 py-2">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-4">
                &ldquo;Med Slidedrain slipper vi å bekymre oss for sene endringer.
                Den tekniske installasjonen er den samme uansett hva kunden
                velger, og det forenkler hele prosessen for oss.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                — Rosendal Bygg
              </cite>
            </blockquote>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
