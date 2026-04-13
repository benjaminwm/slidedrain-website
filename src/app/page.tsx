import Navbar from "@/components/Navbar";
import HomeHero from "@/components/home/HomeHero";
import ValueProps from "@/components/home/ValueProps";
import ProductOverview from "@/components/home/ProductOverview";
import SegmentGuide from "@/components/home/SegmentGuide";
import TrustBar from "@/components/home/TrustBar";
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
        <ProductOverview />
        <SegmentGuide />
        <TrustBar />
        <CtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
