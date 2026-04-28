"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

export default function TrustBar() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          {/* Partner logos */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <span className="text-xs text-text-light uppercase tracking-wider font-medium">
              Kjøp i dag hos
            </span>
            <Image
              src="/images/logo-brodrenedahl.svg"
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
