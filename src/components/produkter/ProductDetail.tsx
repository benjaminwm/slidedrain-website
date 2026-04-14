"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "../FadeUp";
import { getProductImageUrl } from "@/data/products";
import type { Product, ProductCategory } from "@/data/products";

function DimensionBadge({
  label,
  value,
}: {
  label: string;
  value: number | undefined;
}) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-2 bg-gray-bg rounded-lg px-4 py-3">
      <span className="text-sm text-text-light font-medium">{label}</span>
      <span className="text-lg font-semibold text-navy">{value} mm</span>
    </div>
  );
}

export default function ProductDetail({
  product,
  category,
}: {
  product: Product;
  category: ProductCategory;
}) {
  return (
    <section className="pt-[120px] pb-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-light mb-8">
          <Link href="/produkter" className="hover:text-navy transition-colors">
            Produkter
          </Link>
          <span>/</span>
          <Link
            href={`/produkter#${category.id}`}
            className="hover:text-navy transition-colors"
          >
            {category.title}
          </Link>
          <span>/</span>
          <span className="text-navy font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <FadeUp>
            <div className="bg-gray-bg rounded-2xl p-8 flex items-center justify-center aspect-square sticky top-[100px]">
              <Image
                src={getProductImageUrl(product.imageId)}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-contain"
                unoptimized
                priority
              />
            </div>
          </FadeUp>

          {/* Product Info */}
          <FadeUp>
            <div>
              {/* Category badge */}
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange mb-3">
                {category.title}
              </span>

              <h1 className="text-3xl max-md:text-2xl font-bold text-navy mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              {product.description && (
                <p className="text-[16px] text-text-light leading-[1.7] mb-6">
                  {product.description}
                </p>
              )}

              {/* Finish badge */}
              {product.finish && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-text-light">Finish:</span>
                  <span className="inline-block text-sm bg-orange/10 text-orange px-3 py-1 rounded-full font-medium">
                    {product.finish}
                  </span>
                </div>
              )}

              {/* Article numbers */}
              <div className="bg-gray-bg rounded-xl p-5 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light mb-3">
                  Artikkelnumre
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-text-light block mb-0.5">
                      NOBB-nummer
                    </span>
                    <span className="font-mono text-lg font-semibold text-navy">
                      {product.nobbNr}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-text-light block mb-0.5">
                      NRF-nummer
                    </span>
                    <span className="font-mono text-lg font-semibold text-navy">
                      {product.nrfNr}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dimensions */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light mb-3">
                  Dimensjoner
                </h3>
                <p className="text-[15px] text-navy font-medium mb-3">
                  {product.dimensions}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <DimensionBadge label="L" value={product.lengthMm} />
                  <DimensionBadge label="B" value={product.widthMm} />
                  <DimensionBadge label="H" value={product.heightMm} />
                  <DimensionBadge label="Ø" value={product.diameterMm} />
                </div>
              </div>

              {/* Retailer buttons */}
              <div className="space-y-3 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light mb-1">
                  Kjøp hos forhandler
                </h3>

                {product.dahlUrl && (
                  <a
                    href={product.dahlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border-2 border-navy/12 rounded-xl px-6 py-4 hover:border-navy/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/logo-brodrenedahl.png"
                        alt="Brødrene Dahl"
                        width={100}
                        height={24}
                        className="h-5 w-auto"
                      />
                      <span className="text-sm font-medium text-navy">
                        Se produkt på Brødrene Dahl
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-5 h-5 text-text-light group-hover:text-orange group-hover:translate-x-1 transition-all"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}

                {product.flisekompanietUrl && (
                  <a
                    href={product.flisekompanietUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border-2 border-navy/12 rounded-xl px-6 py-4 hover:border-navy/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/logo-flisekompaniet.png"
                        alt="Flisekompaniet"
                        width={100}
                        height={24}
                        className="h-5 w-auto"
                      />
                      <span className="text-sm font-medium text-navy">
                        Se produkt på Flisekompaniet
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-5 h-5 text-text-light group-hover:text-orange group-hover:translate-x-1 transition-all"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}

                {!product.dahlUrl && !product.flisekompanietUrl && (
                  <p className="text-sm text-text-light italic">
                    Kontakt oss for bestilling av dette produktet.
                  </p>
                )}
              </div>

              {/* NOBB link */}
              <a
                href={`https://nobb.no/item/${product.nobbNr}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-light hover:text-navy transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-4 h-4"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Se teknisk data på NOBB.no
              </a>

              {/* Installation guide link */}
              <Link
                href="/installasjon"
                className="inline-flex items-center gap-2 text-sm text-orange hover:text-orange-dark font-medium transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-4 h-4"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Se installasjonsguide
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Related products from same category */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Andre produkter i {category.title.toLowerCase()}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {category.products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 5)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/produkter/${p.slug}`}
                  className="bg-white rounded-xl border border-navy/8 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-square bg-gray-bg flex items-center justify-center p-3 overflow-hidden">
                    <Image
                      src={getProductImageUrl(p.imageId)}
                      alt={p.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-navy text-[13px] leading-snug">
                      {p.name}
                    </h3>
                    <p className="font-mono text-[11px] text-text-light mt-1">
                      NOBB {p.nobbNr}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
