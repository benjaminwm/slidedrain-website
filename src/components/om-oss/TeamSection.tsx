"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const team = [
  { src: "/images/team-1.jpg", name: "Stian Bongard", role: "Daglig leder" },
  { src: "/images/team-2.jpg", name: "Henning Patricksson", role: "Produktsjef" },
  { src: "/images/team-3.jpg", name: "Fredrik Fretheim", role: "Salgsansvarlig" },
  { src: "/images/team-4.jpg", name: "Joakim Delebekk", role: "Salgsansvarlig" },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-6 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center max-w-[800px] mx-auto mb-15">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight">
            Teamet bak <span className="text-orange">Slidedrain</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Et tverrfaglig team med lidenskap for innovasjon, kvalitet og
            norsk håndverk.
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto">
          {team.map((t, i) => (
            <FadeUp key={i} className="text-center">
              <Image
                src={t.src}
                alt={t.name}
                width={200}
                height={200}
                className="w-full aspect-square rounded-2xl object-cover shadow-[0_4px_20px_rgba(40,52,71,0.1)] mb-4"
              />
              <h3 className="font-semibold text-navy text-[15px]">{t.name}</h3>
              <p className="text-sm text-text-light">{t.role}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
