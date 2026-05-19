# Slidedrain — Launch & Tracking Setup

Trinn-for-trinn guide for å koble opp GTM, GA4, Meta Ads, Google Ads
og Resend før lansering. Følger best practice for GDPR + Consent
Mode v2.

---

## 1. Env-variabler i Vercel

Gå til **Vercel → slidedrain-website → Settings → Environment Variables**
og legg inn:

| Variabel | Verdi | Scope |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://slidedrain.no` | Production, Preview |
| `RESEND_API_KEY` | `re_...` (fra resend.com) | Production, Preview |
| `RESEND_FROM_EMAIL` | `Slidedrain <kontakt@slidedrain.no>` | Production, Preview |
| `RESEND_INTERNAL_NOTIFY_EMAIL` | `kontakt@slidedrain.no` | Production, Preview |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` | Production, Preview |
| `NEXT_PUBLIC_META_PIXEL_ID` | (la stå tom — bruk GTM) | — |

Etter at variablene er lagt inn må du **redeploy** (Settings → Deployments → Redeploy)
så de blir aktive.

---

## 2. Resend — verifiser domenet

1. Logg inn på [resend.com](https://resend.com).
2. **Domains → Add Domain → `slidedrain.no`**.
3. Legg DNS-postene Resend gir deg (DKIM + SPF + return-path) i
   domeneleverandørens DNS-panel.
4. Vent på "Verified"-status (kan ta 30 min til noen timer).
5. Bruk `kontakt@slidedrain.no` eller `kontakt@slidedrain.no` som
   `RESEND_FROM_EMAIL`.

**Endpoints som sender e-post:**
- `POST /api/contact` — sender intern notif + bekreftelse til kunde
- `POST /api/lead-magnet` — sender Prosjektmappe-PDF

Begge har honeypot og enkel validering.

---

## 3. Google Tag Manager — opprett container

1. [tagmanager.google.com](https://tagmanager.google.com) → **Create Account**:
   - Account: `Slidedrain AS`
   - Container: `slidedrain.no`
   - Target: **Web**
2. Kopier `GTM-XXXXXXX`-ID-en til `NEXT_PUBLIC_GTM_ID` i Vercel.

### 🚀 Hurtigvei: Importer ferdig oppsett

Du kan importere hele oppsettet (variabler, triggere, alle 9 tags
med consent-gating) direkte:

1. I GTM: **Admin → Container → Import Container**
2. Velg `gtm-import.json` fra repoet (eller [last ned fra GitHub](gtm-import.json))
3. **Workspace**: Default Workspace
4. **Import option**: Merge → Overwrite conflicting tags, triggers, and variables
5. Klikk **Confirm**

Etter import, fyll inn faktiske verdier i disse 6 Constants-variablene:

| Variabel | Verdi (eksempel) |
|---|---|
| `Const — GA4 Measurement ID` | `G-XXXXXXXXXX` |
| `Const — Meta Pixel ID` | `1234567890123456` |
| `Const — Ads Conversion ID Contact` | `AW-1234567890` |
| `Const — Ads Conversion Label Contact` | `aBcDeFgHiJkLmNoP` |
| `Const — Ads Conversion ID Lead` | `AW-1234567890` |
| `Const — Ads Conversion Label Lead` | `qRsTuVwXyZ123456` |

Trykk så **Submit → Publish**. Da er du klar.

Resten av denne seksjonen beskriver hva som er i import-filen (for
referanse om du vil bygge manuelt eller endre noe).

### 3.1 Variabler i GTM

Lag disse **Built-in Variables**:
- Page Path, Page URL, Page Title, Referrer
- Click Element, Click Classes, Click ID, Click URL
- Form Element, Form Classes, Form ID

### 3.2 Triggere

Lag disse triggerene:
- **Initialization — All Pages** (Tag Initialization-trigger som matcher Initialization)
- **All Pages — Consent: analytics_storage granted**
- **All Pages — Consent: ad_storage granted**
- **DataLayer: contact_form_submit**
  (Trigger Type: Custom Event, Event name: `contact_form_submit`)
- **DataLayer: generate_lead**
  (Custom Event: `generate_lead`)
- **DataLayer: conversion**
  (Custom Event: `conversion`)

### 3.3 Tags

| Tag | Type | Trigger | Krav-til-consent |
|---|---|---|---|
| GA4 Configuration | Google Analytics: GA4 Configuration | All Pages — analytics granted | analytics_storage |
| GA4 — contact_form_submit | GA4 Event (`contact_form_submit`) | DataLayer: contact_form_submit | analytics_storage |
| GA4 — generate_lead | GA4 Event (`generate_lead`) | DataLayer: generate_lead | analytics_storage |
| Meta Pixel base | Custom HTML | All Pages — ad granted | ad_storage |
| Meta Pixel — Lead event | Custom HTML (`fbq('track', 'Lead')`) | DataLayer: generate_lead | ad_storage |
| Meta Pixel — Contact event | Custom HTML (`fbq('track', 'Contact')`) | DataLayer: contact_form_submit | ad_storage |
| Google Ads — Conversion Linker | Conversion Linker | All Pages — ad granted | ad_storage |
| Google Ads — Lead Conversion | Google Ads Conversion Tracking | DataLayer: generate_lead | ad_storage |
| Google Ads — Contact Conversion | Google Ads Conversion Tracking | DataLayer: contact_form_submit | ad_storage |

For hver tag som krever consent, gå inn på taggens **Advanced
Settings → Consent Settings → Require additional consent for tag
to fire** og hak av den relevante kategorien.

### 3.4 GA4 setup

1. [analytics.google.com](https://analytics.google.com) → **Create Property** med navn `Slidedrain`.
2. Stream type **Web** → URL `https://slidedrain.no`.
3. Kopier Measurement ID (`G-XXXXXXXXXX`).
4. I GTM: GA4 Configuration tag → Measurement ID = `G-XXXXXXXXXX`.

