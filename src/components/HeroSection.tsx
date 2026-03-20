import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import heroPizzaOven from "@/assets/hero-pizza-oven.jpg";
import { ORDER_URL } from "@/lib/constants";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
    <div className="absolute inset-0">
      <img
        src={heroPizzaOven}
        alt="Pizza z pieca opalanego drewnem — złocisty ser, chrupiące ciasto, świeża bazylia, płomienie w tle"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/20" />
    </div>

    <div className="container-custom section-padding w-full relative z-10">
      <div className="max-w-2xl">
        <AnimatedSection>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-background mb-4 leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Autentyczna pizza
            <br />
            <span className="text-primary-light italic">prosto z ognia</span>
          </motion.h1>

          <motion.p
            className="font-subhead text-xl md:text-2xl italic text-background/80 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Smak Włoch w sercu Osielska
          </motion.p>

          <motion.p
            className="font-body text-background/65 text-lg leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Naturalne składniki, ciasto fermentowane 72 godziny i piec rozgrzany do 400°C.
            Każda pizza to rzemiosło, które smakujesz od pierwszego kęsa.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 shadow-lg">
              🍕 Zamów online
            </a>
            <a href="#nasze-pizze" className="btn-ghost text-base px-8 py-4 border-background/40 text-background/90 hover:bg-background/10 hover:text-background">
              🎬 Zobacz nasze TikToki
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <svg className="w-6 h-6 text-background/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  </section>
);

export default HeroSection;
