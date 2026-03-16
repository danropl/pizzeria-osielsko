import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import AnimatedSection from "./AnimatedSection";
import margheritaImg from "@/assets/margherita.jpg";
import pepperoniImg from "@/assets/pepperoni-2.jpg";
import quattroFormaggiImg from "@/assets/quattro-formaggi.jpg";
import capricciosaImg from "@/assets/capricciosa.jpg";
import diavolaImg from "@/assets/diavola.jpg";
import funghiPorciniImg from "@/assets/funghi-porcini.jpg";
import bambinoImg from "@/assets/bambino.jpg";
import vegetarianaImg from "@/assets/vegetariana.jpg";
import pizzaDelGiornoImg from "@/assets/pizza-del-giorno.jpg";
import deskaSerowImg from "@/assets/deska-serow.jpg";
import herbataImg from "@/assets/herbata.jpg";
import cannoloImg from "@/assets/cannolo.jpg";
import winoImg from "@/assets/wino.jpg";
import prosciuttoImg from "@/assets/prosciutto.jpg";
import pannaCottaImg from "@/assets/panna-cotta.jpg";
import espressoImg from "@/assets/espresso.jpg";
import prosciuttoRucolaImg from "@/assets/prosciutto-rucola.jpg";
import wodaGazowanaImg from "@/assets/woda-gazowana.jpg";
import cocaColaImg from "@/assets/coca-cola.jpg";
import lemoniadaImg from "@/assets/lemoniada.jpg";
import sokPomaranczowyImg from "@/assets/sok-pomaranczowy.jpg";
import piwoPeroniImg from "@/assets/piwo-peroni.jpg";
import piwoMorettiImg from "@/assets/piwo-moretti.jpg";
import proseccoImg from "@/assets/prosecco.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import sokDzieciecyImg from "@/assets/sok-dzieciecy.jpg";
import sosCzosnkowyImg from "@/assets/sos-czosnkowy.jpg";
import sosBbqImg from "@/assets/sos-bbq.jpg";
import rukolaImg from "@/assets/rukola.jpg";
import oliwkiImg from "@/assets/oliwki.jpg";
import burrataImg from "@/assets/burrata.jpg";
import bruschettaImg from "@/assets/bruschetta.jpg";
import zupaPomidorowaImg from "@/assets/zupa-pomidorowa.jpg";

type MenuTab = "pizze" | "napoje" | "dodatki";

interface Pizza {
  name: string;
  ingredients: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  placeholder: string;
  image?: string;
}

const pizzas: Pizza[] = [
  { name: "Margherita", ingredients: "sos pomidorowy San Marzano, mozzarella fior di latte, świeża bazylia, oliwa EV", price: "[CENA]", badge: "Klasyczna", badgeColor: "bg-accent/10 text-accent", placeholder: "Pizza Margherita", image: margheritaImg },
  { name: "Pepperoni", ingredients: "sos pomidorowy, mozzarella, pikantne pepperoni, oregano", price: "[CENA]", badge: "Bestseller 🔥", badgeColor: "bg-primary/10 text-primary", placeholder: "Pizza Pepperoni", image: pepperoniImg },
  { name: "Quattro Formaggi", ingredients: "mozzarella, gorgonzola, parmezan, ricotta, miód truflowy", price: "[CENA]", badge: "Nowość ✨", badgeColor: "bg-yellow-500/10 text-yellow-700", placeholder: "Pizza Quattro Formaggi", image: quattroFormaggiImg },
  { name: "Capricciosa", ingredients: "sos pomidorowy, mozzarella, szynka parmeńska, pieczarki, karczochy, oliwki", price: "[CENA]", placeholder: "Pizza Capricciosa", image: capricciosaImg },
  { name: "Diavola", ingredients: "sos pomidorowy, mozzarella, nduja, salami piccante, papryczki chili", price: "[CENA]", badge: "Ostre 🌶️🌶️", badgeColor: "bg-red-500/10 text-red-600", placeholder: "Pizza Diavola", image: diavolaImg },
  { name: "Prosciutto e Rucola", ingredients: "sos pomidorowy, mozzarella, prosciutto crudo, rukola, parmezan, pomidorki", price: "[CENA]", placeholder: "Pizza Prosciutto e Rucola", image: prosciuttoRucolaImg },
  { name: "Funghi Porcini", ingredients: "biała baza śmietanowa, mozzarella, grzyby porcini, czosnek, tymianek, truflowe olio", price: "[CENA]", badge: "Premium 👑", badgeColor: "bg-yellow-600/10 text-yellow-700", placeholder: "Pizza Funghi Porcini", image: funghiPorciniImg },
  { name: "Bambino", ingredients: "sos pomidorowy, mozzarella, szynka gotowana, kukurydza", price: "[CENA]", badge: "Dla dzieci 👶", badgeColor: "bg-accent/10 text-accent", placeholder: "Pizza Bambino", image: bambinoImg },
  { name: "Vegetariana", ingredients: "sos pomidorowy, mozzarella, papryka, cukinia, bakłażan, rukola, pomidorki", price: "[CENA]", badge: "Vege 🌱", badgeColor: "bg-accent/10 text-accent", placeholder: "Pizza Vegetariana", image: vegetarianaImg },
  { name: "Pizza del Giorno", ingredients: "zmieniają się codziennie — sezonowe propozycje szefa kuchni", price: "[CENA]", badge: "Sezonowa 🍂", badgeColor: "bg-orange-500/10 text-orange-700", placeholder: "Pizza del Giorno", image: pizzaDelGiornoImg },
];

