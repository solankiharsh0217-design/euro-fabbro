export const site = {
  name: "Eurofabbro",
  company: "Ferioli Sergio SRL",
  tagline: "Carpenteria metallica certificata dal 1984.",
  taglineEn: "Certified metalwork since 1984.",
  phone: "051 985300",
  phoneTel: "+39051985300",
  mobile: "347 4287776",
  mobileTel: "+393474287776",
  whatsapp: "393474287776",
  email: "eurofabbro@eurofabbro.com",
  address: "Via Galileo Galilei 140, 40014 Palata Pepoli di Crevalcore (BO)",
  piva: "P.IVA 02128491202",
  founded: 1977,
  logo: "/images/323043202_logo.png",
  logoLanding: "/images/logo-landing.png",
  social: {
    facebook: "https://www.facebook.com/EUROFABBRO/",
    instagram: "https://www.instagram.com/eurofabbro/",
  },
} as const;

export const nav = {
  lavorazioni: "Lavorazioni",
  cancelli: "Cancelli",
  inferriate: "Inferriate",
  recinzioni: "Recinzioni",
  altreLavorazioni: "Altre lavorazioni",
  carport: "Carport e Tettoie",
  automazione: "Automazione",
  percheNoi: "Perché noi",
  realizzazioni: "Realizzazioni",
  detrazioni: "Detrazioni",
  contatti: "Contatti",
  cta: "Richiedi preventivo",
} as const;

export const hero = {
  badge: "Certificati Istituto Giordano · CE",
  headlineLine1: "Carpenteria metallica",
  headlineLine2Pre: "",
  headlineLine2Accent: "certificata",
  headlineLine2Post: " su misura",
  subheadline:
    "Quarant'anni di lavorazioni in ferro nella provincia di Bologna. Produzione interna, marcatura CE, garanzia su ogni installazione.",
  ctaPrimary: "Richiedi preventivo gratuito",
  ctaSecondary: "Scopri le lavorazioni",
  stat1: "1977–2026 | 49 Anni di esperienza",
  stat2: "Certificati Istituto Giordano",
  stat3: "Preventivo gratuito in 24h",
};

export const products = {
  preLabel: "Cosa realizziamo",
  headlinePre: "Tutto ciò che puoi fare ",
  headlineAccent: "in ferro",
  subheadline:
    "Dalla progettazione alla posa in opera, realizziamo ogni lavoro internamente. Preventivo gratuito, consegna garantita.",
  viewAll: "Vedi tutte le lavorazioni",
  learnMore: "Scopri di più",
  items: [
    {
      name: "Cancelli e accessi",
      desc: "Accesso protetto e su misura per la tua proprietà. Cancelli scorrevoli, a battente, pedonali e automatizzati.",
      icon: "DoorOpen",
      link: "/cancelli",
      image: "/images/eb6ff68c0_generated_image.png",
    },
    {
      name: "Inferriate di sicurezza",
      desc: "Protezione per finestre e porte senza rinunciare all'estetica e alla luce naturale.",
      icon: "Grid3x3",
      link: "/inferriate",
      image: "/images/ff67b59d2_generated_image.png",
    },
    {
      name: "Recinzioni",
      desc: "Perimetro sicuro e decorativo in ferro battuto o doghe modulari per ogni esigenza.",
      icon: "Fence",
      link: "/recinzioni",
      image: "/images/Cancelli-in-ferro-cento-1-300x225.jpg",
    },
    {
      name: "Scale in ferro",
      desc: "Scale su misura per interni ed esterni, residenziali e industriali, resistenti nel tempo.",
      icon: "TrendingUp",
      link: "/lavorazioni#scale",
      image: "/images/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg",
    },
    {
      name: "Carport e Tettoie",
      desc: "Strutture autoportanti in ferro su misura per proteggere auto e veicoli dagli agenti atmosferici.",
      icon: "Car",
      link: "/carport",
      image: "/images/28f664fa9_generated_image.png",
    },
    {
      name: "Automazione",
      desc: "Comfort e sicurezza con sistemi di automazione per cancelli e serramenti.",
      icon: "Settings",
      link: "/automazione",
      image: "/images/1fd69a4bb_generated_image.png",
    },
  ],
};

export const turnkey = {
  preLabel: "Valore Plus by Ferioli",
  headlinePre: "Valore Plus — ",
  headlineAccent: "Il servizio chiavi in mano",
  headlinePost: " di Ferioli",
  subheadline: "Dalla progettazione alla posa: pensiamo a tutto noi.",
  cards: [
    {
      title: "Progettazione",
      text: "Sopralluogo, misure e progetto su misura. Studiamo ogni dettaglio in base al tuo spazio, al tuo stile e alle normative vigenti.",
      image: "/images/2a8eed53a_generated_image.png",
    },
    {
      title: "Pratiche",
      text: "Ti affianchiamo nella gestione della documentazione tecnica e nelle pratiche necessarie, senza che tu debba pensarci.",
      image: "/images/81e9c3696_generated_image.png",
    },
    {
      title: "Realizzazione",
      text: "Produciamo e installiamo direttamente, senza intermediari. Dalla nostra officina a casa tua, con un unico interlocutore.",
      image: "/images/a18bfad4e_generated_image.png",
    },
  ],
  closing: '"Un solo referente, dalla prima telefonata al cancello installato."',
};

