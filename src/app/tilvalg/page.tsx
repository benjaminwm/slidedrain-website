import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TilvalgSection from "@/components/TilvalgSection";
import ComparisonSection from "@/components/ComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
import VideoSection from "@/components/VideoSection";
import SafetySection from "@/components/SafetySection";
import TimelineSection from "@/components/TimelineSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";

export const metadata = {
  title: "Slidedrain // Markedets mest fleksible tilvalgsløsning for gulvsluk",
  description:
    "Maksimer prosjektets lønnsomhet med markedets mest fleksible tilvalgsløsning for gulvsluk. Utvid tilvalgsperioden og eliminer omprosjektering.",
};

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TilvalgSection />
        <ComparisonSection />
        <BenefitsSection />
        <VideoSection />
        <SafetySection />
        <TimelineSection />
        <CtaSection />
      </main>
      <Footer />
      <LeadMagnetPopup />
    </>
  );
}
