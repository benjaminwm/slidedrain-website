import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SluttkundeHero from "@/components/sluttkunde/SluttkundeHero";
import DesignSection from "@/components/sluttkunde/DesignSection";
import MaintenanceSection from "@/components/sluttkunde/MaintenanceSection";
import InnovationSection from "@/components/sluttkunde/InnovationSection";
import HowToSection from "@/components/sluttkunde/HowToSection";
import SluttkundeCtaSection from "@/components/sluttkunde/SluttkundeCtaSection";
import CaseStudyPopup from "@/components/CaseStudyPopup";

export const metadata = {
  title: "Slidedrain // Den usynlige detaljen som utgjør hele forskjellen",
  description:
    "Skap et sømløst baderomsgulv med prisvinnende norsk design. Slidedrain forener skandinavisk minimalisme med patentert teknologi for våtromssikkerhet.",
};

export default function SluttkunderPage() {
  return (
    <>
      <Navbar />
      <main>
        <SluttkundeHero />
        <DesignSection />
        <MaintenanceSection />
        <InnovationSection />
        <HowToSection />
        <SluttkundeCtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
