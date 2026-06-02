# Eurofabbro Original Site — Content Extraction

> **Source bundle:** `C:\Users\vishu\.local\share\opencode\tool-output\tool_e84d45b2e001JAT2wRULcHvCwZ` (757,737 bytes, minified React SPA build)
> **Live site:** https://eurofabbro-v1.base44.app
> **Method:** Bundled strings extracted via `uD={...}` (Italian) and `dD={...}` (English) content objects + direct reads of the page component source for layout/structure/image wiring.
> **Note on text encoding:** Original bundle uses Latin-1 with `Â`, `Ã`, `â??` for `à`, `è`, `è`, `Ã¨` etc. The content below is **decoded to proper UTF-8** (so "PerchÃ©" → "Perché", "piÃ¹" → "più", "qualitÃ " → "qualità", "Â·" → "·").

---

## 0. Contact & Site Info

| Field | Value |
|---|---|
| Company name | **Ferioli Sergio SRL** |
| Brand name | **Eurofabbro** |
| Phone (landline) | **051 985300** |
| Mobile / WhatsApp | **347 4287776** |
| Email | **eurofabbro@eurofabbro.com** |
| Address | **Via Galileo Galilei 140, 40014 Palata Pepoli di Crevalcore (BO)** |
| P.IVA / VAT | **02128491202** |
| Founded | **1977** (49 years as of 2026) |
| Certifications | **Istituto Giordano · CE** (60.000 aperture test) — "primi in Italia" per cancelli manuali e automatici |
| Operative area | Bologna, Modena, Ferrara (Crevalcore is the base) |
| Languages | Italian (default) + English (toggle `eurofabbro_lang` localStorage) |
| Logo URL | `https://media.base44.com/images/public/user_698f5cc1774892bec8590553/15e9183dc_logo.png` |
| Social | `https://facebook.com`, `https://instagram.com` (generic links in footer — not resolved to specific accounts in the bundle) |

---

## 1. Navigation

### Top-level items + submenus

The nav is defined inside the `Header` component (`fD`) and built from the Italian `uD.nav.*` keys. Desktop layout (`hidden lg:flex`) and a slide-in mobile menu (`lg:hidden` toggle) are both used.

**Top-level nav (desktop, in source order):**

| Position | Label (IT) | Key | Route |
|---|---|---|---|
| Logo (link to `/`) | `Eurofabbro` (image logo) | — | `/` |
| 1 | **Lavorazioni** (with dropdown chevron `od`/ChevronDown) | `uD.nav.lavorazioni` | (hover dropdown) |
| 2 | Automazione | `uD.nav.automazione` | `/automazione` |
| 3 | Perché noi | `uD.nav.percheNoi` | `/perche-noi` |
| 4 | Realizzazioni | `uD.nav.realizzazioni` | `/realizzazioni` |
| 5 | Detrazioni | `uD.nav.detrazioni` | `/detrazioni` |
| CTA | **Richiedi preventivo** | `uD.nav.cta` | `/contatti` |

**"Lavorazioni" dropdown submenu (hover-to-open, animated with framer-motion):**

| Label (IT) | Route |
|---|---|
| Cancelli | `/cancelli` |
| Inferriate | `/inferriate` |
| Recinzioni | `/recinzioni` |
| Carport e Tettoie | `/carport` |
| Altre lavorazioni | `/lavorazioni` |

### Mobile menu (slide-in panel from right, `x: 100%` → `0`)

The mobile menu shows the same items, flat (no dropdown), in a vertical column with a close `ES`/X icon, the `tm` language toggle component, and the full-width **Richiedi preventivo** CTA button at the bottom.

Mobile items in order: Cancelli, Inferriate, Recinzioni, Carport e Tettoie, Altre lavorazioni, Automazione, Perché noi, Realizzazioni, Detrazioni, Contatti.

### Sticky header behavior

`window.scrollY > 80` flips the header from transparent (with white text + brightness-10 logo filter) to glassy (`backdrop-blur-md` + `rgba(255,255,255,0.72)` + thin border + dark text). On `/contatti` the page forces a darker variant; on `/` and other pages the header is transparent over the hero.

### Other header UI

- **Floating WhatsApp FAB** (`pD`) — fixed bottom-right, green `#25D366` circle with `MessageCircle` icon, hidden on `/contatti` and on `lg+` screens (only `lg:hidden` on the WhatsApp button itself, but the page also has a language toggle `tm` next to the CTA in desktop nav).
- **Scroll-to-top FAB** (`mD`) — appears after `scrollY > 400`, animated with framer-motion, smooth-scrolls to top.

---

## 2. Image Inventory

### Base44 CDN images (`https://media.base44.com/images/public/69baf22d9cc002736b6b7248/...`)

These are AI-generated hero/card images. Each `*_generated_image.png` is referenced from a specific page.

| Public URL | Filename | Likely subject / where used |
|---|---|---|
| `…/053701002_generated_image.png` | `053701002_generated_image.png` | Home **Hero** background (`yD`) |
| `…/eb6ff68c0_generated_image.png` | `eb6ff68c0_generated_image.png` | **Cancelli** hero `ri` background + LandingCancelli hero image |
| `…/cfd8c4396_generated_image.png` | `cfd8c4396_generated_image.png` | **Inferriate** hero `ri` background |
| `…/3cc2a0950_generated_image.png` | `3cc2a0950_generated_image.png` | **Recinzioni** hero `ri` background |
| `…/37ae1598f_generated_image.png` | `37ae1598f_generated_image.png` | **Lavorazioni** hero `ri` background |
| `…/ff67b59d2_generated_image.png` | `ff67b59d2_generated_image.png` | **Carport** hero `ri` background |
| `…/1fd69a4bb_generated_image.png` | `1fd69a4bb_generated_image.png` | **Automazione** hero `ri` background |
| `…/8b20c47b2_generated_image.png` | `8b20c47b2_generated_image.png` | **Perché noi** hero `ri` background |
| `…/196b11333_generated_image.png` | `196b11333_generated_image.png` | **Realizzazioni** hero `ri` background |
| `…/3ea644617_generated_image.png` | `3ea644617_generated_image.png` | **Detrazioni** hero `ri` background |
| `…/2a8eed53a_generated_image.png` | `2a8eed53a_generated_image.png` | Turnkey step **Progettazione** card |
| `…/81e9c3696_generated_image.png` | `81e9c3696_generated_image.png` | Turnkey step **Pratiche** card |
| `…/a18bfad4e_generated_image.png` | `a18bfad4e_generated_image.png` | Turnkey step **Realizzazione** card |
| `…/28f664fa9_generated_image.png` | `28f664fa9_generated_image.png` | Carport intro image + Carport **Carport singolo** type + Lavorazioni **Carport e tettoie** section |
| `…/9edc19b42_generated_image.png` | `9edc19b42_generated_image.png` | Carport **Carport doppio** type |
| `…/190366ac2_generated_image.png` | `190366ac2_generated_image.png` | Carport **Pensiline industriali** type |
| `…/d5f42817e_generated_image.png` | `d5f42817e_generated_image.png` | Carport **Tettoie per esterni** type |
| `…/user_698f5cc1774892bec8590553/15e9183dc_logo.png` | `15e9183dc_logo.png` | **Logo** (used in header, footer, both landing pages) |

### WordPress media (`https://eurofabbro.com/wp-content/uploads/...`)

These are real product/realisation photos inherited from the legacy WordPress site.

| Public URL | Filename | Likely subject / where used |
|---|---|---|
| `https://eurofabbro.com/wp-content/uploads/slider2/1.jpeg` | `1.jpeg` | FeaturedProject: **Cancello Autoportante** (Bologna) |
| `https://eurofabbro.com/wp-content/uploads/slider2/2.jpeg` | `2.jpeg` | FeaturedProject: **Cancello a Battente** (San Giovanni in Persiceto) + Realizzazioni: **Cancello a Battente** (Cento FE) |
| `https://eurofabbro.com/wp-content/uploads/slider2/3.jpeg` | `3.jpeg` | Realizzazioni: **Cancello in Lamiera** (Crevalcore BO) |
| `https://eurofabbro.com/wp-content/uploads/2023/04/4.jpg` | `4.jpg` | Realizzazioni: **Scala Interna** (Bologna) |
| `https://eurofabbro.com/wp-content/uploads/2023/04/5.jpg` | `5.jpg` | FeaturedProject: **Inferriate di Sicurezza** (Cento FE) |
| `https://eurofabbro.com/wp-content/uploads/2023/04/Cancelli-in-ferro-cento-1-300x225.jpg` | `Cancelli-in-ferro-cento-1-300x225.jpg` | FeaturedProject: **Recinzioni su Misura** + Realizzazioni: **Recinzioni** (Massa Finalese MO) |
| `https://eurofabbro.com/wp-content/uploads/2023/04/Carpenteria-metallica-su-misura-bologna-cento.jpg` | `Carpenteria-metallica-su-misura-bologna-cento.jpg` | Realizzazioni: **Cancello Scorrevole** (Bologna) |
| `https://eurofabbro.com/wp-content/uploads/2023/04/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg` | `Realizzazione-grate-in-ferro-bologna-480x360-1.jpg` | FeaturedProject: **Grate Antieffrazione** (Bologna) + Realizzazioni: **Grate Antieffrazione** (Crevalcore BO) |
| `https://eurofabbro.com/wp-content/uploads/2023/04/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg` | `Realizzazione-strutture-in-ferro-cento-480x360-1.jpg` | FeaturedProject: **Scale e Strutture** (Crevalcore BO) + Realizzazioni: **Scala Esterna** (San Giovanni in Persiceto BO) + Lavorazioni **Scale in ferro** section |
| `https://eurofabbro.com/wp-content/uploads/2023/04/parapetti-per-balconi-1-300x225.jpg` | `parapetti-per-balconi-1-300x225.jpg` | Realizzazioni: **Balaustra e Parapetto** (Bologna) + Lavorazioni **Balaustre e ringhiere** section |
| `https://eurofabbro.com/wp-content/uploads/2023/04/Strutture-in-ferro-su-misura.jpg` | `Strutture-in-ferro-su-misura.jpg` | Realizzazioni: **Dehor Commerciale** (Bologna) + Lavorazioni **Dehor commerciali** section |
| `https://eurofabbro.com/wp-content/uploads/2023/04/Arredi-in-ferro-su-misura-bologna-1-300x225.jpg` | `Arredi-in-ferro-su-misura-bologna-1-300x225.jpg` | Realizzazioni: **Arredi su Misura** (Cento FE) + Lavorazioni **Arredi in ferro** section |