export const authority = {
  preLabel: "Perché scegliere Eurofabbro",
  headlinePre: "L'unica carpenteria ",
  headlineAccent: "certificata",
  headlinePost: " della zona",
  body: "Grazie alla certificazione dell'Istituto Giordano — ente tecnico fondato nel 1959 — i nostri cancelli sono testati per 60.000 aperture e marchiati CE. Siamo il punto di riferimento per carpenteria metallica certificata tra Bologna e Cento.",
  certBadge: "Certificati Istituto Giordano · Marcatura CE",
  stats: [
    { number: "49", label: "Anni di attività (1977-2026)" },
    { number: "60.000", label: "Aperture testate per marcatura CE" },
    { number: "100%", label: "Produzione interna su misura" },
    { number: "24h", label: "Per ricevere il tuo preventivo" },
  ],
};

export const processSteps = {
  preLabel: "Il nostro processo",
  headlinePre: "Dalla ",
  headlineAccent: "richiesta",
  headlinePost: " alla posa in opera",
  steps: [
    {
      title: "1. Contattaci",
      desc: "Chiamaci, scrivici su WhatsApp o compila il form. Risponderemo entro 24 ore per fissare un sopralluogo gratuito.",
      icon: "MessageCircle",
    },
    {
      title: "2. Sopralluogo e progetto",
      desc: "Veniamo da te, misuriamo e progettiamo la soluzione su misura. Ti inviamo un preventivo dettagliato senza impegno.",
      icon: "Ruler",
    },
    {
      title: "3. Produzione e posa",
      desc: "Produciamo internamente e installiamo. Garantiamo il lavoro e siamo disponibili per ogni necessità post-installazione.",
      icon: "CheckCircle",
    },
  ],
};

export const featuredProjects = {
  preLabel: "I nostri lavori",
  headlinePre: "Ogni ",
  headlineAccent: "lavorazione",
  headlinePost: " racconta una storia",
  viewAll: "Vedi tutte le realizzazioni",
  projects: [
    { name: "Cancello Autoportante", location: "Bologna", image: "/images/1.jpeg", link: "/cancelli" },
    { name: "Inferriate di Sicurezza", location: "Cento (FE)", image: "/images/5.jpg", link: "/inferriate" },
    { name: "Scale e Strutture", location: "Crevalcore (BO)", image: "/images/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg", link: "/lavorazioni" },
    { name: "Cancello a Battente", location: "San Giovanni in Persiceto (BO)", image: "/images/2.jpeg", link: "/cancelli" },
    { name: "Recinzioni su Misura", location: "Massa Finalese (MO)", image: "/images/Cancelli-in-ferro-cento-1-300x225.jpg", link: "/recinzioni" },
    { name: "Grate Antieffrazione", location: "Bologna", image: "/images/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg", link: "/inferriate" },
  ],
};

export const deductionBanner = {
  headlinePre: "Risparmia fino al ",
  headlineAccent: "50%",
  headlinePost: " con le detrazioni fiscali",
  body: "Il Bonus Sicurezza ti permette di detrarre il 36% delle spese per cancelli, inferriate e sistemi di sicurezza. Con le detrazioni fiscali si arriva al 50%. Finanziamento a tasso agevolato con Compass, rate da 24 a 48 mesi.",
  cta: "Scopri come risparmiare",
  badges: ["Bonus Sicurezza 36%", "Detrazione 50%", "Compass 24/36/48 mesi"],
};

export const testimonials = {
  preLabel: "Dicono di noi",
  headlinePre: "La ",
  headlineAccent: "fiducia",
  headlinePost: " dei nostri clienti",
  items: [
    {
      quote: "Lavoro impeccabile sul nostro cancello scorrevole. Professionali, puntuali e il risultato ha superato le aspettative. Consigliatissimi.",
      name: "Marco R.",
      location: "Crevalcore (BO)",
      rating: 5,
    },
    {
      quote: "Abbiamo fatto realizzare le inferriate per tutta la casa. Qualità eccellente, installazione rapida e pulizia sul cantiere. Molto soddisfatti.",
      name: "Laura B.",
      location: "Cento (FE)",
      rating: 5,
    },
    {
      quote: "Ci siamo affidati a Ferioli per le recinzioni del capannone. Prezzo giusto, lavoro solido e duraturo. Li raccomandiamo senza riserve.",
      name: "Giovanni P.",
      location: "San Giovanni in Persiceto (BO)",
      rating: 5,
    },
  ],
};

