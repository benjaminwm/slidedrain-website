# Manual fikser fra fiksliste v2 (2026-05-14)

Disse punktene fra Stian sin fiksliste kunne IKKE løses automatisk og
trenger manuell utførelse / nye filer fra Stian.

## 🏠 Hjemside

- [ ] **Mer spacing i tekst på header** — vagt formulert. Sjekk om det
      gjelder line-height eller padding rundt h1/p i HomeHero.
- [ ] **Legg til del om sikrere vannskaderisiko under SINTEF/DOGA-seksjonen**
      — vagt; krever ny tekst og evt. ny komponent.
- [ ] **Flere kundelogoer** til LogoBanner (Stian må sende).

## 👤 Privatperson

- [ ] **Designet på "Skapt for et stilrent baderom"** — Stian synes
      modellen ser litt kjedelig ut. Krever ny designløsning.
- [ ] **Stillbilde på "Utviklet for minimalt vedlikehold"-video** — bør
      byttes (har `thumbnail-time=14` nå, kanskje annen sekund?).
- [ ] **Bilde av rist-verktøyet som åpner tile insert** — Stian må sende.
- [ ] **Crope Henning-bilde** i "Norsk prisvinnende innovasjon" så han
      ikke ser så liten ut. Bilde:
      `public/images/henning-utendors.webp`. Krever bilderedigering.
- [ ] **Designet på de tre punktene i Innovation-seksjonen** ser rart ut
      ifølge Stian. Forslag: bytte til tre bilder istedenfor ikoner.
      Krever bilder fra Stian.
- [ ] **Flere prosjektbilder + sitater** på /sluttkunde — Stian må sende.

## 🔧 Rørlegger

- [ ] **Bilde på "Bygget for rørleggerens hverdag" — Trinnløs
      høydejustering**: Stian foreslår å bruke bildet av
      monteringsverktøyet fra Total-teknisk. Trenger den fila.
- [ ] **Bilde på "Skrueløs overgang til membran"**: bytt til produktbilde
      av slukoverdel med Apex-mansjett (ekvivalent til klemring-bildet).
      Trenger riktig produktbilde-asset.
- [ ] **Bilde før punktliste på "Slidedrain vs. tradisjonelle løsninger"**
      — Stian synes nåværende ikke ser bra ut. Trenger nytt bilde av
      de to ulike løsningene side-by-side.
- [ ] **Logoer på "Godkjent, lagerført og tilgjengelig"**: SINTEF, BD,
      Norgeflagg + EPD. Trenger SVG/PNG-filer hvis ikke allerede i repo.

## 🏗 Entreprenør (/tilvalg)

- [ ] **Header-bildets størrelse** mot tekst og overskrift til høyre —
      Hopper-status (uklart hva som ønskes; trenger avklaring fra Stian).
- [ ] **"Standardiser byggeprosjektet" bilder**: crop bildene så det er
      mer gulv og mindre vegg. Gjelder alle steder bildet brukes.
      Krever bilderedigering.
- [ ] **"Samme gulvsluk, flere kundevalg"**: produktbildene som det
      skifter til har ulike formater — burde ha samme format og
      maksimeres. Krever konsistent format på alle produktbilder.
- [ ] **"Utvidet tilvalgsperiode"**: trenger to bilder
      (utfordring/løsning). Stian må sende.
- [ ] **"Klar for en mer lønnsom byggeprosess?"**: fikse logoer nederst
      (samme som på rørlegger-CTA). Krever logo-filer.
- [ ] **"Målsatt presisjon og skrueløs montasje"**: skulle lagt inn
      SINTEF-logoen her også. Krever logo-fil.

## 🛠 Installasjon

- [ ] **"Slidedrain Gulvsluk" — videoen må starte i sekund 20** og helst
      ikke vise "Model 1"-teksten siden produktet ikke heter Model 1
      lenger. Henning har kalt alle delene "Model 1" i videoen. Mulig å
      redigere ut, eller spille inn ny video. **Delvis løst:** lagt til
      `?start-time=20&thumbnail-time=20` på iframe-URL, men selve videoen
      sier fortsatt "Model 1".

---

## Generelle observasjoner

- **Asset-blokkerte items**: 13 punkter trenger nye/croppede bilder eller
  logoer fra Stian. Send disse til repo-public/images/ og oppdater
  referansene.
- **Design-vurderinger**: 4 punkter trenger design-iterasjon (kjedelig
  modell på stilrent baderom-seksjonen, 3-punkts-design på Innovation,
  header-bilde på entreprenør, og produktbilde-formatkonsistens).
- **Video-redigering**: Installasjonsfilmen bør redigeres for å fjerne
  "Model 1"-omtaler. Krever ny opptak eller post-produksjon.
