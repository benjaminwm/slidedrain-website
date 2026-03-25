"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "../FadeUp";
import { productCategories, getProductImageUrl } from "@/data/products";
import type { Product } from "@/data/products";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produkter/${product.slug}`}
      className="block bg-white rounded-xl border border-navy/8 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-square bg-gray-bg flex items-center justify-center p-4 overflow-hidden">
        <Image
          src={getProductImageUrl(product.imageId)}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy text-[15px] leading-snug mb-3 min-h-[40px]">
          {product.name}
        </h3>

        {/* NOBB & NRF */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 mb-3">
          <div>
            <span className="text-[11px] text-text-light uppercase tracking-wide">
              NOBB
            </span>
            <p className="font-mono text-[13px] text-navy">{product.nobbNr}</p>
          </div>
          <div>
            <span className="text-[11px] text-text-light uppercase tracking-wide">
              NRF
            </span>
            <p className="font-mono text-[13px] text-navy">{product.nrfNr}</p>
          </div>
        </div>

        {/* Dimensions */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {product.lengthMm && (
            <span className="inline-flex items-center gap-0.5 text-[11px] bg-navy/6 text-navy px-2 py-0.5 rounded font-medium">
              <span className="text-text-light font-normal">L</span>{" "}
              {product.lengthMm}
            </span>
          )}
          {product.widthMm && (
            <span className="inline-flex items-center gap-0.5 text-[11px] bg-navy/6 text-navy px-2 py-0.5 rounded font-medium">
              <span className="text-text-light font-normal">B</span>{" "}
              {product.widthMm}
            </span>
          )}
          {product.heightMm && (
            <span className="inline-flex items-center gap-0.5 text-[11px] bg-navy/6 text-navy px-2 py-0.5 rounded font-medium">
              <span className="text-text-light font-normal">H</span>{" "}
              {product.heightMm}
            </span>
          )}
          {product.diameterMm && (
            <span className="inline-flex items-center gap-0.5 text-[11px] bg-navy/6 text-navy px-2 py-0.5 rounded font-medium">
              <span className="text-text-light font-normal">&Oslash;</span>{" "}
              {product.diameterMm}
            </span>
          )}
        </div>

        {/* Finish badge */}
        {product.finish && (
          <span className="inline-block text-[11px] bg-orange/8 text-orange px-2 py-0.5 rounded font-medium">
            {product.finish}
          </span>
        )}

        {/* Retailer availability indicators */}
        <div className="flex gap-1.5 mt-2 pt-2 border-t border-navy/6">
          {product.dahlUrl && (
            <span className="text-[10px] bg-navy/6 text-navy px-1.5 py-0.5 rounded font-medium">
              Dahl
            </span>
          )}
          {product.flisekompanietUrl && (
            <span className="text-[10px] bg-navy/6 text-navy px-1.5 py-0.5 rounded font-medium">
              Flisekompaniet
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

interface ProductGridProps {
  activeFilter: string | null;
}

export default function ProductGrid({ activeFilter }: ProductGridProps) {
  const filteredCategories = activeFilter
    ? productCategories.filter((cat) => cat.id === activeFilter)
    : productCategories;

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto space-y-20">
        {filteredCategories.map((cat) => (
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
      </div>
    </section>
  );
}
