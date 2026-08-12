import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SluttkundeHero from "@/components/sluttkunde/SluttkundeHero";
import DesignSection from "@/components/sluttkunde/DesignSection";
import MaintenanceSection from "@/components/sluttkunde/MaintenanceSection";
import InnovationSection from "@/components/sluttkunde/InnovationSection";
import HowToSection from "@/components/sluttkunde/HowToSection";
import SluttkundeCtaSection from "@/components/sluttkunde/SluttkundeCtaSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import CaseStudyPopup from "@/components/CaseStudyPopup";

export const metadata = {
  title: "Sluk til baderom – design og vedlikehold | Slidedrain",
  description:
    "Skap et sømløst baderomsgulv med prisvinnende norsk design. Slidedrain forener skandinavisk minimalisme med patentert teknologi for våtromssikkerhet.",
  alternates: { canonical: "/sluttkunde" },
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
        <TestimonialsMarquee />
        <SluttkundeCtaSection />
      </main>
      <Footer />
      <CaseStudyPopup />
    </>
  );
}
