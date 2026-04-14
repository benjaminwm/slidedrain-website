"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { productCategories, getProductImageUrl } from "@/data/products";
import type { Product } from "@/data/products";

const animWords1 = ["planlegging", "prosjektering"];
const animWords2 = ["flislegging", "tilvalgsfrist"];

function AnimatedWord({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={`inline-block text-orange transition-all duration-400 ${
        fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {words[idx]}
    </span>
  );
}

// Build the 3 rows from product data
const slukrennerCats = ["slukrenner-tile", "slukrenner-eksentrisk", "slukrenner"];
const slukoverdelerCat = "slukoverdeler";
const slukpotterCat = "slukpotter";

function getProductsForRow(catIds: string | string[]): Product[] {
  const ids = Array.isArray(catIds) ? catIds : [catIds];
  return productCategories
    .filter((c) => ids.includes(c.id))
    .flatMap((c) => c.products);
}

const rows = [
  {
    label: "Slukrenner",
    products: getProductsForRow(slukrennerCats),
  },
  {
    label: "Slukoverdeler",
    products: getProductsForRow(slukoverdelerCat),
  },
  {
    label: "Slukpotter",
    products: getProductsForRow(slukpotterCat),
  },
];

export default function ProductShowcase() {
  const [activeRow, setActiveRow] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

  const currentProducts = rows[activeRow].products;
  const current = currentProducts[activeProduct] || currentProducts[0];

  const handleRowChange = (i: number) => {
    setActiveRow(i);
    setActiveProduct(0);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Animated headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl max-md:text-2xl font-bold text-navy leading-tight">
            Forenkler byggeprosessen fra{" "}
            <AnimatedWord words={animWords1} /> til{" "}
            <AnimatedWord words={animWords2} />
          </h2>
        </div>

        {/* Row selector */}
        <div className="flex justify-center gap-2 mb-8">
          {rows.map((row, i) => (
            <button
              key={row.label}
              onClick={() => handleRowChange(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeRow === i
                  ? "bg-orange text-white shadow-[0_4px_14px_rgba(251,92,19,0.3)]"
                  : "bg-gray-bg text-text-light hover:text-navy"
              }`}
            >
              {row.label}
              <span className="ml-1.5 text-xs opacity-60">
                ({row.products.length})
              </span>
            </button>
          ))}
        </div>

        {/* Product display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Large product image */}
          <div className="bg-gray-bg rounded-2xl p-8 flex items-center justify-center aspect-square max-h-[500px]">
            <Image
              src={getProductImageUrl(current.imageId)}
              alt={current.name}
              width={400}
              height={400}
              className="w-full h-full object-contain transition-opacity duration-300"
              unoptimized
              key={current.nobbNr}
            />
          </div>

          {/* Right: Product info + selector */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange mb-2 block">
                {rows[activeRow].label}
              </span>
              <h3 className="text-2xl font-bold text-navy mb-3 min-h-[64px]">
                {current.name}
              </h3>
              {current.description && (
                <p className="text-[15px] text-text-light leading-[1.7] mb-4">
                  {current.description}
                </p>
              )}

              {/* Specs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {current.lengthMm && (
                  <span className="text-xs bg-navy/6 text-navy px-2.5 py-1 rounded font-medium">
                    L {current.lengthMm} mm
                  </span>
                )}
                {current.widthMm && (
                  <span className="text-xs bg-navy/6 text-navy px-2.5 py-1 rounded font-medium">
                    B {current.widthMm} mm
                  </span>
                )}
                {current.heightMm && (
                  <span className="text-xs bg-navy/6 text-navy px-2.5 py-1 rounded font-medium">
                    H {current.heightMm} mm
                  </span>
                )}
                {current.diameterMm && (
                  <span className="text-xs bg-navy/6 text-navy px-2.5 py-1 rounded font-medium">
                    &Oslash; {current.diameterMm} mm
                  </span>
                )}
                {current.finish && (
                  <span className="text-xs bg-orange/8 text-orange px-2.5 py-1 rounded font-medium">
                    {current.finish}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-bg rounded-lg p-3">
                  <span className="text-[10px] text-text-light uppercase tracking-wide">
                    NOBB
                  </span>
                  <p className="font-mono text-sm text-navy font-medium">
                    {current.nobbNr}
                  </p>
                </div>
                <div className="bg-gray-bg rounded-lg p-3">
                  <span className="text-[10px] text-text-light uppercase tracking-wide">
                    NRF
                  </span>
                  <p className="font-mono text-sm text-navy font-medium">
                    {current.nrfNr}
                  </p>
                </div>
              </div>

              <Link
                href={`/produkter/${current.slug}`}
                className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)]"
              >
                Se produktdetaljer
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Product thumbnails */}
            <div className="border-t border-navy/8 pt-4">
              <p className="text-xs text-text-light mb-3 font-medium uppercase tracking-wide">
                Velg produkt ({currentProducts.length})
              </p>
              <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto">
                {currentProducts.map((p, i) => (
                  <button
                    key={p.nobbNr}
                    onClick={() => setActiveProduct(i)}
                    className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all cursor-pointer ${
                      activeProduct === i
                        ? "border-orange shadow-[0_0_0_1px_rgba(251,92,19,0.3)]"
                        : "border-navy/10 hover:border-navy/30"
                    }`}
                    title={p.name}
                  >
                    <Image
                      src={getProductImageUrl(p.imageId)}
                      alt={p.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain p-1"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
