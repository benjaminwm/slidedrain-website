"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "SINTEF Teknisk Godkjenning",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Norskprodusert",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "DOGA Nykommer",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 stroke-orange">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Patentert teknologi",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {badges.map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-orange/8 rounded-xl flex items-center justify-center">
                  {b.icon}
                </div>
                <span className="text-sm font-semibold text-navy">
                  {b.title}
                </span>
              </div>
            ))}
          </div>

          {/* Partner logos */}
          <div className="flex flex-wrap gap-8 justify-center items-center pt-8 border-t border-navy/8">
            <span className="text-xs text-text-light uppercase tracking-wider font-medium">
              Tilgjengelig hos
            </span>
            <Image
              src="/images/logo-brodrenedahl.png"
              alt="Brødrene Dahl"
              width={120}
              height={28}
              className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity"
            />
            <Image
              src="/images/logo-flisekompaniet.png"
              alt="Flisekompaniet"
              width={120}
              height={28}
              className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
