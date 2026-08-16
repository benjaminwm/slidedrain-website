import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { landingCategories } from "@/data/landingCategories";

export const metadata = {
  title: "Slidedrain // Siden finnes ikke",
  description:
    "Siden du leter etter finnes ikke lenger. Finn frem til produkter, installasjonsveiledninger og kundehistorier her.",
};

/**
 * Custom 404.
 *
 * Nettstedet ble relansert i mai 2026, og Google har fortsatt gamle
 * WordPress-URL-er i indeksen. De fleste er fanget av redirectene i
 * next.config.ts, men resten lander her — da skal siden gi en vei videre
 * i stedet for en blindvei. Next.js svarer fortsatt 404.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px] pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="text-orange font-semibold text-sm tracking-wide mb-3">
            404
          </p>
          <h1 className="text-[40px] max-md:text-[32px] font-bold text-navy mb-4 leading-tight">
            Denne siden finnes ikke
          </h1>
          <p className="text-text-light text-[15px] leading-[1.75] mb-12">
            Nettstedet ble relansert i mai 2026, og noen gamle lenker peker
            fortsatt til sider som er flyttet eller fjernet. Prøv en av
            snarveiene under.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                href: "/produkter",
                title: "Produkter",
                text: "Gulvsluk, slukrenner, slukrister og hjørnerister.",
              },
              {
                href: "/installasjon",
                title: "Installasjon",
                text: "Steg-for-steg montering og nedlastbare anvisninger.",
              },
              {
                href: "/kundehistorier",
                title: "Kundehistorier",
                text: "Slik har andre løst prosjektene sine.",
              },
              {
                href: "/om-oss",
                title: "Om oss",
                text: "Historien bak Slidedrain og folkene som lager det.",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block border border-navy/10 rounded-lg p-5 hover:border-orange transition-colors"
              >
                <span className="block font-semibold text-navy mb-1">
                  {l.title}
                </span>
                <span className="block text-text-light text-sm leading-[1.6]">
                  {l.text}
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-lg font-bold text-navy mb-4">Produktkategorier</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {landingCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/produkter/${c.slug}`}
                  className="text-orange hover:text-orange-dark"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
