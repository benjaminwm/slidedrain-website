import Navbar from "@/components/Navbar";
import HomeHero from "@/components/home/HomeHero";
import ValueProps from "@/components/home/ValueProps";
import ProductShowcase from "@/components/home/ProductShowcase";
import ProductOverview from "@/components/home/ProductOverview";
import SegmentGuide from "@/components/home/SegmentGuide";
import SintefDogaSection from "@/components/home/SintefDogaSection";
import TrustBar from "@/components/home/TrustBar";
import VideoEmbed from "@/components/VideoEmbed";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CaseStudyPopup from "@/components/CaseStudyPopup";

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
        <ProductShowcase />
        <ProductOverview />
        <section className="pt-4 pb-16 px-6 bg-white">
          <VideoEmbed />
        </section>
        <SegmentGuide />
        <SintefDogaSection />
        <TrustBar />
        <CtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
