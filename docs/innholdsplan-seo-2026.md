# Innholds- og synlighetsplan — Slidedrain (aug 2026 →)

Operasjonalisering av anbefalingene i analyserapporten («Neste 1–3 måneder» + «Fremover»).
Forankret i faktisk kodebase per 2026-08-12 (commit `37e2b0a`).

---

## Diagnose: hvorfor innholdet ikke rangerer

Anbefaling 1 sier «finn ut hvorfor artiklene ikke rangerer». Kartlegging av koden gir
fire konkrete årsaker — ingen av dem krever mer innhold for å løses:

| # | Funn | Hvor | Konsekvens |
|---|------|------|-----------|
| 1 | **Innhold i inaktive faner rendres ikke i HTML.** `/installasjon` er én klientkomponent med tre faner (`gulvsluk`, `renner`, `faq`) og `activeTab === "…" && (…)`. Bare `gulvsluk` er i server-HTML. | `src/app/installasjon/InstallasjonContent.tsx:244,501,756` | Alt om slukrenne-montering og hele FAQ-en er **usynlig for Google og AI-crawlere**. Dette alene forklarer manglende rangering på «montering slukrenne» og våtromsspørsmål. |
| 2 | **Tre søkeintensjoner på én URL.** Gulvsluk-montering, slukrenne-montering og FAQ deler `/installasjon`, én `<h1>`, én title. | samme fil | Ingen side matcher «montering sluk baderom» presist → side 4–5. |
| 3 | **Ingen kontekstuell intern lenking.** Meny og footer lenker til `/installasjon` og `/kundehistorier`, men forsidens innhold lenket kun til `/produkter`, og alle produktsider pekte til den generelle `/installasjon` uansett kategori. | `src/components/home/*`, `ProductDetail.tsx:247` | Meny-/footerlenker teller lite; innholdssidene fikk nesten ingen intern autoritet fra brødteksten. |
| 4 | **Titler er merkevare-først.** «Slidedrain // Installasjonsveiledning» — søkefrasen kommer aldri først. | `src/app/*/page.tsx` | Svakere relevanssignal + dårligere CTR på generiske søk. |

Tillegg: `sitemap.ts` setter `lastModified: new Date()` på **alle** URL-er ved hver build
(`src/app/sitemap.ts`) — alle sider hevder å være endret i dag, så ferskhetssignalet er verdiløst.
Strukturerte data finnes for Organization/Product/BreadcrumbList (`src/lib/schema.ts`), men
**ikke** HowTo, FAQPage, VideoObject eller Article.

Målesituasjonen: PDF-nedlastinger er vanlige `<a href>` uten `trackEvent` (`InstallasjonContent.tsx:263–318, 514–547`)
— vi kan altså **ikke** dokumentere at «monteringsguidene i PDF presterer» i GA4 i dag.
`retailer_click` fyrer derimot allerede (`src/components/produkter/ProductDetail.tsx:150,188`),
så «finn forhandler» som key event er ren GA4-konfigurasjon, ikke kodearbeid.

**Konsekvens for rekkefølgen:** måling og teknikk først (fase 0–1), deretter innhold (fase 2).
Å produsere nye guider før fane-problemet er løst betyr å publisere innhold Google ikke ser.

---

## Fase 0 — Måling på plass (uke 1, ~4 t)

Uten dette kan ingen av de andre fasene evalueres.

### To antakelser som falt da dataene ble hentet (2026-08-12)

1. **PDF-nedlastinger var ikke usporet.** GA4s Enhanced Measurement fyrer allerede
   `file_download` automatisk — **372 hendelser siste 90 dager**, med filnavn, filtype,
   lenketekst og URL. Egen dataLayer-hendelse med samme navn ble derfor reversert; den ville
   gitt dobbelttelling. Nedlastinger skal markeres som key event på den innebygde hendelsen.
2. **AI-trafikk trenger ingen egendefinert kanalgruppe.** GA4 har nå «AI Assistant» som
   innebygd kanal — 5 sesjoner siste 90 dager. Ingen konfigurasjon nødvendig, bare rapportering.

### Baseline hentet 2026-08-12 (GA4, siste 90 dager)

| Kanal | Sesjoner | Engasjerte | Konverteringer |
|-------|---------:|-----------:|---------------:|
| Paid Social | 2 005 | 660 | 0 |
| Paid Search | 1 649 | 1 046 | 6 |
| Direct | 920 | 437 | 2 |
| Organic Search | 915 | 475 | 4 |
| Unassigned | 852 | 184 | 0 |
| Cross-network | 770 | 275 | 16 |
| Paid Other | 467 | 225 | 0 |
| Organic Social | 121 | 53 | 2 |
| Referral | 85 | 52 | 3 |
| AI Assistant | 5 | 1 | 0 |

