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
  <section id="historia" className="bg-[#FEFDE5] section-padding">
    <div className="container-custom">
      <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
        {/* Images */}
        <AnimatedSection className="space-y-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <img src={interiorImg} alt="Wnętrze restauracji Pizzeria oSielsko — ciepłe oświetlenie, drewniane stoły" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square w-full overflow-hidden rounded-3xl">
              <img src={pizzaOvenImg} alt="Pizza w piecu opalanym drewnem — płomienie i żar" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
            </div>
            <div className="aspect-square w-full overflow-hidden rounded-3xl">
              <img src={italianProductsImg} alt="Włoskie produkty — oliwa extra vergine, marynaty" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
            </div>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={0.15}>
          <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">O nas</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
            Pasja do pizzy, tradycja od pokoleń
          </h2>
          <div className="space-y-4 text-foreground/70 font-body text-base leading-relaxed mb-8">
            <p>Pizzeria oSIELSKO narodziła się z prostego marzenia — stworzyć miejsce, gdzie autentyczny smak Włoch spotyka się z ciepłem polskiej gościnności. Nasz piec opalany drewnem, rozgrzany do 400°C, to serce restauracji. To dzięki niemu każda pizza zyskuje niepowtarzalny, lekko wędzony charakter i chrupiące, puszyste ciasto.</p>
            <p>Stawiamy na jakość bez kompromisów. Mąka tipo „00" sprowadzana z Neapolu, mozzarella fior di latte, sos z pomidorów San Marzano i oliwa extra vergine — każdy składnik ma znaczenie. Współpracujemy z lokalnymi dostawcami, aby warzywa i zioła trafiały na talerz prosto z pola.</p>
            <p>Jesteśmy częścią Osielska i okolic Bydgoszczy. Naszą misją jest nie tylko karmić, ale i łączyć ludzi — przy wspólnym stole, kawałku dobrej pizzy i kieliszku włoskiego wina. Zapraszamy rodziny, przyjaciół i wszystkich, którzy cenią prawdziwy smak.</p>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8 italic font-subhead text-lg text-foreground/80">
            "Pizza to nie tylko jedzenie — to emocje, wspomnienia i ludzie, z którymi ją dzielisz."
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-card rounded-2xl p-6 border border-border/30">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">100%</p>
              <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mt-1">Naturalne składniki</p>
            </div>
            <div className="text-center border-l border-border/30">
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
