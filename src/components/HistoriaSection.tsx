import AnimatedSection from "./AnimatedSection";
import interiorImg from "@/assets/interior.jpg";
import pizzaOvenImg from "@/assets/hero-pizza-oven.jpg";
import italianProductsImg from "@/assets/italian-products.jpg";

const amenities = [
  { icon: "🍕", label: "Pizza na miejscu" },
  { icon: "📦", label: "Na wynos" },
  { icon: "📶", label: "Wi-Fi" },
  { icon: "🅿️", label: "Parking" },
  { icon: "👨‍👩‍👧‍👦", label: "Rodziny" },
  { icon: "🐾", label: "Zwierzęta" },
];

const HistoriaSection = () => (
  <section id="historia" className="bg-bg-dark section-padding">
    <div className="container-custom">
      <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
        {/* Images */}
        <AnimatedSection className="space-y-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <img src={interiorImg} alt="Wnętrze restauracji Pizzeria Osielsko — ciepłe oświetlenie, drewniane stoły" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square w-full overflow-hidden rounded-3xl">
              <img src={pizzaOvenImg} alt="Pizza w piecu opalanym drewnem — płomienie i żar" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
            </div>
            <div className="aspect-square w-full overflow-hidden rounded-3xl">
              <img src={pizzasTopImg} alt="Świeże pizze z widoku z góry — różnorodne składniki" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
            </div>
          </div>
          <div className="bg-primary/10 rounded-2xl px-4 py-3 text-center">
            <p className="font-data text-sm font-semibold text-primary uppercase tracking-wider">
              Otwarci od [ROK_OTWARCIA] roku
            </p>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={0.15}>
          <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">O nas</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
            Pasja do pizzy, tradycja od pokoleń
          </h2>
          <div className="space-y-4 text-foreground/70 font-body text-base leading-relaxed mb-8">
            <p>[PARAGRAF 1 — Historia powstania restauracji, inspiracja kuchnią włoską, piec opalany drewnem. WYPEŁNIĆ]</p>
            <p>[PARAGRAF 2 — Filozofia jakości, naturalne składniki, lokalni dostawcy. WYPEŁNIĆ]</p>
            <p>[PARAGRAF 3 — Misja, społeczność, plany na przyszłość. WYPEŁNIĆ]</p>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8 italic font-subhead text-lg text-foreground/80">
            "[CYTAT — np. inspirujące zdanie założyciela o pasji do pizzy. WYPEŁNIĆ]"
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 bg-card rounded-2xl p-6 border border-border/30">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">[X]</p>
              <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mt-1">Lat tradycji</p>
            </div>
            <div className="text-center border-x border-border/30">
              <p className="font-display text-3xl font-bold text-primary">100%</p>
              <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mt-1">Naturalne składniki</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">400°C</p>
              <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mt-1">Piec drewniany</p>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-3">
            {amenities.map((a) => (
              <span key={a.label} className="badge-tag bg-card border border-border/30 text-foreground/70">
                {a.icon} {a.label}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default HistoriaSection;
