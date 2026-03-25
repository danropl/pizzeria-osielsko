import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

import heartPizzaImg from "@/assets/heart-pizza.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import interior2Img from "@/assets/interior-2.jpg";

interface Voucher {
  emoji: string;
  title: string;
  contents: string;
  image: string;
  slug: string;
}

const vouchers: Voucher[] = [
  { emoji: "💑", title: "Randka w Kuchni", contents: "Romantyczny prezent dla pary.", image: heartPizzaImg, slug: "randka-w-kuchni" },
  { emoji: "🎂", title: "Urodziny Pizzaiolo", contents: "Niezapomniane urodziny w klimacie włoskim.", image: eventKidsImg, slug: "urodziny-pizzaiolo" },
  { emoji: "🍷", title: "Pizza & Wino z Sommelierem", contents: "Ekskluzywna degustacja dla koneserów.", image: pizzasVarietyImg, slug: "pizza-wino-z-sommelierem" },
  { emoji: "🎤", title: "Wieczór Karaoke", contents: "Zabawa z włoskimi klasykami i pyszną pizzą.", image: interior2Img, slug: "wieczor-karaoke" },
];

const VoucherySection = () => (
  <section id="vouchery" className="bg-[#FEFDE5] section-padding">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Prezenty</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Vouchery Podarunkowe
        </h2>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-6">
        {vouchers.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
            <Link
              to={`/vouchery#${v.slug}`}
              className="card-warm overflow-hidden flex flex-col w-full h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Voucher ${v.title} – zobacz szczegóły`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={v.image} alt={`Voucher ${v.title} – Pizzeria oSielsko`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground flex-1">{v.contents}</p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <Link to="/vouchery" className="btn-primary text-base px-8 py-4">🎁 Zobacz pełną ofertę voucherów</Link>
      </AnimatedSection>
    </div>
  </section>
);

export default VoucherySection;