export const cta = {
  preLabel: "Inizia oggi",
  headlinePre: "Richiedi il tuo preventivo ",
  headlineAccent: "gratuito",
  subheadline: "Sopralluogo gratuito, preventivo senza impegno. Rispondiamo entro 24 ore.",
  btnForm: "Compila il form",
  btnWhatsapp: "Scrivici su WhatsApp",
  btnPhone: "051 985300",
  reassurance: ["Risposta entro 24 ore", "Sopralluogo gratuito", "Preventivo senza impegno"],
};

export const workWithUs = {
  preLabel: "Collabora con noi",
  headlinePre: "Cerchiamo ",
  headlineAccent: "partner",
  headlinePost: " e professionisti",
  subheadline:
    "Unisciti alla nostra rete. Siamo sempre alla ricerca di installatori, rivenditori e professionisti qualificati.",
  cta: "Scopri di più",
};

export const footer = {
  tagline: "Carpenteria metallica certificata dal 1984.",
  colLavorazioni: "Lavorazioni",
  colContatti: "Contatti",
  colCertificazioni: "Certificazioni",
  certText: "Certificati Istituto Giordano · Marcatura CE",
  compassText: "Finanziamenti Compass disponibili",
  copyright: "© 2024 Ferioli Sergio SRL",
  privacy: "Privacy Policy",
  cookie: "Preferenze cookie",
  phone: "051 985300",
  mobile: "347 4287776",
  email: "eurofabbro@eurofabbro.com",
  address: "Via Galileo Galilei 140, 40014 Palata Pepoli di Crevalcore (BO)",
  piva: "P.IVA 02128491202",
};

export const cancelliContent = {
  hero: {
    headline: "Cancelli su misura e ",
    headlineAccent: "pronta consegna",
    subheadline:
      "Produciamo e vendiamo cancelli di qualsiasi tipologia. Soluzioni su misura basate sulle esigenze del cliente, garanzia qualità ed estetica superiori.",
    cta: "Richiedi il tuo preventivo",
  },
  variantsTitle: "Ogni ",
  variantsTitleAccent: "tipologia",
  variantsTitlePost: " su misura",
  variants: [
    {
      name: "Cancelli scorrevoli",
      desc: "Cancelli scorrevoli tradizionali con guida a terra, sospesi e autoportanti senza guida. Zincati e verniciabili su richiesta.",
    },
    {
      name: "Cancelli pedonali",
      desc: "Cancelli pedonali in ferro su misura, progettati per integrarsi con recinzioni e strutture esistenti.",
    },
    {
      name: "Cancelli a battente e a libro",
      desc: "Cancelli ad anta battente e a libro con progettazione personalizzata, realizzazione artigianale e installazione.",
    },
    {
      name: "Cancelli autoportanti",
      desc: "Soluzione scorrevole senza guida a terra, ideale per aziende, abitazioni e ingressi carrabili con passaggi frequenti.",
    },
  ],
  whyIronTitle: "Perché scegliere il ",
  whyIronAccent: "ferro",
  whyIronBenefits: [
    "Resistenza alla compressione e alle trazioni",
    "Materiale indeformabile nel tempo",
    "Personalizzabile per stile e tipologia",
    "Vasta gamma di finiture e trattamenti",
  ],
  prontaConsegnaTitle: "Cancelli in ",
  prontaConsegnaAccent: "pronta consegna",
  prontaConsegnaBody:
    "Disponiamo di una gamma di cancelli in pronta consegna, visibili presso la nostra mostra espositiva a Palata Pepoli di Crevalcore (BO). Se hai bisogno urgente di un cancello, possiamo aiutarti a scegliere rapidamente la soluzione più adatta.",
  faq: [
    {
      q: "Realizzate cancelli in ferro su misura?",
      a: "Sì, realizziamo cancelli in ferro completamente su misura, progettati in base alle esigenze estetiche e funzionali del cliente.",
    },
    {
      q: "Quanto costa un cancello in ferro su misura?",
      a: "Il costo dipende da dimensioni, design, finiture e tipologia. Dopo un sopralluogo forniamo un preventivo preciso e personalizzato.",
    },
    {
      q: "I cancelli rispettano le normative e sono marcati CE?",
      a: "Sì, i cancelli vengono realizzati nel rispetto delle normative vigenti, marcati CE quando previsto e forniti con la documentazione tecnica necessaria.",
    },
    {
      q: "In quali zone operate?",
      a: "Operiamo a Bologna e provincia, Modena e provincia, con sopralluoghi e installazioni dirette sul territorio.",
    },
  ],
};

