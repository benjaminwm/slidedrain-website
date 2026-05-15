"use client";

import FadeUp from "../FadeUp";

export default function StorySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <FadeUp>
          <div className="space-y-6 text-[17px] text-text-light leading-[1.8] font-light">
            <p>
              I 2025 har selskapet en landsdekkende distribusjon gjennom
              Brødrene Dahl og Flisekompaniet, med en egenutviklet
              produktportefølje bestående av over et tjuetalls produkter, som
              alle er norskproduserte i resirkulert plast og rustfritt stål.
            </p>
            <p>
              Selskapet er en nytenkende utfordrer med et sterkt miljøfokus og
              store vekstambisjoner, i et etablert markedet med behov for
              nyskaping. Derfor er alle Slidedrain-produkter utviklet med
              fokus på bærekraft, og designet i tett samarbeidet med brukere
              og kunder.
            </p>
            <p>
              Det har resultert i et produktkonsept som revolusjonerer dagens
              praksis ved prosjektering, installering og innkjøp av alle typer
              gulvsluk. Selskapets kraftig vekst kan indikere at også
              markedet har ventet et gulvsluk som gir større fleksibilitet ved
              montering og mindre vedlikehold i bruk, samtidig som det
              kombinerer et moderne design med redusert vannskaderisiko.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
