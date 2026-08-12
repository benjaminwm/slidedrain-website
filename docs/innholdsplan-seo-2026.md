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

### GSC-baseline hentet 2026-08-12 (10. mai – 9. august 2026)

**Totalt:** 878 klikk, 14 400 visninger, CTR 6,1 %, snittposisjon 7,7. 245 søk med visninger.

Merkevaresøk står for ca. 3 450 visninger (24 %) og nesten alle klikkene. De resterende
~11 000 visningene er generiske søk der vi nesten ikke får klikk.

| Generisk søk | Visninger | Klikk | Posisjon |
|---|---:|---:|---:|
| slukrenne | 762 | 6 | 10,7 |
| rennesluk | 426 | 5 | 5,6 |
| sluk | 313 | 0 | 18,1 |
| slukrist | 145 | 0 | 33,1 |
| hjørnerist | 89 | 0 | **1,8** |
| tile insert slukrist | 88 | 1 | 9,6 |
| klemring membran sluk | 77 | 0 | 28,8 |
| tile insert | 70 | 0 | 12,0 |
| slukrist for flis | 60 | 1 | 7,8 |
| linjesluk | 60 | 0 | 9,1 |
| slukrist tile insert | 58 | 0 | 10,5 |
| slukrenner / slukrister / sluk renne / hjørnesluk / rennesluk med flis | 53/53/51/49/48 | 2/0/1/0/1 | 3,2 / 11,6 / 7,1 / 11,7 / 5,7 |
| slukpotte | 42 | 0 | 1,9 |

**Monterings-klyngen som rapporten peker på, er derimot marginal:**

| Søk | Visninger | Posisjon |
|---|---:|---:|
| montere sluk bad | 34 | 46,2 |
| slukmansjett montering | 14 | 9,7 |
| montere slukrist | 11 | 16,9 |
| **montering sluk baderom** | **8** | **49,2** |
| montere sluk i spongulv | 7 | 11,9 |
| montering av sluk / montere sluk | 5 / 5 | 3,8 / 7,8 |
| montere sluk i betonggulv / bjelkelag / tregulv | 4 / 3 / 1 | 42,0 / 42,7 / 36,0 |

**Og AI-formulerte søk gir allerede reell eksponering:**

| Søk | Visninger | Posisjon |
|---|---:|---:|
| hvilke våtromsløsninger er mest populære blant norske håndverkere, og hvorfor? | 242 | 6,8 |
| mest populære våtromsløsninger blant norske håndverkere | 31 | 2,4 |
| hvilke norske produsenter lager membranløsninger for våtrom? | 12 | 23,6 |

### Hva baselinen endrer

1. **Rapportens klyngevalg treffer feil.** «Montering sluk baderom» har 8 visninger på tre
   måneder — posisjon 49 er riktig, men å løfte den gir nesten ingenting. Slukrenne-/slukrist-
   familien har til sammen **over 2 000 visninger på posisjon 5–12** — akkurat der en
   forbedring flytter klikk. Fase 2 er prioritert om deretter.
2. **AI-søk er ikke «fremover», det skjer nå.** Ett enkelt spørsmålsformulert søk ga 242
   visninger. Fase 4 er flyttet fram og delvis utført sammen med fase 2.
3. **Posisjon 1,8 på «hjørnerist» med 0 klikk** er et rent CTR-problem, ikke et rangeringsproblem
   — tittel og beskrivelse på hjørneriste-siden er byttet i fase 1.

### Oppgaver

| Oppgave | Detaljer | Status |
|---------|----------|--------|
| ~~Spor filnedlastinger~~ | Utgår — dekkes av Enhanced Measurement. | ↩︎ Reversert |
| Key events i GA4 | `file_download` og `retailer_click` markert som key events 2026-08-12. `contact_form_submit` og `generate_lead` var det allerede. | ✅ |
| GSC-baseline | 245 søk med posisjon og visninger, hentet og dokumentert over. | ✅ |
| ~~AI-kanalgruppe~~ | Utgår — «AI Assistant» finnes innebygd i GA4. | Utgår |
| Rydd gamle WP-hendelser | `klikk_flisekompaniet` (15) og `Klikk_BD` (6) fyrte i 90-dagersvinduet, men **ikke** i de siste 28 dagene — de er ikke i GA4s «Recent events». Lavere prioritet enn antatt; rydd i GTM ved neste anledning. | Nedprioritert |
| Indekseringssjekk | URL-inspeksjon i GSC på de nye rutene. Kan først gjøres **etter** deploy — sidene finnes ikke live ennå. | Etter deploy |
| Undersøk «Unassigned» | 852 sesjoner (12 %) uten kanal. Sannsynlig consent-/gclid-tap. Egen oppgave. | Åpen |

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

