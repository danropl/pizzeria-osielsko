import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/Pizzeria+oSIELSKO/@53.1843616,18.0844161,20.5z/data=!4m6!3m5!1s0x470310d52334fe87:0x7c12a88e5b166e26!8m2!3d53.1844016!4d18.0846522!16s%2Fg%2F11b6hw48yw?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D";

interface Review {
  name: string;
  text: string;
  time: string;
}

const reviews: Review[] = [
  { name: "Anna K.", text: "Najlepsza pizza w okolicach Bydgoszczy! Ciasto idealnie chrupiące z zewnątrz, miękkie w środku. Składniki zawsze świeże. Polecam Margheritę — prostota, która zachwyca!", time: "2 tygodnie temu" },
  { name: "Michał W.", text: "Warsztaty pizzy to absolutny hit! Byliśmy z rodziną i dzieci były zachwycone. Własnoręcznie zrobiona pizza smakuje najlepiej. Na pewno wrócimy!", time: "miesiąc temu" },
  { name: "Kasia i Tomek", text: "Randka w kuchni — nasz voucher to był strzał w dziesiątkę! Romantyczny wieczór, wspólne gotowanie, wino... Idealne na rocznicę.", time: "3 tygodnie temu" },
  { name: "Robert S.", text: "Quattro Formaggi to dzieło sztuki. Miód truflowy robi robotę! Prosciutto e Rucola też rewelacyjne. Klimat restauracji super, obsługa na medal.", time: "tydzień temu" },
  { name: "Magda T.", text: "Przyszliśmy z psem — było super miejsce w ogrodzie. Pizza pyszna, obsługa miła, spokojnie można spędzić tu wieczór z rodziną i pupilem.", time: "miesiąc temu" },
  { name: "Bartek P.", text: "Karaoke Italiano Night to był wieczór życia! Świetna atmosfera, śpiewy przy pizzy i winie. Organizacja na najwyższym poziomie. Czekam na kolejne!", time: "2 tygodnie temu" },
];

const OpinieSection = () => {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="opinie" className="bg-[#FEF3BD]/40 section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Opinie</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Co mówią nasi goście
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="card-warm p-8 md:p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>

              <div className="flex justify-center mb-4">
                <svg className="w-6 h-6 text-muted-foreground/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>

              <blockquote className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                "{reviews[current].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary">
                  {reviews[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-body font-semibold text-foreground text-sm">{reviews[current].name}</p>
                  <p className="font-body text-xs text-muted-foreground">{reviews[current].time}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center text-foreground/60 hover:text-primary transition-colors" aria-label="Poprzednia opinia">
            ←
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center text-foreground/60 hover:text-primary transition-colors" aria-label="Następna opinia">
            →
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"}`}
                aria-label={`Opinia ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-10 flex flex-wrap gap-4 justify-center">
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6">
            📝 Napisz opinię w Google
          </a>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm py-2 px-6">
            Przeczytaj wszystkie →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OpinieSection;
