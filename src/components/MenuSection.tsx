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
import vegetarianaImg from "@/assets/vegetariana.jpg";
import pizzaDelGiornoImg from "@/assets/pizza-del-giorno.jpg";
import deskaSerowImg from "@/assets/deska-serow.jpg";
import herbataImg from "@/assets/herbata.jpg";
import prosciuttoImg from "@/assets/prosciutto.jpg";
import prosciuttoRucolaImg from "@/assets/prosciutto-rucola.jpg";
import wodaGazowanaImg from "@/assets/woda-gazowana.jpg";
import cocaColaImg from "@/assets/coca-cola.jpg";
import lemoniadaImg from "@/assets/lemoniada.jpg";
import sokPomaranczowyImg from "@/assets/sok-pomaranczowy.jpg";
import piwoPeroniImg from "@/assets/piwo-peroni.jpg";
import piwoMorettiImg from "@/assets/piwo-moretti.jpg";
import sokDzieciecyImg from "@/assets/sok-dzieciecy.jpg";
import sosCzosnkowyImg from "@/assets/sos-czosnkowy.jpg";
import sosBbqImg from "@/assets/sos-bbq.jpg";
import burrataImg from "@/assets/burrata.jpg";
import bruschettaImg from "@/assets/bruschetta.jpg";
import vezuvioImg from "@/assets/vezuvio.jpg";
import veneziaImg from "@/assets/venezia.jpg";
import romanaImg from "@/assets/romana.jpg";
import hawaiiImg from "@/assets/hawaii.jpg";
import fetaImg from "@/assets/feta.jpg";
import amerykanskaImg from "@/assets/amerykanska.jpg";
import miesnaImg from "@/assets/miesna.jpg";
import oliveCarciofiImg from "@/assets/olive-carciofi.jpg";
import ndujaImg from "@/assets/nduja.jpg";
import bbqChickenImg from "@/assets/bbq-chicken.jpg";
import peraNociImg from "@/assets/pera-noci.jpg";
import truflowaImg from "@/assets/truflowa.jpg";
import carbonaraImg from "@/assets/carbonara.jpg";
import wujkaPaoloImg from "@/assets/wujka-paolo.jpg";

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
  { name: "Margarita", ingredients: "sos pelati (pomidorowy), mozzarella, bazylia świeża, oliwa z oliwek", price: "32", badge: "Klasyczna", badgeColor: "bg-accent/80 text-accent-foreground", placeholder: "Pizza Margherita", image: margheritaImg },
  { name: "Funghi", ingredients: "sos pelati (pomidorowy), mozzarella, pieczarki", price: "36", placeholder: "Pizza Funghi", image: funghiPorciniImg },
  { name: "Vezuvio", ingredients: "sos pelati (pomidorowy), mozzarella, szynka", price: "38", placeholder: "Pizza Vezuvio", image: vezuvioImg },
  { name: "Capriciossa", ingredients: "sos pelati (pomidorowy), mozzarella, szynka, pieczarki", price: "40", placeholder: "Pizza Capricciosa", image: capricciosaImg },
  { name: "Pepperoni", ingredients: "sos pelati (pomidorowy), mozzarella, Spianata - piccante salami", price: "40", badge: "Bestseller 🔥", badgeColor: "bg-primary/80 text-primary-foreground", placeholder: "Pizza Pepperoni", image: pepperoniImg },
  { name: "Venezia", ingredients: "sos pelati (pomidorowy), mozzarella, salami, pieczarki, czosnek", price: "40", placeholder: "Pizza Venezia", image: veneziaImg },
  { name: "Romana", ingredients: "sos pelati (pomidorowy), mozzarella, boczek, pieczarki, cebula czerwona", price: "42", placeholder: "Pizza Romana", image: romanaImg },
  { name: "Hawaii", ingredients: "sos pelati (pomidorowy), mozzarella, szynka, ananas", price: "40", placeholder: "Pizza Hawaii", image: hawaiiImg },
  { name: "Jalapeno", ingredients: "sos pelati (pomidorowy), mozzarella, boczek, cebula czerwona, papryka jalapeno (ostra)", price: "42", badge: "Ostre 🌶️", badgeColor: "bg-red-500/80 text-white", placeholder: "Pizza Jalapeno", image: diavolaImg },
  { name: "Vegetariana", ingredients: "sos pelati (pomidorowy), mozzarella, pieczarki, cebula czerwona, papryka, oliwki", price: "42", badge: "Vege 🌱", badgeColor: "bg-accent/80 text-accent-foreground", placeholder: "Pizza Vegetariana", image: vegetarianaImg },
  { name: "Feta", ingredients: "sos pelati (pomidorowy), mozzarella, szynka, ser typu feta, pomidorki koktajlowe, oliwki", price: "42", placeholder: "Pizza Feta", image: fetaImg },
  { name: "Amerykańska", ingredients: "sos pelati (pomidorowy), mozzarella, pieczarki, papryka, szynka, salami", price: "42", placeholder: "Pizza Amerykańska", image: amerykanskaImg },
  { name: "Mięsna", ingredients: "sos pelati (pomidorowy), mozzarella, boczek, szynka, salami", price: "42", placeholder: "Pizza Mięsna", image: miesnaImg },
  { name: "Prosciutto", ingredients: "sos pelati (pomidorowy), mozzarella, szynka wiejska, jajko, parmezan", price: "42", placeholder: "Pizza Prosciutto", image: prosciuttoRucolaImg },
  { name: "4 Sery", ingredients: "sos pelati (pomidorowy), mozzarella, ricotta, parmezan, gorgonzola (D.O.P.)", price: "44", badge: "Premium 👑", badgeColor: "bg-yellow-600/80 text-white", placeholder: "Pizza 4 Sery", image: quattroFormaggiImg },
  { name: "Olive e carciofi", ingredients: "sos pelati (pomidorowy), mozzarella, pieczarki, karczochy, oliwki, szynka", price: "44", placeholder: "Pizza Olive e carciofi", image: oliveCarciofiImg },
  { name: "Nduja", ingredients: "sos pelati (pomidorowy), mozzarella, gorgonzola (D.O.P.), Nduja (pikantna kiełbasa włoska), cebula czerwona", price: "45", badge: "Ostre 🌶️🌶️", badgeColor: "bg-red-500/80 text-white", placeholder: "Pizza Nduja", image: ndujaImg },
  { name: "Barbecue Chicken", ingredients: "sos barbecue, mozzarella, kurczak, czerwona cebula, pieprz, papryka", price: "47", placeholder: "Pizza BBQ Chicken", image: bbqChickenImg },
  { name: "Parma", ingredients: "sos pelati (pomidorowy), mozzarella, szynka dojrzewająca, rukola, pomidorki koktajlowe, parmezan", price: "47", placeholder: "Pizza Parma", image: prosciuttoImg },
  { name: "Pera e noci", ingredients: "sos pelati (pomidorowy), mozzarella, gorgonzola (D.O.P.), gruszka, orzechy włoskie, balsamico, rukola", price: "47", badge: "Nowość ✨", badgeColor: "bg-yellow-500/80 text-white", placeholder: "Pizza Pera e noci", image: peraNociImg },
  { name: "Truflowa", ingredients: "krem truflowy, spinata pepperoni picante, mascarpone", price: "47", badge: "Premium 👑", badgeColor: "bg-yellow-600/80 text-white", placeholder: "Pizza Truflowa", image: truflowaImg },
  { name: "Carbonara", ingredients: "sos czosnkowy, mozzarella, boczek, gorgonzola (D.O.P.), cebula czerwona, jajko, parmezan, pieprz", price: "47", placeholder: "Pizza Carbonara", image: carbonaraImg },
  { name: "Wujka Paolo", ingredients: "sos pelati (pomidorowy), mozzarella, papryka jalapeno, czerwona cebula, Spianata salami", price: "47", badge: "Ostre 🌶️", badgeColor: "bg-red-500/80 text-white", placeholder: "Pizza Wujka Paolo", image: wujkaPaoloImg },
  { name: "Pizza Specjalna", ingredients: "sos, mozzarella, max 3 składniki do wyboru", price: "47", badge: "Skomponuj sam 🎨", badgeColor: "bg-orange-500/80 text-white", placeholder: "Pizza Specjalna", image: pizzaDelGiornoImg },
];