### Map embed (Contatti page)

`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.5!2d11.15!3d44.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQzJzEyLjAiTiAxMcKwMDknMDAuMCJF!5e0!3m2!1sit!2sit!4v1600000000000` (uses placeholder coords — should be replaced with the real embed for Via Galileo Galilei 140, Palata Pepoli di Crevalcore).

---

## 3. Pages

### Home (`/Home`) — component `yF`

Renders these 11 sections in order (function order = render order, top to bottom):

#### 1. Hero (`yD`)
- Full-viewport (`min-height: 100vh`), dark overlay over background image
- **Background image:** `https://media.base44.com/images/public/69baf22d9cc002736b6b7248/053701002_generated_image.png`
- **Badge (eyebrow):** `Certificati Istituto Giordano · CE`
- **Headline (line 1):** `Carpenteria metallica`
- **Headline (line 2):** `` (pre) `certificata` (accent, italic) ` su misura` (post)
- **Subheadline:** `Quarant'anni di lavorazioni in ferro nella provincia di Bologna. Produzione interna, marcatura CE, garanzia su ogni installazione.`
- **CTAs:**
  - Primary (→ `/contatti`): **Richiedi preventivo gratuito**
  - Secondary (→ `#lavorazioni`): **Scopri le lavorazioni**
- **Stat pills (3):**
  - `1977–2026 | 49 Anni di esperienza`
  - `Certificati Istituto Giordano`
  - `Preventivo gratuito in 24h`

#### 2. Turnkey / Valore Plus (`bD`) — dark section, alternating timeline
- **Pre-label:** `Valore Plus by Ferioli`
- **Headline (pre + accent + post):** `Valore Plus — ` `Il servizio chiavi in mano` ` di Ferioli`
- **Subheadline:** `Dalla progettazione alla posa: pensiamo a tutto noi.`
- **3 timeline cards (with `0X` big number watermark, h3, text, and image):**
  1. **Progettazione** — `Sopralluogo, misure e progetto su misura. Studiamo ogni dettaglio in base al tuo spazio, al tuo stile e alle normative vigenti.` — image `…/2a8eed53a_generated_image.png`
  2. **Pratiche** — `Ti affianchiamo nella gestione della documentazione tecnica e nelle pratiche necessarie, senza che tu debba pensarci.` — image `…/81e9c3696_generated_image.png`
  3. **Realizzazione** — `Produciamo e installiamo direttamente, senza intermediari. Dalla nostra officina a casa tua, con un unico interlocutore.` — image `…/a18bfad4e_generated_image.png`
- **Closing line (italic, accent color):** `"Un solo referente, dalla prima telefonata al cancello installato."`

#### 3. Products grid (`xD`) — secondary bg, id `#lavorazioni`, 3-col grid
- **Pre-label:** `Cosa realizziamo`
- **Headline (pre + accent):** `Tutto ciò che puoi fare ` `in ferro`
- **Subheadline:** `Dalla progettazione alla posa in opera, realizziamo ogni lavoro internamente. Preventivo gratuito, consegna garantita.`
- **6 product cards** (icon + name + desc + "Scopri di più" link):
  1. **Cancelli e accessi** (`DoorOpen` icon) — `Accesso protetto e su misura per la tua proprietà. Cancelli scorrevoli, a battente, pedonali e automatizzati.` → `/cancelli`
  2. **Inferriate di sicurezza** (`Grid3x3` icon) — `Protezione per finestre e porte senza rinunciare all'estetica e alla luce naturale.` → `/inferriate`
  3. **Recinzioni** (`Fence` icon) — `Perimetro sicuro e decorativo in ferro battuto o doghe modulari per ogni esigenza.` → `/recinzioni`
  4. **Scale in ferro** (`TrendingUp` icon) — `Scale su misura per interni ed esterni, residenziali e industriali, resistenti nel tempo.` → `/lavorazioni#scale`
  5. **Carport e Tettoie** (`CarFront` icon) — `Strutture autoportanti in ferro su misura per proteggere auto e veicoli dagli agenti atmosferici.` → `/carport`
  6. **Automazione** (`Settings` icon) — `Comfort e sicurezza con sistemi di automazione per cancelli e serramenti.` → `/automazione`
- **Footer link:** `Vedi tutte le lavorazioni` → `/lavorazioni`

#### 4. Authority / Stats (`SD`) — dark section, 2-col
- **Pre-label:** `Perché scegliere Eurofabbro`
- **Headline (pre + accent + post):** `L'unica carpenteria ` `certificata` ` della zona`
- **Body:** `Grazie alla certificazione dell'Istituto Giordano — ente tecnico fondato nel 1959 — i nostri cancelli sono testati per 60.000 aperture e marchiati CE. Siamo il punto di riferimento per carpenteria metallica certificata tra Bologna e Cento.`
- **Cert badge:** `Certificati Istituto Giordano · Marcatura CE`
- **4 stat counters (animated with `wD` on `inView`):**
  - `49` — `Anni di attività (1977-2026)`
  - `60.000` — `Aperture testate per marcatura CE`
  - `100%` — `Produzione interna su misura`
  - `24h` — `Per ricevere il tuo preventivo`

#### 5. Process (`ED`) — 3-step with icons
- **Pre-label:** `Il nostro processo`
- **Headline (pre + accent + post):** `Dalla ` `richiesta` ` alla posa in opera`
- **3 steps:**
  1. **`1. Contattaci`** (`MessageCircle` icon) — `Chiamaci, scrivici su WhatsApp o compila il form. Risponderemo entro 24 ore per fissare un sopralluogo gratuito.`
  2. **`2. Sopralluogo e progetto`** (`Ruler` icon) — `Veniamo da te, misuriamo e progettiamo la soluzione su misura. Ti inviamo un preventivo dettagliato senza impegno.`
  3. **`3. Produzione e posa`** (`CheckCircle` icon / `CircleCheckBig` `Sm`) — `Produciamo internamente e installiamo. Garantiamo il lavoro e siamo disponibili per ogni necessità post-installazione.`

#### 6. Featured Projects (`kD`) — secondary bg, masonry-style 3-col grid
- **Pre-label:** `I nostri lavori`
- **Headline (pre + accent + post):** `Ogni ` `lavorazione` ` racconta una storia`
- **6 project cards** (clickable → `s.link` via `ld()` navigate; first card spans 2 rows, height 480px; others 228px; gradient overlay + title + location pill):
  1. **Cancello Autoportante** — Bologna — image `…/slider2/1.jpeg` → `/cancelli`
  2. **Inferriate di Sicurezza** — Cento (FE) — image `…/2023/04/5.jpg` → `/inferriate`
  3. **Scale e Strutture** — Crevalcore (BO) — image `…/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg` → `/lavorazioni`
  4. **Cancello a Battente** — San Giovanni in Persiceto (BO) — image `…/slider2/2.jpeg` → `/cancelli`
  5. **Recinzioni su Misura** — Massa Finalese (MO) — image `…/Cancelli-in-ferro-cento-1-300x225.jpg` → `/recinzioni`
  6. **Grate Antieffrazione** — Bologna — image `…/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg` → `/inferriate`
- **Footer link:** `Vedi tutte le realizzazioni` → `/realizzazioni`

#### 7. Tax Deduction Banner (`Vl`) — dark CTA section
- **Icon:** `BadgePercent` (48px, accent)
- **Headline (pre + accent + post):** `Risparmia fino al ` `50%` ` con le detrazioni fiscali`
- **Body:** `Il Bonus Sicurezza ti permette di detrarre il 36% delle spese per cancelli, inferriate e sistemi di sicurezza. Con le detrazioni fiscali si arriva al 50%. Finanziamento a tasso agevolato con Compass, rate da 24 a 48 mesi.`
- **CTA:** `Scopri come risparmiare` → `/detrazioni`
- **3 badge pills:** `Bonus Sicurezza 36%`, `Detrazione 50%`, `Compass 24/36/48 mesi`
- *(Also used as a compact inline link `Vl({compact: true})`: `Bonus Sicurezza: detrazioni al 36%-50% →` → `/detrazioni`)*

#### 8. Work With Us (`gF`)
- **Pre-label:** `Collabora con noi`
- **Headline (pre + accent + post):** `Cerchiamo ` `partner` ` e professionisti`
- **Body:** `Unisciti alla nostra rete. Siamo sempre alla ricerca di installatori, rivenditori e professionisti qualificati.`
- **CTA:** `Scopri di più` (with `Briefcase` icon) → `/landing/lavora-con-noi`
- Right side: a card with big `Briefcase` icon (80px circle bg `accent-subtle`) repeating accent + subheadline.

#### 9. Testimonials (`TD`) — 3-col grid
- **Pre-label:** `Dicono di noi`
- **Headline (pre + accent + post):** `La ` `fiducia` ` dei nostri clienti`
- **3 testimonial cards** (large `Georgia, serif` opening quote char `"`, italic quote, star rating, name, location):
  1. **Marco R.** — Crevalcore (BO) — 5 stars — `Lavoro impeccabile sul nostro cancello scorrevole. Professionali, puntuali e il risultato ha superato le aspettative. Consigliatissimi.`
  2. **Laura B.** — Cento (FE) — 5 stars — `Abbiamo fatto realizzare le inferriate per tutta la casa. Qualità eccellente, installazione rapida e pulizia sul cantiere. Molto soddisfatti.`
  3. **Giovanni P.** — San Giovanni in Persiceto (BO) — 5 stars — `Ci siamo affidati a Ferioli per le recinzioni del capannone. Prezzo giusto, lavoro solido e duraturo. Li raccomandiamo senza riserve.`
