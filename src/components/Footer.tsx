import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-text-light border-t border-navy/8">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo-slidedrain.webp"
              alt="Slidedrain"
              width={140}
              height={28}
              className="h-7 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed max-w-sm">
              Neste generasjons gulvsluk. Prisbelønt design med
              SINTEF-godkjenning. Norskprodusert og tilgjengelig hos Brødrene
              Dahl og Flisekompaniet.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-4">
              Sider
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/produkter" className="hover:text-navy transition-colors">
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/sluttkunde" className="hover:text-navy transition-colors">
                  Privatperson
                </Link>
              </li>
              <li>
                <Link href="/rorlegger" className="hover:text-navy transition-colors">
                  Rørlegger
                </Link>
              </li>
              <li>
                <Link href="/tilvalg" className="hover:text-navy transition-colors">
                  Entreprenør
                </Link>
              </li>
              <li>
                <Link href="/installasjon" className="hover:text-navy transition-colors">
                  Installasjon
                </Link>
              </li>
              <li>
                <Link href="/kundehistorier" className="hover:text-navy transition-colors">
                  Kundehistorier
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-navy transition-colors">
                  Om oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="https://slidedrain.no"
                  className="hover:text-navy transition-colors"
                >
                  slidedrain.no
                </Link>
              </li>
              <li>
                <a
                  href="mailto:post@slidedrain.no"
                  className="hover:text-navy transition-colors"
                >
                  post@slidedrain.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-light/50">
          <p>
            &copy; {new Date().getFullYear()} Slidedrain. Alle rettigheter
            reservert.
          </p>
          <div className="flex gap-6">
            <Link href="/personvern" className="hover:text-navy transition-colors">
              Personvern
            </Link>
            <Link href="/cookies" className="hover:text-navy transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
