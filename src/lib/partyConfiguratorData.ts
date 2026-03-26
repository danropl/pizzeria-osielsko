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

// B. Pizzas (based on Dish menu)
export const pizzas: QuantityItem[] = [
  { id: "margharita", name: "Margharita", desc: "Sos pelati, mozzarella, bazylia", price: 31 },
  { id: "funghi", name: "Funghi", desc: "Sos pelati, mozzarella, pieczarki", price: 36 },
  { id: "vezuvio", name: "Vezuvio", desc: "Sos pelati, mozzarella, szynka", price: 38 },
  { id: "capriciosa", name: "Capriciosa", desc: "Sos pelati, mozzarella, szynka, pieczarki", price: 40 },
  { id: "hawaii", name: "Hawaii", desc: "Sos pelati, mozzarella, szynka, ananas", price: 40 },
  { id: "venezia", name: "Venezia", desc: "Sos pelati, mozzarella, salami, pieczarki, oliwa z czosnkiem", price: 40 },
  { id: "romana", name: "Romana", desc: "Sos pelati, mozzarella, boczek, pieczarki, cebula", price: 40 },
  { id: "pepperoni", name: "Pepperoni", desc: "Sos pelati, mozzarella, salami pepperoni", price: 40 },
  { id: "jalapeno", name: "Jalapeño", desc: "Sos pelati, mozzarella, boczek, cebula, papryka jalapeño", price: 40 },
  { id: "pigal", name: "Pigal", desc: "Sos pelati, mozzarella, pieczarki, cebula, papryka, oliwki", price: 40 },
  { id: "asparagi", name: "Asparagi", desc: "Sos śmietanowy, mozzarella, gorgonzola, szynka, szparagi, jajko", price: 40 },
  { id: "feta", name: "Feta", desc: "Sos pelati, mozzarella, szynka, ser feta, pomidorki, oliwki, bazylia", price: 42 },
  { id: "amerykanska", name: "Amerykańska", desc: "Sos pelati, mozzarella, szynka, pieczarki, kiełbasa, papryka", price: 42 },
  { id: "miesna", name: "Mięsna", desc: "Sos pelati, mozzarella, szynka, salami, boczek", price: 42 },
  { id: "prosciutto", name: "Prosciutto", desc: "Sos pelati, mozzarella, szynka, jajko, parmezan, bazylia", price: 42 },
  { id: "4sery", name: "4 sery", desc: "Sos pelati, mozzarella, gorgonzola, ricotta, parmezan", price: 42 },
  { id: "bbq-chicken", name: "Barbecue Chicken", desc: "Sos BBQ, mozzarella, kurczak, cebula, papryka, pieprz", price: 42 },
  { id: "parma", name: "Parma", desc: "Sos pelati, mozzarella, szynka dojrzewająca, pomidorki, parmezan, rukola", price: 44 },
  { id: "olive-carciofi", name: "Olive e carciofi", desc: "Sos pelati, mozzarella, pieczarki, szynka, karczochy, oliwki", price: 44 },
  { id: "pera-noci", name: "Pera e noci", desc: "Sos pelati, mozzarella, gorgonzola, gruszka, orzechy włoskie, rukola", price: 44 },
  { id: "firmowa", name: "Firmowa", desc: "Sos pelati, mozzarella, chorizo, jalapeño, papryka, cebula", price: 44 },
  { id: "truflowa", name: "Pizza Truflowa", desc: "Krem truflowy, spianata – piccante salami, mascarpone", price: 44 },
  { id: "nduja", name: "Pizza Nduja", desc: "Sos pelati, mozzarella, gorgonzola, oliwki, nduja, cebula", price: 44 },
  { id: "carbonara", name: "Carbonara", desc: "Sos śmietanowy, mozzarella, boczek, gorgonzola, cebula, jajko, parmezan", price: 44 },
];

// C. Starters (menu imprezowe — poza kartą Dish)
export const starters: QuantityItem[] = [
  { id: "bruschetta", name: "Bruschetta", desc: "Grzanka z pomidorami i bazylią", price: 24 },
  { id: "garlic-bread", name: "Pieczywo czosnkowe", desc: "Z masłem czosnkowym i ziołami", price: 18 },
  { id: "antipasti", name: "Deska antipasti", desc: "Wędliny, sery, oliwki, grissini", price: 69 },
  { id: "olives", name: "Oliwki włoskie", desc: "Marynowane z ziołami", price: 16 },
  { id: "burrata", name: "Burrata na półmisku", desc: "Z pomidorami i bazylią", price: 34 },
];

// D. Drinks (based on Dish menu)
export const drinks: QuantityItem[] = [
  { id: "sok-cappy", name: "Sok Cappy 0,25/0,33 l", desc: "Sok owocowy", price: 6 },
  { id: "woda", name: "Woda (butelka) 0,33 l", desc: "Woda mineralna", price: 6 },
  { id: "sanpellegrino", name: "Sanpellegrino 0,33 l", desc: "Woda gazowana premium", price: 9 },
  { id: "piwo-bezalk", name: "Piwo bezalkoholowe 0,5 l", desc: "Piwo bezalkoholowe", price: 12 },
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
