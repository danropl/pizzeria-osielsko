import heartPizzaImg from "@/assets/heart-pizza.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import interior2Img from "@/assets/interior-2.jpg";

export interface VoucherItem {
  id: string;
  emoji: string;
  title: string;
  contents: string;
  image: string;
  longDesc: string;
  forWhom: string;
  example: string;
}

export const vouchers: VoucherItem[] = [
  {
    id: "randka-w-kuchni",
    emoji: "💑",
    title: "Randka w Kuchni",
    contents: "Romantyczny prezent dla pary.",
    image: heartPizzaImg,
    longDesc: "Podaruj bliskiej osobie wieczór pełen emocji i smaków. Wspólne gotowanie w kameralnej atmosferze, przy świecach i włoskiej muzyce. Razem przygotujecie kolację od podstaw — od wyrabiania ciasta, przez wybór składników, po wypiekanie pizzy w naszym piecu. To prezent, który zbliża i pozostawia wspomnienia.",
    forWhom: "Pary, małżeństwa, narzeczeni, osoby szukające romantycznego prezentu",
    example: "Walentynki, rocznica ślubu, urodziny partnera, niespodzianka „bo Cię kocham"",
  },
  {
    id: "urodziny-pizzaiolo",
    emoji: "🎂",
    title: "Urodziny Pizzaiolo",
    contents: "Niezapomniane urodziny w klimacie włoskim.",
    image: eventKidsImg,
    longDesc: "Voucher na wyjątkowe urodziny dla dziecka w naszej pizzerii. Mały jubilat i jego goście zakładają fartuszki, uczą się robić pizzę, dekorują ją samodzielnie i wspólnie jedzą. To urodziny pełne zabawy, kreatywności i prawdziwych włoskich smaków — bez stresu dla rodziców.",
    forWhom: "Rodzice dzieci w wieku 4–12 lat, dziadkowie, osoby szukające prezentu dla dziecka",
    example: "Urodziny, imieniny, nagroda za osiągnięcia, prezent od dziadków",
  },
  {
    id: "pizza-wino-sommelier",
    emoji: "🍷",
    title: "Pizza & Wino z Sommelierem",
    contents: "Ekskluzywna degustacja dla koneserów.",
    image: pizzasVarietyImg,
    longDesc: "Elegancki voucher na wieczór degustacyjny prowadzony przez sommeliera. Obdarowana osoba pozna tajniki włoskiego wina w połączeniu z naszą autorską pizzą. Kilka starannie dobranych win, kolejne dania i opowieść o regionach winiarskich Włoch. Prezent dla osób ceniących smak i klasę.",
    forWhom: "Koneserzy wina, pary szukające ekskluzywnego doświadczenia, klienci biznesowi",
    example: "Prezent urodzinowy, podziękowanie dla partnera biznesowego, rocznica",
  },
  {
    id: "wieczor-karaoke",
    emoji: "🎤",
    title: "Wieczór Karaoke",
    contents: "Zabawa z włoskimi klasykami i pyszną pizzą.",
    image: interior2Img,
    longDesc: "Voucher na wieczór pełen muzyki, śmiechu i włoskiego temperamentu. Obdarowana osoba spędzi niezapomniany wieczór przy karaoke — śpiewając włoskie i światowe przeboje, jedząc pyszną pizzę prosto z pieca i popijając włoskie wino. Idealny prezent dla osób kochających zabawę.",
    forWhom: "Grupy znajomych, osoby lubiące muzykę i imprezowy klimat, pary",
    example: "Prezent urodzinowy, wieczór panieński/kawalerski, niespodzianka dla przyjaciela",
  },
];
