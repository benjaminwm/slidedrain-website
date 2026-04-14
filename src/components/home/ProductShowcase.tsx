"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full flex items-center justify-center text-orange hover:bg-orange/10 transition-colors cursor-pointer shrink-0"
      aria-label={direction === "left" ? "Forrige" : "Neste"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        className="w-5 h-5"
      >
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

function GhostProduct({ product }: { product: Product | undefined }) {
  if (!product) return <div className="w-16 h-16 sm:w-20 sm:h-20" />;
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 opacity-30 shrink-0">
      <Image
        src={getProductImageUrl(product.imageId)}
        alt=""
        width={80}
        height={80}
        className="w-full h-full object-contain"
        unoptimized
      />
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
  const prevProduct = layer.products[selectedIdx - 1];
  const nextProduct = layer.products[selectedIdx + 1];

  return (
    <div className="flex flex-col items-center">
      {/* Label */}
      <div className="text-center mb-3">
        <p className="font-bold text-navy text-[15px]">{layer.label}</p>
        <p className="text-sm text-text-light italic">{layer.subtitle}</p>
      </div>

      {/* Carousel row */}
      <div className="flex items-center gap-2 sm:gap-4 w-full justify-center">
        {/* Left ghost */}
        <div className="hidden sm:flex items-center">
          <GhostProduct product={prevProduct} />
        </div>

        <ArrowButton direction="left" onClick={onPrev} />

        {/* Main product */}
        <div className="w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] bg-white rounded-xl flex items-center justify-center p-4 shadow-sm">
          <Image
            src={getProductImageUrl(product.imageId)}
            alt={product.name}
            width={260}
            height={160}
            className="w-full h-full object-contain transition-all duration-300"
            unoptimized
            key={product.nobbNr}
          />
        </div>

        <ArrowButton direction="right" onClick={onNext} />

        {/* Right ghost */}
        <div className="hidden sm:flex items-center">
          <GhostProduct product={nextProduct} />
        </div>
      </div>

      {/* Product name */}
      <p className="text-xs text-text-light mt-2 text-center max-w-[280px] truncate">
        {product.name}
      </p>
    </div>
  );
}

export default function ProductShowcase() {
  const [selections, setSelections] = useState([0, 0, 0]);

  const navigate = useCallback(
    (layerIdx: number, direction: number) => {
      setSelections((prev) => {
        const next = [...prev];
        const len = layers[layerIdx].products.length;
        next[layerIdx] = (prev[layerIdx] + direction + len) % len;
        return next;
      });
    },
    []
  );

  return (
    <section className="py-20 px-6 bg-gray-bg" id="produkter">
      <div className="max-w-[1200px] mx-auto">
        {/* Animated headline */}
        <div className="text-center mb-14">
          <h2 className="text-3xl max-md:text-2xl font-bold text-navy leading-tight mb-3">
            Forenkler byggeprosessen fra{" "}
            <AnimatedWord words={animWords1} /> til{" "}
            <AnimatedWord words={animWords2} />
          </h2>
          <p className="text-[16px] text-text-light font-light max-w-[550px] mx-auto">
            Sett sammen din egen løsning. Alt passer sammen.
          </p>
        </div>

        {/* Configurator */}
        <div className="max-w-[700px] mx-auto border-2 border-dashed border-navy/15 rounded-3xl py-10 px-4 bg-white/50 space-y-10">
          {layers.map((layer, i) => (
            <div key={i}>
              {/* Divider between sections */}
              {i === 1 && (
                <div className="text-center mb-6 -mt-2">
                  <div className="w-px h-8 bg-navy/15 mx-auto mb-2" />
                </div>
              )}
              {i === 2 && (
                <div className="text-center mb-6 -mt-2">
                  <div className="w-px h-8 bg-navy/15 mx-auto mb-2" />
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

        {/* Slidedrain logo at bottom */}
        <div className="flex justify-center mt-8">
          <Image
            src="https://slidedrain.no/wp-content/uploads/2020/08/Full-logo_Orange.webp?x59798"
            alt="Slidedrain"
            width={140}
            height={28}
            className="h-6 w-auto opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
