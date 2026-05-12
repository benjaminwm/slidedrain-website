"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const testimonials = [
  { src: "/images/testimonials/romerike-bad.png", alt: "Espen Stene, Daglig leder, Romerike Bad AS" },
  { src: "/images/testimonials/trondelag-vvs.png", alt: "Robin Solem, Prosjektleder, Trøndelag VVS" },
  { src: "/images/testimonials/rorproff.png", alt: "Alexander Køltzow, Faglig leder, Rørproff" },
  { src: "/images/testimonials/christiania.png", alt: "Vidar Skagestad, Avdelingsleder, Christiania" },
  { src: "/images/testimonials/proror.png", alt: "Sigurd Steen, Daglig leder, Proror AS" },
  { src: "/images/testimonials/lomundal.png", alt: "Haakon Aavik, Prosjektleder, Lomundal" },
  { src: "/images/testimonials/rosendal-bygg.png", alt: "Ole Brehme Olsen, Rørlegger, Rosendal Bygg" },
];

// Duplicate the list so the marquee loop is seamless
const looped = [...testimonials, ...testimonials];

export default function TestimonialsMarquee() {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <FadeUp className="text-center max-w-[800px] mx-auto mb-12 px-6">
        <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
          Det sier{" "}
          <span className="text-orange">fagfolket</span>
        </h2>
        <p className="text-[17px] text-text-light leading-[1.7] font-light">
          Rørleggere, prosjektledere og baderomsbyggere over hele landet bruker
          Slidedrain i prosjektene sine. Her er noen av tilbakemeldingene.
        </p>
      </FadeUp>

      <div className="relative group">
        <div
          className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]"
          aria-label="Testimonials fra Slidedrain-kunder"
        >
          {looped.map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(40,52,71,0.10)]"
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={720}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
