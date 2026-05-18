import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResetConsentButton from "@/components/ResetConsentButton";

export const metadata = {
  title: "Slidedrain // Informasjonskapsler",
  description:
    "Oversikt over informasjonskapsler (cookies) som brukes på slidedrain.no, og hvordan du kan administrere dine valg.",
};

type CookieRow = {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  category: "Nødvendig" | "Analyse" | "Markedsføring";
};

const cookies: CookieRow[] = [
  {
    name: "sd-consent",
    provider: "Slidedrain",
    purpose: "Lagrer ditt cookie-samtykke",
    expiry: "12 måneder",
    category: "Nødvendig",
  },
  {
    name: "cookie-consent",
    provider: "Slidedrain (localStorage)",
    purpose: "Legacy lagring av samtykke",
    expiry: "Permanent (kan slettes manuelt)",
    category: "Nødvendig",
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics 4",
    purpose: "Skiller mellom unike brukere for bruksstatistikk",
    expiry: "Inntil 14 måneder",
    category: "Analyse",
  },
  {
    name: "_gid",
    provider: "Google Analytics 4",
    purpose: "Skiller brukere i siste 24 timer",
    expiry: "24 timer",
    category: "Analyse",
  },
  {
    name: "_gcl_au",
    provider: "Google Ads",
    purpose: "Conversion linker — kobler annonseklikk til handlinger",
    expiry: "90 dager",
    category: "Markedsføring",
  },
  {
    name: "_fbp",
    provider: "Meta",
    purpose: "Identifiserer nettleser for Meta Ads-rapportering",
    expiry: "90 dager",
    category: "Markedsføring",
  },
];

const categoryColor = {
  Nødvendig: "bg-green/10 text-green",
  Analyse: "bg-navy/10 text-navy",
  Markedsføring: "bg-orange/10 text-orange",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px] pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-[40px] max-md:text-[32px] font-bold text-navy mb-4 leading-tight">
            Informasjonskapsler
          </h1>
          <p className="text-text-light text-sm mb-10">
            Sist oppdatert: 18. mai 2026
          </p>

          <div className="space-y-6 text-[15px] text-text-light leading-[1.75] mb-12">
            <p>
              Slidedrain.no bruker informasjonskapsler (cookies) for å sikre
              at nettsiden fungerer, og — kun med ditt samtykke — for å forstå
              hvordan siden brukes og for å vise relevante annonser.
            </p>
            <p>
              Du gir samtykke første gang du besøker siden via banneret nederst.
              Du kan når som helst endre valgene dine ved å trykke på knappen
              under.
            </p>
          </div>

          <ResetConsentButton />

          <h2 className="text-2xl font-bold text-navy mt-12 mb-6">
            Oversikt over cookies
          </h2>

          <div className="space-y-4">
            {cookies.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-navy/8 p-5"
              >
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold text-navy text-[15px]">
                      {c.name}
                    </h3>
                    <p className="text-xs text-text-light mt-0.5">
                      {c.provider}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${categoryColor[c.category]}`}
                  >
                    {c.category}
                  </span>
                </div>
                <p className="text-[14px] text-text-light leading-[1.7] mb-2">
                  {c.purpose}
                </p>
                <p className="text-[12px] text-text-light/70">
                  Varighet: <span className="font-medium text-navy">{c.expiry}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-bg rounded-xl">
            <h3 className="text-lg font-semibold text-navy mb-2">
              Du kan også blokkere cookies i nettleseren
            </h3>
            <p className="text-[14px] text-text-light leading-[1.7]">
              De fleste nettlesere lar deg administrere eller slette cookies
              direkte. Se nettleserens hjelpesider for detaljer. Vær obs på at
              å blokkere cookies kan påvirke hvordan deler av siden fungerer.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