- *Note (placeholder for client):* `CONTENUTO RICHIESTO DAL CLIENTE — 3 testimonial reali con nome, località e prodotto installato` (italic, muted — appears in the `percheNoi` page; not actually rendered on Home)

#### 10. FAQ (`mF`) — single accordion (`Zs` type="single" collapsible)
- **Heading:** `Domande Frequenti`
- **FAQs** (sourced from `pF`, defined near the FAQ component):
  - *(The actual questions/answers are not visible in `pF` from the slices I've read — but the section is rendered with the title "Domande Frequenti" and an accordion of `faq-${t}` items)*

#### 11. Final CTA (`_r`) — secondary bg
- **Pre-label:** `Inizia oggi`
- **Headline (pre + accent):** `Richiedi il tuo preventivo ` `gratuito`
- **Subheadline:** `Sopralluogo gratuito, preventivo senza impegno. Rispondiamo entro 24 ore.`
- **3 buttons (flex-col on mobile, flex-row on sm+):**
  - → `/contatti`: **Compila il form**
  - → `https://wa.me/393474287776`: **Scrivici su WhatsApp** (with `MessageCircle` icon, whatsapp variant)
  - → `tel:+39051985300`: **051 985300** (with `Phone` icon, secondary variant)
- **3 reassurance lines (with checkmark `✓`):** `Risposta entro 24 ore`, `Sopralluogo gratuito`, `Preventivo senza impegno`

---

### Cancelli (`/cancelli`) — component `vF`

Reuses the generic `ri` hero section.

1. **Hero (`ri`)** — bg image `…/eb6ff68c0_generated_image.png`
   - Headline: `Cancelli su misura e ` + accent `pronta consegna`
   - Subheadline: `Produciamo e vendiamo cancelli di qualsiasi tipologia. Soluzioni su misura basate sulle esigenze del cliente, garanzia qualità ed estetica superiori.`
   - CTA: `Richiedi il tuo preventivo` → `/contatti`

2. **Variants** (secondary bg) — h2 `Ogni tipologia su misura` + 2-col grid of 4 cards:
   - **Cancelli scorrevoli** — `Cancelli scorrevoli tradizionali con guida a terra, sospesi e autoportanti senza guida. Zincati e verniciabili su richiesta.`
   - **Cancelli pedonali** — `Cancelli pedonali in ferro su misura, progettati per integrarsi con recinzioni e strutture esistenti.`
   - **Cancelli a battente e a libro** — `Cancelli ad anta battente e a libro con progettazione personalizzata, realizzazione artigianale e installazione.`
   - **Cancelli autoportanti** — `Soluzione scorrevole senza guida a terra, ideale per aziende, abitazioni e ingressi carrabili con passaggi frequenti.`

3. **Why iron** — h3 `Perché scegliere il ferro` + 2-col list of benefits (with `Check` `Mo` icon):
   - `Resistenza alla compressione e alle trazioni`
   - `Materiale indeformabile nel tempo`
   - `Personalizzabile per stile e tipologia`
   - `Vasta gamma di finiture e trattamenti`

4. **Pronta consegna** (secondary bg) — h3 `Cancelli in pronta consegna` + body:
   - `Disponiamo di una gamma di cancelli in pronta consegna, visibili presso la nostra mostra espositiva a Palata Pepoli di Crevalcore (BO). Se hai bisogno urgente di un cancello, possiamo aiutarti a scegliere rapidamente la soluzione più adatta.`

5. **Cert badge inline (`Bl`)** — full promo card (icon, "Certificati Istituto Giordano", "Marcatura CE · Testati 60.000 aperture")

6. **FAQ** (single accordion) — 4 items:
   1. `Realizzate cancelli in ferro su misura?` → `Sì, realizziamo cancelli in ferro completamente su misura, progettati in base alle esigenze estetiche e funzionali del cliente.`
   2. `Quanto costa un cancello in ferro su misura?` → `Il costo dipende da dimensioni, design, finiture e tipologia. Dopo un sopralluogo forniamo un preventivo preciso e personalizzato.`
   3. `I cancelli rispettano le normative e sono marcati CE?` → `Sì, i cancelli vengono realizzati nel rispetto delle normative vigenti, marcati CE quando previsto e forniti con la documentazione tecnica necessaria.`
   4. `In quali zone operate?` → `Operiamo a Bologna e provincia, Modena e provincia, con sopralluoghi e installazioni dirette sul territorio.`

7. **Deduction banner (`Vl`)** — full dark CTA section
8. **Footer (`_r`)** — see Footer section below

---

### Inferriate (`/inferriate`) — component `xF`

1. **Hero (`ri`)** — bg image `…/cfd8c4396_generated_image.png`
   - Headline: `Inferriate su misura per ` + accent `sicurezza ed estetica`
   - Subheadline: `Produzione e vendita di inferriate in ferro su misura, progettate per aumentare la sicurezza dell'abitazione senza rinunciare all'estetica.`
   - CTA: `Richiedi il tuo preventivo` → `/contatti`

2. **Variants** (secondary bg) — 2-col grid of 4 cards (no section heading, just the cards):
   - **Inferriate fisse** — `Ideali per finestre e aperture che non richiedono passaggio. Elevata protezione, solidità strutturale e ampia personalizzazione estetica.`
   - **Inferriate apribili** — `Per porte, finestre e portefinestre. Mantengono la sicurezza garantendo praticità di utilizzo e facilità di gestione.`
   - **Inferriate snodabili** — `Indicate per portefinestre e passaggi frequenti. Occupano poco spazio con impatto estetico contenuto.`
   - **Inferriate a due ante** — `Soluzione pratica per aperture di dimensioni maggiori, personalizzabili nelle finiture e integrabili nello stile dell'abitazione.`

3. **Benefits** — h3 `La perfetta unione tra sicurezza ed estetica` + 2-col list (with `Check` icon):
   - `Forte deterrente contro furti e intrusioni`
   - `Finestre aperte in sicurezza per ventilazione`
   - `Non richiedono alimentazione elettrica`
   - `Protezione duratura nel tempo`
   - `Contribuiscono all'estetica dell'immobile`
   - `Fiscalmente detraibili`

4. **Cert badge inline (`Bl`)**
5. **FAQ** (secondary bg, single accordion) — 3 items:
   1. `Le inferriate sono realizzate su misura?` → `Sì, tutte le inferriate vengono realizzate su misura per adattarsi perfettamente a finestre, porte e aperture esistenti.`
   2. `Esistono inferriate apribili?` → `Sì, realizziamo inferriate apribili che garantiscono sicurezza senza rinunciare alla praticità e alle vie di fuga.`
   3. `Le inferriate sono detraibili fiscalmente?` → `Sì, l'installazione delle inferriate rientra negli interventi di sicurezza dell'immobile ed è detraibile fiscalmente secondo la normativa vigente.`
6. **Deduction banner (`Vl`)**
7. **Footer (`_r`)**

---

### Recinzioni (`/recinzioni`) — component `bF`

1. **Hero (`ri`)** — bg image `…/3cc2a0950_generated_image.png`
   - Headline: `Recinzioni in ferro ` + accent `su misura`
   - Subheadline: `Vendita e installazione di recinzioni in ferro personalizzate per abitazioni, condomini e aziende. Modelli su misura e doghe modulari.`
   - CTA: `Richiedi il tuo preventivo` → `/contatti`

2. **Iron section** — h3 `Recinzioni in ferro: una soluzione che ` + accent `dura nel tempo` + body:
   - `Il ferro è un materiale indeformabile nel tempo, resistente a qualsiasi temperatura e condizione climatica, che richiede una manutenzione minima. Affidandoti a noi, ti assicurerai che cancello e recinzione seguano lo stesso disegno di lavorazione del ferro.`

3. **Modular section** (secondary bg) — h3 `Doghe modulari e ` + accent `reti metalliche` + body:
   - `Disponiamo anche di modelli standard a doghe modulari, ideali per recintare in modo semplice, veloce e a un prezzo conveniente. Le reti metalliche sono perfette per delimitare spazi agricoli e industriali con forte resistenza e lunga durata.`
   - 4 benefits (with `Check` icon):
     - `Sicurezza e resistenza nel tempo`
     - `Ampia possibilità di personalizzazione`
     - `Coordinamento con cancelli esistenti`
     - `Soluzioni per privati e aziende`

4. **Deduction banner (`Vl`)**
5. **Footer (`_r`)**

---

### Lavorazioni (`/lavorazioni`) — component `wF`

1. **Hero (`ri`)** — bg image `…/37ae1598f_generated_image.png`
   - Headline: `Altre lavorazioni in ` + accent `ferro`
   - Subheadline: `Scale, balaustre, carport, dehor commerciali e arredi in ferro. Ogni progetto è studiato su misura per le tue esigenze.`
   - CTA: `Richiedi il tuo preventivo` → `/contatti`

2. **5 alternating sections** (alternating `secondary` on even index, image/text 2-col, image swaps side on odd index, anchored to `id={r.id}` for direct nav links):

   | ID | Name (h3) | Description | Image |
   |---|---|---|---|
   | `scale` | **Scale in ferro** | `Progettiamo e realizziamo scale in ferro su misura per interni ed esterni, sia residenziali che industriali. Scale dritte, con pianerottolo, a struttura metallica — combinabili con legno, vetro o altri materiali.` | `…/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg` |
   | `balustre` | **Balaustre e ringhiere** | `Realizziamo balaustre e ringhiere personalizzate per balconi, scale e terrazzi, nel rispetto delle normative di sicurezza. Parapetti e corrimano sia per interni che per esterni, con trattamento di zincatura per lunga durata.` | `…/parapetti-per-balconi-1-300x225.jpg` |
   | `carport` | **Carport e tettoie** | `Realizziamo carport in ferro su misura: tettoie e pensiline autoportanti per proteggere auto e veicoli dagli agenti atmosferici. Personalizzabili e zincati per massima resistenza.` | `…/28f664fa9_generated_image.png` |
   | `dehor` | **Dehor commerciali** | `Dehor su misura in ferro per bar, ristoranti e attività commerciali. Strutture resistenti, eleganti e personalizzabili a 360 gradi, nel rispetto delle normative comunali.` | `…/Strutture-in-ferro-su-misura.jpg` |
   | `arredi` | **Arredi in ferro** | `Produzione di arredi in ferro sia industriali che per la casa: scaffalature, banchi di lavoro, letti, mobili, arredo bagno, librerie. Tutto personalizzabile al 100% su misura.` | `…/Arredi-in-ferro-su-misura-bologna-1-300x225.jpg` |

   Each section has a CTA button `t.hero.cta` (→ `/contatti`) at the end. Each image has `alt={r.name}`.

3. **Footer (`_r`)**

---

### Carport (`/carport`) — component `SF`

1. **Hero (`ri`)** — bg image `…/ff67b59d2_generated_image.png`
   - Headline: `Carport e tettoie in ` + accent `ferro su misura`
   - Subheadline: `Realizziamo carport e pensiline in ferro personalizzate per proteggere auto e veicoli dagli agenti atmosferici. Strutture autoportanti, zincate e verniciabili su richiesta.`
   - CTA: `Richiedi il tuo preventivo` → `/contatti`

2. **Intro** — 2-col (text + image `…/28f664fa9_generated_image.png`, `alt: "Carport in ferro"`)
   - h2: `Protezione su misura per ` + accent `la tua auto`
   - body: `Un carport in ferro è la soluzione ideale per chi vuole proteggere il proprio veicolo dagli agenti atmosferici senza rinunciare all'estetica. Rispetto a un garage tradizionale, occupa meno spazio, costa meno e si integra perfettamente con il giardino o il vialetto d'accesso. Ogni struttura è progettata su misura, costruita nel nostro laboratorio e installata direttamente da noi.`
   - CTA: `t.hero.cta` → `/contatti`

3. **Types** (secondary bg) — h2 `Tipologie di ` + accent `coperture` + 2-col grid of 4 cards (image + h4 + desc):
   1. **Carport singolo** — `Copertura per un singolo veicolo, ideale per abitazioni private con accesso carrabile. Design pulito e integrato con l'architettura esistente. Disponibile in varie larghezze e altezze.` — image `…/28f664fa9_generated_image.png`
   2. **Carport doppio** — `Soluzione per due o più veicoli, perfetta per famiglie o piccole attività. Struttura robusta con ampio spazio utile. Possibilità di aggiungere pareti laterali o pannelli di chiusura.` — image `…/9edc19b42_generated_image.png`
   3. **Pensiline industriali** — `Coperture su misura per aziende, magazzini e aree di carico/scarico. Alta resistenza e lunga durata garantita. Ideali per grandi superfici con alta portata strutturale.` — image `…/190366ac2_generated_image.png`
   4. **Tettoie per esterni** — `Protezione per ingressi, terrazzi e aree esterne. Eleganti, personalizzabili e resistenti alle intemperie. Perfette anche per proteggere aree di sosta camper o moto.` — image `…/d5f42817e_generated_image.png`

4. **Features** — h3 `Perché scegliere un carport in ` + accent `ferro` + 2-col list of 8 benefits (with `Check` icon):
   - `Struttura autoportante senza pilastri intermedi`
   - `Zincatura a caldo per massima resistenza alle intemperie`
   - `Personalizzabile in dimensioni, forme e finiture`
   - `Adatto a uso residenziale e industriale`
   - `Compatibile con pannelli fotovoltaici`
   - `Manutenzione minima nel tempo`
   - `Produzione interna e installazione diretta`
   - `Preventivo gratuito entro 24h`

5. **Materials** (secondary bg) — h3 `Materiali e ` + accent `finiture` + 2-col grid of 4 cards (h4 in accent color + 3px left border in accent):
   1. **Ferro zincato a caldo** — `La zincatura a caldo garantisce la massima protezione dalla ruggine e dagli agenti atmosferici, con una durata superiore a 20 anni senza manutenzione.`
   2. **Verniciatura a polvere** — `Disponibile in qualsiasi colore RAL. La verniciatura a polvere offre un'ottima resistenza agli urti e ai raggi UV, mantenendo il colore invariato nel tempo.`
   3. **Coperture in policarbonato** — `Pannelli trasparenti o traslucidi che lasciano passare la luce naturale pur proteggendo dalla pioggia. Leggeri, resistenti e isolanti.`
   4. **Lamiera grecata** — `Soluzione economica e robusta per coperture opache. Alta resistenza meccanica e impermeabilità garantita nel tempo.`

6. **FAQ** — 5 items (single accordion):
   1. `Quanto costa un carport in ferro su misura?` → `Il costo varia in base alle dimensioni, alla tipologia di copertura e alle finiture scelte. Dopo un sopralluogo gratuito ti forniamo un preventivo dettagliato e senza impegno.`
   2. `È necessario il permesso edilizio per installare un carport?` → `Dipende dalle dimensioni e dal comune di riferimento. Per strutture di piccole dimensioni spesso è sufficiente la CILA. Vi assistiamo nell'iter burocratico.`
   3. `In quanto tempo viene realizzato e installato?` → `I tempi dipendono dalla complessità del progetto. Mediamente, dalla conferma del preventivo all'installazione passano 3-6 settimane.`
   4. `I carport sono compatibili con pannelli solari?` → `Sì, progettiamo le strutture per accogliere pannelli fotovoltaici, ottimizzando il dimensionamento dei profilati per la portata aggiuntiva.`
   5. `Operate in tutta la provincia di Bologna?` → `Operiamo nelle province di Bologna e Modena con sopralluoghi e installazioni dirette.`

7. **Cert badge inline (`Bl`)**
8. **Footer (`_r`)**

---

### Automazione (`/automazione`) — component `CF`

1. **Hero (`ri`)** — bg image `…/1fd69a4bb_generated_image.png`
   - Headline (pre + accent + post): `Sistemi di ` `automazione` ` per cancelli`
   - Subheadline: `Realizziamo e installiamo sistemi di automazione per cancelli, porte e serramenti. Controllo tramite telecomando, smartphone e sistemi domotici.`
   - CTA: `Richiedi consulenza` → `/contatti`

2. **How it works** — h3 `Come funziona un cancello ` + accent `automatico` + body:
   - `Un cancello automatico si muove grazie a un motore elettrico collegato a una centralina di controllo. I sensori di sicurezza rilevano eventuali ostacoli e il movimento si arresta automaticamente.`
   - 2-col grid of 2 cards (h4 + desc):
     1. **Cancelli automatici a battente** — `Le ante si aprono ruotando su un perno, generalmente verso l'interno. Ideali quando c'è spazio sufficiente per l'apertura.`
     2. **Cancelli automatici scorrevoli** — `La parte mobile scorre lateralmente lungo la recinzione. Adatti per ingressi con spazio limitato e accessi frequenti.`

3. **Service** (secondary bg) — h3 `Servizio ` + accent `completo` + body:
   - `Consulenza tecnica, scelta del sistema più adatto, installazione professionale, verifiche di sicurezza e assistenza post installazione.`
   - **Control chips** (rounded full pills, accent-subtle bg, accent text, 4 items):
     - `Telecomando`
     - `Smartphone con app dedicata`
     - `Tastiera di comando`
     - `Sistemi domotici integrati`

4. **Footer (`_r`)**

---

### Perché noi (`/perche-noi`) — component `EF`

1. **Hero (`ri`)** — bg image `…/8b20c47b2_generated_image.png`
   - Headline (pre + accent + post): `Quarant'anni di ` `ferro` ` lavorato con cura`
   - Subheadline: `Ferioli Sergio SRL è nata dall'esperienza, cresciuta sulla qualità. Carpenteria metallica certificata nella provincia di Bologna.`
   - CTA: `Richiedi il tuo preventivo` → `/contatti`

2. **Story** — h3 `La nostra ` + accent `storia` + body:
   - `Ferioli Sergio SRL opera nel settore della carpenteria metallica da 49 anni (1977-2026), con sede in Via Galileo Galilei 140, Palata Pepoli di Crevalcore (BO). Siamo specializzati nella produzione di grate di sicurezza, recinzioni, reti metalliche, scale, carport, dehor, arredi in ferro e cancelli modulari e su misura.`
   - Note (italic, muted): `CONTENUTO RICHIESTO DAL CLIENTE — anno di fondazione, nome del fondatore e breve storia personale dell'azienda.`

3. **Certifications** (dark section with decorative SVG spiral at right) — h3 `Certificati ` + accent `primi in Italia` + body:
   - `L'Istituto Giordano, ente tecnico all'avanguardia nel testing di prodotto, certificazione, ricerca, progettazione e formazione, fondato nel 1959, ci ha certificati primi in Italia sia per cancelli manuali che automatici. Testati per 60.000 aperture, abbiamo ottenuto la marcatura CE dei prodotti.`

4. **Guarantee** (secondary bg) — h3 `La nostra ` + accent `garanzia` + body:
   - `Ogni nostro prodotto è realizzato curando ogni minimo dettaglio e cercando di renderlo perfetto per le esigenze del cliente. Sicurezza, resistenza ed estetica sono le tre principali caratteristiche delle nostre realizzazioni.`
   - Note (italic, muted): `CONTENUTO RICHIESTO DAL CLIENTE — termini espliciti della garanzia (durata, cosa copre).`

5. **Cert badge inline (`Bl`)** (full, not compact)
6. **Footer (`_r`)**

---

### Realizzazioni (`/realizzazioni`) — component `kF`

1. **Hero (`ri`)** — bg image `…/196b11333_generated_image.png`
   - Headline (pre + accent): `Le nostre ` + accent `realizzazioni`
   - Subheadline: `Ogni progetto racconta una storia di qualità artigianale, attenzione al dettaglio e soddisfazione del cliente.`
   - CTA: `Richiedi il tuo preventivo` → `/contatti`

2. **Projects grid** — 3-col grid (md:2-col, lg:3-col) of 10 clickable cards (full image with gradient overlay, bottom-left h4 + 2 pill chips for `location` and `type`, navigates to `s.link`):

   | Name | Location | Type | Image | Link |
   |---|---|---|---|---|
   | Cancello Scorrevole | Bologna | Cancello | `…/Carpenteria-metallica-su-misura-bologna-cento.jpg` | `/cancelli` |
   | Cancello a Battente | Cento (FE) | Cancello | `…/slider2/2.jpeg` | `/cancelli` |
   | Recinzioni | Massa Finalese (MO) | Recinzione | `…/Cancelli-in-ferro-cento-1-300x225.jpg` | `/recinzioni` |
   | Scala Interna | Bologna | Struttura | `…/2023/04/4.jpg` | `/lavorazioni` |
   | Grate Antieffrazione | Crevalcore (BO) | Inferriata | `…/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg` | `/inferriate` |
   | Scala Esterna | San Giovanni in Persiceto (BO) | Struttura | `…/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg` | `/lavorazioni` |
   | Balaustra e Parapetto | Bologna | Ringhiera | `…/parapetti-per-balconi-1-300x225.jpg` | `/lavorazioni` |
   | Arredi su Misura | Cento (FE) | Arredo | `…/Arredi-in-ferro-su-misura-bologna-1-300x225.jpg` | `/lavorazioni` |
   | Dehor Commerciale | Bologna | Struttura | `…/Strutture-in-ferro-su-misura.jpg` | `/lavorazioni` |
   | Cancello in Lamiera | Crevalcore (BO) | Cancello | `…/slider2/3.jpeg` | `/cancelli` |

   *Note (placeholder for client):* `CONTENUTO RICHIESTO DAL CLIENTE — descrizioni aggiuntive per ogni progetto (tipo di cliente, anno, contesto).` (stored in `t.note` but not visually rendered in the grid)

3. **Footer (`_r`)**

---

### Detrazioni (`/detrazioni`) — component `TF`

1. **Hero (`ri`)** — bg image `…/3ea644617_generated_image.png`
   - Headline (pre + accent + post): `Risparmia fino al ` `50%` ` grazie alle detrazioni fiscali`
   - Subheadline: `Detrazioni fiscali 2026 per cancelli, inferriate e sistemi di sicurezza. Il momento giusto per intervenire.`
   - CTA: `Richiedi informazioni` → `/contatti`

2. **Bonus section** — h3 `Bonus Sicurezza e ` + accent `Bonus Ristrutturazioni` + body:
   - `Nel 2026 sono ancora previste agevolazioni fiscali per interventi che migliorano la sicurezza degli immobili. Gli interventi su cancelli, grate di sicurezza, recinzioni e sistemi di controllo accessi possono rientrare nelle detrazioni fiscali per la sicurezza e la ristrutturazione edilizia.`

3. **Eligible works** (secondary bg) — h3 `Quali interventi possono essere ` + accent `detraibili` + space-y-3 list of 5 items (with `Check` icon):
   - `Installazione di inferriate di sicurezza`
   - `Installazione o rifacimento di cancelli`
   - `Automazione dei cancelli`
   - `Recinzioni e sistemi di controllo accessi`
   - `Sistemi antifurto e videosorveglianza`

4. **Compass financing** — h3 `Finanziamenti e soluzioni di ` + accent `pagamento` + body:
   - `Per facilitare l'intervento, offriamo la possibilità di accedere a finanziamenti con piani rateali personalizzati da 24, 36 o 48 mesi, così da installare subito senza rinunciare alla qualità.`
   - *Note (placeholder for client):* `CONTENUTO RICHIESTO DAL CLIENTE — termini esatti Compass, importi minimi/massimi, contatto per consulenza.`

5. **Savings calculator** (secondary bg, max-width narrow, centered) — h2-style eyebrow:
   - **Eyebrow:** `Calcola il tuo ` + accent `risparmio`
   - **Label:** `Valore indicativo del progetto (€)`
   - **Input:** type=number, placeholder `es. 5000`
   - **Live calculation (only when input > 0):** 2-col result cards
     - `Con il Bonus Sicurezza (36%)` → `€ [value * 0.36].toLocaleString("it-IT")` + `Risparmi`
     - `Con le detrazioni (50%)` → `€ [value * 0.5].toLocaleString("it-IT")` + `Risparmi`

6. **FAQ** — 4 items (single accordion):
   1. `Quali prodotti rientrano nelle detrazioni?` → `Cancelli, inferriate, sistemi di allarme, videosorveglianza e tutti gli interventi che migliorano la sicurezza dell'immobile.`
   2. `Come si ottiene la detrazione?` → `È necessario effettuare il pagamento tramite bonifico parlante e conservare la documentazione. I nostri consulenti possono guidarvi.`
   3. `È possibile finanziare il lavoro?` → `Sì, offriamo piani rateali con Compass da 24 a 48 mesi per rendere l'investimento accessibile.`
   4. `Le inferriate sono sempre detraibili?` → `Sì, l'installazione delle inferriate rientra negli interventi di sicurezza ed è fiscalmente detraibile sia per nuove installazioni che per sostituzioni.`

7. **Footer (`_r`)**

---

### Contatti (`/contatti`) — component `GF`

This page has a different layout — it does **not** render the `gD` layout (no header/footer wrapper in the visible code). The page is self-contained with its own contact section, form, map embed, and inline deduction banner.

1. **Contact section** (custom, paddingTop 160px, bg `--color-bg`)
   - **H1 (pre + accent + post):** `Siamo a ` + accent `due passi` ` da te`
   - **4 contact cards (4-col on lg, 2-col on sm, 1-col on mobile):**
     1. **Telefono** (`Phone` `fl` icon, accent) — `051 985300` — link `tel:+39051985300`
     2. **WhatsApp** (`MessageCircle` `sd` icon, `#25D366`) — `347 4287776` — link `https://wa.me/393474287776` (target _blank, rel noopener)
     3. **Email** (`Mail` `wS` icon, accent) — `eurofabbro@eurofabbro.com` — link `mailto:eurofabbro@eurofabbro.com`
     4. **Sede** (`MapPin` `Iu` icon, accent) — `Via Galileo Galilei 140, Palata Pepoli di Crevalcore (BO)` (no link)

2. **Process steps** (3 pill-shaped step indicators, accent-subtle bg, accent text, numbered circle + label):
   - h3: `Cosa succede dopo che ci contatti`
   - Step 1: `Risponderemo entro 24h`
   - Step 2: `Sopralluogo gratuito`
   - Step 3: `Preventivo senza impegno`

3. **Contact form** (secondary bg) — `react-hook-form` (`Bg()`), max-width narrow, centered. On submit, `u = p => { console.log("Contact form submitted:",p); r(!0); }` (the success state flips but the form is currently a no-op — no API call). On success shows check icon + success message.

   **Form fields** (all required fields marked with `*`):

   | Field | Type | Label | Validation | Placeholder |
   |---|---|---|---|---|
   | `name` | text | `Nome e cognome *` | `required` | — |
   | `phone` | tel | `Telefono *` | `required` | — |
   | `email` | email | `Email` | — | — |
   | `type` | select | `Tipo di lavoro` | — | `-- Seleziona --` (the empty option) |
   | `message` | textarea (5 rows, resizable) | `Messaggio` | — | — |
   | `privacy` | checkbox | `Accetto la privacy policy e il trattamento dei dati personali *` | `required` | — |

   **Type options (in `t.form.typeOptions`):** `Cancello`, `Inferriata`, `Recinzione`, `Scala`, `Allarme`, `Automazione`, `Altro`

   **Submit button:** `t.form.submit` (text `Invia richiesta`, primary style)

   **Success message:** `Richiesta inviata con successo! Ti contatteremo entro 24 ore.` (shown with `CheckCircle` `Sm` 48px icon)

   **Error message (defined but not wired up):** `Si è verificato un errore. Riprova o contattaci telefonicamente.`

4. **Map** — Google Maps iframe (full-width 400px height, with placeholder coords; title `Eurofabbro location`)

5. **Cert badge inline (`Bl`, `compact: true`)** — small chip variant

6. **Deduction banner (`Vl`, `compact: true`)** — inline link variant: `Bonus Sicurezza: detrazioni al 36%-50% →`

> ⚠️ The Contatti page does **NOT** render the global `Header` (`fD`) or `Footer` (`hD`) from the layout `gD` — it implements its own top-level structure. (Verified by reading `GF` directly: it starts with its own `<section>` instead of relying on `gD`'s `fD` header.)

---

### Landing Cancelli & Recinzioni (`/landing/cancelli-recinzioni`) — component `f3`

This is a **standalone, self-contained landing page** (does NOT use the global `gD` layout, has its own header and footer). It's styled with the `ef-*` Tailwind utility classes and uses shadcn-style components (`Button` `ks`, `Input` `Ai`, `Label` `En`, `Textarea` `Vg`, `Checkbox` `$g`).

**Sections:**

1. **Sticky header** (logo only) — sticky top-0, `bg-ef-bg/90 backdrop-blur-md border-b`, contains the **Ferioli Sergio SRL logo** (h=40, same logo URL) centered.

2. **Hero section** (pt-12 pb-20 px-4, relative)
   - H1 (text-3xl → 6xl responsive): `Cancelli, recinzioni e lavori in ferro su misura — ` *(line break)* `Bologna, Modena e Ferrara` (the second part in accent italic)
   - Subheadline: `Produzione e installazione diretta. Certificazione CE. Preventivo gratuito in 24 ore.`
   - **Primary CTA button** (large, rounded-full, accent): `Richiedi Preventivo Gratuito` → scrolls to `#preventivo-form`
   - **3 trust badges** (with icons + text):
     - `ShieldCheck` (Z0) + ` CE Certified`
     - `Calendar` (J0) + ` Est. 1977`
     - `MapPin` (Iu) + ` Bologna & Modena`
   - **Hero image** (max-w-6xl, mt-16, rounded-2xl, shadow-2xl, aspect-video sm:aspect-[21/9]): `…/eb6ff68c0_generated_image.png` with `alt="Cancelli su misura"` and dark gradient overlay

3. **Pain-agitation section** (py-20, bg-ef-surface, 2-col grid md)
   - H2 (left, dark): `Cancello vecchio, arrugginito o da automatizzare?`
   - P (right, accent left border, lg): `We design and build custom iron gates, fencing, railings, carports and more — from our workshop in Crevalcore (BO). Direct production, no intermediaries.` (NOTE: this is **English** copy in an otherwise Italian page)

4. **Services grid** (py-20, bg-ef-bg) — h2 centered `I nostri servizi` + 3-col grid of 6 service cards (icon circle 16×16, accent-subtle bg, accent color, h3):
   1. **Cancelli scorrevoli** (`ArrowRight` ZP)
   2. **Cancelli a battente** (`DoorOpen` Cm)
   3. **Recinzioni in ferro** (`Fence` xS)
   4. **Automazione cancelli** (`Settings` SS)
   5. **Inferriate di sicurezza** (`Grid3x3` bS)
   6. **Carport e pensiline** (`CarFront` cR)

5. **Testimonial + stats** (py-20, dark bg, max-w-4xl centered)
   - 5 yellow `Star` icons (CS) row (size 8, `text-yellow-400 fill-current`)
   - Blockquote (xl-3xl responsive, italic, opacity 90): `"Lavoro impeccabile sul nostro cancello. Professionali, puntuali e il risultato ha superato le aspettative."` (the first half of Marco R.'s testimonial from the main site)
   - 3-col grid (sm) of stats (border-top border-white/20 pt-12):
     - `ShieldCheck` icon → `CE Certified products`
     - `Calendar` icon → `Family business, active since 1977`
     - `MapPin` icon → `We operate in Bologna, Modena and Ferrara` (English)

6. **Lead form** (id=`preventivo-form`, py-24, bg-ef-bg-secondary) — card with rounded-3xl shadow-xl, max-w-3xl, centered
   - H2: `Richiedi un Preventivo`
   - P: `Compila il modulo per essere ricontattato entro 24 ore.`
   - On success: green `CircleCheck` (cp) icon, h3 `Richiesta inviata!`, p `Ti contatteremo al più presto.`
   - **Form fields** (react-hook-form + shadcn components):
     | Field | Type | Label | Validation | Placeholder |
     |---|---|---|---|---|
     | `name` | input | `Nome *` | required: `Il nome è obbligatorio` | — |
     | `phone` | tel input | `Numero di telefono *` | required: `Il numero è obbligatorio` | — |
     | `message` | textarea | `Messaggio (Opzionale)` | — | — |
     | `privacy` | checkbox | `Accetto la Privacy Policy e il trattamento dei dati personali *` (with link to `/privacy-policy`) | required: `Devi accettare la privacy policy` | — |
   - **Submit button:** `Invio in corso...` when submitting, else `Invia richiesta — ti contattiamo entro 24 ore`
   - **Phone fallback link below submit:** `tel:+39051985300` with `Phone` icon → ` 051 985300`

7. **FAQ** (py-20, bg-ef-bg, max-w-3xl) — h2 `FAQ` + accordion (`Zs` type=single collapsible) with shadcn-style:
   1. `Quanto costa un cancello su misura?` → `Every project is different. Contact us for a free, no-obligation quote.` (English)
   2. `Operate vicino a Bologna/Modena?` → `Yes, we operate throughout Bologna, Modena and Ferrara provinces.` (English)
   3. `Posso detrarre le spese?` → `In many cases yes — gates and security bars may qualify for tax deductions under Italian law. Ask us for details.` (English)
   4. `I vostri prodotti sono certificati?` → `All our gates are CE certified, tested by Istituto Nazionale Giordano.` (English)

8. **Footer** (bg-ef-surface-dark, py-12, centered, simple)
   - `Ferioli Sergio SRL` (text-xl bold)
   - `P.IVA 02128491202` + line break + `Via Galileo Galilei 140, 40014 Palata Pepoli di Crevalcore (BO)`
   - `Privacy Policy` link to `/privacy-policy`

> ⚠️ This landing page is **partly mixed-language** — service titles, testimonial, stats, and FAQ answers are in English, while form labels, buttons, and some headings are in Italian. The submit handler is `m = async x => { a(true); setTimeout(() => { a(false); u(true) }, 1000); }` — also a no-op (no API).

---

### Landing Lavora con Noi (`/landing/lavora-con-noi`) — component `O5`

Standalone landing page (self-contained, own header/footer, shadcn components, `ef-*` Tailwind utilities).

**Sections:**

1. **Sticky header** (logo only) — same as LandingCancelli (Ferioli logo centered, 40px, sticky)

2. **Hero section** (pt-16 md:pt-24, pb-20 md:pb-32, relative overflow-hidden)
   - Eyebrow pill: `Collabora con noi` (uppercase, tracking-wide, accent-subtle bg, accent text)
   - H1 (3xl → 6xl): `Lavora con Eurofabbro — ` *(line break)* `Bologna, Modena e Ferrara` (accent italic, font-light)
   - P (lg → xl): `Sei un rivenditore, un professionista del settore o cerchi un lavoro nel ferro lavorato? Parlaci.`
   - CTA button (large, rounded-full, accent): `Contattaci` → scrolls to `#contact-form`

3. **"Scegli il tuo percorso"** (py-20, bg-ef-surface, max-w-6xl) — h2 centered `Scegli il tuo percorso` + 3-col grid of 3 audience cards (rounded-3xl, border, hover shadow):
   1. **`Building2` icon** — **Rivenditori e Dealer** — `Vendi prodotti in ferro o lavori nell'edilizia? Possiamo fornirti cancelli e recinzioni con il tuo marchio o come produttore terzo. Contattaci per condizioni commerciali riservate.`
   2. **`Briefcase` icon** — **Partner e Installatori** — `Sei un installatore, un geometra o un imprenditore edile? Collaboriamo con professionisti del territorio per la fornitura e posa di cancelli, recinzioni e strutture metalliche.`
   3. **`HardHat` icon** — **Cerca Lavoro — Operai e Tecnici** — `Hai esperienza nella lavorazione del ferro, nella saldatura o nell'installazione di cancelli? Inviaci il tuo CV — siamo sempre alla ricerca di persone valide.`

4. **"Perché Eurofabbro"** (py-20, dark bg, max-w-4xl) — 2-col grid md
   - Left: h2 `Perché Eurofabbro` + ul of 4 checkmark items (with `CircleCheck` cp icon in accent/20 circle):
     - `Produttore indipendente a Crevalcore`
     - `Attivi sul territorio dal 1977`
     - `Prodotti certificati con marcatura CE`
     - `Operiamo a Bologna, Modena e Ferrara`
   - Right: card (white/5 bg, rounded-3xl, p-8, border) with quote (xl, italic, opacity 90): `"Cerchiamo relazioni durature basate su fiducia, qualità del lavoro e rispetto degli impegni."`

5. **Lead form** (id=`contact-form`, py-24, bg-ef-bg) — card with rounded-[2.5rem], p-8 md:p-12, shadow-xl, border, max-w-3xl
   - H2: `Invia la tua richiesta`
   - P: `Compila il form sottostante, ti risponderemo il prima possibile.`
   - On success: animated `De.div` with `CircleCheck` icon, h3 `Richiesta inviata!`, p `Abbiamo ricevuto il tuo messaggio. Il nostro team ti contatterà al più presto.`, plus a `Button` "Invia un'altra richiesta" to reset state.
   - **react-hook-form** with `defaultValues: { role: "job_applicant", privacy: false }`
   - **Form fields** (shadcn components):
     | Field | Type | Label | Validation | Placeholder |
     |---|---|---|---|---|
     | `role` | shadcn `Select` (`w5` / `I2` / `S5` / `D2` / `zu`) | `Sono un...` | — | `Seleziona...` |
     | `name` | input | `Nome e Cognome *` | required → `Campo obbligatorio` | `Mario Rossi` |
     | `company` | input | `Azienda (opzionale)` | — | `La tua azienda` |
     | `phone` | tel input | `Telefono *` | required → `Campo obbligatorio` | `333 1234567` |
     | `email` | email input | `Email *` | required → `Campo obbligatorio` | `mario@esempio.it` |
     | `cv` *(conditional on `role === "job_applicant"`, animated reveal)* | file input (`accept=".pdf,.doc,.docx"`) | `Carica il tuo CV` | — | — |
     | `message` | textarea | `Messaggio (opzionale)` | — | `Scrivi qui il tuo messaggio...` |
     | `privacy` | checkbox | `Ho letto e accetto la Privacy Policy per il trattamento dei dati personali. *` (with link to `/privacy-policy`) | required → `Devi accettare la privacy policy` | — |
   - **Role options** (`zu` SelectItems):
     - `Rivenditore` (value=`reseller`)
     - `Partner / Installatore` (value=`partner`)
     - `Candidato in cerca di lavoro` (value=`job_applicant`)
   - **CV helper text** below file input: `Formati accettati: PDF, DOC, DOCX. Max 5MB.`
   - **Submit button:** `Invio in corso...` when submitting, else `Invia candidatura / richiesta` (w-full, rounded-3xl sm:rounded-full, accent)
   - **Submit handler:** `m = async x => { t(true); await new Promise(S => setTimeout(S, 1500)); t(false); r(true); N5.success("Richiesta inviata con successo!"); }` (1.5s fake delay, then shows toast via `N5` from `sonner`)
   - **Toast (sonner):** `Richiesta inviata con successo!`

6. **Footer** (bg-ef-surface-dark, py-12, centered, max-w-4xl)
   - `Ferioli Sergio SRL` (bold) | `P.IVA 02128491202` | `Via Galileo Galilei 140, 40014 Palata Pepoli di Crevalcore (BO)` (sm:inline, with `<br>` on mobile)
   - `Privacy Policy` link to `/privacy-policy`

---

## 4. Footer (global `hD`)

Used on every main page (not on landing pages or Contatti). 4-col grid on `lg`, 2-col on `sm`, 1-col on mobile.

| Column | Heading | Content |
|---|---|---|
| 1 — Brand | (logo) | Logo image → `/`, then tagline `Carpenteria metallica certificata dal 1984.`, then social icons row (`Facebook` yR → `https://facebook.com`, `Instagram` CR → `https://instagram.com`, both `target="_blank" rel="noopener noreferrer"`) |
| 2 — Lavorazioni | `Lavorazioni` | Links: `Cancelli` → `/cancelli`, `Inferriate` → `/inferriate`, `Recinzioni` → `/recinzioni`, `Altre lavorazioni` → `/lavorazioni`, `Allarme` → `/allarme` ⚠️ (broken link — `/allarme` route does not exist in the bundle), `Automazione` → `/automazione` |
| 3 — Contatti | `Contatti` | Phone: `051 985300` (icon `fl`/Phone, link `tel:+39051985300`), Mobile: `347 4287776` (link `tel:+393474287776`), Email: `eurofabbro@eurofabbro.com` (icon `wS`/Mail, link `mailto:...`), Address: `Via Galileo Galilei 140, 40014 Palata Pepoli di Crevalcore (BO)` (icon `Iu`/MapPin, no link), then muted caption `P.IVA 02128491202` |
| 4 — Certificazioni | `Certificazioni` | (text in accent color) `Certificati Istituto Giordano · Marcatura CE` + (muted) `Finanziamenti Compass disponibili` |

**Footer bottom bar** (border-top, flex-wrap, mt-48, pt-24): copyright `© 2024 Ferioli Sergio SRL` · `·` · `Privacy Policy` (link `#`) · `·` · `Preferenze cookie` (link `#`) + the language toggle `tm` (compact).

---

## 5. Forms

### Contatti page form (`GF`)

| Field | Type | Label | Validation | Placeholder / Options |
|---|---|---|---|---|
| `name` | text input | `Nome e cognome *` | `required` | — |
| `phone` | tel input | `Telefono *` | `required` | — |
| `email` | email input | `Email` | — | — |
| `type` | select | `Tipo di lavoro` | — | Options: `--`, Cancello, Inferriata, Recinzione, Scala, Allarme, Automazione, Altro |
| `message` | textarea (rows=5, resizable) | `Messaggio` | — | — |
| `privacy` | checkbox | `Accetto la privacy policy e il trattamento dei dati personali *` | `required` | — |

Submit button: `Invia richiesta` (primary). On success: shows `CheckCircle` icon (48px) + `Richiesta inviata con successo! Ti contatteremo entro 24 ore.` (defined in `t.form.success`). On error (defined, not wired): `Si è verificato un errore. Riprova o contattaci telefonicamente.`

### Landing Cancelli form (`f3`)

| Field | Type | Label | Validation | Placeholder |
|---|---|---|---|---|
| `name` | input | `Nome *` | required: `Il nome è obbligatorio` | — |
| `phone` | tel input | `Numero di telefono *` | required: `Il numero è obbligatorio` | — |
| `message` | textarea | `Messaggio (Opzionale)` | — | — |
| `privacy` | checkbox | `Accetto la Privacy Policy e il trattamento dei dati personali *` (link to `/privacy-policy`) | required: `Devi accettare la privacy policy` | — |

Submit button: `Invia richiesta — ti contattiamo entro 24 ore` (or `Invio in corso...` when submitting).
After submit: green `CircleCheck` icon + `Richiesta inviata!` + `Ti contatteremo al più presto.`
Phone fallback below form: `tel:+39051985300` → ` 051 985300`

### Landing Lavora con Noi form (`O5`)

Default values: `role: "job_applicant"`, `privacy: false`.

| Field | Type | Label | Validation | Placeholder / Options |
|---|---|---|---|---|
| `role` | shadcn Select | `Sono un...` | — | Options: `Seleziona...`, Rivenditore (`reseller`), Partner / Installatore (`partner`), Candidato in cerca di lavoro (`job_applicant`) |
| `name` | input | `Nome e Cognome *` | required: `Campo obbligatorio` | `Mario Rossi` |
| `company` | input | `Azienda (opzionale)` | — | `La tua azienda` |
| `phone` | tel input | `Telefono *` | required: `Campo obbligatorio` | `333 1234567` |
| `email` | email input | `Email *` | required: `Campo obbligatorio` | `mario@esempio.it` |
| `cv` *(conditional on `role === "job_applicant"`)* | file input (accept `.pdf,.doc,.docx`) | `Carica il tuo CV` | — | Helper text: `Formati accettati: PDF, DOC, DOCX. Max 5MB.` |
| `message` | textarea | `Messaggio (opzionale)` | — | `Scrivi qui il tuo messaggio...` |
| `privacy` | checkbox | `Ho letto e accetto la Privacy Policy per il trattamento dei dati personali. *` (link to `/privacy-policy`) | required: `Devi accettare la privacy policy` | — |

Submit button: `Invia candidatura / richiesta` (or `Invio in corso...` when submitting).
After submit: animated `CircleCheck` icon + `Richiesta inviata!` + `Abbiamo ricevuto il tuo messaggio. Il nostro team ti contatterà al più presto.` + button `Invia un'altra richiesta` to reset. Sonner toast: `Richiesta inviata con successo!`

### Detrazioni page calculator (`TF`)

A *non-form* interactive widget:
- **Input:** `<input type="number" value={n} onChange={u => r(u.target.value)} placeholder="es. 5000" />`
- **Live computation (debounced via state):**
  - `s = parseFloat(n) || 0`
  - `a = Math.round(s * 0.36)` → shown as `€ [a].toLocaleString("it-IT")` (Bonus Sicurezza 36%)
  - `l = Math.round(s * 0.5)` → shown as `€ [l].toLocaleString("it-IT")` (Detrazioni 50%)
- Both result cards also display label `Risparmi`

---

## 6. Icons (lucide-react v0.475.0)

The bundle uses **27 lucide-react icons** (in source order from the bundle):

| # | Icon name | Local var | Used in |
|---|---|---|---|
| 1 | `ArrowRight` | `ZP` | LandingCancelli services grid, various inline `→` |
| 2 | `BadgeCheck` | `Y0` | Cert badge inline component (`Bl`) |
| 3 | `BadgePercent` | `X0` | Deduction banner (`Vl`) icon |
| 4 | `Bell` | `rR` | Allarmi (not in main vD) |
| 5 | `Briefcase` | `lp` | Work With Us CTA icon |
| 6 | `Building2` | `sR` | LandingLavoraConNoi "Rivenditori" card icon |
| 7 | `Calendar` | `J0` | Landing pages trust badges ("Est. 1977") |
| 8 | `CarFront` | `cR` | Products grid "Carport e Tettoie" + LandingCancelli "Carport e pensiline" |
| 9 | `Check` | `Mo` | Generic checkmarks in benefit lists (Cancelli, Recinzioni, Inferriate, Carport, Detrazioni) |
| 10 | `ChevronDown` | `od` | Header nav dropdown arrow |
| 11 | `ChevronUp` | `vS` | (defined but not observed in pages I read) |
| 12 | `CircleCheckBig` | `Sm` | Process step 3 icon, final CTA success message icon |
| 13 | `CircleCheck` | `cp` | Landing pages success state icon, "Perché Eurofabbro" checkmark list |
| 14 | `DoorOpen` | `Cm` | Products grid "Cancelli e accessi" + LandingCancelli "Cancelli a battente" |
| 15 | `Facebook` | `yR` | Footer social link |
| 16 | `Fence` | `xS` | Products grid "Recinzioni" + LandingCancelli "Recinzioni in ferro" |
| 17 | `Grid3x3` | `bS` | Products grid "Inferriate di sicurezza" + LandingCancelli "Inferriate di sicurezza" |
| 18 | `HardHat` | `wR` | LandingLavoraConNoi "Cerca Lavoro" card icon |
| 19 | `Instagram` | `CR` | Footer social link |
| 20 | `Mail` | `wS` | Contatti email card + Footer email |
| 21 | `MapPin` | `Iu` | Contatti "Sede" card + Footer address + Landing pages trust badges |
| 22 | `Menu` | `PR` | Header mobile menu toggle (hamburger) |
| 23 | `MessageCircle` | `sd` | WhatsApp CTA + WhatsApp FAB (`pD`) + Process step 1 |
| 24 | `Phone` | `fl` | Contatti phone card + Footer phone links |
| 25 | `Ruler` | `_R` | Process step 2 |
| 26 | `Settings` | `SS` | Products grid "Automazione" + LandingCancelli "Automazione cancelli" |
| 27 | `ShieldCheck` | `Z0` | Landing pages "CE Certified" trust badge |
| 28 | `Star` | `CS` | Testimonial rating stars (5 per testimonial) |
| 29 | `TrendingUp` | `LR` | Products grid "Scale in ferro" |

Additional icons from bundle (defined in lucide-react lib but possibly unused in pages): none beyond the 29 above that I can confirm are referenced from page components.

---

## 7. Layout & component mapping summary

| Route | Component var | Wraps in `gD` layout? | Renders own Header? | Renders own Footer? |
|---|---|---|---|---|
| `/` | redirect to `/Home` | — | — | — |
| `/Home` | `yF` | ✅ | ✅ | ✅ |
| `/lavorazioni` | `wF` | ✅ | ✅ | ✅ |
| `/cancelli` | `vF` | ✅ | ✅ | ✅ |
| `/inferriate` | `xF` | ✅ | ✅ | ✅ |
| `/recinzioni` | `bF` | ✅ | ✅ | ✅ |
| `/carport` | `SF` | ✅ | ✅ | ✅ |
| `/automazione` | `CF` | ✅ | ✅ | ✅ |
| `/perche-noi` | `EF` | ✅ | ✅ | ✅ |
| `/realizzazioni` | `kF` | ✅ | ✅ | ✅ |
| `/detrazioni` | `TF` | ✅ | ✅ | ✅ |
| `/contatti` | `GF` | ❌ (self-contained) | ❌ | ❌ |
| `/landing/cancelli-recinzioni` | `f3` | ❌ (self-contained) | ✅ (logo only) | ✅ (simple) |
| `/landing/lavora-con-noi` | `O5` | ❌ (self-contained) | ✅ (logo only) | ✅ (simple) |
| `*` (404) | `NO` | (wrapped in `gD`) | ✅ | ✅ |

**Layout (`gD`):** min-h-screen flex column, renders `fD` (header) → `<main>{c_ (Outlet)}</main>` → `hD` (footer) → `pD` (WhatsApp FAB) → `mD` (scroll-to-top FAB).

**Reusable internal components:**
- `ri` — page hero (used by Cancelli, Inferriate, Recinzioni, Lavorazioni, Carport, Automazione, Perché noi, Realizzazioni, Detrazioni). Takes props: `headline`, `headlineAccent`, `headlinePost` (default `""`), `subheadline`, `cta`, `ctaTo`, `image`. min-height 70vh, paddingTop 140px, framer-motion staggered fade-in (0.2s, 0.35s, 0.5s delays).
- `He` — generic `<section>` wrapper with `He({children, className="", dark=false, secondary=false, id})`. Sets bg color (`--color-surface-dark` for dark, `--color-bg-secondary` for secondary, `--color-bg` default), padding, framer-motion whileInView fade+slide.
- `Ye` — italic accent span `<span style="color: var(--color-accent); font-style: italic">`
- `ni` — small uppercase eyebrow label (text-label, accent, block, mb-12)
- `Bl` — Cert badge inline component. Two variants: `compact: true` (small chip) and default (full card with icon, "Certificati Istituto Giordano", "Marcatura CE · Testati 60.000 aperture")
- `Vl` — Deduction banner. Two variants: `compact: true` (inline link) and default (full dark CTA section)
- `vn` — Button wrapper (Link/href variants, variants: default, secondary, whatsapp; size lg with `onDark`)
- `Zs`, `wr`, `Sr`, `Cr` — shadcn/ui Accordion primitives
- `Cs` / `CS` — Star (used in testimonial ratings and landing)
- `Mo` — Check
- `Sm` — CircleCheckBig
- `cp` — CircleCheck
- `fl` — Phone
- `sd` — MessageCircle
- `Iu` — MapPin
- `wS` — Mail
- `wD` — animated counter (parses number, animates from 0 to value with cubic ease-out over 1800ms, supports Italian locale formatting, preserves prefix/suffix)
- `lD` — IntersectionObserver hook for `inView` state
- `pt` — translation getter (returns the active language's content object — `uD` for IT, `dD` for EN)
- `Ft` — reduced-motion hook (returns true if user prefers reduced motion → disables framer animations)
- `ti` — `useLocation` wrapper (closes mobile menu on route change)
- `ld` — `useNavigate` wrapper
- `tm` — language toggle component (IT/EN switch, persists to `eurofabbro_lang` localStorage)
- `Dp` — AnimatePresence wrapper
- `cD` — broadcasts language change to subscribers
- `kE` — `useContext` hook for the lang store

---

## 8. Technical / Design notes

- **Framework:** React (likely 18.x) + Vite/CRACO build, react-router (HashRouter-style based on the `<Ut>` path component usage, likely `react-router-dom@6` with the `<Route path element>` JSX form). Layout uses `<Outlet/>` (`c_`).
- **Animation:** `framer-motion` v11/12 (the `De.div`, `De.h1`, `De.p`, `De.img`, `De.button`, `De.section` are all `motion` components). All entrance animations use `initial` / `animate` / `whileInView` with viewport `{ once: true, margin: "-80px" }` for scroll-triggered sections.
- **Forms:** `react-hook-form` (v7, exposed as `Bg` / `useFormContext`). `Controller` used as `om`. Validation messages in Italian.
- **i18n:** Custom context-based store (`EE="eurofabbro_lang"`, `em` = current lang, `ju` = subscribers, `localStorage`-persisted). IT default. `kE` is the `useLang` hook returning `{lang, setLang}`.
- **UI primitives:** shadcn/ui — Accordion (`Zs`/`wr`/`Sr`/`Cr`), Button (`ks` with CVA variants), Input (`Ai`), Label (`En`), Textarea (`Vg`), Checkbox (`$g`), Select (`w5`/`I2`/`S5`/`D2`/`zu`), Toast (sonner — `N5.success(...)`).
- **Tailwind 3** with custom `ef-*` palette (see `DESIGN_TOKENS.md` for full token list). CSS variables `--color-*`, `--text-*`, `--leading-*`, `--tracking-*`, `--weight-*`, `--section-padding-*`, `--content-*`, `--radius-*`, `--shadow-*`, `--font-*`, `--duration-*`, `--ease-*` drive both custom utilities and inline styles.
- **Font:** Inter (Google Fonts, weights 300/400/500/600/700) for both display and body.
- **Routing structure (from route table at offset 756711):**
  ```jsx
  <Routes>
    <Route path="/landing/cancelli-recinzioni" element={<f3/>} />
    <Route path="/landing/lavora-con-noi" element={<O5/>} />
    <Route element={<gD/>}>
      <Route path="/" element={<Redirect to="/Home" replace/>} />
      <Route path="/Home" element={<yF/>} />
      <Route path="/cancelli" element={<vF/>} />
      <Route path="/inferriate" element={<xF/>} />
      <Route path="/recinzioni" element={<bF/>} />
      <Route path="/lavorazioni" element={<wF/>} />
      <Route path="/carport" element={<SF/>} />
      <Route path="/automazione" element={<CF/>} />
      <Route path="/perche-noi" element={<EF/>} />
      <Route path="/realizzazioni" element={<kF/>} />
      <Route path="/detrazioni" element={<TF/>} />
      <Route path="/contatti" element={<GF/>} />
    </Route>
    <Route path="*" element={<NO/>} />  {/* 404 */}
  </Routes>
  ```
- **Auth gate:** `z5` checks `isLoadingAuth` / `isLoadingPublicSettings` / `authError` from `zO` (Base44 SDK) and renders a centered spinner, then either an `IO` (UserNotRegistered) component, redirects to login, or the actual routes. The main app is wrapped in `<OO>` (QueryClientProvider) with `tj` client `pj`, `<v_>` (Suspense with skeleton) around `<z5>`, and `<AA>` (likely an error boundary / auth refresh).

---

## 9. Placeholders / TODOs in the original copy

The original site has explicit "CONTENUTO RICHIESTO DAL CLIENTE" (client-requested content) placeholder notes that should be replaced before launch:

| Page | Placeholder text |
|---|---|
| Testimonials (home) | `CONTENUTO RICHIESTO DAL CLIENTE — 3 testimonial reali con nome, località e prodotto installato` (currently rendered in `percheNoi.tNote` only, *not* on Home — the 3 hardcoded testimonials on Home are the same placeholder names) |
| Perché noi — Story | `CONTENUTO RICHIESTO DAL CLIENTE — anno di fondazione, nome del fondatore e breve storia personale dell'azienda.` |
| Perché noi — Guarantee | `CONTENUTO RICHIESTO DAL CLIENTE — termini espliciti della garanzia (durata, cosa copre).` |
| Realizzazioni | `CONTENUTO RICHIESTO DAL CLIENTE — descrizioni aggiuntive per ogni progetto (tipo di cliente, anno, contesto).` |
| Detrazioni — Compass | `CONTENUTO RICHIESTO DAL CLIENTE — termini esatti Compass, importi minimi/massimi, contatto per consulenza.` |
| Contatti — Map | `CONTENUTO RICHIESTO DAL CLIENTE — coordinate Google Maps o codice embed per Via Galileo Galilei 140, Palata Pepoli di Crevalcore (BO).` (the embed currently uses **placeholder coords** `11.15, 44.72` — must be replaced) |

**Bugs in the original:**
- Footer has a link to `/allarme` (with label `e.nav.allarme`), but the route does not exist in the bundle and the `uD.nav` object does not define an `allarme` key — the link will render an empty string and 404.
- Contatti and Landing pages don't render the global `Header`/`Footer` from the layout.
- All three forms (Contatti, both landing pages) only `console.log` the data on submit — no actual API call. The Landing LavoraConNoi form has a fake 1.5s delay and a sonner toast.
- Landing Cancelli is **partly bilingual** (services, testimonial, stats, FAQ answers in English inside an Italian page).

---

## 10. Route summary

| Path | Page | Component | Layout |
|---|---|---|---|
| `/` | Redirect | — | — |
| `/Home` | Home | `yF` | `gD` (header+footer+FABs) |
| `/cancelli` | Cancelli | `vF` | `gD` |
| `/inferriate` | Inferriate | `xF` | `gD` |
| `/recinzioni` | Recinzioni | `bF` | `gD` |
| `/lavorazioni` | Lavorazioni | `wF` | `gD` |
| `/carport` | Carport | `SF` | `gD` |
| `/automazione` | Automazione | `CF` | `gD` |
| `/perche-noi` | Perché noi | `EF` | `gD` |
| `/realizzazioni` | Realizzazioni | `kF` | `gD` |
| `/detrazioni` | Detrazioni | `TF` | `gD` |
| `/contatti` | Contatti | `GF` | (none, self-contained) |
| `/landing/cancelli-recinzioni` | Landing Cancelli | `f3` | (none, self-contained) |
| `/landing/lavora-con-noi` | Landing Lavora con Noi | `O5` | (none, self-contained) |
| `*` | 404 | `NO` | `gD` |
