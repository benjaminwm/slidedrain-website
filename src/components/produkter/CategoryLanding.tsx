import Link from "next/link";
import FadeUp from "../FadeUp";
import { ProductCard } from "./ProductGrid";
import {
  landingCategories,
  getLandingProductCategories,
  type LandingCategory,
} from "@/data/landingCategories";

/**
 * Landingsside for en produktkategori (/produkter/gulvsluk osv.).
 * Brukes som final URL for generiske søkeord i Google Ads — hero-teksten
 * skal matche søkeintensjonen (se docs/keyword-landing-map.md).
 */
export default function CategoryLanding({
  landing,
}: {
  landing: LandingCategory;
}) {
  const cats = getLandingProductCategories(landing);
  const others = landingCategories.filter((l) => l.slug !== landing.slug);
  const productCount = cats.reduce((n, c) => n + c.products.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-14 px-6 bg-gradient-to-br from-white to-[#fef7f3]">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            {landing.badge}
          </span>
          <h1 className="text-[46px] max-lg:text-[36px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 text-navy">
            {landing.title}
          </h1>
          <p className="text-lg text-text-light leading-[1.7] font-light max-w-[760px] mx-auto">
            {landing.intro}
          </p>
        </div>
      </section>

      {/* Produktgrids per kategori */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-20">
          {cats.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-[100px]">
              <FadeUp>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-[15px] text-text-light leading-relaxed max-w-[700px]">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cat.products.map((p) => (
                    <ProductCard key={p.nobbNr} product={p} />
                  ))}
                </div>
              </FadeUp>
            </div>
          ))}

          {/* SEO-brødtekst */}
          <FadeUp>
            <div className="max-w-[760px] space-y-4">
              {landing.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15px] text-text-light leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <p className="text-[13px] text-text-light/70">
                {productCount} produkter i denne kategorien. Se også{" "}
                <Link
                  href="/produkter"
                  className="text-orange font-medium hover:underline"
                >
                  hele produktoversikten
                </Link>
                .
              </p>
            </div>
          </FadeUp>

          {/* Monteringsguider — kontekstuell lenking til innholdssidene */}
          <FadeUp>
            <div className="border-t border-navy/8 pt-10">
              <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-4">
                Slik monterer du
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={
                    landing.slug.startsWith("slukrenner")
                      ? "/installasjon/montere-slukrenne"
                      : "/installasjon"
                  }
                  className="text-[14px] text-orange font-medium hover:underline"
                >
                  {landing.slug.startsWith("slukrenner")
                    ? "Montere slukrenne – steg for steg"
                    : "Montere sluk på baderom – steg for steg"}{" "}
                  →
                </Link>
                <Link
                  href="/installasjon/ofte-stilte-sporsmal"
                  className="text-[14px] text-orange font-medium hover:underline"
                >
                  Sluk og våtromskrav: ofte stilte spørsmål →
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Andre kategorier */}
          <FadeUp>
            <div className="border-t border-navy/8 pt-10">
              <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-4">
                Andre kategorier
              </h3>
              <div className="flex flex-wrap gap-2">
                {others.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/produkter/${l.slug}`}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-navy/6 text-navy hover:bg-navy/12 transition-all"
                  >
                    {l.badge}
                  </Link>
                ))}
                <Link
                  href="/produkter"
                  className="px-4 py-2 rounded-full text-sm font-medium bg-navy text-white hover:bg-navy/85 transition-all"
                >
                  Alle produkter
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
