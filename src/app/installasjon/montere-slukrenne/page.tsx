import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import CaseStudyPopup from "@/components/CaseStudyPopup";
import FadeUp from "@/components/FadeUp";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";
import {
  DownloadRow,
  GuideCrossLinks,
  GuideHero,
  StepCard,
} from "../GuideParts";
import {
  renneDownloads,
  renneRistSteps,
  renneTileSteps,
} from "../installasjonData";

export const metadata = {
  title: "Montere slukrenne på baderom – steg for steg | Slidedrain",
  description:
    "Slik monterer du slukrenne og slukrist på baderom: plassering over gulvsluket, flislim, høyder og montering av tile insert eller rist. Passer alle sirkulære gulvsluk.",
  alternates: { canonical: "/installasjon/montere-slukrenne" },
};

export default function MontereSlukrennePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: "Montere slukrenne med tile insert",
              description:
                "Steg-for-steg montering av Slidedrain Slukrenne med flislagt tile insert over et sirkulært gulvsluk.",
              path: "/installasjon/montere-slukrenne",
              steps: renneTileSteps,
              anchorPrefix: "tile-steg",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: "Montere slukrenne med rist",
              description:
                "Steg-for-steg montering av Slidedrain Slukrenne med ferdig produsert rist over et sirkulært gulvsluk.",
              path: "/installasjon/montere-slukrenne",
              steps: renneRistSteps,
              anchorPrefix: "rist-steg",
            })
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
                name: "Montere slukrenne",
                path: "/installasjon/montere-slukrenne",
              },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <GuideHero
          active="/installasjon/montere-slukrenne"
          title={
            <>
              Slik monterer du{" "}
              <span className="text-orange">slukrenne</span>
            </>
          }
          intro="Slidedrain Slukrenner installeres ovenfor membranen og passer med alle sirkulære gulvsluk. Rennen kan justeres 50 mm i bredden og 105 mm i lengden over vannlåsen, så rørleggeren slipper å treffe millimeterpresist. Velg variant med flislagt tile insert eller med rist."
        />

        <section className="pb-20 px-6 bg-white">
          <div className="max-w-[800px] mx-auto">
            <DownloadRow
              downloads={renneDownloads}
              heading="Nedlastbare ressurser"
            />

            <FadeUp className="mt-4">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Posisjonering av gulvsluk og slukrenne
              </h2>
              <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                Slukrennen kan justeres opptil 50 mm i bredden og 105 mm i
                lengden over et tradisjonelt sirkulært gulvsluk med Ø130 mm
                vannlås. Det gir stor frihet i plasseringen uten at
                rørleggeren må treffe millimeterpresist.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(40,52,71,0.06)]">
                  <Image
                    src="/images/installasjon/vannlas-sentrering-1.png"
                    alt="Vannlås-sentrering — vertikal justering 130 mm med 25 mm slingringsrom topp og bunn"
                    width={1024}
                    height={553}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(40,52,71,0.06)]">
                  <Image
                    src="/images/installasjon/vannlas-sentrering-2.png"
                    alt="Vannlås-sentrering — horisontal justering 130 mm med 52,5 mm slingringsrom på hver side"
                    width={1024}
                    height={542}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeUp>

            <FadeUp className="mt-4">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Veggnær plassering av gulvsluket
              </h2>
              <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                Ved veggnær installasjon plasseres slukpotten med avstand{" "}
                <strong className="text-navy">X = T − 8 mm</strong> fra
                veggen uten fliser, der T er veggtykkelsen. Dette sentrerer
                slukrennen over vannlåsen og gir 25 mm justeringsmulighet.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(40,52,71,0.06)]">
                  <Image
                    src="/images/installasjon/veggnar-A.webp"
                    alt="Veggnær plassering steg A"
                    width={1024}
                    height={661}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(40,52,71,0.06)]">
                  <Image
                    src="/images/installasjon/veggnar-B.webp"
                    alt="Veggnær plassering steg B"
                    width={1024}
                    height={660}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeUp>

            <FadeUp className="mt-4">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Slukrenne med Tile Insert
              </h2>
              <p className="text-[14px] text-text-light leading-[1.7] mb-6">
                Tile insert-varianten flislegges av flislegger og blir
                nærmest usynlig i gulvet.
              </p>
            </FadeUp>
            {renneTileSteps.map((s, i) => (
              <StepCard
                key={`tile-${s.step}`}
                step={s}
                altPrefix="Tile insert steg"
                imageHeight={811}
                delayIndex={i}
                idPrefix="tile-steg"
              />
            ))}

            <FadeUp className="mt-12">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Slukrenne med Rist
              </h2>
              <p className="text-[14px] text-text-light leading-[1.7] mb-6">
                Med rist-varianten leveres en ferdig produsert rist som
                monteres i rennen etter flislegging.
              </p>
            </FadeUp>
            {renneRistSteps.map((s, i) => (
              <StepCard
                key={`rist-${s.step}`}
                step={s}
                altPrefix="Rist steg"
                imageHeight={811}
                delayIndex={i}
                idPrefix="rist-steg"
              />
            ))}

            <FadeUp className="mt-12">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Rengjøring av slukrennen
              </h2>
              <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                Løft risten og legg den til siden. For tile insert-varianten
                benyttes det medfølgende rist-verktøyet til løfting. Spyl
                slukrennen med dusjen og fjern smuss.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(40,52,71,0.06)]">
                  <Image
                    src="/images/installasjon/rengjoring-tile-1.webp"
                    alt="Løft tile insert med medfølgende verktøy"
                    width={1024}
                    height={490}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-xl overflow-hidden border border-navy/10 shadow-[0_4px_20px_rgba(40,52,71,0.06)]">
                  <Image
                    src="/images/installasjon/rengjoring-tile-2.webp"
                    alt="Spyl slukrennen og fjern smuss"
                    width={1024}
                    height={490}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="bg-orange/8 border-l-4 border-orange rounded-r-lg p-4">
                <p className="text-[13px] text-navy leading-[1.6]">
                  <strong className="text-orange">Advarsel:</strong> Bruk av
                  harde skrubber og sterke kjemikalier medfører risiko for
                  skade på lakken på de sortlakkerte produktene.
                </p>
              </div>
            </FadeUp>

            <GuideCrossLinks
              active="/installasjon/montere-slukrenne"
              productLinks={[
                {
                  href: "/produkter/slukrenner",
                  label: "Slidedrain Slukrenner",
                },
                {
                  href: "/produkter/slukrenner-tile-insert",
                  label: "Slukrenner med tile insert",
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
