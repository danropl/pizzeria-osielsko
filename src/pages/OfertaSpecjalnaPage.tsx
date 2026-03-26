import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileBottomBar from "@/components/MobileBottomBar";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import ReservationModal from "@/components/ReservationModal";
import AnimatedSection from "@/components/AnimatedSection";
import { specialOffers } from "@/lib/specialOffersData";

const DOMAIN = "https://pizzeriaosielsko.pl";

const OfertaSpecjalnaPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Oferta Specjalna – Pizzeria oSielsko | Pakiety, Zestawy, Okazje</title>
        <meta
          name="description"
          content="Oferta specjalna Pizzerii oSielsko — pakiety randkowe, urodzinowe, grupowe, lunchowe i filmowe. Gotowe pomysły na każdą okazję w Osielsku k. Bydgoszczy."
        />
        <link rel="canonical" href={`${DOMAIN}/oferta-specjalna`} />
      </Helmet>

      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main>
        {/* Hero */}
        <section className="bg-bg-dark section-padding pt-32 md:pt-36">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3"
            >
              Pakiety & Okazje
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              Oferta Specjalna
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg text-foreground/70 leading-relaxed mb-8"
            >
              Gotowe pomysły na randkę, urodziny, spotkanie z przyjaciółmi czy wieczór filmowy.
              Wybierz pakiet, który pasuje do Twojej okazji — reszta po naszej stronie.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="tel:+48500384100" className="btn-primary text-base px-8 py-4">
                🎉 Zapytaj o ofertę
              </a>
            </motion.div>
          </div>
        </section>

        {/* Offers */}
        <section className="bg-background section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Nasze propozycje
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Wybierz idealny pakiet
              </h2>
            </AnimatedSection>

            <div className="space-y-20">
              {specialOffers.map((offer, i) => (
                <AnimatedSection key={offer.id} delay={0.05}>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      i % 2 === 1 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                      <img
                        src={offer.image}
                        alt={`${offer.title} – Pizzeria oSielsko`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <span className="text-3xl mb-3 block">{offer.emoji}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {offer.title}
                      </h3>
                      <p className="font-body text-base text-primary font-semibold mb-4">
                        {offer.lead}
                      </p>
                      <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                        {offer.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {offer.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5 text-sm shrink-0">✓</span>
                            <span className="font-body text-sm text-foreground/80">{h}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="tel:+48500384100"
                        className="btn-primary text-sm px-6 py-3"
                      >
                        Zapytaj o tę ofertę
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-dark section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Masz pomysł na inną okazję?
              </h2>
              <p className="font-body text-base text-foreground/70 mb-8 leading-relaxed">
                Przygotujemy indywidualną ofertę dopasowaną do Twojego wydarzenia.
                Zadzwoń lub napisz — chętnie pomożemy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/konfigurator-imprez" className="btn-primary text-base px-8 py-4">🎉 Skonfiguruj imprezę</Link>
                <a href="tel:+48500384100" className="btn-ghost text-base px-8 py-4">📞 Zadzwoń: 500 384 100</a>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Link to="/vouchery" className="font-body text-sm text-primary hover:underline">🎁 Kup voucher</Link>
                <Link to="/kontakt" className="font-body text-sm text-primary hover:underline">📞 Kontakt</Link>
                <Link to="/faq" className="font-body text-sm text-primary hover:underline">❓ FAQ</Link>
              </div>
              <div className="mt-6">
                <Link to="/" className="font-body text-sm text-primary/60 hover:underline">
                  ← Wróć na stronę główną
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <BackToTop />
      <MobileBottomBar onOpenReservation={() => setReservationOpen(true)} />
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ReservationModal open={reservationOpen} onClose={() => setReservationOpen(false)} />
    </>
  );
};

export default OfertaSpecjalnaPage;
