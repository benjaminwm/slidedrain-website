import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import CaseStudyPopup from "@/components/CaseStudyPopup";
import FadeUp from "@/components/FadeUp";
import {
  breadcrumbSchema,
  howToSchema,
  videoObjectSchema,
} from "@/lib/schema";
import {
  DownloadRow,
  GuideCrossLinks,
  GuideHero,
  StepCard,
} from "./GuideParts";
import {
  gulvslukDownloads,
  gulvslukSteps,
  INSTALL_VIDEO_EMBED_URL,
  INSTALL_VIDEO_THUMBNAIL_URL,
  INSTALL_VIDEO_UPLOAD_DATE,
  klemringSteps,
} from "./installasjonData";

export const metadata = {
  title: "Montere sluk på baderom – steg for steg | Slidedrain",
  description:
    "Slik monterer du gulvsluk på baderom i 6 steg: slukpotte, høydejustering, støp, slukoverdel og membran. Steg-for-steg guide med film, for rørlegger og flislegger.",
  alternates: { canonical: "/installasjon" },
};

export default function InstallasjonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: "Montere gulvsluk på baderom",
              description:
                "Steg-for-steg montering av Slidedrain Gulvsluk: slukpotte, innstilling av monteringsverktøy, gulvstøp, slukoverdel og membran.",
              path: "/installasjon",
              steps: gulvslukSteps,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            videoObjectSchema({
              name: "Installasjonsfilm – Slidedrain Gulvsluk",
              description:
                "Kort film som viser montering av Slidedrain Gulvsluk fra slukpotte til ferdig membranovergang.",
              embedUrl: INSTALL_VIDEO_EMBED_URL,
              thumbnailUrl: INSTALL_VIDEO_THUMBNAIL_URL,
              uploadDate: INSTALL_VIDEO_UPLOAD_DATE,
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
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <GuideHero
          active="/installasjon"
          title={
            <>
              Slik monterer du{" "}
              <span className="text-orange">sluk på baderom</span>
            </>
          }
          intro="Slidedrain Gulvsluk monteres i seks steg, med 40 mm høydejustering og skruefri overgang mot membran. Guiden gjelder både trebjelkelag og støpt dekke, og systemet har SINTEF Teknisk Godkjenning for bruk i våtrom etter TEK17."
        />

        <section className="pb-20 px-6 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FadeUp className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(40,52,71,0.12)]">
                <iframe
                  src={INSTALL_VIDEO_EMBED_URL}
                  style={{ width: "100%", border: "none", aspectRatio: "1/1" }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Installasjonsfilm Slidedrain"
                />
              </div>
            </FadeUp>

            <DownloadRow
              downloads={gulvslukDownloads}
              heading="Nedlastbare ressurser"
            />

            <FadeUp>
              <h2 className="text-3xl max-md:text-2xl font-bold text-navy mb-3">
                Installasjon av gulvsluket på 6 steg
              </h2>
              <p className="text-[15px] text-text-light leading-relaxed mb-8">
                Stegene inkluderer installasjon av slukoverdel med integrert
                Apex-mansjett. For installasjon i støpt dekke, start fra steg 2.
                Installasjon med klemring finner du lenger ned på siden.
              </p>
            </FadeUp>
            {gulvslukSteps.map((s, i) => (
              <StepCard
                key={s.step}
                step={s}
                altPrefix="Steg"
                imageHeight={768}
                delayIndex={i}
              />
            ))}

            <FadeUp className="mt-12">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Alternativ: Slukoverdel med klemring
              </h2>
              <p className="text-[14px] text-text-light leading-[1.7] mb-6">
                Bruker du slukoverdel med klemring (for baneveremembran), er
                steg 1–4 identiske. Følg disse stegene for steg 5 og 6 i
                stedet:
              </p>
            </FadeUp>
            {klemringSteps.map((s, i) => (
              <StepCard
                key={`klem-${s.step}`}
                step={s}
                altPrefix="Klemring steg"
                imageHeight={765}
                delayIndex={i}
                idPrefix="klemring-steg"
              />
            ))}

            <FadeUp className="mt-12 bg-gray-bg rounded-xl p-6">
              <h2 className="text-xl font-bold text-navy mb-4">
                Membrankompatibilitet
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-[14px]">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-orange mb-2">
                    Slukoverdel med Apex-mansjett
                  </h3>
                  <p className="text-text-light leading-[1.7] mb-4">
                    Kompatibel med alle SINTEF-godkjente smøremembraner og
                    foliemembraner.
                  </p>
                  <a
                    href="https://www.sintefcertification.no/Contents/Index/29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-auto text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
                  >
                    Se godkjente membraner på SINTEF
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-orange mb-2">
                    Slukoverdel med klemring
                  </h3>
                  <p className="text-text-light leading-[1.7] mb-4">
                    Kompatibel med alle SINTEF-godkjente smøremembraner,
                    foliemembraner og baneveremembraner.
                  </p>
                  <a
                    href="https://www.sintefcertification.no/Contents/Index/29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-auto text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
                  >
                    Se godkjente membraner på SINTEF
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="mt-12">
              <h2 className="text-2xl max-md:text-xl font-bold text-navy mb-3">
                Rengjøring av vannlås
              </h2>
              <p className="text-[14px] text-text-light leading-[1.7] mb-5">
                Vannlåsen har en klassisk design bestående av to deler. Du bør
                rense vannlås og sluk hvert halvår, eller ved behov.
              </p>
              <div className="bg-gray-bg rounded-xl overflow-hidden mb-5">
                <div className="bg-white">
                  <Image
                    src="/images/installasjon/vannlas-rengjoring.webp"
                    alt="Rengjøring av vannlås til Slidedrain gulvsluk"
                    width={1010}
                    height={1024}
                    className="w-full h-auto max-w-md mx-auto"
                  />
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-[14px] text-text-light leading-[1.7]">
                <li>Løsne vannlåsen fra sluket ved å dra i håndtaket merket &ldquo;Pull&rdquo;.</li>
                <li>Del vannlåsen i to ved å klemme sammen de to stiplede områdene på underdelen.</li>
                <li>Spyl delene med vann for å fjerne smuss. Benytt en børste der smusset sitter godt fast.</li>
                <li>Monter vannlåsen igjen ved å dytte de to delene sammen til du hører et klikk. Fukt pakningen og dytt den ned i sluket.</li>
              </ol>
            </FadeUp>

            <GuideCrossLinks
              active="/installasjon"
              productLinks={[
                { href: "/produkter/gulvsluk", label: "Slidedrain Gulvsluk" },
                {
                  href: "/produkter/slukrister",
                  label: "Slukrister til gulvsluk",
                },
                {
                  href: "/produkter/hjornerister",
                  label: "Hjørnerister",
                },
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
