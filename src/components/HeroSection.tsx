import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import heroPizzaOven from "@/assets/hero-pizza-oven.jpg";
import { ORDER_URL } from "@/lib/constants";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-bg-dark overflow-hidden pt-[72px]">
    <div className="container-custom section-padding w-full">
      <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
        <AnimatedSection>
          <div className="badge-tag bg-primary/10 text-primary mb-6">
            🔥 Prawdziwy piec opalany drewnem
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4">
            Pizzeria<br />
            <span className="text-primary">Osielsko</span>
          </h1>
          <p className="font-subhead text-xl md:text-2xl italic text-foreground/70 mb-6">
            Smak Włoch w sercu Osielska
          </p>
          <p className="font-body text-foreground/60 text-lg leading-relaxed mb-8 max-w-xl">
            Odkryj ciepłą atmosferę i gościnność naszej pizzerii w Osielsku. Serwujemy autentyczną włoską pizzę z pieca opalanego drewnem, przygotowaną z naturalnych składników i pasją do włoskiej kuchni.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              🍕 Zamów online
            </a>
            <a href="#nasze-pizze" className="btn-ghost text-base px-8 py-4">
              🎬 Zobacz nasze TikToki
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-3xl">
            <img
              src={heroPizzaOven}
              alt="Pizza z pieca opalanego drewnem — złocisty ser, chrupiące ciasto, świeża bazylia, płomienie w tle"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="eager"
            />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-border/50"
            style={{ boxShadow: "var(--shadow-warm)" }}
          >
            <p className="font-data text-xs font-semibold text-foreground/80 uppercase tracking-wider">
              🔥 Piec opalany drewnem • Od [ROK_OTWARCIA] roku
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  </section>
);

export default HeroSection;
