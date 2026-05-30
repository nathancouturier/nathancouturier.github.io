/* ============================================================
   CONTENT CONFIG
   Single source of truth for every text string on the site.
   Update content here, not in index.html. Both languages
   live side by side. Theme/lang state persists via localStorage.
   ============================================================ */

const CONTENT = {
  meta: {
    name: "Nathan Couturier",
    handle: "@nathancouturier",
    location: { en: "Paris, FR", fr: "Paris, FR" },
    email: "nathan.couturier@edu.escp.eu",
    phone: "+33 7 66 22 81 63",
    linkedin: "https://www.linkedin.com/in/nathancouturier",
    cv: "Nathan-Couturier-CV.pdf",
  },

  nav: {
    currently: { en: "Currently", fr: "Actuellement" },
    work: { en: "Experience", fr: "Expérience" },
    education: { en: "Education", fr: "Formation" },
    skills: { en: "Skills", fr: "Compétences" },
    projects: { en: "Work", fr: "Projets" },
    beyond: { en: "Beyond", fr: "Hors finance" },
    contact: { en: "Contact", fr: "Contact" },
    cv: { en: "CV", fr: "CV" },
  },

  hero: {
    eyebrow: {
      en: "Currently · HSBC · Global Trade Solutions · Commodity Trade Finance",
      fr: "Actuellement · HSBC · Global Trade Solutions · Commodity Trade Finance",
    },
    tagline: {
      en: "Commodity Trade Finance at HSBC. Personal account trader on the side.",
      fr: "Commodity Trade Finance chez HSBC. Trader pour compte propre en parallèle.",
    },
    intro: {
      en: "Master in Management student at ESCP Business School, on a gap year between the physical commodity flows that move the world and the screens that price them.",
      fr: "Étudiant en Master in Management à ESCP Business School, en césure entre les flux physiques de matières premières qui font tourner le monde et les écrans qui les valorisent.",
    },
    ctaPrimary: { en: "Get in touch", fr: "Me contacter" },
    ctaSecondary: { en: "Download CV", fr: "Télécharger le CV" },
    scrollCue: { en: "Scroll", fr: "Défiler" },
  },

  currently: {
    sectionLabel: { en: "01 · Currently", fr: "01 · Actuellement" },
    title: {
      en: "Six months on the Commodity Trade Finance desk.",
      fr: "Six mois sur le desk Commodity Trade Finance.",
    },
    company: "HSBC Continental Europe",
    role: {
      en: "Intern, Commodity Trade Finance · GTS",
      fr: "Stagiaire, Commodity Trade Finance · GTS",
    },
    dates: {
      en: "June 2026 to December 2026",
      fr: "Juin 2026 à Décembre 2026",
    },
    address: "Avenue Kléber, Paris",
    blurb: {
      en: "Supporting Transaction Managers on a portfolio of producers, traders and processors with significant international activity. Power, soft commodities, and dairy-based products.",
      fr: "Assistance des Transaction Managers sur un portefeuille de producteurs, négociants et transformateurs avec une forte activité internationale. Énergie, soft commodities et produits laitiers.",
    },
    scope: [
      {
        label: { en: "Financing tracking", fr: "Suivi des financements" },
        text: {
          en: "Build and maintain monitoring sheets across the life of each credit line, with data inputs at every milestone.",
          fr: "Construction et tenue des tableaux de suivi tout au long de la vie de chaque ligne de crédit, avec saisies à chaque étape.",
        },
      },
      {
        label: { en: "Securities & drawdowns", fr: "Sûretés & tirages" },
        text: {
          en: "Set up collateral and execute drawdowns on structured financings against pledged assets and receivables.",
          fr: "Mise en place des sûretés et exécution des tirages sur les financements structurés adossés aux actifs et créances nantis.",
        },
      },
      {
        label: { en: "Coverage ratios", fr: "Ratios de couverture" },
        text: {
          en: "Monitor coverage ratios and maturity schedules, ensuring consistency across reporting indicators with adjustments where needed.",
          fr: "Suivi des ratios de couverture et échéanciers, en assurant la cohérence des indicateurs avec les retraitements nécessaires.",
        },
      },
      {
        label: { en: "Internal & external reporting", fr: "Reporting interne & externe" },
        text: {
          en: "Communicate desk dashboards to ExCo, the Group, and the business line. Update activity and risk reportings.",
          fr: "Diffusion des tableaux de bord à l’ExCo, au Groupe, à la ligne métier. Mise à jour des reportings d’activité et de risque.",
        },
      },
    ],
    seeking: {
      label: { en: "Next step", fr: "Étape suivante" },
      text: {
        en: "Seeking the second half of my gap year: a six-month internship in commodity trading, starting January 2027.",
        fr: "Recherche de la seconde partie de césure : stage de six mois en commodity trading, à partir de janvier 2027.",
      },
    },
  },

  experience: {
    sectionLabel: { en: "02 · Experience", fr: "02 · Expérience" },
    title: { en: "Where I’ve worked.", fr: "Mes expériences." },
    items: [
      {
        company: "HSBC Continental Europe",
        logo: "hsbc.svg",
        role: {
          en: "Intern, Commodity Trade Finance · GTS",
          fr: "Stagiaire, Commodity Trade Finance · GTS",
        },
        dates: { en: "Jun 2026 - Dec 2026 (current)", fr: "Juin 2026 - Déc. 2026 (en cours)" },
        location: { en: "Paris, France", fr: "Paris, France" },
        bullets: [
          {
            en: "Assist Transaction Managers on a portfolio of commodity producers, traders and processors with significant cross-border activity in power, soft commodities, and dairy products.",
            fr: "Assistance des Transaction Managers sur un portefeuille de producteurs, négociants et transformateurs en énergie, soft commodities et produits laitiers, avec une forte activité internationale.",
          },
          {
            en: "Build and maintain financing tracking sheets, monitor coverage ratios and maturity schedules across the life of structured credit lines.",
            fr: "Construction et tenue des tableaux de suivi des financements, monitoring des ratios de couverture et des échéanciers tout au long de la vie des crédits structurés.",
          },
          {
            en: "Execute drawdowns, set up securities, and produce ExCo-level dashboards for internal and external stakeholders.",
            fr: "Exécution des tirages, mise en place des sûretés, et production des tableaux de bord pour l’ExCo et les contreparties externes.",
          },
        ],
      },
      {
        company: "ECHO · Expansion des Centres d’Hémodialyse de l’Ouest",
        logo: "echo.png",
        role: {
          en: "Intern, Management Controller",
          fr: "Stagiaire, Contrôleur de Gestion",
        },
        dates: { en: "Jun to Aug 2025", fr: "Juin à Août 2025" },
        location: { en: "Nantes, France", fr: "Nantes, France" },
        bullets: [
          {
            en: "Built consolidated 2026 budget forecasts across more than a dozen dialysis centers using Excel and ERP data, directly feeding strategic decision-making.",
            fr: "Construction des prévisions budgétaires 2026 consolidées sur plus d’une douzaine de centres de dialyse à partir d’Excel et de l’ERP, alimentant directement les arbitrages stratégiques.",
          },
          {
            en: "Joined investment policy discussions with external advisors, gaining first-hand exposure to structured products and risk considerations.",
            fr: "Participation aux discussions de politique d’investissement avec les conseillers externes, exposition directe aux produits structurés et à la gestion du risque.",
          },
        ],
      },
    ],
  },

  education: {
    sectionLabel: { en: "03 · Education", fr: "03 · Formation" },
    title: { en: "How I trained.", fr: "Ma formation." },
    items: [
      {
        school: "ESCP Business School",
        logo: "escp.png",
        degree: {
          en: "Master in Management · Investment Banking track",
          fr: "Master in Management · Spécialisation Investment Banking",
        },
        dates: "2024-2028",
        campuses: [
          { label: { en: "Paris (Pre-master)", fr: "Paris (Pré-master)" }, dates: "2024-2025" },
          { label: { en: "Berlin (M1, Semester 1)", fr: "Berlin (M1, Semestre 1)" }, dates: "2025" },
          { label: { en: "Turin (M1, Semester 2, IB)", fr: "Turin (M1, Semestre 2, IB)" }, dates: "2026" },
        ],
        courses: {
          en: "Financial Engineering (Fixed Income, Commodities) · M&A · LBO · Venture Capital · Investment Banking Activities · Business Law",
          fr: "Ingénierie Financière (Taux, Matières Premières) · M&A · LBO · Venture Capital · Investment Banking Activities · Droit",
        },
      },
      {
        school: "Lycée Chevrollier",
        logo: "chevrollier.png",
        degree: {
          en: "Classe Préparatoire ECT · French Grandes Écoles entrance exam",
          fr: "Classe Préparatoire ECT · concours des Grandes Écoles",
        },
        dates: "2022-2024",
        campuses: [
          { label: { en: "Angers", fr: "Angers" }, dates: "2022-2024" },
        ],
        courses: {
          en: "Intensive two-year program in Finance, Economics, Mathematics, Management. Class representative. Student council representative for 2,700 students.",
          fr: "Programme intensif de deux ans en Finance, Économie, Mathématiques, Management. Délégué de classe. Élu au conseil d’administration, représentant 2 700 étudiants.",
        },
      },
    ],
    certs: {
      label: { en: "Certifications", fr: "Certifications" },
      items: [
        { en: "Bloomberg Market Concepts (BMC)", fr: "Bloomberg Market Concepts (BMC)" },
        { en: "Training You · Market Finance", fr: "Training You · Finance de Marché" },
        { en: "IELTS · English C1", fr: "IELTS · Anglais C1" },
      ],
    },
    languages: {
      label: { en: "Languages", fr: "Langues" },
      items: [
        { lang: { en: "French", fr: "Français" }, level: { en: "Native · C2", fr: "Natif · C2" } },
        { lang: { en: "English", fr: "Anglais" }, level: { en: "Advanced · C1", fr: "Avancé · C1" } },
        { lang: { en: "Spanish", fr: "Espagnol" }, level: { en: "Intermediate · B2", fr: "Intermédiaire · B2" } },
        { lang: { en: "Italian", fr: "Italien" }, level: { en: "Elementary · A2", fr: "Élémentaire · A2" } },
      ],
    },
  },

  skills: {
    sectionLabel: { en: "04 · Skills", fr: "04 · Compétences" },
    title: { en: "Tools I use.", fr: "Outils que j’utilise." },
    items: [
      { name: "Python", level: "Advanced", value: 90 },
      { name: "VBA", level: "Advanced", value: 90 },
      { name: "Excel", level: "Advanced", value: 95 },
      { name: "Bloomberg", level: "Advanced", value: 85 },
      { name: "Pine Script", level: "Advanced", value: 90 },
      { name: "PowerPoint", level: "Advanced", value: 90 },
      { name: "SQL", level: "Beginner", value: 30 },
    ],
  },

  projects: {
    sectionLabel: { en: "05 · Selected work", fr: "05 · Travaux sélectionnés" },
    title: {
      en: "Things I’ve built and modelled.",
      fr: "Ce que j’ai construit et modélisé.",
    },
    intro: {
      en: "A small selection of recent quantitative and trading-adjacent work. Some lived as research notes, others as code, all written to be operational rather than academic.",
      fr: "Une sélection de travaux quantitatifs et liés au trading. Certains ont vécu sous forme de notes, d’autres en code, tous pensés pour être opérationnels plutôt qu’académiques.",
    },
    hero: [
      {
        index: "01",
        title: { en: "Brent-WTI Spread", fr: "Spread Brent-WTI" },
        tagline: {
          en: "Relative value across four market regimes.",
          fr: "Relative value à travers quatre régimes de marché.",
        },
        body: {
          en: "Full research report on the Brent-WTI differential. Decomposed key drivers (transport bottlenecks, US shale dynamics, quality premium, EIA inventories), characterised four historical regimes, and formulated relative value strategies with scenario analysis.",
          fr: "Rapport de recherche complet sur le spread Brent-WTI. Décomposition des moteurs (goulots d’étranglement logistiques, dynamique du shale américain, prime de qualité, stocks EIA), caractérisation de quatre régimes historiques, et stratégies de relative value avec analyse de scénarios.",
        },
        stack: ["Python", "Bloomberg", "Pandas", "Matplotlib"],
      },
      {
        index: "02",
        title: { en: "ICT/SMC Strategies", fr: "Stratégies ICT/SMC" },
        tagline: {
          en: "Pine Script algos for BTC and SOL futures.",
          fr: "Algorithmes Pine Script pour BTC et SOL futures.",
        },
        body: {
          en: "Custom TradingView indicators and strategies built on Inner Circle Trader and Smart Money Concepts. Tracks order blocks, fair value gaps, market structure breaks, liquidity sweeps, and killzones. Iterates from scalping (5m) up to swing logic on 4h.",
          fr: "Indicateurs et stratégies TradingView fondés sur Inner Circle Trader et Smart Money Concepts. Détection d’order blocks, fair value gaps, ruptures de structure, balayages de liquidité et killzones. Du scalping (5m) au swing en 4h.",
        },
        stack: ["Pine Script v6", "TradingView", "Webhooks"],
      },
      {
        index: "03",
        title: { en: "Monte Carlo Risk Simulator", fr: "Simulateur de Risque Monte Carlo" },
        tagline: {
          en: "Stressed portfolio paths in Python.",
          fr: "Trajectoires de portefeuille en stress, en Python.",
        },
        body: {
          en: "Geometric Brownian Motion engine with correlated assets, fat-tailed jumps, and parameterised stress scenarios. Outputs distribution of final P&L, drawdown statistics, Value-at-Risk and Expected Shortfall.",
          fr: "Moteur Geometric Brownian Motion à actifs corrélés, sauts à queues épaisses et scénarios de stress paramétrables. Distribution du P&L final, statistiques de drawdown, Value-at-Risk et Expected Shortfall.",
        },
        stack: ["Python", "NumPy", "SciPy", "Matplotlib"],
      },
    ],
    secondary: [
      {
        title: { en: "Black-Scholes Pricer with Greeks", fr: "Pricer Black-Scholes & Grecs" },
        body: {
          en: "European options pricer in Python with full first and second order Greeks (delta, gamma, vega, theta, rho, vanna, volga). Visual surface plots for sensitivity analysis.",
          fr: "Pricer d’options européennes en Python avec Grecs au premier et second ordre (delta, gamma, vega, theta, rho, vanna, volga). Surfaces de sensibilité.",
        },
        stack: ["Python", "NumPy", "Matplotlib"],
      },
      {
        title: { en: "Memecoin Sniper Bot", fr: "Bot Sniper Memecoin" },
        body: {
          en: "Pump.fun listener that monitors token launches for keyword triggers, surfaces candidates with on-chain heuristics, and pushes alerts via Telegram. Side project, framed as a market-microstructure curiosity rather than a strategy.",
          fr: "Listener Pump.fun monitorant les lancements de tokens par mots-clés, classant les candidats via heuristiques on-chain, et poussant des alertes Telegram. Projet annexe, exploré comme une curiosité de microstructure plutôt qu’une stratégie.",
        },
        stack: ["Python", "Termux", "Solana RPC"],
      },
    ],
  },

  beyond: {
    sectionLabel: { en: "06 · Beyond finance", fr: "06 · Hors finance" },
    title: { en: "What I do off the desk.", fr: "Ce que je fais en dehors du desk." },
    items: [
      {
        kind: { en: "Theatre", fr: "Théâtre" },
        title: "Art Maniac · ESCP",
        years: "2024-2026",
        body: {
          en: "Two years with the ESCP theatre association. First year as actor, second as Vice-President in charge of finances and sponsorship outreach. Weekly rehearsals, performed for 1,000+ at Théâtre Traversière.",
          fr: "Deux années à l’association théâtre d’ESCP. Première année comédien, deuxième année Vice-Président en charge des finances et du sponsoring. Répétitions hebdomadaires, jeu devant plus de 1 000 spectateurs au Théâtre Traversière.",
        },
      },
      {
        kind: { en: "Simulation", fr: "Simulation" },
        title: "Designing Europe 2026",
        years: "2025",
        body: {
          en: "European Parliament simulation. S&D Coordinator on the BUDG committee, representing France. Drafted budget amendments, ran group negotiations and floor votes.",
          fr: "Simulation du Parlement Européen. Coordinateur S&D sur la commission BUDG, représentant la France. Rédaction d’amendements budgétaires, conduite des négociations et des votes.",
        },
      },
      {
        kind: { en: "Discipline", fr: "Discipline" },
        title: { en: "Gym & calisthenics", fr: "Salle & callisthénie" },
        years: "Ongoing",
        body: {
          en: "Five sessions per week. Currently working towards advanced bodyweight skills, L-sit and tuck planche. Discipline transfers to everything else.",
          fr: "Cinq séances hebdomadaires. Travail actuel sur les figures avancées au poids du corps, L-sit et tuck planche. La discipline se transfère partout ailleurs.",
        },
      },
      {
        kind: { en: "Representation", fr: "Représentation" },
        title: { en: "Class & council rep", fr: "Délégué de classe et CA" },
        years: "2022-2024",
        body: {
          en: "Class representative at Lycée Chevrollier, then elected to the student council representing 2,700 students to the administration.",
          fr: "Délégué de classe au Lycée Chevrollier, puis élu au conseil d’administration représentant 2 700 étudiants auprès de l’administration.",
        },
      },
    ],
  },

  quote: {
    text: {
      en: "The cure for high prices is high prices, and the cure for low prices is low prices.",
      fr: "Le remède aux prix hauts, ce sont les prix hauts. Le remède aux prix bas, ce sont les prix bas.",
    },
    attribution: {
      en: "Commodity market adage",
      fr: "Adage des marchés de matières premières",
    },
  },

  contact: {
    sectionLabel: { en: "07 · Contact", fr: "07 · Contact" },
    title: {
      en: "Looking for the second part.",
      fr: "À la recherche de la seconde partie.",
    },
    body: {
      en: "I am actively looking for the second half of my gap year: a six-month internship in commodity trading, starting January 2027. Cold emails, referrals and conversations with desks are welcome.",
      fr: "Je suis activement à la recherche de la seconde partie de ma césure : un stage de six mois en commodity trading, à partir de janvier 2027. Emails directs, recommandations et échanges avec les desks sont les bienvenus.",
    },
  },

  footer: {
    location: { en: "Paris · open to relocation", fr: "Paris · ouvert à la mobilité" },
    role: { en: "Commodity Trade Finance · HSBC", fr: "Commodity Trade Finance · HSBC" },
    builtWith: { en: "Hand-coded · Updated May 2026", fr: "Codé à la main · Mis à jour mai 2026" },
  },
};
