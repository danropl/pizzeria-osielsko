import AnimatedSection from "./AnimatedSection";

interface Voucher {
  emoji: string;
  title: string;
  contents: string;
  price: string;
  validity: string;
}

const vouchers: Voucher[] = [
  { emoji: "💑", title: "Randka w Kuchni", contents: "Warsztaty dla 2 osób, butelka wina, deser Tiramisu, zdjęcie pamiątkowe", price: "[CENA]", validity: "[OKRES]" },
  { emoji: "🎂", title: "Urodziny Małego Pizzaiolo", contents: "Warsztaty, fartuszek + czapka, pizza + napój, dyplom Pizzaiolo", price: "[CENA]", validity: "[OKRES]" },
  { emoji: "🍷", title: "Pizza & Wino z Sommelierem", contents: "Degustacja win, pizze, materiały edukacyjne, certyfikat", price: "[CENA]", validity: "[OKRES]" },
  { emoji: "🎤", title: "Wieczór Karaoke Italiano", contents: "Wstęp dla 2, pizza Margherita, 2 napoje, priorytetowe piosenki", price: "[CENA]", validity: "[OKRES]" },
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

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {vouchers.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1} className="card-warm p-6 flex flex-col">
            <div className="text-5xl mb-4">{v.emoji}</div>
            <h3 className="font-subhead text-xl font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="font-body text-sm text-muted-foreground mb-6 flex-1">{v.contents}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="price-tag text-2xl text-primary">{v.price} zł</span>
              <span className="font-data text-xs text-muted-foreground uppercase tracking-wider">Ważny {v.validity} mies.</span>
            </div>
            <button className="btn-primary w-full">🎁 Kup voucher</button>
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
