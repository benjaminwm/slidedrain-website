"use client";

import { productCategories } from "@/data/products";

interface ProductHeroProps {
  activeFilters: string[];
  onToggleFilter: (id: string) => void;
  onClearFilters: () => void;
}

export default function ProductHero({ activeFilters, onToggleFilter, onClearFilters }: ProductHeroProps) {
  const allActive = activeFilters.length === 0;

  return (
    <section className="pt-[140px] pb-16 px-6 bg-gradient-to-br from-white to-[#fef7f3]">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="inline-block bg-orange/10 text-orange text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
          Komplett produktoversikt
        </span>
        <h1 className="text-[46px] max-lg:text-[36px] max-sm:text-[28px] font-bold leading-[1.15] mb-5 text-navy">
          Alle produkter med{" "}
          <span className="text-orange">NOBB &amp; NRF</span>
        </h1>
        <p className="text-lg text-text-light leading-[1.7] font-light max-w-[700px] mx-auto">
          37 produkter fordelt på 7 kategorier. Alle varer er lagerført hos
          Brødrene Dahl og Flisekompaniet med NOBB- og NRF-nummer for
          enkel bestilling.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={onClearFilters}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              allActive
                ? "bg-navy text-white shadow-md"
                : "bg-navy/6 text-navy hover:bg-navy/12"
            }`}
          >
            Alle produkter
          </button>
          {productCategories.map((cat) => {
            const isActive = activeFilters.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => onToggleFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-orange text-white shadow-md"
                    : "bg-navy/6 text-navy hover:bg-navy/12"
                }`}
              >
                {cat.title}
                <span className="ml-1.5 text-[11px] opacity-60">
                  {cat.products.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