interface Drink { name: string; price: string; placeholder: string; image?: string; }
const drinks: Drink[] = [
  { name: "Woda mineralna gazowana 0.5l", price: "[CENA]", placeholder: "Butelka wody mineralnej gazowanej 0.5l", image: wodaGazowanaImg },
  { name: "Woda mineralna niegazowana 0.5l", price: "[CENA]", placeholder: "Butelka wody mineralnej niegazowanej 0.5l", image: wodaGazowanaImg },
  { name: "Woda mineralna 1l", price: "[CENA]", placeholder: "Butelka wody mineralnej 1 litr", image: wodaGazowanaImg },
  { name: "Coca-Cola 0.33l", price: "[CENA]", placeholder: "Puszka lub butelka Coca-Cola 0.33l — czerwona", image: cocaColaImg },
  { name: "Lemoniada domowa", price: "[CENA]", placeholder: "Szklanka domowej lemonady z cytryną i miętą, z lodem", image: lemoniadaImg },
  { name: "Świeżo wyciskany sok pomarańczowy", price: "[CENA]", placeholder: "Szklanka świeżo wyciśniętego soku pomarańczowego", image: sokPomaranczowyImg },
  { name: "Piwo Peroni Nastro Azzurro", price: "[CENA]", placeholder: "Butelka piwa Peroni Nastro Azzurro — zielona butelka", image: piwoPeroniImg },
  { name: "Piwo Moretti butelka", price: "[CENA]", placeholder: "Butelka piwa Birra Moretti — charakterystyczna etykieta", image: piwoMorettiImg },
  { name: "Wino Chianti kieliszek", price: "[CENA]", placeholder: "Kieliszek czerwonego wina Chianti", image: winoImg },
  { name: "Wino Pinot Grigio kieliszek", price: "[CENA]", placeholder: "Kieliszek białego wina Pinot Grigio", image: winoImg },
  { name: "Prosecco kieliszek", price: "[CENA]", placeholder: "Kieliszek prosecco — bąbelki, złocista barwa", image: proseccoImg },
  { name: "Espresso", price: "[CENA]", placeholder: "Filiżanka espresso — intensywna czarna kawa, crema", image: espressoImg },
  { name: "Cappuccino", price: "[CENA]", placeholder: "Cappuccino z pianką mleczną i latte art", image: cappuccinoImg },
  { name: "Herbata", price: "[CENA]", placeholder: "Szklanka lub czajniczek herbaty", image: herbataImg },
  { name: "Sok owocowy dla dzieci", price: "[CENA]", placeholder: "Kolorowy kartonik soku owocowego dla dzieci", image: sokDzieciecyImg },
];

