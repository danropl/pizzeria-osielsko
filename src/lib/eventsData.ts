import heartPizzaImg from "@/assets/heart-pizza.jpg";
import eventXmasImg from "@/assets/event-xmas.jpg";
import interior2Img from "@/assets/interior-2.jpg";
import cateringImg from "@/assets/catering.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import eventWorkshopImg from "@/assets/event-workshop.jpg";
import eventChallengeImg from "@/assets/event-challenge.jpg";

export interface EventItem {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  image: string;
  longDesc: string;
  forWhom: string;
  occasion: string;
  vibe: string;
}

export const events: EventItem[] = [
  {
    id: "urodziny-maly-pizzaiolo",
    title: "Urodziny Mały Pizzaiolo",
    badge: "Dla dzieci 👶",
    badgeColor: "bg-accent/80 text-accent-foreground",
    desc: "Wyjątkowe urodziny w stylu włoskim dla najmłodszych.",
    image: eventKidsImg,
    longDesc: "Przenieś urodziny swojego dziecka do serca Włoch! Każdy mały gość staje się pizzaiolo — zakłada fartuszek, wałkuje ciasto, wybiera ulubione składniki i piecze własną pizzę w naszym piecu opalanym drewnem. Do tego wspólna zabawa, włoska muzyka i mnóstwo śmiechu. To urodziny, które dzieci zapamiętają na długo.",
    forWhom: "Dzieci w wieku 4–12 lat i ich rodzice",
    occasion: "Urodziny, imieniny, zakończenie roku szkolnego",
    vibe: "Radosny, kreatywny, pełen zabawy i smaku",
  },
  {
    id: "warsztaty-robienia-pizzy",
    title: "Warsztaty Robienia Pizzy",
    badge: "Warsztaty 👨‍🍳",
    badgeColor: "bg-orange-500/80 text-white",
    desc: "Naucz się wyrabiać ciasto i komponować smaki jak prawdziwy pizzaiolo.",
    image: eventWorkshopImg,
    longDesc: "Pod okiem naszego pizzaiolo poznasz tajniki prawdziwego neapolitańskiego ciasta — od wyrabiania, przez fermentację, po formowanie. Nauczysz się komponować klasyczne i autorskie smaki, a swoją pizzę wypieczesz w piecu rozgrzanym do 400°C. Warsztaty kończą się wspólną degustacją przy lampce wina lub lemoniady.",
    forWhom: "Dorośli, pary, grupy znajomych, integracje firmowe",
    occasion: "Prezent, wspólne spędzanie czasu, team building",
    vibe: "Edukacyjny, kulinarny, pełen pasji i autentycznych smaków",
  },
  {
    id: "randka-w-kuchni",
    title: "Randka w Kuchni",
    badge: "Romantyczny 💕",
    badgeColor: "bg-pink-500/80 text-white",
    desc: "Romantyczny wieczór dla dwojga przy wspólnym gotowaniu.",
    image: heartPizzaImg,
    longDesc: "Wieczór stworzony dla dwojga — wspólne gotowanie w kameralnej atmosferze, przy świecach i włoskiej muzyce. Razem przygotujecie kolację od podstaw: od ciasta na pizzę, przez przystawki, po deser. To nie tylko jedzenie — to czas spędzony razem, bez pośpiechu, z pasją i bliskością.",
    forWhom: "Pary, małżeństwa, osoby szukające wyjątkowego prezentu dla bliskiej osoby",
    occasion: "Rocznica, walentynki, urodziny partnera, niespodzianka",
    vibe: "Romantyczny, kameralny, pełen ciepła i emocji",
  },
  {
    id: "letnie-kino-z-pizza",
    title: "Letnie Kino z Pizzą",
    badge: "Sezonowy 🌙",
    badgeColor: "bg-blue-800/80 text-white",
    desc: "Seans filmowy pod gwiazdami z gorącą pizzą w ręku.",
    image: eventXmasImg,
    longDesc: "Kiedy wieczór jest ciepły, a niebo gwiaździste — zapraszamy do naszego ogródka na seans filmowy z gorącą pizzą. Klasyka kina, koce, nastrojowe oświetlenie i pyszne jedzenie w wyjątkowej scenerii. Idealna forma na letni wieczór z rodziną, przyjaciółmi lub drugą połówką.",
    forWhom: "Rodziny, pary, grupy znajomych",
    occasion: "Letnie weekendy, wieczory z bliskimi",
    vibe: "Relaksujący, nastrojowy, letni i beztroski",
  },
  {
    id: "pizza-challenge",
    title: "Pizza Challenge",
    badge: "Wyzwanie 🌶️",
    badgeColor: "bg-red-500/80 text-white",
    desc: "Kto zje najszybciej? Rywalizacja w dobrym stylu.",
    image: eventChallengeImg,
    longDesc: "Myślisz, że jesz pizzę szybko? Sprawdź się w naszym Pizza Challenge! Rywalizacja na czas, z publicznością i nagrodami. Atmosfera jak na włoskim festynie — gorąco, głośno i z mnóstwem emocji. Idealne wydarzenie integracyjne, które łączy rywalizację z zabawą.",
    forWhom: "Grupy znajomych, firmy, wieczory kawalerskie/panieńskie",
    occasion: "Integracja, impreza grupowa, event firmowy",
    vibe: "Energetyczny, rywalizacyjny, pełen śmiechu i adrenaliny",
  },
  {
    id: "karaoke-italiano-night",
    title: "Karaoke Italiano Night",
    badge: "Muzyczny 🎶",
    badgeColor: "bg-purple-500/80 text-white",
    desc: "Włoskie przeboje i pizza do późna w nocy.",
    image: interior2Img,
    longDesc: "Wieczór pełen muzyki, śpiewu i włoskiego temperamentu. Na naszej scenie możesz zaśpiewać klasyki — od Volare po Con te partirò. Do tego pizza prosto z pieca, włoskie wino i atmosfera, jakbyś był na piazza w Neapolu. Nie musisz śpiewać idealnie — wystarczy, że śpiewasz z sercem!",
    forWhom: "Grupy znajomych, pary, osoby lubiące muzykę i zabawę",
    occasion: "Piątkowy lub sobotni wieczór, urodziny, spotkanie towarzyskie",
    vibe: "Zabawny, muzyczny, towarzyski i pełen energii",
  },
  {
    id: "pizza-wino-z-sommelierem",
    title: "Pizza & Wino z Sommelierem",
    badge: "Premium 🍷",
    badgeColor: "bg-rose-800/80 text-white",
    desc: "Degustacja win dobranych do pizzy przez eksperta.",
    image: pizzasVarietyImg,
    longDesc: "Ekskluzywne doświadczenie łączące sztukę włoskiego wina z naszą autorską pizzą. Sommelier poprowadzi degustację kilku starannie wyselekcjonowanych win, dopasowanych do kolejnych dań. Poznasz nuty smakowe, regiony winiarskie i sekrety idealnego parowania. Wieczór dla koneserów i tych, którzy chcą nimi zostać.",
    forWhom: "Pary, koneserzy, grupy przyjacielskie, klienci premium",
    occasion: "Prezent, rocznica, wieczór degustacyjny, spotkanie biznesowe",
    vibe: "Elegancki, edukacyjny, pełen smaku i klasy",
  },
  {
    id: "voucher-experience",
    title: "Voucher Experience",
    badge: "Prezent 🎁",
    badgeColor: "bg-yellow-600/80 text-white",
    desc: "Podaruj komuś niezapomniane przeżycie w naszej restauracji.",
    image: cateringImg,
    longDesc: "Nie wiesz, co podarować? Voucher Experience to uniwersalny prezent na każdą okazję. Obdarowana osoba sama wybiera, jak chce go wykorzystać — na kolację, warsztaty, degustację lub inny event. Voucher dostępny w eleganckiej formie papierowej lub elektronicznej. To więcej niż rzecz — to przeżycie.",
    forWhom: "Każdy, kto szuka wyjątkowego prezentu",
    occasion: "Urodziny, święta, podziękowanie, rocznica, imieniny",
    vibe: "Uniwersalny, elegancki, pełen możliwości",
  },
];
