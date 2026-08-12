import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import ProductDetail from "@/components/produkter/ProductDetail";
import CategoryLanding from "@/components/produkter/CategoryLanding";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/data/products";
import {
  getLandingBySlug,
  landingCategories,
} from "@/data/landingCategories";
import {
  productSchema,
  productBreadcrumb,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return [
    ...landingCategories.map((l) => ({ slug: l.slug })),
    ...getAllProductSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const landing = getLandingBySlug(slug);
  if (landing) {
    return {
      title: landing.metaTitle,
      description: landing.metaDescription,
      alternates: { canonical: `/produkter/${landing.slug}` },
    };
  }
  const result = getProductBySlug(slug);
  if (!result) return { title: "Produkt ikke funnet" };
  return {
    title: `${result.product.name} | Slidedrain`,
    description:
      result.product.description ||
      `${result.product.name} – ${result.product.dimensions}. NOBB ${result.product.nobbNr}, NRF ${result.product.nrfNr}.`,
    alternates: { canonical: `/produkter/${result.product.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const landing = getLandingBySlug(slug);
  if (landing) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Produkter", path: "/produkter" },
                { name: landing.title, path: `/produkter/${landing.slug}` },
              ])
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              faqPageSchema(
                landing.faqs.map((f) => ({ question: f.q, answer: f.a }))
              )
            ),
          }}
        />
        <Navbar />
        <main>
          <CategoryLanding landing={landing} />
          <CtaSection />
        </main>
        <Footer />
      </>
    );
  }

  const result = getProductBySlug(slug);
  if (!result) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema(result.product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productBreadcrumb(result.product, result.category)
          ),
        }}
      />
      <Navbar />
      <main>
        <ProductDetail product={result.product} category={result.category} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
