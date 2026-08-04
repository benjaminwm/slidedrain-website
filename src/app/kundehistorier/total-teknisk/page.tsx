import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import TotalTekniskContent from "./TotalTekniskContent";

export const metadata = {
  title: "Slidedrain // Total Teknisk – Kundehistorie",
  description:
    "Se hvordan Total Teknisk bruker Slidedrain gulvsluk til å spare tid og oppmøter på byggeplassen – sluket monteres først, og høyden avgjøres helt til slutt.",
  alternates: { canonical: "/kundehistorier/total-teknisk" },
};

export default function TotalTekniskPage() {
  return (
    <>
      <Navbar />
      <main>
        <TotalTekniskContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
