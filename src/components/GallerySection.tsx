import AnimatedSection from "./AnimatedSection";

import margheritaImg from "@/assets/margherita.jpg";
import heroPizzaOvenImg from "@/assets/hero-pizza-oven.jpg";
import interiorImg from "@/assets/interior.jpg";
import interior2Img from "@/assets/interior-2.jpg";
import interior3Img from "@/assets/interior-3.jpg";
import heartPizzaImg from "@/assets/heart-pizza.jpg";

import quattroFormaggiImg from "@/assets/quattro-formaggi.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import prosciuttoImg from "@/assets/prosciutto.jpg";
import truflowaImg from "@/assets/truflowa.jpg";

import winoImg from "@/assets/wino.jpg";
import deskaSerowImg from "@/assets/deska-serow.jpg";
import capricciosaImg from "@/assets/capricciosa.jpg";
import diavolaImg from "@/assets/diavola.jpg";
import italianProductsImg from "@/assets/italian-products.jpg";
import pizzasTopImg from "@/assets/pizzas-top.jpg";

interface GalleryImage {
  src: string;
  alt: string;
}

const row1: GalleryImage[] = [
  { src: margheritaImg, alt: "Pizza Margherita z pieca opalanego drewnem – Pizzeria oSielsko" },
  { src: interiorImg, alt: "Wnętrze Pizzerii Osielsko – ciepła włoska atmosfera" },
  
  { src: winoImg, alt: "Degustacja wina w Pizzerii Osielsko" },
  { src: capricciosaImg, alt: "Pizza Capricciosa – klasyka włoskiej kuchni" },
  { src: heroPizzaOvenImg, alt: "Piec opalany drewnem – serce Pizzerii Osielsko" },
  { src: prosciuttoImg, alt: "Pizza Parma z szynką dojrzewającą i rukolą" },
  { src: italianProductsImg, alt: "Włoskie składniki premium – Pizzeria oSielsko" },
  { src: interior3Img, alt: "Ogród restauracji – Pizzeria oSielsko" },
];

const row2: GalleryImage[] = [
  { src: quattroFormaggiImg, alt: "Pizza 4 Sery z gorgonzolą DOP – Pizzeria oSielsko" },
  { src: interior2Img, alt: "Klimatyczne wnętrze Pizzerii Osielsko wieczorem" },
  { src: truflowaImg, alt: "Pizza truflowa – smak premium w Pizzerii Osielsko" },
  { src: pizzasTopImg, alt: "Pizze prosto z pieca – widok z góry" },
  { src: deskaSerowImg, alt: "Deska serów włoskich – parmezan, pecorino, gorgonzola" },
  
  { src: heartPizzaImg, alt: "Pizza w kształcie serca – Randka w Kuchni" },
  { src: pizzasVarietyImg, alt: "Wybór pizz – różnorodność smaków w Pizzerii Osielsko" },
  { src: diavolaImg, alt: "Pizza Diavola – ostra i aromatyczna" },
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