export const inferriateContent = {
  hero: {
    headline: "Inferriate su misura per ",
    headlineAccent: "sicurezza ed estetica",
    subheadline:
      "Produzione e vendita di inferriate in ferro su misura, progettate per aumentare la sicurezza dell'abitazione senza rinunciare all'estetica.",
    cta: "Richiedi il tuo preventivo",
  },
  variants: [
    {
      name: "Inferriate fisse",
      desc: "Ideali per finestre e aperture che non richiedono passaggio. Elevata protezione, solidità strutturale e ampia personalizzazione estetica.",
    },
    {
      name: "Inferriate apribili",
      desc: "Per porte, finestre e portefinestre. Mantengono la sicurezza garantendo praticità di utilizzo e facilità di gestione.",
    },
    {
      name: "Inferriate snodabili",
      desc: "Indicate per portefinestre e passaggi frequenti. Occupano poco spazio con impatto estetico contenuto.",
    },
    {
      name: "Inferriate a due ante",
      desc: "Soluzione pratica per aperture di dimensioni maggiori, personalizzabili nelle finiture e integrabili nello stile dell'abitazione.",
    },
  ],
  benefitsTitle: "La perfetta unione tra ",
  benefitsAccent: "sicurezza",
  benefitsPost: " ed estetica",
  benefits: [
    "Forte deterrente contro furti e intrusioni",
    "Finestre aperte in sicurezza per ventilazione",
    "Non richiedono alimentazione elettrica",
    "Protezione duratura nel tempo",
    "Contribuiscono all'estetica dell'immobile",
    "Fiscalmente detraibili",
  ],
  faq: [
    {
      q: "Le inferriate sono realizzate su misura?",
      a: "Sì, tutte le inferriate vengono realizzate su misura per adattarsi perfettamente a finestre, porte e aperture esistenti.",
    },
    {
      q: "Esistono inferriate apribili?",
      a: "Sì, realizziamo inferriate apribili che garantiscono sicurezza senza rinunciare alla praticità e alle vie di fuga.",
    },
    {
      q: "Le inferriate sono detraibili fiscalmente?",
      a: "Sì, l'installazione delle inferriate rientra negli interventi di sicurezza dell'immobile ed è detraibile fiscalmente secondo la normativa vigente.",
    },
  ],
};

export const recinzioniContent = {
  hero: {
    headline: "Recinzioni in ferro ",
    headlineAccent: "su misura",
    subheadline:
      "Vendita e installazione di recinzioni in ferro personalizzate per abitazioni, condomini e aziende. Modelli su misura e doghe modulari.",
    cta: "Richiedi il tuo preventivo",
  },
  ironTitle: "Recinzioni in ferro: una soluzione che ",
  ironAccent: "dura nel tempo",
  ironBody:
    "Il ferro è un materiale indeformabile nel tempo, resistente a qualsiasi temperatura e condizione climatica, che richiede una manutenzione minima. Affidandoti a noi, ti assicurerai che cancello e recinzione seguano lo stesso disegno di lavorazione del ferro.",
  modularTitle: "Doghe modulari e ",
  modularAccent: "reti metalliche",
  modularBody:
    "Disponiamo anche di modelli standard a doghe modulari, ideali per recintare in modo semplice, veloce e a un prezzo conveniente. Le reti metalliche sono perfette per delimitare spazi agricoli e industriali con forte resistenza e lunga durata.",
  benefits: [
    "Sicurezza e resistenza nel tempo",
    "Ampia possibilità di personalizzazione",
    "Coordinamento con cancelli esistenti",
    "Soluzioni per privati e aziende",
  ],
};

export const lavorazioniContent = {
  hero: {
    headline: "Altre lavorazioni in ",
    headlineAccent: "ferro",
    subheadline:
      "Scale, balaustre, carport, dehor commerciali e arredi in ferro. Ogni progetto è studiato su misura per le tue esigenze.",
    cta: "Richiedi il tuo preventivo",
  },
  sections: [
    {
      id: "scale",
      name: "Scale in ferro",
      desc: "Progettiamo e realizziamo scale in ferro su misura per interni ed esterni, sia residenziali che industriali. Scale dritte, con pianerottolo, a struttura metallica — combinabili con legno, vetro o altri materiali.",
      image: "/images/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg",
    },
    {
      id: "balustre",
      name: "Balaustre e ringhiere",
      desc: "Realizziamo balaustre e ringhiere personalizzate per balconi, scale e terrazzi, nel rispetto delle normative di sicurezza. Parapetti e corrimano sia per interni che per esterni, con trattamento di zincatura per lunga durata.",
      image: "/images/parapetti-per-balconi-1-300x225.jpg",
    },
    {
      id: "carport",
      name: "Carport e tettoie",
      desc: "Realizziamo carport in ferro su misura: tettoie e pensiline autoportanti per proteggere auto e veicoli dagli agenti atmosferici. Personalizzabili e zincati per massima resistenza.",
      image: "/images/28f664fa9_generated_image.png",
    },
    {
      id: "dehor",
      name: "Dehor commerciali",
      desc: "Dehor su misura in ferro per bar, ristoranti e attività commerciali. Strutture resistenti, eleganti e personalizzabili a 360 gradi, nel rispetto delle normative comunali.",
      image: "/images/Strutture-in-ferro-su-misura.jpg",
    },
    {
      id: "arredi",
      name: "Arredi in ferro",
      desc: "Produzione di arredi in ferro sia industriali che per la casa: scaffalature, banchi di lavoro, letti, mobili, arredo bagno, librerie. Tutto personalizzabile al 100% su misura.",
      image: "/images/Arredi-in-ferro-su-misura-bologna-1-300x225.jpg",
    },
  ],
};

