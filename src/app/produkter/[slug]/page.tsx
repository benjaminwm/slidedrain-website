import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import ProductDetail from "@/components/produkter/ProductDetail";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/data/products";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getProductBySlug(slug);
  if (!result) return { title: "Produkt ikke funnet" };
  return {
    title: `Slidedrain // ${result.product.name}`,
    description:
      result.product.description ||
      `${result.product.name} – ${result.product.dimensions}. NOBB ${result.product.nobbNr}, NRF ${result.product.nrfNr}.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = getProductBySlug(slug);
  if (!result) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProductDetail product={result.product} category={result.category} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
