"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { ArrowRight } from "./icons";
import BookingWidget from "./BookingWidget";

export default function CtaSection() {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-br from-navy to-[#1a2536] text-white"
      id="kontakt"
    >
      <FadeUp className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + trust */}
          <div>
            <h2 className="text-4xl max-md:text-[28px] font-bold mb-4">
              Klar for en mer lønnsom byggeprosess?
            </h2>
            <p className="text-[17px] text-white/70 mb-8 font-light leading-[1.7]">
              Book et kort møte for å se hvordan Slidedrain kan maksimere
              marginen og forenkle tilvalg i ditt neste prosjekt.
            </p>

            {/* Team avatars */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex -space-x-3">
                <Image
                  src="/images/team-avatar-1.jpg"
                  alt="Teammedlem"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-navy object-cover"
                />
                <Image
                  src="/images/team-avatar-2.jpg"
                  alt="Teammedlem"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-navy object-cover"
                />
                <Image
                  src="/images/team-avatar-3.jpg"
                  alt="Teammedlem"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-navy object-cover"
                />
              </div>
              <p className="text-sm text-white/60">
                Snakk med teamet bak Slidedrain
              </p>
            </div>

            {/* Partners */}
            <div className="flex gap-10 items-center opacity-60">
              <span className="text-[13px] text-white/50 uppercase tracking-wider">
                Tilgjengelig hos
              </span>
              <Image
                src="https://slidedrain.no/wp-content/uploads/2022/05/BD-Logo-neg-2linjers-300x71.png"
                alt="Brødrene Dahl"
                width={120}
                height={28}
                className="h-7 w-auto brightness-0 invert"
              />
              <Image
                src="https://slidedrain.no/wp-content/uploads/2022/05/flisekompaniet_logo_neg-300x49.png"
                alt="Flisekompaniet"
                width={120}
                height={28}
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
          </div>

          {/* Right: Booking widget */}
          <BookingWidget />
        </div>
      </FadeUp>
    </section>
  );
}
