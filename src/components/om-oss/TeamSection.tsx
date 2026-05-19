"use client";

import Image from "next/image";
import FadeUp from "../FadeUp";

const team = [
  {
    src: "/images/team-1.jpg",
    name: "Fredrik Fretheim",
    role: "Salgsansvarlig",
    email: "fredrik@slidedrain.no",
    phone: "992 21 856",
  },
  {
    src: "/images/team-2.jpg",
    name: "Joakim Delebekk",
    role: "Salgsansvarlig",
    email: "joakim@slidedrain.no",
    phone: "458 16 622",
  },
  {
    src: "/images/team-3.jpg",
    name: "Henning Patricksson",
    role: "Produktsjef",
    email: "henning@slidedrain.no",
    phone: "994 48 082",
  },
  {
    src: "/images/team-4.jpg",
    name: "Stian Bongard",
    role: "Daglig leder",
    email: "stian@slidedrain.no",
    phone: "980 77 492",
  },
];

function telHref(phone: string): string {
  return "tel:+47" + phone.replace(/\s+/g, "");
}

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">
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
              <p className="text-sm text-text-light mb-2">{t.role}</p>
              <a
                href={`mailto:${t.email}`}
                className="block text-[13px] text-text-light hover:text-orange transition-colors break-all"
              >
                {t.email}
              </a>
              <a
                href={telHref(t.phone)}
                className="block text-[13px] text-text-light hover:text-orange transition-colors mt-0.5"
              >
                {t.phone}
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