interface Addon { name: string; desc: string; price: string; placeholder: string; image?: string; }
const addons: Addon[] = [
  { name: "Sos czosnkowy", desc: "Kremowy sos na bazie czosnku", price: "[CENA]", placeholder: "Miseczka kremowego sosu czosnkowego", image: sosCzosnkowyImg },
  { name: "Sos BBQ", desc: "Klasyczny sos barbecue", price: "[CENA]", placeholder: "Miseczka sosu barbecue — ciemnobrązowy, błyszczący", image: sosBbqImg },
  { name: "Rukola (porcja)", desc: "Świeża, zielona rukola", price: "[CENA]", placeholder: "Porcja świeżej rukoli na białym talerzu", image: rukolaImg },
  { name: "Oliwki marynowane", desc: "Czarne i zielone oliwki", price: "[CENA]", placeholder: "Miseczka marynowanych oliwek czarnych i zielonych", image: oliwkiImg },
  { name: "Burrata świeża", desc: "Kremowa kula sera z Puglii", price: "[CENA]", placeholder: "Świeża burrata — kremowa biała kula sera, z pomidorkami i bazylią", image: burrataImg },
  { name: "Bruschetta (2 szt.)", desc: "Pomidory, czosnek, bazylia", price: "[CENA]", placeholder: "Dwie bruschetty z pomidorami, czosnkiem i bazylią", image: bruschettaImg },
  { name: "Deska serów włoskich", desc: "Parmezan, pecorino, gorgonzola", price: "[CENA]", placeholder: "Deska serów", image: deskaSerowImg },
  { name: "Prosciutto crudo", desc: "Cienko krojone prosciutto", price: "[CENA]", placeholder: "Prosciutto crudo", image: prosciuttoImg },
  { name: "Zupa pomidorowa dnia", desc: "Ze świeżą bazylią", price: "[CENA]", placeholder: "Miska zupy pomidorowej ze świeżą bazylią", image: zupaPomidorowaImg },
  { name: "Tiramisu", desc: "Klasyczny włoski deser", price: "[CENA]", placeholder: "Tiramisu", image: cannoloImg },
  { name: "Panna cotta", desc: "Z sosem truskawkowym", price: "[CENA]", placeholder: "Panna cotta na talerzu z sosem truskawkowym", image: pannaCottaImg },
];

const tabs: { id: MenuTab; label: string; icon: string }[] = [
  { id: "pizze", label: "Pizze", icon: "🍕" },
  { id: "napoje", label: "Napoje", icon: "🥤" },
  { id: "dodatki", label: "Dodatki", icon: "🧂" },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>("pizze");

  return (
    <section id="menu" className="bg-background section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Nasze Menu</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Wybierz swój smak
          </h2>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-2xl font-body font-medium text-sm transition-colors ${
                activeTab === tab.id ? "text-primary-foreground" : "text-foreground/60 hover:text-foreground bg-card border border-border/30"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="menu-tab"
                  className="absolute inset-0 bg-primary rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "pizze" && (
            <motion.div
              key="pizze"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pizzas.map((pizza, i) => (
                <AnimatedSection key={pizza.name} delay={i * 0.05} className="card-warm overflow-hidden">
                  <div className="relative">
                    {pizza.image ? (
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
                        <img src={pizza.image} alt={pizza.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : (
                      <ImagePlaceholder label={pizza.placeholder} aspectRatio="aspect-[4/3]" className="rounded-none rounded-t-3xl" />
                    )}
                    {pizza.badge && (
                      <span className={`absolute top-3 right-3 badge-tag ${pizza.badgeColor}`}>
                        {pizza.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-subhead text-xl font-semibold text-foreground mb-1">{pizza.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">{pizza.ingredients}</p>
                    <div className="flex items-center justify-between">
                      <span className="price-tag text-xl text-primary">{pizza.price} zł</span>
                      <button className="btn-primary text-sm py-2 px-4">Zamów</button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}

          {activeTab === "napoje" && (
            <motion.div
              key="napoje"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {drinks.map((drink, i) => (
                <AnimatedSection key={drink.name} delay={i * 0.03} className="card-warm p-4 flex items-center gap-4">
                  {drink.image ? (
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                      <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <ImagePlaceholder label={drink.placeholder} aspectRatio="aspect-square" className="w-16 h-16 flex-shrink-0 rounded-xl" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body font-semibold text-foreground text-sm truncate">{drink.name}</h3>
                    <p className="price-tag text-primary text-sm mt-1">{drink.price} zł</p>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}

          {activeTab === "dodatki" && (
            <motion.div
              key="dodatki"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {addons.map((addon, i) => (
                <AnimatedSection key={addon.name} delay={i * 0.03} className="card-warm p-4 flex items-center gap-4">
                  {addon.image ? (
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                      <img src={addon.image} alt={addon.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <ImagePlaceholder label={addon.placeholder} aspectRatio="aspect-square" className="w-16 h-16 flex-shrink-0 rounded-xl" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body font-semibold text-foreground text-sm">{addon.name}</h3>
                    <p className="font-body text-xs text-muted-foreground">{addon.desc}</p>
                    <p className="price-tag text-primary text-sm mt-1">{addon.price} zł</p>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom */}
        <AnimatedSection className="text-center mt-12 space-y-4">
          <a href="#" className="btn-primary text-base px-8 py-4">🛵 Zamów online</a>
          <p className="font-body text-xs text-muted-foreground">
            ⚠️ Informacje o alergenach dostępne w restauracji. Zapytaj obsługę o składniki.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuSection;
