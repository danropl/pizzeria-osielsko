import heartPizzaImg from "@/assets/heart-pizza.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import interior2Img from "@/assets/interior-2.jpg";
import cateringImg from "@/assets/catering.jpg";
import eventWorkshopImg from "@/assets/event-workshop.jpg";
import eventChallengeImg from "@/assets/event-challenge.jpg";

export interface SpecialOffer {
  id: string;
  emoji: string;
  title: string;
  lead: string;
  description: string;
  highlights: string[];
  whyItWorks: string;
  image: string;
}

export const specialOffers: SpecialOffer[] = [
  {
    id: "urodziny-w-pizzerii",
    emoji: "🎂",
    title: "Urodziny w Pizzerii",
    lead: "Wyjątkowe urodziny w włoskim stylu — dla dzieci i dorosłych.",
    description:
      "Urodziny to okazja, która przychodzi sama — a my zadbamy, żeby była niezapomniana. Solenizant poczuje się wyjątkowo, a goście spędzą czas w ciepłej, włoskiej atmosferze przy najlepszej pizzy z pieca.",
    highlights: [
      "Mini deser lub lemoniada gratis dla solenizanta",
      "Przy grupie 4+ osób — starter lub pizza w promocyjnej cenie",
      'Świeczka i napis \u201ESto lat\u201D na talerzu lub pudełku',
      "Zdjęcie urodzinowe przy stoliku z dekoracją",
    ],
    whyItWorks:
      "Urodziny to silna okazja społeczna — przychodzą grupy, rośnie rachunek, a koszt obsługi okazji jest minimalny. Gość czuje się wyjątkowy bez dodatkowego wysiłku.",
    image: eventKidsImg,
  },
  {
    id: "pakiet-randkowy",
    emoji: "💕",
    title: "Wieczór we Dwoje",
    lead: "Romantyczny pakiet dla dwojga — pizza, napoje i deser w kameralnej atmosferze.",
    description:
      "Idealny na spokojne wieczory i randki we dwoje. Przygotowaliśmy pakiet, który pozwoli Wam skupić się na sobie — bez zastanawiania się nad menu. Pizza prosto z pieca, napoje do wyboru i deser do podziału.",
    highlights: [
      "1 duża pizza do wyboru",
      "2 napoje lub kieliszki prosecco",
      "1 deser do podziału",
      "Stolik z małą świeczką i nastrojowym oświetleniem",
      "Darmowa rezerwacja „romantycznego stolika"",
    ],
    whyItWorks:
      "Gotowy pakiet z jasną propozycją wartości. Klient nie musi wybierać — dostaje kompletne doświadczenie w atrakcyjnej formie.",
    image: heartPizzaImg,
  },
  {
    id: "kolacja-rocznicowa",
    emoji: "🥂",
    title: "Kolacja Rocznicowa",
    lead: "Celebruj wyjątkowy moment — w stylu, który zapada w pamięć.",
    description:
      "Rocznica zasługuje na wyjątkową oprawę. Przygotujemy dla Was stolik z prostą, ale elegancką dekoracją, zadbamy o detale i sprawimy, że wieczór będzie naprawdę wyjątkowy.",
    highlights: [
      "Rezerwacja stolika z dekoracją",
      "Deser gratis przy zamówieniu zestawu dla dwojga",
      "Personalizowana karteczka z życzeniami",
      "Kameralny, romantyczny nastrój",
    ],
    whyItWorks:
      "To sprzedaje się jako obsługa okazji, nie jako drogi produkt. Minimalny koszt, a duża wartość emocjonalna dla gości.",
    image: interior2Img,
  },
  {
    id: "dla-paczki",
    emoji: "👫",
    title: "Oferta „dla Paczki"",
    lead: "Zestawy dla grup — bo razem smakuje lepiej.",
    description:
      "Spotkanie ze znajomymi, wieczór przy meczu, rodzinny weekend — mamy gotowe zestawy, które ułatwiają wybór i sprawiają, że każdy jest najedzony i zadowolony.",
    highlights: [
      "Zestawy dla 4+ osób z 2–3 pizzami",
      "Sosy i dodatki w cenie zestawu",
      "Napoje do grupy",
      "Opcja „Pizza Party Box" na wynos",
      "Pieczywo czosnkowe lub frytki w zestawie",
    ],
    whyItWorks:
      "Klient lubi gotowe decyzje. Zestaw grupowy podbija koszyk i sprawia, że zamawianie jest prostsze dla wszystkich.",
    image: eventChallengeImg,
  },
  {
    id: "pizza-i-film",
    emoji: "🎬",
    title: "Pizza i Film",
    lead: "Wieczór filmowy z gorącą pizzą — w domu lub u nas.",
    description:
      "Idealny pakiet na wieczór domowy, domówkę lub po prostu chwilę relaksu. Dwie pizze, napój i coś słodkiego — wszystko gotowe, żebyś mógł włączyć ulubiony film i nie martwić się o nic.",
    highlights: [
      "2 pizze do wyboru",
      "Napój 1 litr",
      "Deser lub sosy gratis",
      "Dostępny na wynos i z dostawą",
    ],
    whyItWorks:
      "Działa cały rok, niezależnie od sezonu. Uniwersalny format, który trafia do singli, par i rodzin.",
    image: pizzasVarietyImg,
  },
  {
    id: "duet-lunchowy",
    emoji: "☀️",
    title: "Duet Lunchowy",
    lead: "Lunch dla dwóch osób — nie tylko na randkę.",
    description:
      "Koleżanki, współpracownicy, studenci, pary — nasz duet lunchowy to propozycja na szybki, smaczny i przystępny lunch we dwoje. Dostępny w godzinach 12:00–16:00.",
    highlights: [
      "2 małe pizze lub 1 duża do podziału",
      "2 napoje w zestawie",
      "Atrakcyjna cena pakietowa w godzinach lunchowych",
    ],
    whyItWorks:
      "Dobry sposób na generowanie ruchu poza szczytem. Niski koszt, a klient wraca regularnie.",
    image: eventWorkshopImg,
  },
  {
    id: "zapros-znajomych",
    emoji: "🎉",
    title: "Zaproś Znajomych",
    lead: "Im więcej Was, tym więcej korzyści.",
    description:
      "Przyjdźcie w większym gronie — przygotowaliśmy specjalne bonusy dla grup. Rezerwacja stolika grupowego, drobne upominki i przyjemne niespodzianki czekają na tych, którzy lubią dzielić się smakiem.",
    highlights: [
      "Przy 6 osobach: dzbanek lemoniady gratis",
      "Przy 8 osobach: pizza gratis",
      "Rezerwacja stolika grupowego bez opłaty",
      "Dodatkowe niespodzianki dla większych grup",
    ],
    whyItWorks:
      "Minimalny koszt dodatkowy, a rośnie liczba osób przy rachunku. Grupy generują wyższe rachunki i naturalnie promują lokal.",
    image: cateringImg,
  },
];
