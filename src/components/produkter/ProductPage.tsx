"use client";

import { useState } from "react";
import ProductHero from "./ProductHero";
import ProductGrid from "./ProductGrid";

export default function ProductPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  return (
    <>
      <ProductHero
        activeFilters={activeFilters}
        onToggleFilter={toggleFilter}
        onClearFilters={clearFilters}
      />
      <ProductGrid activeFilters={activeFilters} />
    </>
  );
}
