import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import CaseStudyPopup from "@/components/CaseStudyPopup";
import FadeUp from "@/components/FadeUp";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { FaqList, GuideCrossLinks, GuideHero } from "../GuideParts";
import { faqAnswerText, faqs } from "../installasjonData";

export const metadata = {
  title: "Sluk og våtromskrav – ofte stilte spørsmål | Slidedrain",
  description:
    "Svar på de vanligste spørsmålene om montering av sluk: godkjente membraner, slukrister, vinylgulv, TEK17 og SINTEF Teknisk Godkjenning, belastning og vannkapasitet.",
  alternates: { canonical: "/installasjon/ofte-stilte-sporsmal" },
};

export default function OfteStilteSporsmalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqPageSchema(
              faqs.map((f) => ({
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
                name: "Ofte stilte spørsmål",
                path: "/installasjon/ofte-stilte-sporsmal",
              },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <GuideHero
          active="/installasjon/ofte-stilte-sporsmal"
          title={
            <>
              Ofte stilte spørsmål om{" "}
              <span className="text-orange">sluk og våtrom</span>
            </>
          }
          intro="Svar på det rørleggere, flisleggere og boligeiere spør oss om oftest: godkjente membraner, valg av slukrist, vinylgulv, krav i TEK17 og SINTEF Teknisk Godkjenning, belastning og vannkapasitet."
        />

        <section className="pb-20 px-6 bg-white">
          <div className="max-w-[800px] mx-auto">
            <FaqList items={faqs} />

            <FadeUp className="mt-10 text-center">
              <p className="text-[15px] text-text-light mb-2">
                Fikk du ikke svar på det du lurer på?
              </p>
              <a
                href="mailto:kontakt@slidedrain.no"
                className="text-orange font-semibold text-sm hover:underline"
              >
                Send oss en e-post →
              </a>
            </FadeUp>

            <GuideCrossLinks
              active="/installasjon/ofte-stilte-sporsmal"
              productLinks={[
                { href: "/produkter/gulvsluk", label: "Slidedrain Gulvsluk" },
                {
                  href: "/produkter/slukrenner",
                  label: "Slidedrain Slukrenner",
                },
                { href: "/produkter", label: "Alle produkter" },
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
