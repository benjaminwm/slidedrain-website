import Navbar from "@/components/Navbar";
import ProductPage from "@/components/produkter/ProductPage";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Slidedrain // Produkter",
  description:
    "Komplett produktoversikt for Slidedrain Gulvsluk. 37 produkter med NOBB- og NRF-nummer, dimensjoner og tekniske spesifikasjoner.",
};

export default function ProdukterPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductPage />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