Hendelser samme periode: `file_download` 372, `click` 251, `video_progress` 62,
`retailer_click` 54, `generate_lead` 32 (allerede key event), `video_start` 27,
`form_start` 11, `book_meeting_click` 5, `contact_form_submit` 2.
Gamle WordPress-hendelser fyrer fortsatt: `klikk_flisekompaniet` 15, `Klikk_BD` 6.

To ting å merke seg: **Unassigned på 852 sesjoner** (12 % av trafikken) er attribusjonstap
som bør undersøkes, og **Paid Social har 2 005 sesjoner og null konverteringer** — som
underbygger trakt-logikken i fase 5 (sosialt skaper kjennskap, det konverterer ikke direkte).

### Oppgaver

| Oppgave | Detaljer | Sted | Status |
|---------|----------|------|--------|
| ~~Spor filnedlastinger~~ | Utgår — dekkes av Enhanced Measurement (se over). | — | Reversert |
| Key events i GA4 | Marker `retailer_click`, `file_download` og `contact_form_submit` som key events (`generate_lead` er det allerede). | GA4 | |
| Rydd gamle WP-hendelser | `klikk_flisekompaniet` og `Klikk_BD` fyrer fortsatt fra gamle GTM-triggere. | GTM-PHPZ59V | |
| GSC-baseline | Query- og sidedata siste 3 mnd for «montering sluk baderom», «sluk baderom», «våtromskrav sluk», «slukrenne montering», TEK17-varianter. Krever at GSC kobles til Supermetrics. | GSC | |
| Indekseringssjekk | URL-inspeksjon på `/installasjon` og de tre kundehistoriene. | GSC | |
| ~~AI-kanalgruppe~~ | Utgår — «AI Assistant» finnes innebygd i GA4. | — | Utgår |

**Leveranse:** baseline (over) + verifiserte key events.

---

## Fase 1 — Tekniske quick wins ✅ utført 2026-08-12

| Oppgave | Status |
|---------|--------|
| **Rendre alt fane-innhold i HTML.** `/installasjon` er delt i tre server-rendrede ruter; fane-komponenten er fjernet. | ✅ `/installasjon`, `/installasjon/montere-slukrenne`, `/installasjon/ofte-stilte-sporsmal`. Verifisert i prerendret HTML. |
| Nye titler med søkefrase først, merkevare bak. | ✅ Forside, produktoversikt, 5 kategorisider, produktsider, segmentsider, kundehistorier, guider. `Slidedrain // X` → `X \| Slidedrain`. |
| Intern lenking: kontekstuell seksjon på forsiden, kategori-spesifikke guidelenker fra produkt- og kategorisider, kryss-lenker fra guidene til produkt/kundehistorier. | ✅ `home/GuideLinks.tsx`, `ProductDetail.guideForCategory()`, `CategoryLanding`, `GuideCrossLinks`. |
| `HowTo`, `FAQPage`, `VideoObject`, `Article` i `src/lib/schema.ts`. | ✅ HowTo på begge monteringsguidene (steg-ankre), FAQPage på FAQ-siden, VideoObject på `/installasjon`, Article + breadcrumbs på de tre kundehistoriene. |
| Ekte `lastModified` i sitemap. | ✅ `src/data/pageUpdated.ts` — datoene må oppdateres manuelt ved innholdsendring. |
| ~~Sporing av PDF-nedlastinger~~ | ↩︎ Reversert 2026-08-12: GA4s Enhanced Measurement fyrer allerede `file_download`. `DownloadLink` beholdes som ren markup-komponent. |

**URL-valg:** guideklyngen legges under `/installasjon/`, ikke `/guider/`. `/installasjon` er
QR-kodenes mål (trykt på produktene) og allerede indeksert — å flytte den ville kastet bort
eksisterende autoritet, og to parallelle guide-trær ville konkurrert om samme søk.
Fase 2 utvider derfor `/installasjon/`-treet i stedet for å opprette `/guider/`.

**Gjenstår i fase 1:** ingenting i kode. Endringene er ukommitterte i `~/slidedrain-website`.

---

## Fase 2 — «montering sluk baderom»-klyngen (uke 2–6)

Utvider `/installasjon/`-treet fra fase 1. Hver side: 900–1500 ord, steg-for-steg med
eksisterende bilder, video, HowTo + FAQPage-schema, CTA til produkt og forhandler.