export const carportContent = {
  hero: {
    headline: "Carport e tettoie in ",
    headlineAccent: "ferro su misura",
    subheadline:
      "Realizziamo carport e pensiline in ferro personalizzate per proteggere auto e veicoli dagli agenti atmosferici. Strutture autoportanti, zincate e verniciabili su richiesta.",
    cta: "Richiedi il tuo preventivo",
  },
  introTitle: "Protezione su misura per ",
  introAccent: "la tua auto",
  introBody:
    "Un carport in ferro è la soluzione ideale per chi vuole proteggere il proprio veicolo dagli agenti atmosferici senza rinunciare all'estetica. Rispetto a un garage tradizionale, occupa meno spazio, costa meno e si integra perfettamente con il giardino o il vialetto d'accesso. Ogni struttura è progettata su misura, costruita nel nostro laboratorio e installata direttamente da noi.",
  featuresTitle: "Perché scegliere un carport in ",
  featuresAccent: "ferro",
  features: [
    "Struttura autoportante senza pilastri intermedi",
    "Zincatura a caldo per massima resistenza alle intemperie",
    "Personalizzabile in dimensioni, forme e finiture",
    "Adatto a uso residenziale e industriale",
    "Compatibile con pannelli fotovoltaici",
    "Manutenzione minima nel tempo",
    "Produzione interna e installazione diretta",
    "Preventivo gratuito entro 24h",
  ],
  typesTitle: "Tipologie di ",
  typesAccent: "coperture",
  types: [
    {
      name: "Carport singolo",
      desc: "Copertura per un singolo veicolo, ideale per abitazioni private con accesso carrabile. Design pulito e integrato con l'architettura esistente. Disponibile in varie larghezze e altezze.",
      image: "/images/28f664fa9_generated_image.png",
    },
    {
      name: "Carport doppio",
      desc: "Soluzione per due o più veicoli, perfetta per famiglie o piccole attività. Struttura robusta con ampio spazio utile. Possibilità di aggiungere pareti laterali o pannelli di chiusura.",
      image: "/images/9edc19b42_generated_image.png",
    },
    {
      name: "Pensiline industriali",
      desc: "Coperture su misura per aziende, magazzini e aree di carico/scarico. Alta resistenza e lunga durata garantita. Ideali per grandi superfici con alta portata strutturale.",
      image: "/images/190366ac2_generated_image.png",
    },
    {
      name: "Tettoie per esterni",
      desc: "Protezione per ingressi, terrazzi e aree esterne. Eleganti, personalizzabili e resistenti alle intemperie. Perfette anche per proteggere aree di sosta camper o moto.",
      image: "/images/d5f42817e_generated_image.png",
    },
  ],
  materialsTitle: "Materiali e ",
  materialsAccent: "finiture",
  materials: [
    {
      name: "Ferro zincato a caldo",
      desc: "La zincatura a caldo garantisce la massima protezione dalla ruggine e dagli agenti atmosferici, con una durata superiore a 20 anni senza manutenzione.",
    },
    {
      name: "Verniciatura a polvere",
      desc: "Disponibile in qualsiasi colore RAL. La verniciatura a polvere offre un'ottima resistenza agli urti e ai raggi UV, mantenendo il colore invariato nel tempo.",
    },
    {
      name: "Coperture in policarbonato",
      desc: "Pannelli trasparenti o traslucidi che lasciano passare la luce naturale pur proteggendo dalla pioggia. Leggeri, resistenti e isolanti.",
    },
    {
      name: "Lamiera grecata",
      desc: "Soluzione economica e robusta per coperture opache. Alta resistenza meccanica e impermeabilità garantita nel tempo.",
    },
  ],
  faq: [
    {
      q: "Quanto costa un carport in ferro su misura?",
      a: "Il costo varia in base alle dimensioni, alla tipologia di copertura e alle finiture scelte. Dopo un sopralluogo gratuito ti forniamo un preventivo dettagliato e senza impegno.",
    },
    {
      q: "È necessario il permesso edilizio per installare un carport?",
      a: "Dipende dalle dimensioni e dal comune di riferimento. Per strutture di piccole dimensioni spesso è sufficiente la CILA. Vi assistiamo nell'iter burocratico.",
    },
    {
      q: "In quanto tempo viene realizzato e installato?",
      a: "I tempi dipendono dalla complessità del progetto. Mediamente, dalla conferma del preventivo all'installazione passano 3-6 settimane.",
    },
    {
      q: "I carport sono compatibili con pannelli solari?",
      a: "Sì, progettiamo le strutture per accogliere pannelli fotovoltaici, ottimizzando il dimensionamento dei profilati per la portata aggiuntiva.",
    },
    {
      q: "Operate in tutta la provincia di Bologna?",
      a: "Operiamo nelle province di Bologna e Modena con sopralluoghi e installazioni dirette.",
    },
  ],
};

