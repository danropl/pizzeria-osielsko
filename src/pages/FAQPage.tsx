import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, X, MessageCircle, Gift, PartyPopper, Phone } from "lucide-react";
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

const trustSignals = [
  { emoji: "🔥", text: "Pizza z pieca opalanego drewnem" },
  { emoji: "🎉", text: "Eventy i warsztaty dla grup" },
  { emoji: "🎁", text: "Vouchery prezentowe online" },
  { emoji: "🛠️", text: "Konfigurator imprez krok po kroku" },
  { emoji: "🌿", text: "Ogród i parking dla gości" },
  { emoji: "💑", text: "Randki, urodziny, spotkania firmowe" },
];

const FAQPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return faqCategories
      .filter((c) => !activeCategory || c.id === activeCategory)
      .map((category) => {
        if (!q) return category;
        const matchedQuestions = category.questions.filter(
          (faq) =>
            faq.q.toLowerCase().includes(q) ||
            faq.a.toLowerCase().includes(q) ||
            category.title.toLowerCase().includes(q)
        );
        return { ...category, questions: matchedQuestions };
      })
      .filter((c) => c.questions.length > 0);
  }, [searchQuery, activeCategory]);

  const totalResults = filtered.reduce((sum, c) => sum + c.questions.length, 0);

  // FAQ JSON-LD structured data
  const allQuestions = faqCategories.flatMap((c) => c.questions);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>FAQ – Najczęściej Zadawane Pytania | Pizzeria oSielsko</title>
        <meta
          name="description"
          content="Odpowiedzi na pytania dotyczące rezerwacji, voucherów, eventów, konfiguratora imprez i oferty Pizzerii oSielsko. Znajdź informacje o godzinach otwarcia, parkingu i zamówieniach."
        />
        <link rel="canonical" href={`${DOMAIN}/faq`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main>
        {/* Hero */}
        <section className="bg-bg-dark section-padding pt-32 md:pt-36 pb-10">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3"
            >
              Centrum pomocy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5"
            >
              Jak możemy pomóc?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg text-foreground/70 leading-relaxed mb-8"
            >
              Znajdź odpowiedzi na pytania dotyczące rezerwacji, voucherów, eventów,
              konfiguratora imprez i naszej oferty.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder='Szukaj pytania, np. "voucher", "urodziny", "rezerwacja"…'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-4 rounded-2xl border border-border/60 bg-card font-body text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Wyczyść"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          </div>
        </section>

        {/* Category filter pills */}
        <section className="bg-background pt-8 pb-2 px-4">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-xl text-sm font-body font-semibold transition-all duration-200 ${
                  !activeCategory
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted/80"
                }`}
              >
                Wszystkie
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() =>
                    setActiveCategory(cat.id === activeCategory ? null : cat.id)
                  }
                  className={`px-4 py-2 rounded-xl text-sm font-body font-semibold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.emoji} {cat.title}
                </button>
              ))}
            </div>
            {/* Results count */}
            {searchQuery && (
              <p className="text-center font-body text-sm text-muted-foreground mt-4">
                {totalResults > 0
                  ? `Znaleziono ${totalResults} ${totalResults === 1 ? "wynik" : totalResults < 5 ? "wyniki" : "wyników"}`
                  : null}
              </p>
            )}
          </div>
        </section>

        {/* FAQ accordion by category */}
        <section className="bg-background section-padding pt-8">
          <div className="container-custom max-w-3xl mx-auto space-y-10">
            {filtered.length === 0 ? (
              <AnimatedSection>
                <div className="text-center py-16">
                  <Search className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Brak wyników
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                    Nie znaleźliśmy pytań pasujących do „{searchQuery}".
                    Spróbuj innej frazy lub skontaktuj się z nami bezpośrednio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/kontakt"
                      className="btn-primary text-sm px-6 py-3"
                    >
                      📞 Skontaktuj się
                    </Link>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory(null);
                      }}
                      className="btn-ghost text-sm px-6 py-3"
                    >
                      Pokaż wszystkie pytania
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              filtered.map((category) => (
                <AnimatedSection key={category.id}>
                  <div className="mb-5">
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
                          <p>{faq.a}</p>
                          {faq.link && (
                            <Link
                              to={faq.link.to}
                              className="inline-flex items-center gap-1.5 mt-3 text-primary font-semibold text-sm hover:underline"
                            >
                              {faq.link.label} →
                            </Link>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AnimatedSection>
              ))
            )}
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-bg-dark section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Dlaczego warto
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Idealne miejsce na każdą okazję
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {trustSignals.map((ts, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="card-warm p-5 text-center h-full">
                    <span className="text-2xl mb-2 block">{ts.emoji}</span>
                    <p className="font-body text-sm font-medium text-foreground/80">
                      {ts.text}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — nie znalazłeś odpowiedzi? */}
        <section className="bg-background section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimatedSection>
              <MessageCircle className="w-10 h-10 mx-auto text-primary/40 mb-4" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Nie znalazłeś odpowiedzi?
              </h2>
              <p className="font-body text-base text-foreground/70 mb-8 leading-relaxed">
                Skontaktuj się z nami — chętnie odpowiemy na każde pytanie i pomożemy zaplanować wizytę.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <a
                  href="tel:+48500384100"
                  className="btn-primary text-sm px-5 py-3.5 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Zadzwoń
                </a>
                <Link
                  to="/konfigurator-imprez"
                  className="btn-ghost text-sm px-5 py-3.5 flex items-center justify-center gap-2"
                >
                  <PartyPopper className="w-4 h-4" /> Skonfiguruj imprezę
                </Link>
                <Link
                  to="/vouchery"
                  className="btn-ghost text-sm px-5 py-3.5 flex items-center justify-center gap-2"
                >
                  <Gift className="w-4 h-4" /> Kup voucher
                </Link>
                <Link
                  to="/kontakt"
                  className="btn-ghost text-sm px-5 py-3.5 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Napisz do nas
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  to="/"
                  className="font-body text-sm text-primary hover:underline"
                >
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
      <PrivacyPolicyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
      <ReservationModal
        open={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </>
  );
};

export default FAQPage;
