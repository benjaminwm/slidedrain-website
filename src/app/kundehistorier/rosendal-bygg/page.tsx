import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import RosendalContent from "./RosendalContent";

export const metadata = {
  title: "Slidedrain // Rosendal Bygg – Kundehistorie",
  description:
    "Se hvordan Rosendal Bygg bruker Slidedrain Sluksystem for enklere planlegging, raskere montasje og tryggere bad i sine byggeprosjekter.",
};

export default function RosendalByggPage() {
  return (
    <>
      <Navbar />
      <main>
        <RosendalContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
