import Navbar from "@/components/Navbar";
import ProductHero from "@/components/produkter/ProductHero";
import ProductTable from "@/components/produkter/ProductTable";
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
        <ProductHero />
        <ProductTable />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
