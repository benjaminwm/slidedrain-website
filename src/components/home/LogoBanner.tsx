"use client";

import Image from "next/image";

const logos = [
  { src: "/images/partners/Logo - Rosendal bygg.png", alt: "Rosendal Bygg" },
  { src: "/images/partners/Logo - Lomundal Bygg.png", alt: "Lomundal Bygg" },
  { src: "/images/partners/Logo - BM Rørservice.png", alt: "BM Rørservice" },
  { src: "/images/partners/Logo - Romerike Bad.png", alt: "Romerike Bad" },
  { src: "/images/partners/Logo - Rørproff.png", alt: "Rørproff" },
  { src: "/images/partners/Logo - Christiania Rørleggerbedrift.png", alt: "Christiania Rørleggerbedrift" },
  { src: "/images/partners/Logo - Prorør.png", alt: "Prorør" },
  { src: "/images/partners/Logo - Knutshaug VVS.png", alt: "Knutshaug VVS" },
  { src: "/images/partners/Logo - Flow Trøndelag VVS.png", alt: "Flow Trøndelag VVS" },
];

const allLogos = [...logos, ...logos];

export default function LogoBanner() {
  return (
    <div className="relative py-6 overflow-hidden">
      {/* Fade edges - 20% on each side matching hero bg */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-[#fef7f3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-[#fef7f3] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center animate-logo-scroll">
        {allLogos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0 px-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes logoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logoScroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
