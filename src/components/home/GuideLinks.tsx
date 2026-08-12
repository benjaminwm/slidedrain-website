import Link from "next/link";
import FadeUp from "@/components/FadeUp";

/**
 * Kontekstuelle lenker fra forsiden til installasjonsguidene og
 * kundehistoriene.
 *
 * Forsidens innhold lenket tidligere bare til /produkter — guidene og
 * historiene var kun tilgjengelige via meny og footer, som gir lite
 * intern autoritet. Her får de en lenke i selve innholdet.
 */
const links = [
  {
    href: "/installasjon",
    title: "Montere sluk på baderom",
    desc: "Seks steg fra slukpotte til ferdig membranovergang, med film og monteringsanvisning.",
  },
  {
    href: "/installasjon/montere-slukrenne",
    title: "Montere slukrenne",
    desc: "Plassering, flislim og høyder for slukrenne med tile insert eller rist.",
  },
  {
    href: "/installasjon/ofte-stilte-sporsmal",
    title: "Sluk og våtromskrav",
    desc: "Godkjente membraner, TEK17, SINTEF Teknisk Godkjenning, belastning og kapasitet.",
  },
  {
    href: "/kundehistorier",
    title: "Kundehistorier",
    desc: "Hvordan rørleggere og entreprenører bruker Slidedrain i egne prosjekter.",
  },
];

export default function GuideLinks() {
  return (
    <section className="py-16 px-6 bg-gray-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-10">
          <h2 className="text-4xl max-md:text-[28px] font-bold mb-4 leading-tight text-navy">
            Guider og <span className="text-orange">erfaringer</span>
          </h2>
          <p className="text-[17px] text-text-light leading-[1.7] font-light">
            Skal du montere sluk, eller lurer du på hva kravene sier? Start
            her.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map((l, i) => (
            <FadeUp key={l.href} style={{ transitionDelay: `${i * 80}ms` }}>
              <Link
                href={l.href}
                className="group flex flex-col h-full bg-white rounded-xl p-6 border border-navy/10 hover:border-orange/40 transition-colors"
              >
                <h3 className="font-semibold text-navy text-[17px] mb-2 group-hover:text-orange transition-colors">
                  {l.title}
                </h3>
                <p className="text-[14px] text-text-light leading-[1.7]">
                  {l.desc}
                </p>
                <span className="mt-4 text-sm font-semibold text-orange">
                  Les mer →
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
