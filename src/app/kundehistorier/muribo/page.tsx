import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import MuriboContent from "./MuriboContent";

export const metadata = {
  title: "Slidedrain // Muribø – Kundehistorie",
  description:
    "Se hvordan Muribø AS totalrenoverer bad uten fallgruver med Slidedrain – den eksentriske slukrennen flytter sluket til siden når bjelkelaget overrasker.",
  alternates: { canonical: "/kundehistorier/muribo" },
};

export default function MuriboPage() {
  return (
    <>
      <Navbar />
      <main>
        <MuriboContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
