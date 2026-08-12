import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import CaseStudyPopup from "@/components/CaseStudyPopup";
import FadeUp from "@/components/FadeUp";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { FaqList, GuideCrossLinks, GuideHero } from "../GuideParts";
import {
  faqAnswerText,
  kravFaqs,
  membranTable,
} from "../installasjonData";

export const metadata = {
  title: "Sluk og våtromskrav: TEK17, SINTEF og membran | Slidedrain",
  description:
    "Hva kreves av sluk i norske våtrom? Vannlukkehøyde, dreneringskapasitet, godkjente membraner, belastningsklasse og vanntetthetstest — med tallene fra SINTEF Teknisk Godkjenning TG 20991.",
  alternates: { canonical: "/installasjon/vatromskrav-sluk" },
};

/** Nøkkeltall som både lesere og AI-assistenter kan sitere direkte. */
const keyFacts = [
  {
    value: "≥ 50 mm",
    label: "Vannlukkehøyde",
    detail:
      "Minimumskrav for sanitærinstallasjon koblet direkte til avløpsanlegget. Slidedrain Gulvsluk oppfyller kravet.",
  },
  {
    value: "1,0 l/s",
    label: "Dreneringskapasitet",
    detail:
      "Kravet er minimum 0,8 l/s når det installeres kun ett sluk i våtrommet. Slidedrain ligger over, og kan brukes som eneste sluk.",
  },
  {
    value: "K3",
    label: "Belastningsklasse",
    detail: "Bekreftet ved prøving i henhold til NS-EN 1253.",
  },
  {
    value: "TG 20991",
    label: "SINTEF Teknisk Godkjenning",
    detail:
      "Utstedt 27. januar 2026, gyldig til 1. februar 2031, for Slidedrain Sluksystem.",
  },
];

