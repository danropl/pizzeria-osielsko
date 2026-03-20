import AnimatedSection from "./AnimatedSection";

import margheritaImg from "@/assets/margherita.jpg";
import heroPizzaOvenImg from "@/assets/hero-pizza-oven.jpg";
import interiorImg from "@/assets/interior.jpg";
import interior2Img from "@/assets/interior-2.jpg";
import interior3Img from "@/assets/interior-3.jpg";
import heartPizzaImg from "@/assets/heart-pizza.jpg";
import pepperoniImg from "@/assets/pepperoni-2.jpg";
import quattroFormaggiImg from "@/assets/quattro-formaggi.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import eventWorkshopImg from "@/assets/event-workshop.jpg";
import burrataImg from "@/assets/burrata.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import prosciuttoImg from "@/assets/prosciutto.jpg";
import truflowaImg from "@/assets/truflowa.jpg";
import carbonaraImg from "@/assets/carbonara.jpg";
import winoImg from "@/assets/wino.jpg";
import bruschettaImg from "@/assets/bruschetta.jpg";
import deskaSerowImg from "@/assets/deska-serow.jpg";

interface GalleryImage {
  src: string;
  alt: string;
}

const row1: GalleryImage[] = [
  { src: margheritaImg, alt: "Pizza Margherita z pieca opalanego drewnem – Pizzeria Osielsko" },
  { src: interiorImg, alt: "Wnętrze Pizzerii Osielsko – ciepła włoska atmosfera" },
  { src: pepperoniImg, alt: "Pizza Pepperoni – bestseller Pizzerii Osielsko" },
  { src: eventKidsImg, alt: "Warsztaty pizzy dla dzieci – Mały Pizzaiolo" },
  { src: burrataImg, alt: "Świeża burrata z Puglii – przystawka w Pizzerii Osielsko" },
  { src: heroPizzaOvenImg, alt: "Piec opalany drewnem – serce Pizzerii Osielsko" },
  { src: prosciuttoImg, alt: "Pizza Parma z szynką dojrzewającą i rukolą" },
  { src: winoImg, alt: "Degustacja wina w Pizzerii Osielsko" },
  { src: interior3Img, alt: "Ogród restauracji – Pizzeria Osielsko" },
];

const row2: GalleryImage[] = [
  { src: quattroFormaggiImg, alt: "Pizza 4 Sery z gorgonzolą DOP – Pizzeria Osielsko" },
  { src: interior2Img, alt: "Klimatyczne wnętrze Pizzerii Osielsko wieczorem" },
  { src: truflowaImg, alt: "Pizza truflowa – smak premium w Pizzerii Osielsko" },
  { src: eventWorkshopImg, alt: "Warsztaty robienia pizzy – eventy w Pizzerii Osielsko" },
  { src: bruschettaImg, alt: "Bruschetta z pomidorami i bazylią" },
  { src: carbonaraImg, alt: "Pizza Carbonara z jajkiem i boczkiem" },
  { src: heartPizzaImg, alt: "Pizza w kształcie serca – Randka w Kuchni" },
  { src: pizzasVarietyImg, alt: "Wybór pizz – różnorodność smaków w Pizzerii Osielsko" },
  { src: deskaSerowImg, alt: "Deska serów włoskich – parmezan, pecorino, gorgonzola" },
];

const MarqueeRow = ({
  images,
  direction = "left",
  duration = 40,
}: {
  images: GalleryImage[];
  direction?: "left" | "right";
  duration?: number;
}) => {
  // Double the images for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden group">
      <div
        className="flex gap-4 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.alt}-${i}`}
            className="w-72 h-48 md:w-80 md:h-56 lg:w-96 lg:h-64 flex-shrink-0 rounded-2xl overflow-hidden border border-border/30"
            style={{ boxShadow: "var(--shadow-warm)" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => (
  <section className="bg-bg-dark py-16 md:py-20 overflow-hidden">
    <div className="container-custom mb-10">
      <AnimatedSection className="text-center">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
          Galeria
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Nasze pizze i klimat lokalu
        </h2>
        <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Autentyczne zdjęcia z naszej kuchni, sali i eventów. Tak wygląda smak Włoch w Osielsku.
        </p>
      </AnimatedSection>
    </div>

    <div className="space-y-4">
      <MarqueeRow images={row1} direction="left" duration={45} />
      <MarqueeRow images={row2} direction="right" duration={50} />
    </div>
  </section>
);

export default GallerySection;
