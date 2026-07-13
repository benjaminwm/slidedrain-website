"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function TotalTekniskContent() {
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
                Total Teknisk sparer tid og oppmøter{" "}
                <span className="text-orange">med Slidedrain</span>
              </h1>
              <p className="text-lg text-text-light leading-[1.7] font-light mb-6">
                Når rørlegger og gulvavretter slipper å møtes på samme
                tidspunkt, frigjøres både tid og penger. Vi ble med Vegard i{" "}
                <a href="https://totalteknisk.no/" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-orange transition-colors">
                  Total Teknisk
                </a>{" "}
                for å se hvordan de bygger nye våtrom med Slidedrain gulvsluk,
                og hvorfor rekkefølgen de jobber i er selve nøkkelen til
                effektiviteten.
              </p>
              <div className="flex items-center gap-4 p-4 bg-gray-bg rounded-xl">
                <Image
                  src="/images/kundehistorier/vegard.jpg"
                  alt="Vegard"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-semibold text-navy text-[15px]">
                    Vegard
                  </p>
                  <p className="text-sm text-text-light">
                    Rørlegger i Total Teknisk AS, Trondheim
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center max-lg:order-first">
              <Image
                src="/images/kundehistorier/total-teknisk-1.jpg"
                alt="Vegard i Total Teknisk på byggeplassen der de bygger nye våtrom med Slidedrain"
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
          {/* Intro - The company */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Mesterbedrift i Trondheim
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              Total Teknisk er en mesterbedrift og rørleggerbedrift i Trondheim
              som blant annet jobber for boligutviklere og utbyggere. På dette
              nybyggprosjektet bygger de nye våtrom, og måten de bruker
              Slidedrain-sluket på endrer hele arbeidsflyten på byggeplassen.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Nøkkelen ligger i rekkefølgen: sluket monteres først, og høyden
              avgjøres helt til slutt.
            </p>
          </FadeUp>

          {/* Challenge */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Sluket først, høyden til slutt
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              I et tradisjonelt løp må sluket ofte settes i en bestemt høyde
              tidlig, og resten av gulvarbeidet må tilpasse seg det. Total
              Teknisk snur på rekkefølgen. De installerer slukpotten der
              sluket skal være etter at betongstøpet er lagt, og lar høyden
              bli bestemt helt til slutt.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Nøkkelen ligger i de 40 millimeterne med høydejustering som
              Slidedrain-sluket gir. I stedet for å måle opp fra bunnen,
              regner Total Teknisk ned fra ferdig gulv. Da vet de at
              slukpotten skal stå 40 mm fra ferdig gulvnivå, og resten løser
              seg underveis.
            </p>
          </FadeUp>

          {/* Image - Slukpotte in concrete */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/total-teknisk-2.jpg"
              alt="Slidedrain slukpotte montert i betonggulvet der sluket skal være"
              width={800}
              height={533}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Slukpotten monteres der sluket skal være, etter at betongstøpet
              er lagt. Selve høyden bestemmes helt til slutt.
            </p>
          </FadeUp>

          {/* Quote 1 */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;Det som er bra for oss når vi monterer her, er at vi
                kan montere slukpotten først. Den som tynnavretter, setter den
                på perfekt høyde. Så er det ferdig, tar av, og flytter på
                neste.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Vegard, rørlegger i Total Teknisk
              </cite>
            </blockquote>
          </FadeUp>

          {/* The problem with the traditional sequence */}
          <FadeUp className="mb-16">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Problemet med det tradisjonelle løpet
              </h3>
              <div className="space-y-4">
                {[
                  "Sluket må settes i en bestemt høyde tidlig, og resten av gulvarbeidet må tilpasse seg det.",
                  "Rørlegger og gulvavretter må koordineres og møtes på samme tidspunkt i prosjektet.",
                  "Blir høyden feil, må en rørlegger tilbake på et senere tidspunkt bare for å justere den.",
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

          {/* Solution text */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Fra betongstøp til ferdig sluk
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              På dette prosjektet legges det vannbåren varme, og
              fremgangsmåten er enkel og forutsigbar. Etter at betongstøpet er
              lagt, plasseres slukpotten der sluket skal være. Rundt legges
              det dekkpapp, og med vannbåren gulvvarme på plass festes
              slukpotten. Først da settes monteringsverktøyet på, og det er
              her Slidedrain-systemet virkelig kommer til sin rett.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Monteringsverktøyet har innebygd vater og en gravert måleskala,
              slik at høyden kan justeres millimeterpresist mellom 0 og 40 mm.
              Det betyr at den som tynnavretter kan bestemme nøyaktig hvor
              sluket skal ligge i høyden. Det skjer helt til slutt, når
              laseren styrer støpen.
            </p>
          </FadeUp>

          {/* Image - Installation */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/total-teknisk-3.jpg"
              alt="Slukpotten settes ned mellom rørene for vannbåren varme"
              width={800}
              height={450}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Slukpotten settes ned mellom rørene for vannbåren varme og
              festes med dekkpapp rundt, før monteringsverktøyet settes på og
              høyden avgjøres.
            </p>
          </FadeUp>

          {/* Quote 2 */}
          <FadeUp className="mb-16">
            <blockquote className="border-l-4 border-orange pl-6 py-2 bg-gray-bg rounded-r-xl p-6">
              <p className="text-xl max-md:text-lg text-navy leading-[1.6] italic mb-3">
                &ldquo;De går jo med laseren sin og støper det vi har. Og hvis
                det blir 8 mm høyere, så kan han bare løfte opp litt, så er
                den casen closed.&rdquo;
              </p>
              <cite className="text-sm text-text-light not-italic font-medium">
                &mdash; Vegard, rørlegger i Total Teknisk
              </cite>
            </blockquote>
          </FadeUp>

          {/* Result */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Færre oppmøter, lavere bemanning
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              Resultatet er en ren og fin overgang mellom sluk og gulv, uten
              skruer i overgangen mot membranen. &laquo;Så får du en kjempefin
              overgang, med slukmatchen&raquo;, som Vegard beskriver det. En
              jevn overgang gjør også fliseleggingen enklere i neste ledd.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              Den store gevinsten handler ikke bare om et pent sluk. Den
              handler om logistikk. Ved å gjøre sluket ferdig i én operasjon
              slipper Total Teknisk å sende en rørlegger tilbake på et senere
              tidspunkt bare for å justere høyden. &laquo;Sparer veldig mye
              tid. Når vi først er her, så kan vi gjøre ferdig alt og gå til
              det neste, så slipper vi en mann til å gå tilbake&raquo;,
              forteller Vegard. For en bedrift som kjører lav bemanning, er
              dette avgjørende: &laquo;Det hjelper oss veldig mye, og vi er
              avhengige av at ting går smooth hele tiden.&raquo;
            </p>
          </FadeUp>

          {/* Solution cards */}
          <FadeUp className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "40 mm høydejustering",
                  desc: "Høyden kan justeres millimeterpresist etter at slukpotten er montert – helt til slutt i prosjektet.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                      <path d="M12 22V2" /><path d="M8 6l4-4 4 4" /><path d="M8 18l4 4 4-4" />
                    </svg>
                  ),
                },
                {
                  title: "Verktøy med innebygd vater",
                  desc: "Monteringsverktøyet har gravert måleskala fra 0 til 40 mm, slik at høyden settes nøyaktig.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
                      <rect x="2" y="9" width="20" height="6" rx="2" />
                      <circle cx="12" cy="12" r="1.5" />
                    </svg>
                  ),
                },
                {
                  title: "Skruefri overgang",
                  desc: "Patentert, skruefritt system og fabrikkmontert mansjett gir en tett og ren overgang mot membranen.",
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

          {/* Stats */}
          <FadeUp className="mb-16">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">1</p>
                  <p className="text-sm text-white/70">Oppmøte – sluket gjøres ferdig i én operasjon</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">40 mm</p>
                  <p className="text-sm text-white/70">Høydejustering etter at slukpotten er montert</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange mb-1">82%</p>
                  <p className="text-sm text-white/70">Lavere CO₂-utslipp med resirkulert plast</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Image - Slukpotte among pipes */}
          <FadeUp className="mb-16">
            <Image
              src="/images/kundehistorier/total-teknisk-4.jpg"
              alt="Slidedrain slukpotte festet med dekkpapp mellom rørene for vannbåren gulvvarme"
              width={800}
              height={533}
              className="w-full rounded-2xl shadow-[0_8px_30px_rgba(40,52,71,0.1)] mb-6"
            />
            <p className="text-sm text-text-light text-center italic">
              Slukpotten på plass mellom rørene for vannbåren varme &ndash;
              klar for tynnavretting, der høyden bestemmes helt til slutt.
            </p>
          </FadeUp>

          {/* Why the system works */}
          <FadeUp className="mb-16">
            <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-5">
              Hvorfor systemet fungerer
            </h2>
            <p className="text-[17px] text-text-light leading-[1.8] mb-4">
              Slidedrain er et norskprodusert gulvsluk laget i resirkulert
              plast. Materialbruken reduserer CO₂-utslippet med rundt 82
              prosent sammenlignet med ny plast. Sluket er universelt og
              passer mot plast-, stål- og støpejernsavløp, og er laget for
              flislagte gulv i alle typer våtrom.
            </p>
            <p className="text-[17px] text-text-light leading-[1.8]">
              To egenskaper er spesielt viktige for arbeidsflyten Total
              Teknisk beskriver. Den ene er den fabrikkmonterte, integrerte
              mansjetten, som sikrer at sluket er tett mot membranen uten
              tilpasning på stedet. Den andre er det patenterte, skruefrie
              systemet i overgangen mellom sluk og membran, som gir den rene
              &laquo;slukmatchen&raquo; Vegard snakker om. Sammen med de 40
              millimeterne med høydejustering er det dette som gjør at
              rørleggeren kan sette potten først og la høyden avgjøres helt
              til slutt.
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
                  title: "Sluket monteres først, høyden avgjøres til slutt",
                  desc: "Slukpotten settes rett etter betongstøpet, og den som tynnavretter bestemmer den endelige høyden med laser.",
                },
                {
                  title: "Rørlegger og gulvavretter slipper å møtes",
                  desc: "Hvert fag gjør jobben sin når det passer i fremdriften – mindre koordinering, mindre venting og en mer forutsigbar fremdrift.",
                },
                {
                  title: "Ferdig i én operasjon",
                  desc: "Total Teknisk slipper å sende en rørlegger tilbake senere bare for å justere slukhøyden – avgjørende for en bedrift med lav bemanning.",
                },
                {
                  title: "Ren overgang som forenkler neste ledd",
                  desc: "Skruefri overgang mot membranen gir en jevn «slukmatch» som også gjør fliseleggingen enklere.",
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
