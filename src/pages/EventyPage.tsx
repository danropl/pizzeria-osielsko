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
import { events } from "@/lib/eventsData";

const DOMAIN = "https://pizzeriaosielsko.pl";

const audiences = [
  { emoji: "💑", label: "Pary", desc: "Romantyczne wieczory, randki w kuchni, degustacje" },
  { emoji: "👨‍👩‍👧‍👦", label: "Rodziny", desc: "Urodziny dzieci, wspólne warsztaty, weekend z pizzą" },
  { emoji: "👶", label: "Dzieci", desc: "Warsztaty Mały Pizzaiolo, urodziny, nauka przez zabawę" },
  { emoji: "👫", label: "Grupy znajomych", desc: "Pizza Challenge, karaoke, wieczory tematyczne" },
  { emoji: "🏢", label: "Firmy", desc: "Team building, integracja, eventy firmowe" },
  { emoji: "🎁", label: "Szukający prezentu", desc: "Vouchery, doświadczenia, niezapomniane chwile" },
];

const bookingSteps = [
  { num: "01", title: "Wybierz rodzaj eventu", desc: "Przeglądnij naszą ofertę i wybierz to, co Cię interesuje." },
  { num: "02", title: "Skontaktuj się z nami", desc: "Zadzwoń lub napisz — wspólnie doprecyzujemy szczegóły." },
  { num: "03", title: "Ustal szczegóły", desc: "Liczba gości, data, menu, dodatkowe życzenia — wszystko ustalamy indywidualnie." },
  { num: "04", title: "Zarezerwuj termin", desc: "Potwierdzamy rezerwację i czekamy na Ciebie!" },
];

const EventyPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Eventy & Atrakcje – Pizzeria oSielsko | Warsztaty, Randki, Imprezy</title>
        <meta name="description" content="Eventy i atrakcje w Pizzerii oSielsko — warsztaty pizzy, randka w kuchni, pizza challenge, karaoke, degustacja wina. Organizujemy urodziny, imprezy firmowe i wieczory tematyczne w Osielsku." />
        <link rel="canonical" href={`${DOMAIN}/eventy`} />
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
              Wyjątkowe doświadczenia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              Eventy & Atrakcje
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg text-foreground/70 leading-relaxed mb-8"
            >
              Więcej niż restauracja — to miejsce spotkań, przeżyć i emocji. Organizujemy warsztaty,
              randki w kuchni, wieczory tematyczne i wydarzenia specjalne. Każde z nich ma jedno wspólne
              — włoski klimat, prawdziwy smak i niezapomniane chwile.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="tel:+48500384100" className="btn-primary text-base px-8 py-4">
                📩 Zapytaj o event
              </a>
            </motion.div>
          </div>
        </section>

        {/* Events detailed */}
        <section className="bg-background section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Co organizujemy</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Poznaj nasze wydarzenia i atrakcje
              </h2>
            </AnimatedSection>

            <div className="space-y-20">
              {events.map((event, i) => (
                <AnimatedSection key={event.id} delay={0.05}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                        <img
                          src={event.image}
                          alt={`${event.title} – event w Pizzerii oSielsko`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className={`absolute top-4 left-4 badge-tag ${event.badgeColor}`}>{event.badge}</span>
                    </div>
                    <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{event.title}</h3>
                      <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">{event.longDesc}</p>
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-2">
                          <span className="text-primary text-sm mt-0.5">👤</span>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground">Dla kogo</p>
                            <p className="font-body text-sm text-foreground/60">{event.forWhom}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary text-sm mt-0.5">🎯</span>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground">Na jaką okazję</p>
                            <p className="font-body text-sm text-foreground/60">{event.occasion}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary text-sm mt-0.5">✨</span>
                        <div>
                          <p className="font-body text-sm font-semibold text-foreground">Klimat</p>
                          <p className="font-body text-sm text-foreground/60">{event.vibe}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="bg-bg-dark section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Dla kogo</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Dla kogo organizujemy?
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((a, i) => (
                <AnimatedSection key={a.label} delay={i * 0.06}>
                  <div className="card-warm p-6 text-center h-full">
                    <span className="text-3xl mb-3 block">{a.emoji}</span>
                    <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">{a.label}</h3>
                    <p className="font-body text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Booking steps */}
        <section className="bg-background section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Rezerwacja</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Jak zarezerwować event?
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookingSteps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08}>
                  <div className="text-center">
                    <span className="font-data text-3xl font-bold text-primary/30 block mb-2">{step.num}</span>
                    <h3 className="font-subhead text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
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
                Zorganizuj coś wyjątkowego
              </h2>
              <p className="font-body text-base text-foreground/70 mb-8 leading-relaxed">
                Masz pomysł na event? Chcesz zorganizować urodziny, warsztaty lub wieczór tematyczny?
                Skontaktuj się z nami — wspólnie stworzymy niezapomniane przeżycie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/konfigurator-imprez" className="btn-primary text-base px-8 py-4">🎉 Skonfiguruj imprezę</Link>
                <a href="tel:+48500384100" className="btn-ghost text-base px-8 py-4">📞 Zadzwoń: 500 384 100</a>
              </div>
              <div className="mt-8">
                <Link to="/" className="font-body text-sm text-primary hover:underline">← Wróć na stronę główną</Link>
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

export default EventyPage;
