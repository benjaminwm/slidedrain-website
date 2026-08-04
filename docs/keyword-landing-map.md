# Søkeord → landingsside-map

Generert 2026-08-03 som del av Google Ads-opprydningen. Alle URL-er under
forutsetter at kategorisidene (`/produkter/gulvsluk` m.fl.) er deployet —
**ikke importer `google-ads-bulk.csv` før dette er live i prod.**

Kampanje: `SØK - Sluk generell + relaterte ord`

## Anbefalt annonsegruppestruktur

Dagens ene annonsegruppe splittes i fem tematiske grupper. Da kan hver
gruppe ha egen annonsetekst med søkeordet i overskriften og én relevant
landingsside — det er dette som løfter «forventet CTR» og
«landingssideopplevelse» i kvalitetsscoren.

| Annonsegruppe | Intensjon | Landingsside |
|---|---|---|
| Gulvsluk bad | Sluttbruker: pusser opp bad, søker sluk til dusj/bad/våtrom | `/produkter/gulvsluk` |
| Slukrenner | Blandet: linjesluk/renne, både fag og sluttbruker | `/produkter/slukrenner` |
| Tile Insert | Fag: flislegger/rørlegger som kjenner terminologien | `/produkter/slukrenner-tile-insert` |
| Slukrister | Blandet: leter etter rist/synlig del | `/produkter/slukrister` |
| Hjørnesluk | Sluttbruker: sluk i hjørnet av dusjen | `/produkter/hjornerister` |

## Søkeord for søkeord

| Søkeord | QS i dag | Annonsegruppe | Anbefalt URL | Hvorfor |
|---|---|---|---|---|
| slidedrain | 10 | (røres ikke) | `https://slidedrain.no/` | Brand-søk mot forsiden fungerer perfekt — ingen endring. |
| gulvsluk | 3 | Gulvsluk bad | `https://slidedrain.no/produkter/gulvsluk` | Kjernekategorien: siden handler eksplisitt om gulvsluk-systemet (potte + overdel) med SINTEF/TEK17-innhold. |
| dusjsluk | 1 | Gulvsluk bad | `https://slidedrain.no/produkter/gulvsluk` | Sluttbruker-ord for samme produkt; hero-teksten nevner bad, dusj og våtrom eksplisitt. |
| sluk dusj | 5 | Gulvsluk bad | `https://slidedrain.no/produkter/gulvsluk` | Samme intensjon som dusjsluk. |
| sluk bad | 5 | Gulvsluk bad | `https://slidedrain.no/produkter/gulvsluk` | Samme intensjon, bad-varianten. |
| baderom sluk | 5 | Gulvsluk bad | `https://slidedrain.no/produkter/gulvsluk` | Samme intensjon. |
| våtrom sluk | 3 | Gulvsluk bad | `https://slidedrain.no/produkter/gulvsluk` | Våtrom nevnes i H1/ingress; TEK17-referansen treffer den mer faglige varianten av søket. |
| slukrenne | 5 | Slukrenner | `https://slidedrain.no/produkter/slukrenner` | Kategoriside med alle 19 slukrennene, for bred for én produktside og for smal for hele /produkter. |
| linjesluk | 5 | Slukrenner | `https://slidedrain.no/produkter/slukrenner` | Synonym — brukes i ingressen («også kalt linjesluk eller rennesluk»). |
| rennesluk | 5 | Slukrenner | `https://slidedrain.no/produkter/slukrenner` | Synonym, samme side. |
| designsluk | 4 | Slukrenner | `https://slidedrain.no/produkter/slukrenner` | Design-intensjon dekkes av Tile Insert-avsnittet på slukrenne-siden. |
| tile insert | 5 | Tile Insert | `https://slidedrain.no/produkter/slukrenner-tile-insert` | Fagterm med egen side: 17 Tile Insert-produkter, terminologien forklart i hero. |
| slukrist | 3 | Slukrister | `https://slidedrain.no/produkter/slukrister` | Egen kategoriside med alle fem ristene i begge finisher. |
| hjørnesluk | 3 | Hjørnesluk | `https://slidedrain.no/produkter/hjornerister` | Siden åpner med «Ser du etter hjørnesluk?» og viser begge hjørneristene. |

## Match type

CSV-en bruker **Phrase** for alle generiske søkeord. Det gir kontroll på
hvilke varianter som utløser annonsen uten å strupe volumet slik Exact
ville gjort med dagens lave klikktall. Juster gjerne per søkeord i Editor
etter import hvis søketermrapporten tilsier noe annet.

## Viktig ved import

1. Importer `docs/google-ads-bulk.csv` i Google Ads Editor via
   **Account → Import → From file**.
2. Editor oppretter de nye annonsegruppene med søkeord og final URLs.
   **De gamle søkeordene i den eksisterende gruppen må pauses manuelt**
   — import flytter ikke søkeord, den legger til nye.
3. Hver ny annonsegruppe trenger egne annonser (RSA) før den kan levere.
   Gjenbruk dagens annonsetekster som utgangspunkt, men sett søkeordet i
   Headline 1 og pek annonsens final URL til gruppens landingsside.
4. Brand-gruppen med `slidedrain` røres ikke.