export const automazioneContent = {
  hero: {
    headline: "Sistemi di ",
    headlineAccent: "automazione",
    headlinePost: " per cancelli",
    subheadline:
      "Realizziamo e installiamo sistemi di automazione per cancelli, porte e serramenti. Controllo tramite telecomando, smartphone e sistemi domotici.",
    cta: "Richiedi consulenza",
  },
  howTitle: "Come funziona un cancello ",
  howAccent: "automatico",
  howBody:
    "Un cancello automatico si muove grazie a un motore elettrico collegato a una centralina di controllo. I sensori di sicurezza rilevano eventuali ostacoli e il movimento si arresta automaticamente.",
  types: [
    {
      name: "Cancelli automatici a battente",
      desc: "Le ante si aprono ruotando su un perno, generalmente verso l'interno. Ideali quando c'è spazio sufficiente per l'apertura.",
    },
    {
      name: "Cancelli automatici scorrevoli",
      desc: "La parte mobile scorre lateralmente lungo la recinzione. Adatti per ingressi con spazio limitato e accessi frequenti.",
    },
  ],
  controls: ["Telecomando", "Smartphone con app dedicata", "Tastiera di comando", "Sistemi domotici integrati"],
  serviceTitle: "Servizio ",
  serviceAccent: "completo",
  serviceBody:
    "Consulenza tecnica, scelta del sistema più adatto, installazione professionale, verifiche di sicurezza e assistenza post installazione.",
};

export const percheNoiContent = {
  hero: {
    headline: "Quarant'anni di ",
    headlineAccent: "ferro",
    headlinePost: " lavorato con cura",
    subheadline:
      "Ferioli Sergio SRL — nata dall'esperienza, cresciuta sulla qualità. Carpenteria metallica certificata nella provincia di Bologna.",
    cta: "Richiedi il tuo preventivo",
  },
  storyTitle: "La nostra ",
  storyAccent: "storia",
  storyBody:
    "Ferioli Sergio SRL opera nel settore della carpenteria metallica da 49 anni (1977-2026), con sede in Via Galileo Galilei 140, Palata Pepoli di Crevalcore (BO). Siamo specializzati nella produzione di grate di sicurezza, recinzioni, reti metalliche, scale, carport, dehor, arredi in ferro e cancelli modulari e su misura.",
  certTitle: "Certificati ",
  certAccent: "primi in Italia",
  certBody:
    "L'Istituto Giordano, ente tecnico all'avanguardia nel testing di prodotto, certificazione, ricerca, progettazione e formazione, fondato nel 1959, ci ha certificati primi in Italia sia per cancelli manuali che automatici. Testati per 60.000 aperture, abbiamo ottenuto la marcatura CE dei prodotti.",
  guaranteeTitle: "La nostra ",
  guaranteeAccent: "garanzia",
  guaranteeBody:
    "Ogni nostro prodotto è realizzato curando ogni minimo dettaglio e cercando di renderlo perfetto per le esigenze del cliente. Sicurezza, resistenza ed estetica sono le tre principali caratteristiche delle nostre realizzazioni.",
};

export const realizzazioniContent = {
  hero: {
    headline: "Le nostre ",
    headlineAccent: "realizzazioni",
    subheadline:
      "Ogni progetto racconta una storia di qualità artigianale, attenzione al dettaglio e soddisfazione del cliente.",
    cta: "Richiedi il tuo preventivo",
  },
  projects: [
    { name: "Cancello Scorrevole", location: "Bologna", type: "Cancello", image: "/images/Carpenteria-metallica-su-misura-bologna-cento.jpg", link: "/cancelli" },
    { name: "Cancello a Battente", location: "Cento (FE)", type: "Cancello", image: "/images/2.jpeg", link: "/cancelli" },
    { name: "Recinzioni", location: "Massa Finalese (MO)", type: "Recinzione", image: "/images/Cancelli-in-ferro-cento-1-300x225.jpg", link: "/recinzioni" },
    { name: "Scala Interna", location: "Bologna", type: "Struttura", image: "/images/4.jpg", link: "/lavorazioni" },
    { name: "Grate Antieffrazione", location: "Crevalcore (BO)", type: "Inferriata", image: "/images/Realizzazione-grate-in-ferro-bologna-480x360-1.jpg", link: "/inferriate" },
    { name: "Scala Esterna", location: "San Giovanni in Persiceto (BO)", type: "Struttura", image: "/images/Realizzazione-strutture-in-ferro-cento-480x360-1.jpg", link: "/lavorazioni" },
    { name: "Balaustra e Parapetto", location: "Bologna", type: "Ringhiera", image: "/images/parapetti-per-balconi-1-300x225.jpg", link: "/lavorazioni" },
    { name: "Arredi su Misura", location: "Cento (FE)", type: "Arredo", image: "/images/Arredi-in-ferro-su-misura-bologna-1-300x225.jpg", link: "/lavorazioni" },
    { name: "Dehor Commerciale", location: "Bologna", type: "Struttura", image: "/images/Strutture-in-ferro-su-misura.jpg", link: "/lavorazioni" },
    { name: "Cancello in Lamiera", location: "Crevalcore (BO)", type: "Cancello", image: "/images/3.jpeg", link: "/cancelli" },
  ],
};

