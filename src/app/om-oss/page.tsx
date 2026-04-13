import Navbar from "@/components/Navbar";
import AboutHero from "@/components/om-oss/AboutHero";
import StorySection from "@/components/om-oss/StorySection";
import TeamSection from "@/components/om-oss/TeamSection";
import ValuesSection from "@/components/om-oss/ValuesSection";
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
        <TeamSection />
        <ValuesSection />
        <CtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
