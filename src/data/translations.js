export const TRANSLATIONS = {
  SK: {
    navAbout: "O mne",
    navSkills: "Čo viem",
    navPlans: "Plány",
    navContact: "Kontakt",
    navBack: "Späť na portfolio",

    heroSchoolPrefix: "Absolvent ",
    heroHook: "Od kódu po hardvér — zvládnem viac, ako čakáš.",

    aboutTitle: "O mne",
    aboutP1: "Mám 19 rokov a pochádzam zo Žiliny.",
    aboutP2:
      "Začínal som s tvorbou webstránok — venoval som sa im 2 roky, no odvtedy som posunul záujem aj iným smerom: siete, virtualizácia, hardvér, robotika a AI.",

    skillsTitle: "Čo viem",
    skills: [
      { title: "Programovanie", desc: "Webové a mobilné aplikácie", link: "Pozri viac", route: "/programovanie" },
      { title: "Virtualizácia", desc: "Virtuálne prostredia a servery", link: "Pozri viac", route: "/virtualizacia" },
      { title: "Siete & Cisco", desc: "CCNA certifikát & tvorba sietí", link: "Pozri viac", route: "/siete" },
      { title: "Robotika", desc: "Raspberry Pi, ESP a školské projekty", link: "Pozri viac", route: "/robotika" },
      { title: "Hardvér", desc: "Servis, diagnostika a zostavovanie PC", link: "Pozri viac", route: "/hardver" },
      { title: "AI & Agenti", desc: "Využitie AI pri vývoji a projektoch", link: "Pozri viac", route: "/ai-agenti" },
    ],

    plansTitle: "Čo ma čaká",
    plans: [
      { title: "Vysoká škola", desc: "Plánujem pokračovať na VŠB-TUO Ostrava, odbor Komunikačné a sieťové technológie" },
      { title: "B2 certifikát", desc: "Angličtina — Aktuálne si naň šetrím, cieľom je dosiahnuť vyššiu jazykovú úroveň" },
    ],

    contactTitle: "Kontakt",
    contactSub: "Máš projekt? Rád si vypočujem.",
    formName: "Meno",
    formEmail: "Email",
    formMsg: "Správa",
    formSend: "Odoslať správu",
    formSending: "Odosiela...",
    formOk: "Správa odoslaná!",
    formErr: "Chyba, skús znova.",

    footerContact: "Kontakt",
    footerCookies: "Cookies",
    footerCookiesText: "Táto stránka používa základné a analytické cookies na zlepšenie používateľského zážitku.",
    footerTech: "Technológie",
    footerTechText: "Postavené s: React, Vite, Framer Motion",
    footerCopyright: "Copyright",
    footerCopyrightText: "© 2026 Matúš Hrtánek — Všetky práva vyhradené. Obsah nesmie byť kopírovaný bez súhlasu.",
    footerMade: "Vyrobené s ❤️",

    progTitle: "Programovanie",
    progSubtitle: "Webové a mobilné aplikácie",
    viewApp: "Pozri aplikáciu",
    viewGithub: "GitHub",
    viewWeb: "Pozri na webe",

    networksTitle: "Siete & Cisco",
    networksSubtitle: "CCNA certifikát & tvorba sietí",
    networksItems: [
      { title: "CCNA: Introduction to Networks", desc: "Cisco Networking Academy, kurz dokončený v 2024. Pokrýva základy sieťových technológií, modelov OSI a TCP/IP." },
      { title: "Tvorba sietí v Cisco Packet Tracer", desc: "Práca so simulátorom sietí Cisco Packet Tracer. Dizajn a testovanie sietí pred nasadením." },
      { title: "Smerovanie, Prepínanie, TCP/IP", desc: "Hlboké pochopenie smerovacích protokolov (OSPF, RIP), switchovania, adresácie IP, DHCP a DNS." },
      { title: "Školské projekty", desc: "Práca s sieťovou infraštruktúrou v rámci školských hodín. Praktické skúsenosti s konfiguráciou smerovačov a prepínačov." },
    ],

    virtTitle: "Virtualizácia",
    virtSubtitle: "Virtuálne prostredia a servery",
    virtItems: [
      { title: "VirtualBox", desc: "Vytváram a spravujem virtuálne stroje pre testovanie rôznych operačných systémov a konfigurácií. Skúsenosti s nastavením sieťového pripojenia, zdieľaným úložiskom a snímkami systému." },
      { title: "Hyper-V", desc: "Práca s Hyper-V na Windows platforme pre virtualizáciu servrov a pracovných staníc. Konfigurácia virtuálnych sietí a úložíšť." },
      { title: "Ubuntu Server", desc: "Práca v príkazovom riadku (CLI), konfigurácia servera, správa balíčkov a služieb. Základné administrácie Linux servrov." },
    ],

    roboticsTitle: "Robotika",
    roboticsSubtitle: "Raspberry Pi, ESP a školské projekty",
    roboticsItems: [
      { title: "Raspberry Pi", desc: "Práca s Raspberry Pi na školských projektoch. Dizajn a implementácia IoT riešení, práca s GPIO pinmi a senzorom." },
      { title: "ESP32 & ESP8266", desc: "Mikrokontróléry pre IoT aplikácie. Práca s WiFi a Bluetooth, tvorba malých embedded systémov s nízkou spotrebou energie." },
      { title: "Školské projekty robotiky", desc: "Praktické projekty z robotiky — od základných senzorických projektov po zložitejšie autonómne systémy. Experimentovanie s rôznymi hardvérmi a frameworkmi." },
    ],

    hardwareTitle: "Hardvér",
    hardwareSubtitle: "Servis, diagnostika a zostavovanie PC",
    hardwareItems: [
      { title: "Zostavovanie a upgrade PC", desc: "Skúsenosti s výberom komponentov, montážou počítačov a hardvérovými upgradami. Znalosti o kompatibilite komponentov, výkone a cenovej efektivite." },
      { title: "Servis a diagnostika", desc: "Identifikácia a oprava hardvérových problémov. Testovanie komponentov, diagnostika softvérových a hardvérových chýb, údržba počítačov." },
      { title: "Serverový hardvér", desc: "Práca so serverovým hardvérom — inštalácia, konfigurácia a údržba serverových komponentov a systémov." },
    ],

    aiTitle: "AI & Agenti",
    aiSubtitle: "Využitie AI pri vývoji a projektoch",
    aiItems: [
      { title: "AI nástroje pri vývoji", desc: "Pravidelné používanie AI nástrojov pri tvorbe projektov — GitHub Copilot na urýchlenie vývoja, Claude na analýzu problémov a ChatGPT na brainstorming. Kombinovanie AI s kritickým myslením pre kvalitnú kódovú základňu." },
      { title: "Práca s AI agentmi", desc: "Skúsenosti s AI agentmi — ich dizajnom, tréningom a nasadzením. Pochopenie ako agenti môžu automatizovať komplexné úlohy a riešiť problémy autonómne." },
      { title: "Prompt engineering", desc: "Znalosť efektívneho písania promptov pre rôzne AI modely. Tvorba presných a špecifických promptov, iterácia a optimizácia pre najlepšie výsledky v reálnych projektoch." },
    ],
  },

  EN: {
    navAbout: "About",
    navSkills: "Skills",
    navPlans: "Plans",
    navContact: "Contact",
    navBack: "Back to portfolio",

    heroSchoolPrefix: "Graduate of ",
    heroHook: "From code to hardware — I can handle more than you'd expect.",

    aboutTitle: "About Me",
    aboutP1: "I'm 19 years old and from Žilina, Slovakia.",
    aboutP2:
      "I started with web development — spent 2 years on it, but since then I've expanded my interests to networks, virtualization, hardware, robotics, and AI.",

    skillsTitle: "What I Can Do",
    skills: [
      { title: "Programming", desc: "Web and mobile apps", link: "View more", route: "/programovanie" },
      { title: "Virtualization", desc: "Virtual environments and servers", link: "View more", route: "/virtualizacia" },
      { title: "Networks & Cisco", desc: "CCNA cert & network design", link: "View more", route: "/siete" },
      { title: "Robotics", desc: "Raspberry Pi, ESP, and school projects", link: "View more", route: "/robotika" },
      { title: "Hardware", desc: "Service, diagnostics, and PC building", link: "View more", route: "/hardver" },
      { title: "AI & Agents", desc: "Using AI in development and projects", link: "View more", route: "/ai-agenti" },
    ],

    plansTitle: "What's Next",
    plans: [
      { title: "University", desc: "Planning to continue at VŠB-TUO Ostrava, Communications and Network Technologies program" },
      { title: "B2 Certificate", desc: "English — Currently saving up for it, goal is to reach a higher language level" },
    ],

    contactTitle: "Contact",
    contactSub: "Have a project in mind? I'd love to hear about it.",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    formSend: "Send message",
    formSending: "Sending...",
    formOk: "Message sent!",
    formErr: "Error, please try again.",

    footerContact: "Contact",
    footerCookies: "Cookies",
    footerCookiesText: "This site uses basic and analytical cookies to improve user experience.",
    footerTech: "Technologies",
    footerTechText: "Built with: React, Vite, Framer Motion",
    footerCopyright: "Copyright",
    footerCopyrightText: "© 2026 Matúš Hrtánek — All rights reserved. Content may not be copied without permission.",
    footerMade: "Made with ❤️",

    progTitle: "Programming",
    progSubtitle: "Web and mobile applications",
    viewApp: "View app",
    viewGithub: "GitHub",
    viewWeb: "View live",

    networksTitle: "Networks & Cisco",
    networksSubtitle: "CCNA cert & network design",
    networksItems: [
      { title: "CCNA: Introduction to Networks", desc: "Cisco Networking Academy, completed 2024. Covers networking fundamentals, OSI model, and TCP/IP." },
      { title: "Network Design in Cisco Packet Tracer", desc: "Working with Cisco Packet Tracer network simulator. Network design and testing before deployment." },
      { title: "Routing, Switching, TCP/IP", desc: "Deep understanding of routing protocols (OSPF, RIP), switching, IP addressing, DHCP, and DNS." },
      { title: "School Projects", desc: "Network infrastructure work in school courses. Hands-on experience with router and switch configuration." },
    ],

    virtTitle: "Virtualization",
    virtSubtitle: "Virtual environments and servers",
    virtItems: [
      { title: "VirtualBox", desc: "Creating and managing virtual machines for testing various operating systems and configurations. Experience with network setup, shared storage, and system snapshots." },
      { title: "Hyper-V", desc: "Working with Hyper-V on Windows platform for server and workstation virtualization. Configuring virtual networks and storage." },
      { title: "Ubuntu Server", desc: "Command-line work, server configuration, package and service management. Basic Linux server administration." },
    ],

    roboticsTitle: "Robotics",
    roboticsSubtitle: "Raspberry Pi, ESP, and school projects",
    roboticsItems: [
      { title: "Raspberry Pi", desc: "Working with Raspberry Pi in school projects. Designing and implementing IoT solutions, GPIO work, and sensors." },
      { title: "ESP32 & ESP8266", desc: "Microcontrollers for IoT applications. WiFi and Bluetooth work, building low-power embedded systems." },
      { title: "Robotics School Projects", desc: "Hands-on robotics projects — from basic sensor projects to more complex autonomous systems. Experimenting with various hardware and frameworks." },
    ],

    hardwareTitle: "Hardware",
    hardwareSubtitle: "Service, diagnostics, and PC building",
    hardwareItems: [
      { title: "PC Assembly and Upgrades", desc: "Experience selecting components, assembling PCs, and hardware upgrades. Knowledge of component compatibility, performance, and cost-effectiveness." },
      { title: "Service and Diagnostics", desc: "Identifying and fixing hardware issues. Component testing, software and hardware troubleshooting, computer maintenance." },
      { title: "Server Hardware", desc: "Working with server hardware — installation, configuration, and maintenance of server components and systems." },
    ],

    aiTitle: "AI & Agents",
    aiSubtitle: "Using AI in development and projects",
    aiItems: [
      { title: "AI Tools in Development", desc: "Regular use of AI tools in project development — GitHub Copilot for faster coding, Claude for problem analysis, and ChatGPT for brainstorming. Combining AI with critical thinking for quality code." },
      { title: "Working with AI Agents", desc: "Experience with AI agents — design, training, and deployment. Understanding how agents can automate complex tasks and solve problems autonomously." },
      { title: "Prompt Engineering", desc: "Knowledge of effective prompt writing for various AI models. Creating precise and specific prompts, iteration, and optimization for best results in real projects." },
    ],
  },

  DE: {
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navPlans: "Pläne",
    navContact: "Kontakt",
    navBack: "Zurück zum Portfolio",

    heroSchoolPrefix: "Absolvent der ",
    heroHook: "Von Code bis Hardware — ich kann mehr als du erwartest.",

    aboutTitle: "Über mich",
    aboutP1: "Ich bin 19 Jahre alt und komme aus Žilina, Slowakei.",
    aboutP2:
      "Ich begann mit der Webentwicklung — 2 Jahre lang, aber seitdem habe ich meine Interessen auf Netzwerke, Virtualisierung, Hardware, Robotik und KI ausgeweitet.",

    skillsTitle: "Was ich kann",
    skills: [
      { title: "Programmierung", desc: "Web- und mobile Apps", link: "Mehr sehen", route: "/programovanie" },
      { title: "Virtualisierung", desc: "Virtuelle Umgebungen und Server", link: "Mehr sehen", route: "/virtualizacia" },
      { title: "Netzwerke & Cisco", desc: "CCNA-Zertifikat & Netzwerkdesign", link: "Mehr sehen", route: "/siete" },
      { title: "Robotik", desc: "Raspberry Pi, ESP und Schulprojekte", link: "Mehr sehen", route: "/robotika" },
      { title: "Hardware", desc: "Service, Diagnose und PC-Aufbau", link: "Mehr sehen", route: "/hardver" },
      { title: "KI & Agenten", desc: "Einsatz von KI in Entwicklung und Projekten", link: "Mehr sehen", route: "/ai-agenti" },
    ],

    plansTitle: "Was kommt als Nächstes",
    plans: [
      { title: "Universität", desc: "Ich plane, an der VŠB-TUO Ostrava weiterzustudieren, Studiengang Kommunikations- und Netzwerktechnologien" },
      { title: "B2-Zertifikat", desc: "Englisch — Ich spare derzeit dafür, das Ziel ist ein höheres Sprachniveau zu erreichen" },
    ],

    contactTitle: "Kontakt",
    contactSub: "Haben Sie ein Projekt? Ich freue mich auf Ihre Nachricht.",
    formName: "Name",
    formEmail: "E-Mail",
    formMsg: "Nachricht",
    formSend: "Nachricht senden",
    formSending: "Wird gesendet...",
    formOk: "Nachricht gesendet!",
    formErr: "Fehler, bitte erneut versuchen.",

    footerContact: "Kontakt",
    footerCookies: "Cookies",
    footerCookiesText: "Diese Seite verwendet grundlegende und analytische Cookies zur Verbesserung der Benutzererfahrung.",
    footerTech: "Technologien",
    footerTechText: "Erstellt mit: React, Vite, Framer Motion",
    footerCopyright: "Copyright",
    footerCopyrightText: "© 2026 Matúš Hrtánek — Alle Rechte vorbehalten. Inhalte dürfen nicht ohne Genehmigung kopiert werden.",
    footerMade: "Gemacht mit ❤️",

    progTitle: "Programmierung",
    progSubtitle: "Web- und mobile Anwendungen",
    viewApp: "App ansehen",
    viewGithub: "GitHub",
    viewWeb: "Live ansehen",

    networksTitle: "Netzwerke & Cisco",
    networksSubtitle: "CCNA-Zertifikat & Netzwerkdesign",
    networksItems: [
      { title: "CCNA: Introduction to Networks", desc: "Cisco Networking Academy, Kurs abgeschlossen 2024. Behandelt Netzwerkgrundlagen, OSI-Modell und TCP/IP." },
      { title: "Netzwerkdesign in Cisco Packet Tracer", desc: "Arbeit mit dem Cisco Packet Tracer Netzwerksimulator. Netzwerkdesign und Tests vor der Bereitstellung." },
      { title: "Routing, Switching, TCP/IP", desc: "Tiefes Verständnis von Routing-Protokollen (OSPF, RIP), Switching, IP-Adressierung, DHCP und DNS." },
      { title: "Schulprojekte", desc: "Netzwerkinfrastrukturarbeit in Schulkursen. Praktische Erfahrung mit Router- und Switch-Konfiguration." },
    ],

    virtTitle: "Virtualisierung",
    virtSubtitle: "Virtuelle Umgebungen und Server",
    virtItems: [
      { title: "VirtualBox", desc: "Erstellen und Verwalten von virtuellen Maschinen zum Testen verschiedener Betriebssysteme. Erfahrung mit Netzwerk-Setup, freigegebenem Speicher und Systemsnapshots." },
      { title: "Hyper-V", desc: "Arbeit mit Hyper-V auf Windows-Plattform für die Virtualisierung von Servern und Workstations. Konfiguration virtueller Netzwerke und Speicher." },
      { title: "Ubuntu Server", desc: "Befehlszeilenarbeit, Serverkonfiguration, Paket- und Dienstverwaltung. Grundlegende Linux-Serveradministration." },
    ],

    roboticsTitle: "Robotik",
    roboticsSubtitle: "Raspberry Pi, ESP und Schulprojekte",
    roboticsItems: [
      { title: "Raspberry Pi", desc: "Arbeit mit Raspberry Pi in Schulprojekten. Entwurf und Implementierung von IoT-Lösungen, GPIO-Arbeit und Sensoren." },
      { title: "ESP32 & ESP8266", desc: "Mikrocontroller für IoT-Anwendungen. WLAN- und Bluetooth-Arbeit, Entwicklung energiesparender Embedded-Systeme." },
      { title: "Robotik-Schulprojekte", desc: "Praktische Robotikprojekte — von einfachen Sensorprojekten bis zu komplexeren autonomen Systemen. Experimente mit verschiedenen Hardware-Komponenten und Frameworks." },
    ],

    hardwareTitle: "Hardware",
    hardwareSubtitle: "Service, Diagnose und PC-Aufbau",
    hardwareItems: [
      { title: "PC-Zusammenbau und Upgrades", desc: "Erfahrung bei der Komponentenauswahl, PC-Zusammenbau und Hardware-Upgrades. Kenntnisse über Kompatibilität, Leistung und Kosteneffizienz." },
      { title: "Service und Diagnose", desc: "Identifizierung und Behebung von Hardwareproblemen. Komponententests, Software- und Hardware-Fehlerbehebung, PC-Wartung." },
      { title: "Server-Hardware", desc: "Arbeit mit Server-Hardware — Installation, Konfiguration und Wartung von Serverkomponenten und -systemen." },
    ],

    aiTitle: "KI & Agenten",
    aiSubtitle: "Einsatz von KI in Entwicklung und Projekten",
    aiItems: [
      { title: "KI-Tools in der Entwicklung", desc: "Regelmäßige Nutzung von KI-Tools — GitHub Copilot für schnelleres Coding, Claude für Problemanalyse und ChatGPT für Brainstorming. Kombination von KI mit kritischem Denken für qualitativ hochwertigen Code." },
      { title: "Arbeit mit KI-Agenten", desc: "Erfahrung mit KI-Agenten — Design, Training und Bereitstellung. Verständnis, wie Agenten komplexe Aufgaben automatisieren und Probleme autonom lösen können." },
      { title: "Prompt Engineering", desc: "Kenntnisse des effektiven Prompt-Schreibens für verschiedene KI-Modelle. Erstellen präziser Prompts, Iteration und Optimierung für beste Ergebnisse in realen Projekten." },
    ],
  },

  CS: {
    navAbout: "O mně",
    navSkills: "Dovednosti",
    navPlans: "Plány",
    navContact: "Kontakt",
    navBack: "Zpět na portfolio",

    heroSchoolPrefix: "Absolvent ",
    heroHook: "Od kódu po hardware — zvládnu více, než čekáš.",

    aboutTitle: "O mně",
    aboutP1: "Je mi 19 let a pocházím ze Žiliny, Slovensko.",
    aboutP2:
      "Začínal jsem s tvorbou webstránek — věnoval jsem se jim 2 roky, ale od té doby jsem rozšířil zájem i jiným směrem: sítě, virtualizace, hardware, robotika a AI.",

    skillsTitle: "Co umím",
    skills: [
      { title: "Programování", desc: "Webové a mobilní aplikace", link: "Zobrazit více", route: "/programovanie" },
      { title: "Virtualizace", desc: "Virtuální prostředí a servery", link: "Zobrazit více", route: "/virtualizacia" },
      { title: "Sítě & Cisco", desc: "CCNA certifikát & tvorba sítí", link: "Zobrazit více", route: "/siete" },
      { title: "Robotika", desc: "Raspberry Pi, ESP a školní projekty", link: "Zobrazit více", route: "/robotika" },
      { title: "Hardware", desc: "Servis, diagnostika a sestavování PC", link: "Zobrazit více", route: "/hardver" },
      { title: "AI & Agenti", desc: "Využití AI při vývoji a projektech", link: "Zobrazit více", route: "/ai-agenti" },
    ],

    plansTitle: "Co mě čeká",
    plans: [
      { title: "Vysoká škola", desc: "Plánuji pokračovat na VŠB-TUO Ostrava, obor Komunikační a síťové technologie" },
      { title: "B2 certifikát", desc: "Angličtina — Aktuálně si na něj šetřím, cílem je dosáhnout vyšší jazykové úrovně" },
    ],

    contactTitle: "Kontakt",
    contactSub: "Máš projekt? Rád si o něm poslechnu.",
    formName: "Jméno",
    formEmail: "Email",
    formMsg: "Zpráva",
    formSend: "Odeslat zprávu",
    formSending: "Odesílá...",
    formOk: "Zpráva odeslána!",
    formErr: "Chyba, zkus znovu.",

    footerContact: "Kontakt",
    footerCookies: "Cookies",
    footerCookiesText: "Tato stránka používá základní a analytické cookies pro zlepšení uživatelského zážitku.",
    footerTech: "Technologie",
    footerTechText: "Postaveno s: React, Vite, Framer Motion",
    footerCopyright: "Copyright",
    footerCopyrightText: "© 2026 Matúš Hrtánek — Všechna práva vyhrazena. Obsah nesmí být kopírován bez souhlasu.",
    footerMade: "Vyrobeno s ❤️",

    progTitle: "Programování",
    progSubtitle: "Webové a mobilní aplikace",
    viewApp: "Zobrazit aplikaci",
    viewGithub: "GitHub",
    viewWeb: "Zobrazit živě",

    networksTitle: "Sítě & Cisco",
    networksSubtitle: "CCNA certifikát & tvorba sítí",
    networksItems: [
      { title: "CCNA: Introduction to Networks", desc: "Cisco Networking Academy, kurz dokončen v 2024. Pokrývá základy síťových technologií, modelů OSI a TCP/IP." },
      { title: "Tvorba sítí v Cisco Packet Tracer", desc: "Práce se simulátorem sítí Cisco Packet Tracer. Dizajn a testování sítí před nasazením." },
      { title: "Směrování, Přepínání, TCP/IP", desc: "Hluboké pochopení směrovacích protokolů (OSPF, RIP), switchování, adresace IP, DHCP a DNS." },
      { title: "Školní projekty", desc: "Práce se síťovou infrastrukturou v rámci školních hodin. Praktické zkušenosti s konfigurací směrovačů a přepínačů." },
    ],

    virtTitle: "Virtualizace",
    virtSubtitle: "Virtuální prostředí a servery",
    virtItems: [
      { title: "VirtualBox", desc: "Vytvářím a spravuji virtuální stroje pro testování různých operačních systémů a konfigurací. Zkušenosti s nastavením síťového připojení, sdíleným úložištěm a snímky systému." },
      { title: "Hyper-V", desc: "Práce s Hyper-V na Windows platformě pro virtualizaci serverů a pracovních stanic. Konfigurace virtuálních sítí a úložišť." },
      { title: "Ubuntu Server", desc: "Práce v příkazovém řádku (CLI), konfigurace serveru, správa balíčků a služeb. Základní administrace Linux serverů." },
    ],

    roboticsTitle: "Robotika",
    roboticsSubtitle: "Raspberry Pi, ESP a školní projekty",
    roboticsItems: [
      { title: "Raspberry Pi", desc: "Práce s Raspberry Pi na školních projektech. Dizajn a implementace IoT řešení, práce s GPIO piny a senzory." },
      { title: "ESP32 & ESP8266", desc: "Mikrokontroléry pro IoT aplikace. Práce s WiFi a Bluetooth, tvorba malých embedded systémů s nízkou spotřebou energie." },
      { title: "Školní projekty robotiky", desc: "Praktické projekty z robotiky — od základních senzorických projektů po složitější autonomní systémy. Experimentování s různými hardware a frameworky." },
    ],

    hardwareTitle: "Hardware",
    hardwareSubtitle: "Servis, diagnostika a sestavování PC",
    hardwareItems: [
      { title: "Sestavování a upgrade PC", desc: "Zkušenosti s výběrem komponentů, montáží počítačů a hardwarovými upgrady. Znalosti o kompatibilitě komponentů, výkonu a cenové efektivitě." },
      { title: "Servis a diagnostika", desc: "Identifikace a oprava hardwarových problémů. Testování komponentů, diagnostika softwarových a hardwarových chyb, údržba počítačů." },
      { title: "Serverový hardware", desc: "Práce se serverovým hardwarem — instalace, konfigurace a údržba serverových komponentů a systémů." },
    ],

    aiTitle: "AI & Agenti",
    aiSubtitle: "Využití AI při vývoji a projektech",
    aiItems: [
      { title: "AI nástroje při vývoji", desc: "Pravidelné používání AI nástrojů při tvorbě projektů — GitHub Copilot na urychlení vývoje, Claude na analýzu problémů a ChatGPT na brainstorming. Kombinování AI s kritickým myšlením pro kvalitní kódovou základnu." },
      { title: "Práce s AI agenty", desc: "Zkušenosti s AI agenty — jejich dizajnem, tréninkem a nasazením. Pochopení jak agenti mohou automatizovat komplexní úkoly a řešit problémy autonomně." },
      { title: "Prompt engineering", desc: "Znalost efektivního psaní promptů pro různé AI modely. Tvorba přesných a specifických promptů, iterace a optimalizace pro nejlepší výsledky v reálných projektech." },
    ],
  },
};

export const LANGS = ["SK", "EN", "DE", "CS"];
