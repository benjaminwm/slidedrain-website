import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2536] text-white/60">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="https://slidedrain.no/wp-content/uploads/2020/08/Full-logo_Orange.webp?x59798"
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
            <h4 className="text-white font-semibold text-sm mb-4">
              Landingsside
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#tilvalg" className="hover:text-white transition-colors">
                  Tilvalg
                </a>
              </li>
              <li>
                <a href="#fordeler" className="hover:text-white transition-colors">
                  Fordeler
                </a>
              </li>
              <li>
                <a href="#sikkerhet" className="hover:text-white transition-colors">
                  Sikkerhet
                </a>
              </li>
              <li>
                <a href="#logistikk" className="hover:text-white transition-colors">
                  Logistikk
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="https://slidedrain.no"
                  className="hover:text-white transition-colors"
                >
                  slidedrain.no
                </Link>
              </li>
              <li>
                <a
                  href="mailto:post@slidedrain.no"
                  className="hover:text-white transition-colors"
                >
                  post@slidedrain.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Slidedrain. Alle rettigheter
            reservert.
          </p>
          <div className="flex gap-6">
            <Link href="/personvern" className="hover:text-white/60 transition-colors">
              Personvern
            </Link>
            <Link href="/vilkar" className="hover:text-white/60 transition-colors">
              Vilkår
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