export const detrazioniContent = {
  hero: {
    headline: "Risparmia fino al ",
    headlineAccent: "50%",
    headlinePost: " grazie alle detrazioni fiscali",
    subheadline:
      "Detrazioni fiscali 2026 per cancelli, inferriate e sistemi di sicurezza. Il momento giusto per intervenire.",
    cta: "Richiedi informazioni",
  },
  bonusTitle: "Bonus Sicurezza e ",
  bonusAccent: "Bonus Ristrutturazioni",
  bonusBody:
    "Nel 2026 sono ancora previste agevolazioni fiscali per interventi che migliorano la sicurezza degli immobili. Gli interventi su cancelli, grate di sicurezza, recinzioni e sistemi di controllo accessi possono rientrare nelle detrazioni fiscali per la sicurezza e la ristrutturazione edilizia.",
  eligibleTitle: "Quali interventi possono essere ",
  eligibleAccent: "detraibili",
  eligible: [
    "Installazione di inferriate di sicurezza",
    "Installazione o rifacimento di cancelli",
    "Automazione dei cancelli",
    "Recinzioni e sistemi di controllo accessi",
    "Sistemi antifurto e videosorveglianza",
  ],
  compassTitle: "Finanziamenti e soluzioni di ",
  compassAccent: "pagamento",
  compassBody:
    "Per facilitare l'intervento, offriamo la possibilità di accedere a finanziamenti con piani rateali personalizzati da 24, 36 o 48 mesi, così da installare subito senza rinunciare alla qualità.",
  calcTitle: "Calcola il tuo ",
  calcAccent: "risparmio",
  calcLabel: "Valore indicativo del progetto (€)",
  calcPlaceholder: "es. 5000",
  calcResult36: "Con il Bonus Sicurezza (36%)",
  calcResult50: "Con le detrazioni (50%)",
  calcSave: "Risparmi",
  faq: [
    {
      q: "Quali prodotti rientrano nelle detrazioni?",
      a: "Cancelli, inferriate, sistemi di allarme, videosorveglianza e tutti gli interventi che migliorano la sicurezza dell'immobile.",
    },
    {
      q: "Come si ottiene la detrazione?",
      a: "È necessario effettuare il pagamento tramite bonifico parlante e conservare la documentazione. I nostri consulenti possono guidarvi.",
    },
    {
      q: "È possibile finanziare il lavoro?",
      a: "Sì, offriamo piani rateali con Compass da 24 a 48 mesi per rendere l'investimento accessibile.",
    },
    {
      q: "Le inferriate sono sempre detraibili?",
      a: "Sì, l'installazione delle inferriate rientra negli interventi di sicurezza ed è fiscalmente detraibile sia per nuove installazioni che per sostituzioni.",
    },
  ],
};

export const contattiContent = {
  headlinePre: "Siamo a ",
  headlineAccent: "due passi",
  headlinePost: " da te",
  processTitle: "Cosa succede dopo che ci contatti",
  processSteps: ["Risponderemo entro 24h", "Sopralluogo gratuito", "Preventivo senza impegno"],
  form: {
    name: "Nome e cognome",
    phone: "Telefono",
    email: "Email",
    type: "Tipo di lavoro",
    typeOptions: ["Cancello", "Inferriata", "Recinzione", "Scala", "Allarme", "Automazione", "Altro"],
    message: "Messaggio",
    privacy: "Accetto la privacy policy e il trattamento dei dati personali",
    submit: "Invia richiesta",
    success: "Richiesta inviata con successo! Ti contatteremo entro 24 ore.",
    error: "Si è verificato un errore. Riprova o contattaci telefonicamente.",
  },
};