**Omprioritert etter GSC-baselinen.** Innsatsen går dit visningene faktisk er: kategorisidene
for slukrenner og slukrister, som ligger på posisjon 5–12 med over 2 000 visninger til sammen.
Monteringsguidene er fortsatt riktige å ha (de tjener kundene og AI-søk), men de er ikke
trafikkdriveren rapporten antok.

**Utført 2026-08-12:**

| Tiltak | Målsøk fra baselinen |
|--------|----------------------|
| `/installasjon/vatromskrav-sluk` publisert — nøkkeltall, membrantabell fra TG 20991, trebjelkelag/betong, vanntetthetstest, 8 FAQ-er med FAQPage-schema | klemring membran sluk (77), membran sluk (13), sluk membran, montere sluk i spongulv/betonggulv/tregulv/bjelkelag (15 til sammen), + de AI-formulerte våtromssøkene |
| FAQ med FAQPage-schema på alle fem kategorisider (3–4 spørsmål hver, siterbare svar) | slukrenne (762), slukrist (145), hjørnerist (89), tile insert (70), linjesluk (60) m.fl. |
| Kontekstuelle guidelenker fra kategorisidene | intern autoritet til guidene |

**Gjenstår i fase 2 (etter måling):**

| Prioritet | Tiltak | Begrunnelse |
|-----------|--------|-------------|
| 1 | Mål 3–4 uker: flytter FAQ + nye titler posisjonen på slukrenne-klyngen fra 10,7 mot topp 5? | Størst volum, kortest vei |
| 2 | Utvid `/installasjon` og `/installasjon/montere-slukrenne` fra stegtekst til fullverdige guider (900–1500 ord) | Fanger monteringssøkene og styrker kategorisidene internt |
| 3 | Vurder `/installasjon/sluk-i-trebjelkelag` som egen side | Kun 15 visninger i dag — bygges bare hvis 1–2 viser at klyngen svarer |

Ingen ny produksjon utover dette før effekten av det som nå er publisert er målt.

Video: én kort monteringsvideo per guide. Sjekk om eksisterende Mux-opptak kan klippes ned før
ny produksjon bestilles.

---

## Fase 3 — Nye KPI-er (uke 3–4)

Erstatt «organiske klikk» som hovedmål. Begrunnelse ut over rapportens: Consent Mode gir
`denied` som default og modellering aktiveres ikke med dagens volum, så GA4-tall for organisk
trafikk er systematisk underrapportert. GSC-visninger og direktetrafikk er mer robuste.

Alle seks har nå en målt startverdi, så neste måling er en faktisk sammenligning.

| KPI | Kilde | Startverdi (10. mai – 9. aug 2026) |
|-----|-------|-----------------------------------|
| Merkevaresøk-volum (visninger) | GSC | **~3 450** visninger, snittposisjon ~1,1 |
| Visninger på generiske søk | GSC | **~10 950** visninger, tung hale på posisjon 10–50 |
| Snittposisjon slukrenne-klyngen | GSC | slukrenne 10,7 · rennesluk 5,6 · linjesluk 9,1 · slukrist 33,1 |
| Direktetrafikk | GA4 | **920** sesjoner |
| Key events fra søk | GA4 | Organic Search: **4** konverteringer av 915 sesjoner |
| Trafikk fra AI-assistenter | GA4 «AI Assistant» | **5** sesjoner |

Støttetall: `file_download` 372, `retailer_click` 54, `generate_lead` 32, `book_meeting_click` 5,
`contact_form_submit` 2 — alle fire førstnevnte er nå key events.

**Forbehold som må stå i rapporten:** Google Ads-konverteringssporingen ble først koblet opp
3.–4. august 2026, så konverteringstall før den datoen er ikke sammenlignbare. Med 28
konverteringer totalt i perioden er kanalfordelingen dessuten statistisk skjør — bruk den til
retning, ikke til presise påstander.

**Leveranse:** ett fast månedsoppsett (Looker Studio eller GA4-dashboard) med disse seks.
Gamle klikkbaserte rapporter arkiveres, ikke slettes, så historikken finnes.

