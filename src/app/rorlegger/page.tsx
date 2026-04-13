import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RorleggerHero from "@/components/rorlegger/RorleggerHero";
import ProblemsSection from "@/components/rorlegger/ProblemsSection";
import SystemSection from "@/components/rorlegger/SystemSection";
import ComparisonTable from "@/components/rorlegger/ComparisonTable";
import TrustSection from "@/components/rorlegger/TrustSection";
import RorleggerCtaSection from "@/components/rorlegger/RorleggerCtaSection";
import CaseStudyPopup from "@/components/CaseStudyPopup";

export const metadata = {
  title: "Slidedrain // Utviklet med fagfolk for fagfolk",
  description:
    "Slidedrain Sluksystem forenkler monteringen og samspillet mellom alle involverte fag. Eliminerer kjente feilkilder og minimerer vannskaderisikoen.",
};

export default function RorleggerPage() {
  return (
    <>
      <Navbar />
      <main>
        <RorleggerHero />
        <ProblemsSection />
        <SystemSection />
        <ComparisonTable />
        <TrustSection />
        <RorleggerCtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