export const landingCancelliRecinzioni = {
  hero: {
    headline: "Cancelli, recinzioni e lavori in ferro su misura — ",
    headlineAccent: "Bologna, Modena e Ferrara",
    subheadline: "Produzione e installazione diretta. Certificazione CE. Preventivo gratuito in 24 ore.",
    cta: "Richiedi Preventivo Gratuito",
    badges: ["CE Certified", "Est. 1977", "Bologna & Modena"],
  },
  heroImage: "/images/eb6ff68c0_generated_image.png",
  painTitle: "Cancello vecchio, arrugginito o da automatizzare?",
  painBody:
    "We design and build custom iron gates, fencing, railings, carports and more — from our workshop in Crevalcore (BO). Direct production, no intermediaries.",
  servicesTitle: "I nostri servizi",
  services: [
    { title: "Cancelli scorrevoli", icon: "Move" },
    { title: "Cancelli a battente", icon: "DoorOpen" },
    { title: "Recinzioni in ferro", icon: "Fence" },
    { title: "Automazione cancelli", icon: "Settings" },
    { title: "Inferriate di sicurezza", icon: "Grid3x3" },
    { title: "Carport e pensiline", icon: "Car" },
  ],
  testimonial: {
    quote: "Lavoro impeccabile sul nostro cancello. Professionali, puntuali e il risultato ha superato le aspettative.",
    rating: 5,
  },
  trust: ["CE Certified products", "Family business, active since 1977", "We operate in Bologna, Modena and Ferrara"],
  formTitle: "Richiedi un Preventivo",
  formSubtitle: "Compila il modulo per essere ricontattato entro 24 ore.",
  formSuccess: "Richiesta inviata!",
  formSuccessBody: "Ti contatteremo al più presto.",
  formName: "Nome *",
  formPhone: "Numero di telefono *",
  formMessage: "Messaggio (Opzionale)",
  formPrivacy: "Accetto la Privacy Policy e il trattamento dei dati personali *",
  formSubmit: "Invia richiesta — ti contattiamo entro 24 ore",
  formSubmitting: "Invio in corso...",
  faqTitle: "FAQ",
  faq: [
    { q: "Quanto costa un cancello su misura?", a: "Every project is different. Contact us for a free, no-obligation quote." },
    { q: "Operate vicino a Bologna/Modena?", a: "Yes, we operate throughout Bologna, Modena and Ferrara provinces." },
    { q: "Posso detrarre le spese?", a: "In many cases yes — gates and security bars may qualify for tax deductions under Italian law. Ask us for details." },
    { q: "I vostri prodotti sono certificati?", a: "All our gates are CE certified, tested by Istituto Nazionale Giordano." },
  ],
};

export const landingLavoraConNoi = {
  badge: "Collabora con noi",
  hero: {
    headline: "Lavora con Eurofabbro — ",
    headlineAccent: "Bologna, Modena e Ferrara",
    subheadline: "Sei un rivenditore, un professionista del settore o cerchi un lavoro nel ferro lavorato? Parlaci.",
    cta: "Contattaci",
  },
  pathsTitle: "Scegli il tuo percorso",
  paths: [
    {
      title: "Rivenditori e Dealer",
      desc: "Vendi prodotti in ferro o lavori nell'edilizia? Possiamo fornirti cancelli e recinzioni con il tuo marchio o come produttore terzo. Contattaci per condizioni commerciali riservate.",
      icon: "Briefcase",
    },
    {
      title: "Partner e Installatori",
      desc: "Sei un installatore, un geometra o un imprenditore edile? Collaboriamo con professionisti del territorio per la fornitura e posa di cancelli, recinzioni e strutture metalliche.",
      icon: "Wrench",
    },
    {
      title: "Cerca Lavoro — Operai e Tecnici",
      desc: "Hai esperienza nella lavorazione del ferro, nella saldatura o nell'installazione di cancelli? Inviaci il tuo CV — siamo sempre alla ricerca di persone valide.",
      icon: "HardHat",
    },
  ],
  whyTitle: "Perché Eurofabbro",
  whyItems: [
    "Produttore indipendente a Crevalcore",
    "Attivi sul territorio dal 1977",
    "Prodotti certificati con marcatura CE",
    "Operiamo a Bologna, Modena e Ferrara",
  ],
  quote: '"Cerchiamo relazioni durature basate su fiducia, qualità del lavoro e rispetto degli impegni."',
  formTitle: "Invia la tua richiesta",
  formSubtitle: "Compila il form sottostante, ti risponderemo il prima possibile.",
  formSuccess: "Richiesta inviata!",
  formSuccessBody: "Abbiamo ricevuto il tuo messaggio. Il nostro team ti contatterà al più presto.",
  formAnother: "Invia un'altra richiesta",
  formRole: "Sono un...",
  formRoles: [
    { value: "reseller", label: "Rivenditore" },
    { value: "partner", label: "Partner / Installatore" },
    { value: "job_applicant", label: "Candidato in cerca di lavoro" },
  ],
  formRolePlaceholder: "Seleziona...",
  formName: "Nome e Cognome *",
  formCompany: "Azienda (opzionale)",
  formPhone: "Telefono *",
  formEmail: "Email *",
  formCV: "Carica il tuo CV",
  formCVHint: "Formati accettati: PDF, DOC, DOCX. Max 5MB.",
  formMessage: "Messaggio (opzionale)",
  formPrivacy: "Ho letto e accetto la Privacy Policy per il trattamento dei dati personali. *",
  formSubmit: "Invia candidatura / richiesta",
  formSubmitting: "Invio in corso...",
};
