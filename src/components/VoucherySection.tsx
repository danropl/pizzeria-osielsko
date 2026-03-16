import AnimatedSection from "./AnimatedSection";

interface Voucher {
  emoji: string;
  title: string;
  contents: string;
  image?: string;
}

import heartPizzaImg from "@/assets/heart-pizza.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import interior2Img from "@/assets/interior-2.jpg";

const vouchers: Voucher[] = [
  { emoji: "💑", title: "Randka w Kuchni", contents: "Romantyczny prezent dla pary.", image: heartPizzaImg },
  { emoji: "🎂", title: "Urodziny Pizzaiolo", contents: "Niezapomniane urodziny w klimacie włoskim.", image: eventKidsImg },
  { emoji: "🍷", title: "Pizza & Wino z Sommelierem", contents: "Ekskluzywna degustacja dla koneserów.", image: pizzasVarietyImg },
  { emoji: "🎤", title: "Wieczór Karaoke", contents: "Zabawa z włoskimi klasykami i pyszną pizzą.", image: interior2Img },
];

const VoucherySection = () => (
  <section id="vouchery" className="bg-background section-padding">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Prezenty</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Vouchery Podarunkowe
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vouchers.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1} className="card-warm overflow-hidden flex flex-col">
            {v.image && (
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 flex-1">{v.contents}</p>
              <button className="btn-primary w-full text-sm py-2">🎁 Kup voucher</button>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-10">
        <div className="bg-card rounded-2xl border border-border/30 p-6 max-w-2xl mx-auto">
          <p className="font-body text-sm text-muted-foreground mb-4">
            Vouchery są dostępne w formie elegancko zapakowanej kartki lub w wersji elektronicznej (PDF).
            Skontaktuj się z nami, aby zamówić.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:[NUMER_TELEFONU]" className="btn-ghost text-sm py-2 px-6">📞 Zadzwoń</a>
            <a href="mailto:[EMAIL]" className="btn-primary text-sm py-2 px-6">✉️ Napisz email</a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default VoucherySection;