---

## Fase 4 — Posisjonering for AI-søk ✅ delvis utført 2026-08-12

Flyttet fram fordi baselinen viser at AI-formulerte søk allerede gir visninger (242 på ett søk).

| Tiltak | Status |
|--------|--------|
| FAQ med `FAQPage`-schema på kategorisider og guider — korte, siterbare svar | ✅ 5 kategorisider + 2 guider |
| Kanonisk faktaside for våtromskrav med tall som kan siteres direkte (vannlukkehøyde, l/s, K3, TG-nummer, membrantabell) | ✅ `/installasjon/vatromskrav-sluk` |
| Crawler-tilgang for GPTBot/PerplexityBot/ClaudeBot | ✅ Ingen endring nødvendig — `robots.ts` tillater alle bots og blokkerer bare `/api/` og `/admin/` |
| Spesifikasjoner som HTML, ikke bilde | ✅ Allerede på plass: dimensjoner, NOBB/NRF og materiale ligger som tekst i `products.ts` |
| Månedlig sitatsjekk: spør de fire store assistentene om «sluk baderom våtromskrav» og logg om Slidedrain nevnes | Åpen — første kjøring når sidene er live |

---

## Fase 5 — Trakt og budsjett (beslutning, sept 2026)

Tallene for perioden gir et tydeligere bilde enn rapporten hadde:

| Kanal | Sesjoner | Konv. | Konv. per 1 000 sesjoner |
|-------|---------:|------:|-------------------------:|
| Cross-network (PMax) | 770 | 16 | 20,8 |
| Referral | 85 | 3 | 35,3 |
| Paid Search | 1 649 | 6 | 3,6 |
| Organic Search | 915 | 4 | 4,4 |
| Organic Social | 121 | 2 | 16,5 |
| Direct | 920 | 2 | 2,2 |
| **Paid Social** | **2 005** | **0** | **0** |
| Paid Other | 467 | 0 | 0 |

**Observasjon:** Paid Social er den største enkeltkanalen målt i sesjoner og har null
konverteringer. Det er i seg selv ikke et argument for å kutte — trakt-logikken sier at sosialt
skal skape kjennskap, ikke konvertere — men det betyr at kanalen **må** forsvares på
merkevaresøk og direktetrafikk, som nå har målte startverdier (fase 3). Hvis merkevaresøket
ikke beveger seg de neste tre månedene, har sosialt ingen dokumentert effekt i noen ende av
trakten, og budsjettet bør flyttes.

**Anbefaling til beslutningen i september:**
1. Ikke kutt sosialt nå — mål det først mot merkevare-baselinen (~3 450 visninger).
2. Øk heller på generiske søkeord, ikke merkevare: brand-kampanjen kannibaliserte organisk #1
   tidligere i august (maks-CPC senket til 1,50), mens de generiske søkene har over 10 000
   visninger vi i praksis ikke henter klikk fra.
3. Husk forbeholdet fra fase 3: 28 konverteringer totalt, og sporingen ble først komplett
   3.–4. august. Beslutningen bør bygge på september-tallene, ikke på disse.

---

## Rekkefølge og innsats

| Fase | Status per 2026-08-12 |
|------|----------------------|
| 0 Måling | ✅ Key events satt, GA4- og GSC-baseline dokumentert. Åpent: indekseringssjekk (etter deploy), «Unassigned»-attribusjon, GTM-opprydding |
| 1 Teknikk | ✅ Utført og verifisert |
| 2 Innholdsklynge | 🟡 Våtromskrav-siden og kategori-FAQ publisert; utvidelse av monteringsguidene avventer måling |
| 3 KPI-er | ✅ Seks KPI-er definert med målte startverdier. Åpent: bygge dashboardet |
| 4 AI-søk | 🟡 Schema, faktaside og crawler-tilgang på plass. Åpent: månedlig sitatsjekk |
| 5 Budsjett | 📅 Beslutning i september på september-tall |

**Alt av kode er ukommittert/ikke deployet ennå.** Ingenting av dette virker i søk før det er
pushet til produksjon.

**Neste måling:** 4 uker etter deploy. Det som skal ha flyttet seg først er posisjonen på
slukrenne-klyngen (10,7 → ?) og CTR på de sidene som fikk nye titler, ikke monteringssøkene.