Konverteringer i GA4: Gå til **Admin → Events → Conversions** og merk
`contact_form_submit` og `generate_lead` som conversion events.

### 3.5 Meta Pixel setup

1. [business.facebook.com/events_manager](https://business.facebook.com/events_manager).
2. **Connect data sources → Web → Add Pixel**, navn `Slidedrain Web`.
3. Kopier Pixel ID.
4. I GTM: Custom HTML tag med:
   ```html
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'YOUR_PIXEL_ID');
   fbq('track', 'PageView');
   </script>
   ```

### 3.6 Google Ads setup

1. [ads.google.com](https://ads.google.com) → **Tools → Conversions → New conversion → Website**.
2. Lag minst to konverteringer:
   - **Slidedrain — Contact** (Category: Contact, Value: 100, Count: One)
   - **Slidedrain — Lead Magnet** (Category: Submit lead form, Value: 50)
3. For hver, kopier **Conversion ID** og **Conversion Label**.
4. I GTM: Google Ads Conversion Tracking tag → fyll inn ID og Label.

---

## 3.7 Slack — notifikasjon på kontaktskjema

Når noen sender inn kontaktskjemaet får salgsteamet en melding i
Slack med en **"✋ Jeg følger opp"**-knapp. Når noen klikker
knappen, oppdateres meldingen til **"✅ Følges opp av @navn"** så
resten av teamet ser hvem som har tatt den.

### 3.7.1 Opprett Slack app

1. Gå til [api.slack.com/apps](https://api.slack.com/apps) → **Create New App** → **From scratch**.
   - Name: `Slidedrain Notifications`
   - Workspace: velg Slidedrain-workspacet
2. **Incoming Webhooks** → toggle **On** → **Add New Webhook to Workspace** → velg kanal (f.eks. `#salg-henvendelser`) → **Allow**.
3. Kopier webhook URL-en (`https://hooks.slack.com/services/...`).
4. **Interactivity & Shortcuts** → toggle **On**.
   - **Request URL**: `https://slidedrain.no/api/slack/interactive`
   - **Save Changes**.
5. **Basic Information** → scroll til **App Credentials** → kopier **Signing Secret**.

### 3.7.2 Legg inn env-vars i Vercel

| Variabel | Verdi | Scope |
|---|---|---|
| `SLACK_WEBHOOK_URL` | `https://hooks.slack.com/services/...` | Production, Preview |
| `SLACK_SIGNING_SECRET` | (fra Basic Information) | Production, Preview |

Redeploy etter at de er lagt inn.

### 3.7.3 Test

Send inn kontaktskjemaet på `/`. Meldingen skal poppe opp i kanalen
innen sekunder. Trykk **"Jeg følger opp"** — meldingen oppdaterer
seg til å vise hvem som klaimet den.

---

## 4. Consent Mode v2

Koden setter default = **denied** for alle ikke-essential kategorier
før noen tags lastes (`src/components/analytics/ConsentMode.tsx`).

Når brukeren godtar i cookie-banneret:
- `localStorage.cookie-consent` + `sd-consent` cookie skrives
- `gtag('consent', 'update', ...)` pushes til dataLayer
- `consent_update` event pushes til dataLayer
- Custom event `sd-consent-update` fires (for direkte-Meta-Pixel)

Du kan teste flowen via [GTM Preview Mode](https://tagmanager.google.com/?_ga=2&authuser=0)
— sjekk at:
- `Initialization` fires uten consent
- Tags som krever consent IKKE fires før samtykke
- `Consent — Update` event fires etter samtykke
- Riktige tags fires etter samtykke

---

## 5. Pre-launch sjekkliste

- [ ] DNS for slidedrain.no peker på Vercel
- [ ] SSL aktiv (Vercel ordner dette automatisk)
- [ ] Resend-domene verifisert
- [ ] Alle env vars i Vercel
- [ ] GTM container publisert (ikke bare lagret som "preview")
- [ ] GA4 mottar test-events fra GTM Preview
- [ ] Meta Pixel viser "Active" i Events Manager
- [ ] Google Ads conversions er "Recording"
- [ ] Test kontaktskjema (`#kontakt`) → bekreft at både intern og kunde-mail kommer
- [ ] Test cookie-banner: avvis først, sjekk at ingen tracking-cookies settes
- [ ] `/personvern` og `/cookies` lenket fra footer
- [ ] OG metadata (open graph image) sjekket via [opengraph.xyz](https://www.opengraph.xyz)

---

## 6. Etter lansering

- **Sjekk Real-Time** i GA4 første dagen for å bekrefte sporing.
- **Sjekk Events Manager → Test Events** i Meta for å se Live-events.
- **Sjekk Google Ads Conversions → Status** etter 24 timer.
- **Resend dashboard** → sjekk delivery rate på e-poster.
