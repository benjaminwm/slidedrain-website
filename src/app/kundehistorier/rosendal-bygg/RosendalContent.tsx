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
                <span className="text-orange">Ole Olsen, rørlegger</span>
              </h1>
              <p className="text-lg text-text-light leading-[1.7] font-light mb-6">
                Når et detaljbesatt tømrerfirma i Trondheim har en rørlegger
                som kun monterer det han selv ville hatt hjemme, blir
                resultatet eksepsjonelt. Se hvordan Ole Olsen og Rosendal
                Bygg bruker Slidedrain til å levere premium
                baderomsopplevelser &ndash; uten kompromisser.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 p-4 bg-gray-bg rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm shrink-0">
                    RB
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-[14px]">
                      Rosendal Bygg
                    </p>
                    <p className="text-xs text-text-light">
                      Tømrerfirma &ndash; rehabilitering og nybygg, Trondheim
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-bg rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white font-bold text-sm shrink-0">
                    OO
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-[14px]">
                      Ole Olsen
                    </p>
                    <p className="text-xs text-text-light">
                      Rørlegger i Rosendal Bygg, medlem av VVS Fagmann
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center max-lg:order-first">
              <Image
                src="/images/kundehistorier/rosendal-2.jpg"
                alt="Ole Olsen planlegger slukplassering på byggeplassen til Rosendal Bygg"
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          {/* Intro - The companies */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Trondheims mest detaljbevisste byggherre
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              Rosendal Bygg er en totalentreprenør fra Trondheim som
              spesialiserer seg på rehabilitering og oppgradering av eldre
              boliger. Prosjektene deres kjennetegnes av en kompromissløs
              oppmerksomhet på detaljer &ndash; fra listverk som er smalere enn
              standard til nøye koordinert materialvalg gjennom hele boligen.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Når kvalitetskravene er så høye, trengs det håndverkere som
              matcher ambisjonsnivået. Ole Olsen er rørleggeren i Rosendal
              Bygg og medlem av VVS Fagmann &ndash; en fagmann som kun
              monterer det han selv ville hatt hjemme.
            </p>
          </FadeUp>

          {/* Quote 1 - Craftsman's choice */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Jeg som håndverker, jeg vil jo levere fra meg noe jeg
                står inne for. Jeg vil ikke bli oppringt et par uker
                etterpå.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Ole Olsen, rørlegger i Rosendal Bygg
              </cite>
            </blockquote>
          </FadeUp>

          {/* Challenge */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Utfordringen: Bjelkelag, design og vedlikehold
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              Rosendal Byggs prosjekter er ofte eldre boliger der bjelkelaget
              i gulvet setter begrensninger for hvor sluket kan plasseres.
              Kundene ønsker gjerne tile insert-design med storformatfliser,
              men tradisjonelle linjesluk skaper utfordringer &ndash; både
              under og etter montasje.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Ole hadde erfart problemene med linjesluk på nært hold: tette
              avløp, luktproblemer og frustrerte sluttkunder som ikke klarte
              vedlikeholdet selv.
            </p>
          </FadeUp>

          {/* Image 1 - Phone planning */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/rosendal-1.jpg"
              alt="Ole Olsen planlegger flisoppsett og slukplassering digitalt"
              width={800}
              height={450}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Digital planlegging av flisoppsett og slukplassering &ndash; Slidedrain
              gir fleksibilitet til å tilpasse løsningen etter bjelkelaget.
            </p>
          </FadeUp>

          {/* The problem with linear drains */}
          <FadeUp className="mb-16">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Problemet med tradisjonelle linjesluk
              </h3>
              <div className="space-y-4">
                {[
                  "Designet er så smalt at det tettes mye raskere enn store vannlåser på vanlige sirkulære sluk.",
                  "For komplisert for sluttkunden å vedlikeholde – ikke for en håndverker, men for den vanlige mannen i gata.",
                  "Resulterer i telefoner om lukt og tett avløp kort tid etter overlevering.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth={2} className="w-5 h-5 shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    <p className="text-white/80 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Solution */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Løsningen: Slidedrain Sluksystem
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-6">
              Ole introduserte Slidedrain for Rosendal Byggs prosjekter. Med
              den eksentriske varianten kunne sluket plasseres optimalt i
              forhold til bjelkelaget, og med tile insert fikk kundene det
              stilrene uttrykket de ønsket &ndash; uten mosaikkfliser og uten
              vedlikeholdsproblemene fra linjesluk.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Fleksibel plassering",
                  desc: "Den eksentriske varianten lar sluket plasseres uavhengig av bjelkelag og armaturplassering.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  title: "Storformat uten mosaikkflis",
                  desc: "Kilefall med storformatfliser gir færre fuger, enklere rengjøring og et moderne uttrykk.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="12" y1="3" x2="12" y2="21" />
                    </svg>
                  ),
                },
                {
                  title: "Enklere vedlikehold",
                  desc: "Stor vannlås som tettes sjeldnere enn linjesluk. Enkel å rengjøre for sluttkunden.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-bg rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-navy text-[15px] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Quote 3 - Flexibility */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Sluken kunne vært plassert her, og så kunne man gått for
                den eksentriske varianten der. Det setter ikke noen
                begrensninger for alternativene til kunden.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Ole Olsen, om fleksibiliteten ved prosjektering
              </cite>
            </blockquote>
          </FadeUp>

          {/* Image 2 - Installation */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/rosendal-2.jpg"
              alt="Ole Olsen planlegger slukplassering med Slidedrain slukpotte"
              width={800}
              height={450}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Ole planlegger slukplasseringen i bjelkelaget &ndash; den
              eksentriske varianten gjør det mulig å tilpasse etter
              konstruksjonen.
            </p>
          </FadeUp>

          {/* Result */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Resultatet
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-6">
              Resultatet er bad som forener Rosendal Byggs kompromissløse krav
              til kvalitet med en teknisk løsning som faktisk fungerer i
              hverdagen. Storformatfliser med tile insert gir et stilrent
              uttrykk, mens den store vannlåsen eliminerer
              vedlikeholdsproblemene som plaget tradisjonelle linjesluk.
            </p>
          </FadeUp>

          {/* Quote 4 - No callbacks */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Det er enkelt å rengjøre og det er enkelt å sette
                tilbake. Derfor får du ikke noen telefoner etterpå. Pluss at
                det ser veldig bra ut. Det er veldig lett å selge.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Ole Olsen, rørlegger i Rosendal Bygg
              </cite>
            </blockquote>
          </FadeUp>

          {/* Stats */}
          <FadeUp className="mb-16">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">0</p>
                  <p className="text-sm text-white/70">Tilbakemeldinger på tette sluk</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">100%</p>
                  <p className="text-sm text-white/70">Storformatflis uten mosaikkflis</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">Fleksibelt</p>
                  <p className="text-sm text-white/70">Tilpasset bjelkelag i alle bad</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Image 3 - Overview */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/rosendal-3.jpg"
              alt="Ole Olsen med Slidedrain slukpotte på byggeplassen"
              width={800}
              height={450}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Ole med Slidedrain slukpotte på byggeplassen &ndash; klar for
              installasjon i neste bad.
            </p>
          </FadeUp>

          {/* Key takeaways */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Nøkkelpunkter fra prosjektet
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Sluttkunden velger design, håndverkeren styrer teknikken",
                  desc: "Med Slidedrain og tile insert får kunden velge flis, farge og stil, mens rørleggeren har full kontroll over det tekniske.",
                },
                {
                  title: "Linjesluk-look uten linjesluk-problemer",
                  desc: "Kilefall med storformatfliser og tile insert gir det moderne uttrykket kundene ønsker, men med en vannlås som faktisk fungerer i hverdagen.",
                },
                {
                  title: "Ingen begrensninger fra bjelkelaget",
                  desc: "Den eksentriske varianten og fleksibel plassering gjør at sluket kan tilpasses ethvert konstruksjonsoppsett.",
                },
                {
                  title: "Færre fagdager, null reklamasjoner",
                  desc: "Enklere montasje med færre deler og et system sluttkunden faktisk klarer å vedlikeholde selv.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-gray-bg rounded-xl">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-6 h-6 shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-navy text-[15px] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Final quote */}
          <FadeUp>
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Hvis man skal ha et sluk hjem til seg selv, i hvert fall
                jeg som rørlegger &ndash; da får jeg bruke det som jeg selv
                ville ha brukt hjemme. Et standard sirkulært sluk med en tile
                insert over.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Ole Olsen, rørlegger i Rosendal Bygg
              </cite>
            </blockquote>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
