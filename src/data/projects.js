export const PROJECTS = [
  {
    id: 1,
    title: "My Expenses",
    desc: {
      SK: "Android aplikácia pre sledovanie hotovostných výdavkov. Maturitná práca. Od konceptu po finálny produkt.",
      EN: "Android app for tracking cash expenses. Final thesis project. From concept to finished product.",
      DE: "Android-App zur Verfolgung von Barausgaben. Abschlussprojekt. Vom Konzept zum fertigen Produkt.",
      CS: "Android aplikace pro sledování hotovostních výdajů. Maturitní práce. Od konceptu po finální produkt.",
    },
    meta: {
      SK: "Maturitná práca · Kotlin, Android Studio · 2024",
      EN: "Graduation project · Kotlin, Android Studio · 2024",
      DE: "Abschlussprojekt · Kotlin, Android Studio · 2024",
      CS: "Maturitní práce · Kotlin, Android Studio · 2024",
    },
    tags: ["Kotlin", "Android Studio", "SharedPreferences"],
    githubUrl: "https://github.com/MHrtanek/funds_app",
    images: [
      "/screenshots/Appka01.png",
      "/screenshots/Appka02.png",
      "/screenshots/Appka03.png",
      "/screenshots/Appka04.png",
      "/screenshots/Appka05.png",
      "/screenshots/Appka06.png",
    ],
  },
  {
    id: 2,
    title: "XML Validator",
    desc: {
      SK: "Webová aplikácia pre automatické porovnávanie bankových výpisov vo formáte XML. Nasadené na AWS.",
      EN: "Web app for automatic comparison of bank statements in XML format. Deployed on AWS.",
      DE: "Web-App zum automatischen Vergleich von Kontoauszügen im XML-Format. Auf AWS deployed.",
      CS: "Webová aplikace pro automatické porovnávání bankovních výpisů ve formátu XML. Nasazeno na AWS.",
    },
    meta: {
      SK: "Prax, 4. ročník strednej školy · 2023",
      EN: "Internship, 4th year secondary · 2023",
      DE: "Praktikum, 4. Jahrgang Sekundarschule · 2023",
      CS: "Praxe, 4. ročník střední školy · 2023",
    },
    tags: ["TypeScript", "HTML", "CSS", "AWS", "Git"],
    githubUrl: "https://github.com/MHrtanek",
    images: [
      "/screenshots/ValidatorO1.png",
      "/screenshots/Validator02.png",
      "/screenshots/Validator03.png",
      "/screenshots/Validator04.png",
      "/screenshots/Validator05.png",
      "/screenshots/Validator06.png",
    ],
  },
  {
    id: 3,
    title: "Domovník",
    desc: {
      SK: "Webová aplikácia pre správu budov a bytov. Evidencia nájomníkov, platieb a správy budovy.",
      EN: "Web application for building and apartment management. Tenant records, payments and property administration.",
      DE: "Webanwendung für Gebäude- und Wohnungsverwaltung. Mieterverwaltung, Zahlungen und Hausverwaltung.",
      CS: "Webová aplikace pro správu budov a bytů. Evidence nájemníků, plateb a správy budovy.",
    },
    meta: {
      SK: "Next.js, TypeScript, MySQL · 2024",
      EN: "Next.js, TypeScript, MySQL · 2024",
      DE: "Next.js, TypeScript, MySQL · 2024",
      CS: "Next.js, TypeScript, MySQL · 2024",
    },
    tags: ["Next.js", "TypeScript", "MySQL"],
    githubUrl: "https://github.com/MHrtanek",
    liveUrl: "https://domovnik.online",
    images: Array.from({ length: 28 }, (_, i) =>
      `/screenshots/domovnik-${String(i + 1).padStart(2, "0")}.png`
    ),
  },
];
