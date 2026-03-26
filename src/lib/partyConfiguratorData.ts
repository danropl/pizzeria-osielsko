// ============================================================
// Party Configurator – all pricing data in one place
// ============================================================

export interface SelectableOption {
  id: string;
  label: string;
  desc?: string;
  price: number;
}

export interface QuantityItem {
  id: string;
  name: string;
  desc: string;
  price: number;
}

export interface CheckboxOption {
  id: string;
  label: string;
  price: number;
}

// A. Party types
export const partyTypes: SelectableOption[] = [
  { id: "kids", label: "Urodziny dziecięce", desc: "Zabawa, warsztaty i mnóstwo radości", price: 149 },
  { id: "family", label: "Urodziny rodzinne", desc: "Ciepła atmosfera dla całej rodziny", price: 99 },
  { id: "friends", label: "Wieczór ze znajomymi", desc: "Luźne spotkanie w dobrym stylu", price: 79 },
  { id: "anniversary", label: "Kolacja rocznicowa", desc: "Elegancki wieczór na wyjątkową okazję", price: 129 },
  { id: "corporate", label: "Impreza firmowa", desc: "Integracja zespołu w klimacie Włoch", price: 199 },
];

// Duration
export const durationOptions: SelectableOption[] = [
  { id: "2h", label: "2 godziny", price: 0 },
  { id: "3h", label: "3 godziny", price: 120 },
  { id: "4h", label: "4 godziny", price: 220 },
];

// Preferred spot
export const spotOptions: SelectableOption[] = [
  { id: "none", label: "Bez preferencji", price: 0 },
  { id: "big-table", label: "Duży stół w sali", price: 49 },
  { id: "cozy", label: "Miejsce bardziej kameralne", price: 69 },
  { id: "terrace", label: "Ogródek / taras", price: 59 },
];

// Time slots
export const timeSlots = ["12:00", "14:00", "16:00", "18:00", "20:00"];

// B. Pizzas
export const pizzas: QuantityItem[] = [
  { id: "margherita", name: "Margherita", desc: "Sos pomidorowy, mozzarella, bazylia", price: 32 },
  { id: "capricciosa", name: "Capricciosa", desc: "Szynka, pieczarki, oliwki, mozzarella", price: 38 },
  { id: "pepperoni", name: "Pepperoni", desc: "Pikantne pepperoni, mozzarella, sos", price: 40 },
  { id: "vegetariana", name: "Vegetariana", desc: "Papryka, cukinia, bakłażan, oliwki", price: 39 },
  { id: "prosciutto", name: "Prosciutto e Rucola", desc: "Szynka parmeńska, rukola, parmezan", price: 42 },
  { id: "quattro", name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, parmezan, ricotta", price: 44 },
];

// C. Starters
export const starters: QuantityItem[] = [
  { id: "bruschetta", name: "Bruschetta", desc: "Grzanka z pomidorami i bazylią", price: 24 },
  { id: "garlic-bread", name: "Pieczywo czosnkowe", desc: "Z masłem czosnkowym i ziołami", price: 18 },
  { id: "antipasti", name: "Deska antipasti", desc: "Wędliny, sery, oliwki, grissini", price: 69 },
  { id: "olives", name: "Oliwki włoskie", desc: "Marynowane z ziołami", price: 16 },
  { id: "burrata", name: "Burrata na półmisku", desc: "Z pomidorami i bazylią", price: 34 },
];

// D. Drinks
export const drinks: QuantityItem[] = [
  { id: "lemonade", name: "Lemoniada 1 l", desc: "Domowa, cytrusowa", price: 18 },
  { id: "cola", name: "Coca-Cola 1 l", desc: "Klasyczna", price: 12 },
  { id: "water", name: "Woda gazowana 1 l", desc: "Naturalna, gazowana", price: 10 },
  { id: "juice", name: "Sok pomarańczowy 1 l", desc: "Świeżo wyciskany", price: 14 },
  { id: "prosecco", name: "Prosecco", desc: "Włoskie, wytrawne", price: 69 },
];

// E. Decoration packages
export const decorationPackages: SelectableOption[] = [
  { id: "none", label: "Brak dekoracji", price: 0 },
  { id: "basic", label: "Pakiet Basic", desc: "Balony, obrus, serwetki", price: 79 },
  { id: "premium", label: "Pakiet Premium", desc: "Kwiaty, świece, elegancka aranżacja", price: 169 },
  { id: "kids-theme", label: "Tematyczne dziecięce", desc: "Kolorowe dekoracje, gadżety, balony", price: 249 },
];

// E. Personalization extras
export const personalizationExtras: CheckboxOption[] = [
  { id: "candle", label: "Świeczka + personalizowany napis", price: 19 },
  { id: "card", label: "Karteczka z dedykacją", price: 15 },
  { id: "photo-zone", label: "Mini strefa zdjęciowa", price: 89 },
  { id: "table-decor", label: "Dodatkowa dekoracja stołu", price: 49 },
];

// E. Own cake
export const cakeServicePrice = 25;

// F. Extra attractions
export const extraAttractions: CheckboxOption[] = [
  { id: "karaoke", label: "Karaoke / muzyczny setup", price: 149 },
  { id: "photo-memory", label: "Zdjęcie pamiątkowe przy stoliku", price: 39 },
  { id: "sto-lat", label: 'Pakiet „Sto lat" dla solenizanta', price: 29 },
  { id: "extra-hour", label: "Dodatkowa godzina obsługi", price: 120 },
];
