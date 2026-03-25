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
import { faqCategories } from "@/lib/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DOMAIN = "https://pizzeriaosielsko.pl";

const FAQPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? faqCategories.filter((c) => c.id === activeCategory)
    : faqCategories;

  return (
    <>
      <Helmet>
        <title>FAQ – Najczęściej Zadawane Pytania | Pizzeria oSielsko</title>
        <meta
          name="description"
          content="Odpowiedzi na pytania dotyczące rezerwacji, voucherów, eventów i oferty Pizzerii oSielsko. Znajdź informacje o godzinach otwarcia, parkingu i zamówieniach online."
        />
        <link rel="canonical" href={`${DOMAIN}/faq`} />
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
              Pytania i odpowiedzi
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              Często zadawane pytania
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg text-foreground/70 leading-relaxed"
            >
              Znajdziesz tu odpowiedzi na pytania dotycz\u0105ce rezerwacji, voucherów, eventów,
              zamówień i organizacji wizyty w naszej pizzerii.
            </motion.p>
          </div>
        </section>

        {/* Category filter */}
        <section className="bg-background pt-12 pb-4 px-4">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-xl text-sm font-body font-semibold transition-all duration-200 ${
                  !activeCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted/80"
                }`}
              >
                Wszystkie
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-body font-semibold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.emoji} {cat.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ accordion by category */}
        <section className="bg-background section-padding pt-8">
          <div className="container-custom max-w-3xl mx-auto space-y-12">
            {filtered.map((category) => (
              <AnimatedSection key={category.id}>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground flex items-center gap-3">
                    <span>{category.emoji}</span> {category.title}
                  </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${category.id}-${i}`}
                      className="card-warm px-6 border-none"
                    >
                      <AccordionTrigger className="font-subhead text-base font-semibold text-foreground hover:no-underline text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-dark section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Nie znalaz\u0142e\u015B odpowiedzi?
              </h2>
              <p className="font-body text-base text-foreground/70 mb-8 leading-relaxed">
                Skontaktuj si\u0119 z nami \u2014 ch\u0119tnie odpowiemy na ka\u017Cde pytanie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48500384100" className="btn-primary text-base px-8 py-4">
                  \uD83D\uDCDE Zadzwo\u0144: 500 384 100
                </a>
                <a href="mailto:pizzasielsko@gmail.com" className="btn-ghost text-base px-8 py-4">
                  \u2709\uFE0F Napisz do nas
                </a>
              </div>
              <div className="mt-8">
                <Link to="/" className="font-body text-sm text-primary hover:underline">
                  \u2190 Wróć na stronę główną
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

export default FAQPage;