export default function VatromskravPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqPageSchema(
              kravFaqs.map((f) => ({
                question: f.q,
                answer: faqAnswerText(f.a),
              }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Installasjon", path: "/installasjon" },
              {
                name: "Sluk og våtromskrav",
                path: "/installasjon/vatromskrav-sluk",
              },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <GuideHero
          active="/installasjon/vatromskrav-sluk"
          title={
            <>
              Sluk og <span className="text-orange">våtromskrav</span>
            </>
          }
          intro="Hva kreves egentlig av et sluk i norske våtrom — og hvordan dokumenteres det? Her er kravene til vannlukkehøyde, dreneringskapasitet, membran, belastning og vanntetthetstest, med tallene hentet direkte fra SINTEF Teknisk Godkjenning TG 20991."
        />

        <section className="pb-20 px-6 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FadeUp className="mb-12">
              <div className="grid sm:grid-cols-2 gap-4">
                {keyFacts.map((f) => (
                  <div
                    key={f.label}
                    className="bg-gray-bg rounded-xl p-5 flex flex-col"
                  >
                    <span className="text-[28px] font-bold text-orange leading-none mb-2">
                      {f.value}
                    </span>
                    <span className="text-[15px] font-semibold text-navy mb-2">
                      {f.label}
                    </span>
                    <span className="text-[13px] text-text-light leading-[1.6]">
                      {f.detail}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp className="mb-10">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Dokumentasjonskravet
              </h2>
              <p className="text-[15px] text-text-light leading-[1.7] mb-4">
                Produkter som bygges inn i et byggverk skal ha dokumenterte
                egenskaper etter forskrift om omsetning og dokumentasjon av
                produkter til byggverk (DOK) og forskrift om tekniske krav til
                byggverk (TEK). For sluk er SINTEF Teknisk Godkjenning den
                vanligste måten å dokumentere at produktet er egnet til bruk i
                norske våtrom.
              </p>
              <p className="text-[15px] text-text-light leading-[1.7]">
                Slidedrain Sluksystem har{" "}
                <strong className="text-navy">TG 20991</strong>, utstedt 27.
                januar 2026 og gyldig til 1. februar 2031. Godkjenningen bygger
                på produktstandarden NS-EN 1253, retningslinjer for SINTEF
                Teknisk Godkjenning og SINTEFs anbefalinger i Byggforskserien.
              </p>
            </FadeUp>

            <FadeUp className="mb-10">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Godkjente membraner og hvor sluket kan plasseres
              </h2>
              <p className="text-[15px] text-text-light leading-[1.7] mb-5">
                Hvilken membran du bruker avgjør hvor i rommet sluket kan
                plasseres. Membransystemet skal selv ha SINTEF Teknisk
                Godkjenning. Tabellen er hentet fra TG 20991.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px] border border-navy/10 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-bg text-navy text-left">
                      <th className="p-3 font-semibold">Slukoverdel</th>
                      <th className="p-3 font-semibold">Godkjent membran</th>
                      <th className="p-3 font-semibold">Plassering</th>
                    </tr>
                  </thead>
                  <tbody>
                    {membranTable.map((row, i) => (
                      <tr
                        key={i}
                        className="border-t border-navy/8 text-text-light align-top"
                      >
                        <td className="p-3">{row.slukoverdel}</td>
                        <td className="p-3">{row.membran}</td>
                        <td className="p-3">{row.plassering}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-text-light/80 mt-3">
                Kilde: SINTEF Teknisk Godkjenning TG 20991, tabell 1.{" "}
                <a
                  href="/downloads/TG-20991-Slidedrain-Sluksystem.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-medium hover:underline"
                >
                  Last ned godkjenningen (PDF)
                </a>
              </p>
            </FadeUp>

            <FadeUp className="mb-10">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Trebjelkelag eller betongdekke
              </h2>
              <p className="text-[15px] text-text-light leading-[1.7] mb-4">
                Gulvslukene kan støpes inn i betongdekker eller monteres i
                trebjelkelag med påstøp. Monteringsverktøyet målsetter høyden på
                påstøpen, og slukoverdelen høydejusteres inntil 40 mm så det er
                i plan med gulvstøpen.
              </p>
              <div className="bg-orange/8 border-l-4 border-orange rounded-r-lg p-4">
                <p className="text-[14px] text-navy leading-[1.6]">
                  <strong className="text-orange">Ved trebjelkelag:</strong>{" "}
                  avløpsrøret må klamres så nær koblingen mellom avløpsrør og
                  sluk som mulig.
                </p>
              </div>
            </FadeUp>

            <FadeUp className="mb-10">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Vanntetthet og kontroll
              </h2>
              <ul className="space-y-3 text-[15px] text-text-light leading-[1.7] list-disc list-inside">
                <li>
                  Vanntett tilslutning mellom sluk og membran er dokumentert ved
                  prøving i henhold til EAD 030436-00-0503, Annex A.
                </li>
                <li>
                  Gulvmembranen legges i henhold til membranleverandørens
                  monteringsanvisning og anvisningene i monteringsanvisningen for
                  Slidedrain Sluksystem.
                </li>
                <li>
                  Før flislegging bør det utføres vanntetthetstest av
                  membransystemet, se Byggebransjens våtromsnorm, BVN 53.010.
                </li>
                <li>
                  Ved klemring: trekk til skruene med håndverktøy, og unngå å
                  lage hull i mansjetten. Ved vinyl og tykk banevare der membranen
                  varmes opp, la gulvsluket kjøle seg ned før skruene trekkes
                  hardt til.
                </li>
              </ul>
            </FadeUp>

            <FadeUp className="mb-10">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Materialer og miljø
              </h2>
              <p className="text-[15px] text-text-light leading-[1.7]">
                Slukoverdel, slukpotte, vannlås og monteringsverktøy er produsert
                i resirkulert polypropylen (PP). Rammer, rister og klemring er i
                rustfritt stål. Systemet inneholder ingen prioriterte
                miljøgifter, og det er utarbeidet miljødeklarasjon etter ISO
                14025 og EN 15804+A2 (EPD NEPD-4352-3563).
              </p>
            </FadeUp>

            <FadeUp className="mb-6">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-5">
                Ofte stilte spørsmål om krav
              </h2>
            </FadeUp>
            <FaqList items={kravFaqs} />

            <GuideCrossLinks
              active="/installasjon/vatromskrav-sluk"
              productLinks={[
                { href: "/produkter/gulvsluk", label: "Slidedrain Gulvsluk" },
                {
                  href: "/produkter/slukrenner",
                  label: "Slidedrain Slukrenner",
                },
                { href: "/produkter/slukrister", label: "Slukrister" },
              ]}
            />
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
