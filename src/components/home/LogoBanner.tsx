"use client";

import Image from "next/image";

const logos = [
  { src: "/images/partners/hovedlogo+rosendal+byggutenhvit.png-1.png", alt: "Rosendal Bygg" },
  { src: "/images/partners/lomundalbygg_logo-1.png", alt: "Lømundal Bygg" },
  { src: "/images/partners/group-8964.png", alt: "BM Rørservice" },
  { src: "/images/partners/group-9089.png", alt: "Romerike Bad AS" },
  { src: "/images/partners/mask-group.png", alt: "Rørproff" },
  { src: "/images/partners/mask-group-1.png", alt: "Christiania Rørleggerbedrift" },
  { src: "/images/partners/mask-group-2.png", alt: "Bærum Rørleggerbedrift" },
  { src: "/images/partners/mask-group-4.png", alt: "Prorør AS" },
  { src: "/images/partners/wyvfnyrdkpddkdiztnreqqlnwk.png-1.png", alt: "Knutshaug VVS" },
  { src: "/images/partners/images-4-1.png", alt: "Flow VVS" },
];

const allLogos = [...logos, ...logos];

export default function LogoBanner() {
  return (
    <div className="relative py-6 overflow-hidden mx-[20%]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-[#fef7f3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-[#fef7f3] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center animate-scroll">
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
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
