import Navbar from "@/components/Navbar";
import AboutHero from "@/components/om-oss/AboutHero";
import StorySection from "@/components/om-oss/StorySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CaseStudyPopup from "@/components/CaseStudyPopup";

export const metadata = {
  title: "Slidedrain // Om oss",
  description:
    "Slidedrain er utviklet i Norge med patentert teknologi som eliminerer vannskader. Prisbelønt design med SINTEF-godkjenning.",
};

export default function OmOssPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <StorySection />
        <CtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
