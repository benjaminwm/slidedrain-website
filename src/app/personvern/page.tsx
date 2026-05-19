import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Slidedrain // Personvernerklæring",
  description:
    "Slidedrain AS sin personvernerklæring beskriver hvordan vi behandler personopplysninger fra besøkende på slidedrain.no.",
};

export default function PersonvernPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px] pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[40px] max-md:text-[32px] font-bold text-navy mb-4 leading-tight">
            Personvernerklæring
          </h1>
          <p className="text-text-light text-sm mb-12">
            Sist oppdatert: 18. mai 2026
          </p>

          <div className="prose-content space-y-8 text-[15px] text-text-light leading-[1.75]">
            <section>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Behandlingsansvarlig
              </h2>
              <p>
                Slidedrain AS (org.nr. 925 273 007), Sandakerveien 78, 0484 Oslo,
                er behandlingsansvarlig for personopplysningene vi samler inn
                via slidedrain.no.
              </p>
              <p className="mt-3">
                Kontakt:{" "}
                <a
                  href="mailto:kontakt@slidedrain.no"
                  className="text-orange hover:text-orange-dark"
                >
                  kontakt@slidedrain.no
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Hvilke opplysninger samler vi inn?
              </h2>
              <p>
                Når du fyller ut et skjema (kontaktskjema, lead-magnet eller
                kundehistorie-nedlasting) lagrer vi navn, e-postadresse,
                eventuelt telefonnummer, firma og melding. Disse opplysningene
                brukes for å besvare henvendelsen din og for relevant
                oppfølging.
              </p>
              <p className="mt-3">
                Når du besøker siden, og kun hvis du har gitt samtykke til
                analyse og/eller markedsføring i cookie-banneret, samler vi
                inn anonymisert bruksstatistikk via Google Analytics 4 og
                annonseringsdata via Meta Pixel og Google Ads.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Rettslig grunnlag
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-navy">Berettiget interesse:</strong>{" "}
                  for å besvare henvendelser og levere etterspurt innhold.
                </li>
                <li>
                  <strong className="text-navy">Samtykke (GDPR art. 6.1.a):</strong>{" "}
                  for analyse og markedsføring. Du kan når som helst trekke
                  tilbake samtykke via cookie-instillingene.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Hvem deler vi opplysninger med?
              </h2>
              <p>Vi bruker følgende databehandlere:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>
                  <strong className="text-navy">Resend</strong> — leveranse av
                  e-poster fra nettsiden.
                </li>
                <li>
                  <strong className="text-navy">Vercel</strong> — hosting av
                  nettsiden.
                </li>
                <li>
                  <strong className="text-navy">Google (GA4 / Ads / Tag Manager)</strong>{" "}
                  — analyse og annonsering (kun ved samtykke).
                </li>
                <li>
                  <strong className="text-navy">Meta</strong> — annonsering på
                  Facebook og Instagram (kun ved samtykke).
                </li>
              </ul>
              <p className="mt-3">
                Vi selger eller leier ikke ut personopplysninger til
                tredjeparter for kommersielle formål.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Hvor lenge lagrer vi opplysningene?
              </h2>
              <p>
                Henvendelser via skjema lagres så lenge det er nødvendig for å
                følge opp dialogen, og slettes når formålet er oppfylt — normalt
                innen 24 måneder.
              </p>
              <p className="mt-3">
                Analyse-cookies har varighet definert av Google (typisk
                14 måneder). Annonseringscookies styres av Meta og Google Ads
                sine retningslinjer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Dine rettigheter
              </h2>
              <p>Du har rett til:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Innsyn i hvilke opplysninger vi har om deg</li>
                <li>Korrigering eller sletting</li>
                <li>Begrensning av behandlingen</li>
                <li>Dataportabilitet</li>
                <li>Å trekke tilbake samtykke</li>
                <li>Å klage til Datatilsynet</li>
              </ul>
              <p className="mt-3">
                Kontakt{" "}
                <a
                  href="mailto:kontakt@slidedrain.no"
                  className="text-orange hover:text-orange-dark"
                >
                  kontakt@slidedrain.no
                </a>{" "}
                for å utøve rettighetene dine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-3">Cookies</h2>
              <p>
                For detaljer om hvilke informasjonskapsler vi bruker, se{" "}
                <a
                  href="/cookies"
                  className="text-orange hover:text-orange-dark"
                >
                  cookies-siden vår
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
