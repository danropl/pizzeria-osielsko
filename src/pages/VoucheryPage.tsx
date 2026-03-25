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
import { vouchers } from "@/lib/vouchersData";

const DOMAIN = "https://pizzeriaosielsko.pl";

const steps = [
  { num: "01", emoji: "🎯", title: "Wybierz voucher", desc: "Przeglądnij naszą ofertę i wybierz rodzaj vouchera, który najlepiej pasuje do okazji." },
  { num: "02", emoji: "📩", title: "Skontaktuj się z nami", desc: "Zadzwoń, napisz maila lub odwiedź nas osobiście, aby zamówić wybrany voucher." },
  { num: "03", emoji: "🎁", title: "Odbierz voucher", desc: "Voucher przygotujemy w eleganckiej formie papierowej lub elektronicznej — do wyboru." },
  { num: "04", emoji: "🍕", title: "Ciesz się przeżyciem", desc: "Wręcz voucher bliskiej osobie lub wykorzystaj go sam — niezapomniane chwile gwarantowane." },
];

const faqs = [
  { q: "Czy voucher może być elektroniczny?", a: "Tak — voucher możemy przygotować w formie elektronicznej (PDF) lub eleganckiej kartki papierowej. Ustalamy to indywidualnie przy zamówieniu." },
  { q: "Czy voucher można kupić jako prezent?", a: "Oczywiście! Vouchery to idealny prezent na urodziny, rocznicę, święta czy po prostu „bo Cię lubię". Przygotujemy go tak, żeby wyglądał wyjątkowo." },
  { q: "Jak zamówić voucher?", a: "Skontaktuj się z nami telefonicznie (+48 500 384 100) lub mailowo (pizzasielsko@gmail.com). Pomożemy wybrać odpowiedni rodzaj i ustalić szczegóły." },
  { q: "Czy voucher ma termin ważności?", a: "Szczegóły dotyczące ważności ustalamy indywidualnie. Skontaktuj się z nami, a dobierzemy najlepsze rozwiązanie." },
  { q: "Czy można ustalić indywidualną wartość vouchera?", a: "Tak — chętnie przygotujemy voucher o indywidualnej wartości lub zakresie dopasowanym do Twoich potrzeb. Wystarczy się z nami skontaktować." },
];

const VoucheryPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Vouchery Podarunkowe – Pizzeria oSielsko | Prezent na każdą okazję</title>
        <meta name="description" content="Vouchery podarunkowe Pizzeria oSielsko — idealny prezent na urodziny, rocznicę, święta. Randka w Kuchni, warsztaty pizzy, degustacja wina. Zamów voucher telefonicznie lub mailowo." />
        <link rel="canonical" href={`${DOMAIN}/vouchery`} />
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
              Prezenty & Przeżycia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              Vouchery Podarunkowe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg text-foreground/70 leading-relaxed mb-8"
            >
              Podaruj bliskim coś więcej niż rzecz — podaruj przeżycie. Nasze vouchery to zaproszenie
              do wspólnego gotowania, degustacji i niezapomnianych chwil w sercu włoskiej kuchni.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="tel:+48500384100" className="btn-primary text-base px-8 py-4">
                🎁 Zamów voucher
              </a>
            </motion.div>
          </div>
        </section>

        {/* Voucher types */}
        <section className="bg-background section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Nasza oferta</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Wybierz idealny voucher
              </h2>
            </AnimatedSection>

            <div className="space-y-16">
              {vouchers.map((v, i) => (
                <AnimatedSection key={v.id} delay={0.05}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
                      <img
                        src={v.image}
                        alt={`Voucher ${v.title} – Pizzeria oSielsko`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <span className="text-3xl mb-3 block">{v.emoji}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{v.title}</h3>
                      <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">{v.longDesc}</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-bold text-sm mt-0.5">👤</span>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground">Dla kogo</p>
                            <p className="font-body text-sm text-foreground/60">{v.forWhom}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-bold text-sm mt-0.5">🎯</span>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground">Na jaką okazję</p>
                            <p className="font-body text-sm text-foreground/60">{v.example}</p>
                          </div>
                        </div>
                      </div>
                      <p className="font-data text-xs text-muted-foreground uppercase tracking-wider">Cena ustalana indywidualnie</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-bg-dark section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Krok po kroku</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Jak to działa?
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08}>
                  <div className="card-warm p-6 text-center h-full flex flex-col">
                    <span className="font-data text-xs font-bold text-primary/50 uppercase tracking-widest mb-2">{step.num}</span>
                    <span className="text-3xl mb-3">{step.emoji}</span>
                    <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-muted-foreground flex-1">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background section-padding">
          <div className="container-custom max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Pytania</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Najczęściej zadawane pytania
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <details className="card-warm p-5 group cursor-pointer">
                    <summary className="font-subhead text-base font-semibold text-foreground flex items-center justify-between list-none">
                      {faq.q}
                      <span className="text-primary transition-transform duration-300 group-open:rotate-45 text-xl ml-4 shrink-0">+</span>
                    </summary>
                    <p className="font-body text-sm text-foreground/70 mt-3 leading-relaxed">{faq.a}</p>
                  </details>
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
                Zamów voucher już dziś
              </h2>
              <p className="font-body text-base text-foreground/70 mb-8 leading-relaxed">
                Skontaktuj się z nami telefonicznie lub mailowo — pomożemy wybrać idealny voucher i przygotujemy go specjalnie dla Ciebie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48500384100" className="btn-primary text-base px-8 py-4">📞 Zadzwoń: 500 384 100</a>
                <a href="mailto:pizzasielsko@gmail.com" className="btn-ghost text-base px-8 py-4">✉️ Napisz do nas</a>
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

export default VoucheryPage;
