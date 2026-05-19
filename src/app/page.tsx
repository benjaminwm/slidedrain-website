import Navbar from "@/components/Navbar";
import HomeHero from "@/components/home/HomeHero";
import ValueProps from "@/components/home/ValueProps";
import ProductShowcase from "@/components/home/ProductShowcase";
import ProductOverview from "@/components/home/ProductOverview";
import SegmentGuide from "@/components/home/SegmentGuide";
import SintefDogaSection from "@/components/home/SintefDogaSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import TrustBar from "@/components/home/TrustBar";
import VideoEmbed from "@/components/VideoEmbed";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Slidedrain // Neste generasjons gulvsluk",
  description:
    "Prisbelønt design med SINTEF-godkjenning. Norskprodusert gulvsluk med patentert teknologi for redusert vannskaderisiko og økt fleksibilitet.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <ValueProps />
        <ProductOverview />
        <section className="pt-16 pb-16 px-6 bg-white">
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
              Slik fungerer{" "}
              <span className="text-orange">Slidedrain Sluksystem</span>
            </h2>
            <p className="text-[17px] text-text-light leading-[1.7] font-light">
              Se hvordan sluksystemet kommer sammen — fra teknisk
              installasjon til ferdig flislagt resultat.
            </p>
          </div>
          <VideoEmbed />
        </section>
        <SegmentGuide />
        <SintefDogaSection />
        <ProductShowcase />
        <TestimonialsMarquee />
        <TrustBar />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