| Prioritet | URL | Primærsøk | Status / kilde |
|-----------|-----|-----------|----------------|
| 1 | `/installasjon` | montering sluk baderom, montere gulvsluk | Siden finnes (fase 1) — skal utvides fra stegtekst til fullverdig guide |
| 2 | `/installasjon/vatromskrav-sluk` | våtromskrav sluk, TEK17 sluk, SINTEF teknisk godkjenning sluk | Ny side. Kilde: TG-20991-PDF, produktsertifikat, FAQ-svar |
| 3 | `/installasjon/montere-slukrenne` | montering slukrenne, slukrenne baderom | Siden finnes (fase 1) — utvides |
| 4 | `/installasjon/sluk-i-trebjelkelag` | sluk trebjelkelag, sluk i tregulv | Ny side. Kilde: steg 1 + Muribø-kundehistorien |
| 5 | `/installasjon/bytte-sluk-baderom` | bytte sluk, oppgradere gammelt sluk | Ny side. Kilde: 40 mm høydejustering / forhøyningsring |

Rekkefølge: utvid 1 og publiser 2 først, mål 3–4 uker i GSC, og bruk resultatet til å avgjøre om
3–5 skal skrives som planlagt eller justeres. Ingen ny produksjon utover dette før 1–2 er målt
— i tråd med anbefalingen om å optimalisere før man produserer mer.

Video: én kort monteringsvideo per guide. Sjekk om eksisterende Mux-opptak kan klippes ned før
ny produksjon bestilles.

---

## Fase 3 — Nye KPI-er (uke 3–4)

Erstatt «organiske klikk» som hovedmål. Begrunnelse ut over rapportens: Consent Mode gir
`denied` som default og modellering aktiveres ikke med dagens volum, så GA4-tall for organisk
trafikk er systematisk underrapportert. GSC-visninger og direktetrafikk er mer robuste.

| KPI | Kilde | Hva den fanger |
|-----|-------|----------------|
| Merkevaresøk-volum (visninger på «slidedrain»-varianter) | GSC | Effekt av sosialt/kjennskapsarbeid |
| Visninger + snittposisjon på generiske søk (ikke-merkevare) | GSC | Om innholdssatsingen flytter seg |
| Direktetrafikk (sesjoner) | GA4 | Kjennskap som ikke går via søk |
| Key events fra søk: `contact_form_submit`, `generate_lead`, `retailer_click`, `file_download` | GA4 | Faktisk verdi, ikke klikk |
| Nedlastinger av monteringsanvisning | GA4 `file_download` | Dokumenterer PDF-etterspørselen guidene skal fange |
| Trafikk fra AI-assistenter | GA4 kanalgruppe | Baseline for fase 4 |

**Leveranse:** ett fast månedsoppsett (Looker Studio eller GA4-dashboard) med disse seks.
Gamle klikkbaserte rapporter arkiveres, ikke slettes, så historikken finnes.

---

## Fase 4 — Posisjonering for AI-søk (løpende, fra uke 4)

Bygger direkte på fase 1–2; lite egenarbeid hvis schema og guider er gjort riktig.

- Fullstendige spesifikasjonstabeller på produktsidene (mål, NOBB/NRF, materiale, godkjenninger) som HTML, ikke bilde.
- FAQ-blokk med `FAQPage`-schema på guider, kategorisider og produktsider — spørsmål formulert som folk faktisk spør.
- Én kanonisk «faktaside» per tema (våtromskrav, høydejustering, membranovergang) som AI-assistenter kan sitere.
- Sørg for at crawlere ikke blokkeres: `robots.ts` skal ikke stenge ut GPTBot/PerplexityBot/ClaudeBot om vi ønsker sitering.
- Månedlig sjekk: spør de fire store assistentene om «sluk baderom våtromskrav», logg om Slidedrain nevnes og med hvilken kilde.

---

## Fase 5 — Trakt og budsjett (beslutning, sept 2026)

- Behold sosialt som kjennskapsdriver — måles nå på merkevaresøk + direktetrafikk (fase 3), ikke på klikk.
- Vurdering av budsjettflytting mot betalt søk tas etter én full måned med nye KPI-er, slik at
  «betalt søk konverterer like godt som organisk» kan vises i tall før pengene flyttes.
- Merk: brand-kampanjen kannibaliserte organisk #1 tidligere i august (maks-CPC senket til 1,50).
  En budsjettøkning på søk bør derfor gå til **generiske** søkeord, ikke merkevare.

---

## Rekkefølge og innsats

| Fase | Når | Innsats | Blokkerer |
|------|-----|---------|-----------|
| 0 Måling | uke 1 | ~4 t | evaluering av alt annet |
| 1 Teknikk | uke 1–2 | ~1 dag | fase 2 (ellers publiserer vi usynlig innhold) |
| 2 Innholdsklynge | uke 2–6 | 2–3 t per guide + video | — |
| 3 KPI-er | uke 3–4 | ~3 t | fase 5 |
| 4 AI-søk | fra uke 4, løpende | ~2 t/mnd | — |
| 5 Budsjett | sept | beslutning | — |

Første måling av effekt: 4 uker etter at fase 1 er deployet (teknisk løft alene bør flytte
posisjon på eksisterende innhold), deretter ny måling 4 uker etter guide 1–2.