interface Drink { name: string; price: string; placeholder: string; image?: string; }
const drinks: Drink[] = [
  { name: "Woda mineralna szkło 0.33l", price: "5", placeholder: "Butelka wody mineralnej", image: wodaGazowanaImg },
  { name: "Cappy Jabłko 0.25l", price: "6", placeholder: "Sok jabłkowy w butelce", image: sokDzieciecyImg },
  { name: "Cappy Pomarańcza 0.25l", price: "6", placeholder: "Sok pomarańczowy w butelce", image: sokPomaranczowyImg },
  { name: "Coca-Cola 0.5l", price: "8", placeholder: "Butelka Coca-Cola", image: cocaColaImg },
  { name: "Lipton 0.5l", price: "8", placeholder: "Butelka Lipton Ice Tea", image: herbataImg },
  { name: "SANPELLEGRINO 0.33l", price: "10", placeholder: "Puszka Sanpellegrino", image: lemoniadaImg },
  { name: "Piwo 0%", price: "12", placeholder: "Butelka piwa bezalkoholowego", image: piwoPeroniImg },
  { name: "Piwo (do wyboru)", price: "12", placeholder: "Butelka piwa", image: piwoMorettiImg },
];

interface Addon { name: string; desc: string; price: string; placeholder: string; image?: string; }
const addons: Addon[] = [
  { name: "Sos czosnkowy", desc: "Do pizzy", price: "3", placeholder: "Miseczka sosu czosnkowego", image: sosCzosnkowyImg },
  { name: "Sos pomidorowy", desc: "Do pizzy", price: "3", placeholder: "Miseczka sosu pomidorowego", image: sosBbqImg },
  { name: "Sos tysiąca wysp", desc: "Szefa kuchni poleca!", price: "3", placeholder: "Miseczka sosu tysiąca wysp", image: sosCzosnkowyImg },
  { name: "Sos ostry", desc: "Do pizzy", price: "3", placeholder: "Miseczka sosu ostrego", image: sosBbqImg },
  { name: "Focaccia", desc: "Oliwa z oliwek, sól morska", price: "17", placeholder: "Focaccia", image: bruschettaImg },
  { name: "Focaccia z rozmarynem", desc: "Rozmaryn, pomidorki koktajlowe", price: "19", placeholder: "Focaccia z rozmarynem", image: bruschettaImg },
  { name: "Burrata świeża", desc: "Kremowa kula sera z Puglii", price: "—", placeholder: "Świeża burrata", image: burrataImg },
  { name: "Deska serów włoskich", desc: "Parmezan, pecorino, gorgonzola", price: "—", placeholder: "Deska serów", image: deskaSerowImg },
  { name: "Bruschetta (2 szt.)", desc: "Pomidory, czosnek, bazylia", price: "—", placeholder: "Bruschetty", image: bruschettaImg },
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
                    <p className="price-tag text-primary text-sm mt-1">{addon.price === "—" ? "Zapytaj" : `${addon.price} zł`}</p>
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
