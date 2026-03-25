"use client";

import { useState } from "react";
import ProductHero from "./ProductHero";
import ProductGrid from "./ProductGrid";

export default function ProductPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <>
      <ProductHero activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProductGrid activeFilter={activeFilter} />
    </>
  );
}
