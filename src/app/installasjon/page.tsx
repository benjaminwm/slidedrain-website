import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import InstallasjonContent from "./InstallasjonContent";
import CaseStudyPopup from "@/components/CaseStudyPopup";

export const metadata = {
  title: "Slidedrain // Installasjonsveiledning",
  description:
    "Slidedrain Gulvsluk, Slukrenner og Slukrister er designet for stor fleksibilitet under installasjon. Steg-for-steg guide for rørleggere og flisleggere.",
};

export default function InstallasjonPage() {
  return (
    <>
      <Navbar />
      <main>
        <InstallasjonContent />
        <CtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
