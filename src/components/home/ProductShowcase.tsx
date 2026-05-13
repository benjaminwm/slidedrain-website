"use client";

import { useState, useEffect, useCallback } from "react";
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

  // Lengste ord setter bredden så ingen tekstlinjer endrer seg under animasjonen
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span className="relative inline-block text-orange align-baseline">
      <span aria-hidden className="invisible">
        {longest}
      </span>
      <span
        className={`absolute inset-0 transition-all duration-400 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {words[idx]}
      </span>
    </span>
  );
}

function getProducts(catIds: string[]): Product[] {
  return productCategories
    .filter((c) => catIds.includes(c.id))
    .flatMap((c) => c.products);
}

const layers = [
  {
    label: "Synlig VVS",
    subtitle: "Slukrenner & Slukrister",
    products: getProducts(["slukrenner-tile", "slukrenner-eksentrisk", "slukrenner", "slukrister", "hjornerister"]),
  },
  {
    label: "Teknisk VVS",
    subtitle: "Slukoverdel",
    products: getProducts(["slukoverdeler"]),
  },
  {
    label: "Teknisk VVS",
    subtitle: "Slukpotte",
    products: getProducts(["slukpotter"]),
  },
];

function ArrowBtn({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-7 h-7 rounded-full flex items-center justify-center text-orange hover:bg-orange/10 transition-colors cursor-pointer shrink-0"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="w-4 h-4">
        {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

function Ghost({ product }: { product: Product | undefined }) {
  if (!product) return <div className="w-14 h-14 max-sm:hidden" />;
  return (
    <div className="w-14 h-14 opacity-20 shrink-0 max-sm:hidden">
      <Image src={getProductImageUrl(product.imageId)} alt="" width={56} height={56} className="w-full h-full object-contain" unoptimized />
    </div>
  );
}

function LayerRow({
  layer,
  selectedIdx,
  onPrev,
  onNext,
}: {
  layer: (typeof layers)[0];
  selectedIdx: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const product = layer.products[selectedIdx];
  const prev = layer.products[selectedIdx - 1];
  const next = layer.products[selectedIdx + 1];

  return (
    <div className="flex flex-col items-center">
      <p className="text-[11px] text-text-light italic mb-1">{layer.subtitle}</p>

      <div className="flex items-center gap-1 justify-center">
        <Ghost product={prev} />
        <ArrowBtn direction="left" onClick={onPrev} />
        <div className="w-[170px] h-[120px] max-sm:w-[140px] max-sm:h-[100px] flex items-center justify-center">
          <Image
            src={getProductImageUrl(product.imageId)}
            alt={product.name}
            width={170}
            height={120}
            className="w-full h-full object-contain"
            unoptimized
            key={product.nobbNr}
          />
        </div>
        <ArrowBtn direction="right" onClick={onNext} />
        <Ghost product={next} />
      </div>

      <p className="text-[10px] text-text-light mt-1 text-center max-w-[200px] truncate">
        {product.name}
      </p>
    </div>
  );
}

export default function ProductShowcase() {
  const [selections, setSelections] = useState([0, 0, 0]);

  const navigate = useCallback((layerIdx: number, direction: number) => {
    setSelections((prev) => {
      const next = [...prev];
      const len = layers[layerIdx].products.length;
      next[layerIdx] = (prev[layerIdx] + direction + len) % len;
      return next;
    });
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-bg" id="produkter">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
            Bygget for{" "}
            <span className="text-orange">maksimal fleksibilitet</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Bla gjennom kombinasjonene og se hvor enkelt slukpotte, slukoverdel
            og synlig design passer sammen.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="max-w-[520px]">
            <span className="inline-block bg-orange/10 text-orange text-[12px] font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Modulært sluksystem
            </span>
            <h2 className="text-[32px] max-md:text-[26px] font-bold leading-[1.15] mb-4 text-navy">
              Forenkler byggeprosessen fra{" "}
              <AnimatedWord words={animWords1} /> til{" "}
              <AnimatedWord words={animWords2} />
            </h2>
            <p className="text-[15px] text-text-light leading-[1.7] font-light mb-5">
              Slidedrain er et komplett modulært sluksystem der den tekniske
              installasjonen er den samme, uansett hvilket designuttrykk
              sluttkunden velger. Sett sammen din egen løsning &ndash; alt
              passer sammen.
            </p>
            <ul className="space-y-2.5 mb-6">
              {[
                "Velg blant 25+ slukrenner og slukrister",
                "Samme slukoverdel og slukpotte for alle design",
                "Designvalg kan endres helt frem til flislegging",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-text-light">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2} className="w-4.5 h-4.5 shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/produkter"
              className="shine-btn inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-orange-dark transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(251,92,19,0.3)]"
            >
              <span>Se alle produkter</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: Compact configurator */}
          <div className="border-2 border-dashed border-navy/12 rounded-2xl py-5 px-3 bg-white/40 space-y-0 w-full max-w-[420px] max-lg:mx-auto">
            {layers.map((layer, i) => (
              <div key={i}>
                {i > 0 && (
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-navy/15" />
                  </div>
                )}
                <LayerRow
                  layer={layer}
                  selectedIdx={selections[i]}
                  onPrev={() => navigate(i, -1)}
                  onNext={() => navigate(i, 1)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
