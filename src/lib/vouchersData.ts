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
  badge?: string;
  occasion: string;
}

export const voucherValueTiers = [100, 150, 200, 300] as const;
export const VOUCHER_MIN_CUSTOM = 50;
export const VOUCHER_MAX_CUSTOM = 1000;

export type VoucherFormat = "elektroniczny" | "papierowy";

export const vouchers: VoucherItem[] = [
  {
    id: "randka-w-kuchni",
    emoji: "💑",
    title: "Randka w Kuchni",
    contents: "Romantyczny wieczór dla dwojga — wspólne gotowanie pizzy przy świecach i włoskiej muzyce.",
    image: heartPizzaImg,
    longDesc: "Podaruj bliskiej osobie wieczór pełen emocji i smaków. Wspólne gotowanie w kameralnej atmosferze, przy świecach i włoskiej muzyce. Razem przygotujecie kolację od podstaw — od wyrabiania ciasta, przez wybór składników, po wypiekanie pizzy w naszym piecu.",
    forWhom: "Pary, małżeństwa, narzeczeni",
    example: "Walentynki, rocznica ślubu, urodziny partnera",
    badge: "Najczęściej wybierany",
    occasion: "randka",
  },
  {
    id: "urodziny-pizzaiolo",
    emoji: "🎂",
    title: "Urodziny Pizzaiolo",
    contents: "Niezapomniane urodziny dla dziecka — warsztaty pizzy, dekorowanie i wspólna zabawa.",
    image: eventKidsImg,
    longDesc: "Voucher na wyjątkowe urodziny dla dziecka w naszej pizzerii. Mały jubilat i jego goście zakładają fartuszki, uczą się robić pizzę, dekorują ją samodzielnie i wspólnie jedzą.",
    forWhom: "Rodzice dzieci w wieku 4–12 lat, dziadkowie",
    example: "Urodziny, imieniny, prezent od dziadków",
    badge: "Na prezent",
    occasion: "prezent",
  },
  {
    id: "pizza-wino-sommelier",
    emoji: "🍷",
    title: "Pizza & Wino z Sommelierem",
    contents: "Ekskluzywna degustacja — włoskie wina dobrane do autorskiej pizzy przez sommeliera.",
    image: pizzasVarietyImg,
    longDesc: "Elegancki voucher na wieczór degustacyjny prowadzony przez sommeliera. Kilka starannie dobranych win, kolejne dania i opowieść o regionach winiarskich Włoch.",
    forWhom: "Koneserzy wina, pary, klienci biznesowi",
    example: "Prezent urodzinowy, podziękowanie biznesowe, rocznica",
    occasion: "kolacja",
  },
  {
    id: "wieczor-karaoke",
    emoji: "🎤",
    title: "Wieczór Karaoke",
    contents: "Muzyka, śmiech i pizza — wieczór pełen zabawy przy włoskich i światowych przebojach.",
    image: interior2Img,
    longDesc: "Voucher na wieczór pełen muzyki, śmiechu i włoskiego temperamentu. Śpiewanie, pyszna pizza prosto z pieca i włoskie wino.",
    forWhom: "Grupy znajomych, pary, osoby lubiące muzykę",
    example: "Urodziny, wieczór panieński, niespodzianka",
    badge: "Elektroniczny od ręki",
    occasion: "dowolna okazja",
  },
];
