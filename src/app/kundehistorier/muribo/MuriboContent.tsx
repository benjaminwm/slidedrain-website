"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function MuriboContent() {
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
                Muribø totalrenoverer bad uten fallgruver{" "}
                <span className="text-orange">med Slidedrain</span>
              </h1>
              <p className="text-lg text-text-light leading-[1.7] font-light mb-6">
                Når du river et gammelt bad, vet du aldri helt hva som venter
                under gulvet. Hos Muribø dukket det opp en feit bjelke midt i
                dusjsonen, akkurat der sluket skulle stå. Se hvordan
                totalleverandøren fra Oppegård løser slike overraskelser med
                Slidedrain sluksystem, og hvorfor de har &laquo;forelsket seg
                helt&raquo; i fleksibiliteten.
              </p>
              <div className="flex items-center gap-4 p-4 bg-gray-bg rounded-xl">
                <Image
                  src="/images/kundehistorier/muribo-1.jpg"
                  alt="Kristian Muribø"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-semibold text-navy text-[15px]">
                    Kristian Muribø
                  </p>
                  <p className="text-sm text-text-light">
                    Prosjektleder i Muribø AS, Oppegård
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center max-lg:order-first">
              <Image
                src="/images/kundehistorier/muribo-1.jpg"
                alt="Kristian Muribø i Muribø AS med en Slidedrain slukpotte foran firmaskiltet"
                width={700}
                height={467}
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
          {/* Intro - The company */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Totalleverandør på bad
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              Muribø AS er en bygg- og installasjonsbedrift i Oppegård som har
              spesialisert seg på totalrenovering av bad. Når de tar et bad,
              totalrenoverer de det. De engasjerer seg sjelden i å bare gjøre
              noe på et eksisterende bad.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Styrken ligger i totalpakken: Muribø har nesten alt in-house, og
              rørleggeren de bruker eksternt har de samarbeidet med i ti år.
            </p>
          </FadeUp>

          {/* Quote 1 */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Det er de samme gutta som går fra bad til bad, så vi
                vet hvordan vi vil ha det, og hvordan det skal være. Og da
                flyter det.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Kristian Muribø, prosjektleder i Muribø AS
              </cite>
            </blockquote>
          </FadeUp>

          {/* It started with the slukrenne */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Det startet med slukrennen
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Muribø oppdaget Slidedrain for rundt to år siden, via
              rørleggeren sin. Det som fanget dem først, var slukrennen, og
              fleksibiliteten den gir sammenlignet med andre løsninger på
              markedet. Med Slidedrains eksentriske slukrenner kan sluket
              flyttes til siden under rennen, uten at det synes på det
              ferdige badet.
            </p>
          </FadeUp>

          {/* Quote 2 */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Andre konkurrenter på markedet er så låst, og det er
                så liten åpning til vannlåsen. Det er den fleksibiliteten på
                slukrennen vi har forelsket oss helt i.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Kristian Muribø, prosjektleder i Muribø AS
              </cite>
            </blockquote>
          </FadeUp>

          {/* The problem with the traditional approach */}
          <FadeUp className="mb-16">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Problemet med det tradisjonelle løpet
              </h3>
              <div className="space-y-4">
                {[
                  "I rehabilitering ser du først hvor bjelkene går når badet er revet. Ligger det en bjelke der sluket skulle stått, må du omprosjektere og flytte sluket.",
                  "Med et tradisjonelt sluk må plassering og høyde låses på millimeteren i en veldig tidlig fase, og resten av badet må tilpasse seg sluket.",
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

          {/* Flexibility text + quote */}
          <FadeUp className="mb-16">
            <p className="text-[17px] text-text-light leading-[1.8]">
              Med Slidedrain går Muribø fra at alt må være låst tidlig, til
              at de har fleksibilitet å gå på gjennom hele prosjektet.
            </p>
          </FadeUp>

          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Du sparer fallgruver. Sluttresultatet blir akkurat som
                det var tiltenkt.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Kristian Muribø, prosjektleder i Muribø AS
              </cite>
            </blockquote>
          </FadeUp>

          {/* Image - slukpotte */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/muribo-2.jpg"
              alt="Slidedrain slukpotte i resirkulert plast holdes opp foran Muribø-skiltet"
              width={800}
              height={341}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Slidedrain gulvsluk er støpeformet, med opptil 40 mm
              høydejustering fra slukpotten.
            </p>
          </FadeUp>

          {/* The beam in the shower zone */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              En feit bjelke midt i dusjsonen
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8]">
              På dette prosjektet var utfordringen konkret: Kunden skulle ha
              en 90-dusj, 45 centimeter ut fra veggen. Men da badet var
              revet, viste det seg at det gikk en feit bjelke midt i senter,
              akkurat der gulvsluket skulle stått. I stedet for å
              omprosjektere hele dusjsonen flyttet Muribø ganske enkelt
              sluket til siden med den eksentriske slukrennen, og sluttkunden
              får det de har sett for seg.
            </p>
          </FadeUp>

          {/* Quote 3 */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Så vi fikk ikke satt sluket der. Da bruker vi den
                eksentriske slukrennen, og her har vi faktisk pushet den så å
                si maks. Veggflisa kommer på 15, og da går det akkurat opp.
                Det er helt perfekt.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Kristian Muribø, prosjektleder i Muribø AS
              </cite>
            </blockquote>
          </FadeUp>

          {/* Image - installation */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/muribo-3.jpg"
              alt="Den eksentriske slukrennen monteres i dusjsonen hos Muribø"
              width={800}
              height={533}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Den eksentriske slukrennen monteres. Sluket er flyttet til
              siden for å gå klar av bjelken, uten at det synes på det
              ferdige badet.
            </p>
          </FadeUp>

          {/* The sluk in the formwork */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Sluket settes igjen i forskalingen
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Slukrennen var starten, men nå har Muribø også brukt Slidedrain
              gulvsluk på rundt ti bad. Der er det støpeformen og
              høydejusteringen som gjør jobben enkel: Rørleggeren fester
              sluket ned i gulvsponen og setter det igjen i forskalingen. Så
              er det mureren som justerer overdelen i vater og stiller inn
              tykkelsen på støpen ved sluket, opp til 40 millimeter. Støper
              du opp til nivåpilen, gjenspeiler den nøyaktig høyden som er
              satt på innsiden, millimeterpresist.
            </p>
          </FadeUp>

          {/* Result */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Resultatet
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Resultatet er bad som blir riktige på første forsøk. Med en
              fast metode for nedsenk og fall blir det riktig hver gang
              &ndash; og skulle det av en eller annen grunn bli støpt høyere
              enn planlagt, justeres sluket i stedet for at rørleggeren må
              tilbake med en forhøyningsring. På dette prosjektet brukte
              Muribø også påsveiset slukmansjett, noe de beskriver som
              &laquo;helt overlegen&raquo; fordi det lar dem droppe
              klemringen. Med både Slidedrain Gulvsluk og Slukrenne har
              prosjektet dessuten SINTEF Teknisk Godkjenning på hele
              konseptet.
            </p>
          </FadeUp>

          {/* Quote 4 */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Det gir færre fuger, og det betyr mindre vedlikehold.
                Det er det folk skal ha. Det skal være enklere og mindre
                vedlikehold.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Kristian Muribø, prosjektleder i Muribø AS
              </cite>
            </blockquote>
          </FadeUp>

          {/* Solution cards */}
          <FadeUp className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Fleksibel plassering",
                  desc: "Den eksentriske slukrennen lar sluket flyttes til siden, uavhengig av bjelkelag.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                      <path d="M2 12h20" /><path d="M18 8l4 4-4 4" /><path d="M6 8l-4 4 4 4" />
                    </svg>
                  ),
                },
                {
                  title: "Millimeterpresis høyde",
                  desc: "Opptil 40 mm høydejustering. Rørleggeren setter igjen sluket, mureren justerer til slutt.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                      <path d="M12 22V2" /><path d="M8 6l4-4 4 4" /><path d="M8 18l4 4 4-4" />
                    </svg>
                  ),
                },
                {
                  title: "Mindre vedlikehold",
                  desc: "Stor vannlås, store fliser og færre fuger. Enkelt å rengjøre for sluttkunden.",
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

          {/* Key takeaways */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Nøkkelpunkter fra prosjektet
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Overraskelser under gulvet stopper ikke prosjektet",
                  desc: "Da en bjelke dukket opp midt i dusjsonen, ble sluket flyttet til siden med den eksentriske slukrennen – uten omprosjektering.",
                },
                {
                  title: "Sluket settes igjen i forskalingen",
                  desc: "Rørleggeren monterer slukpotten tidlig, og mureren stiller inn nøyaktig høyde med nivåpilen helt til slutt.",
                },
                {
                  title: "Færre fallgruver, riktig på første forsøk",
                  desc: "Med fast metode for nedsenk og fall blir sluttresultatet akkurat som tiltenkt – hver gang.",
                },
                {
                  title: "SINTEF-godkjent på hele konseptet",
                  desc: "Både gulvsluk og slukrenne har SINTEF Teknisk Godkjenning, og påsveiset slukmansjett erstatter klemringen.",
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

        </div>
      </section>
    </>
  );
}
