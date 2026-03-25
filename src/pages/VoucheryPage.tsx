import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileBottomBar from "@/components/MobileBottomBar";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import ReservationModal from "@/components/ReservationModal";
import AnimatedSection from "@/components/AnimatedSection";

import heartPizzaImg from "@/assets/heart-pizza.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import interior2Img from "@/assets/interior-2.jpg";

const DOMAIN = "https://pizzeriaosielsko.pl";

interface Voucher {
  emoji: string;
  title: string;
  lead: string;
  description: string;
  forWhom: string;
  occasion: string;
  image: string;
}

const vouchers: Voucher[] = [
  {
    emoji: "💑",
    title: "Randka w Kuchni",
    lead: "Romantyczny prezent dla pary.",
    description: "Wspólne gotowanie w klimacie włoskiej kuchni to jedno z najbardziej niezapomnianych doświadczeń, jakie możesz podarować bliskiej osobie. Randka w Kuchni w Pizzerii oSielsko to wieczór pełen aromatów, śmiechu i prawdziwego włoskiego smaku — przygotowany specjalnie dla dwojga.",
    forWhom: "Dla par, zakochanych, małżeństw szukających wyjątkowego wspólnego czasu.",
    occasion: "Rocznica, walentynki, urodziny partnera, prezent-niespodzianka.",
    image: heartPizzaImg,
  },
  {
    emoji: "🎂",
    title: "Urodziny Pizzaiolo",
    lead: "Niezapomniane urodziny w klimacie włoskim.",
    description: "Twoje dziecko marzy o prawdziwej przygodzie z pizzą? Urodziny Mały Pizzaiolo to wydarzenie, które łączy zabawę z nauką — dzieci same wyrabiają ciasto, komponują swoją pizzę i patrzą, jak wypieka się w autentycznym piecu opalanym drewnem.",
    forWhom: "Dla dzieci, rodzin, rodziców szukających kreatywnego pomysłu na urodziny.",
    occasion: "Urodziny dziecka, imieniny, nagroda za osiągnięcia.",
    image: eventKidsImg,
  },
  {
    emoji: "🍷",
    title: "Pizza & Wino z Sommelierem",
    lead: "Ekskluzywna degustacja dla koneserów.",
    description: "Wieczór, w którym każdy kawałek pizzy spotyka się z idealnie dobranym winem. Sommelier prowadzi przez degustację, tłumacząc nuanse smakowe i parowanie potraw z trunkami — eleganckie doświadczenie dla wymagających podniebień.",
    forWhom: "Dla koneserów wina, par, grup przyjaciół, osób szukających premium doświadczenia.",
    occasion: "Prezent urodzinowy, wieczór firmowy, celebracja specjalnej okazji.",
    image: pizzasVarietyImg,
  },
  {
    emoji: "🎤",
    title: "Wieczór Karaoke",
    lead: "Zabawa z włoskimi klasykami i pyszną pizzą.",
    description: "Włoskie klasyki, gorąca pizza i dobra energia — Wieczór Karaoke to idealna okazja, by spędzić czas z przyjaciółmi w niezobowiązującej, radosnej atmosferze. Śpiewaj, jedz i baw się jak prawdziwy Italiano!",
    forWhom: "Dla grup przyjaciół, par, osób szukających zabawy i rozrywki.",
    occasion: "Wieczór panieński/kawalerski, urodziny, spotkanie towarzyskie.",
    image: interior2Img,
  },
];

const steps = [
  { num: "01", title: "Wybierz voucher", desc: "Przejrzyj ofertę i zdecyduj, który voucher najbardziej pasuje do obdarowywanej osoby." },
  { num: "02", title: "Skontaktuj się z nami", desc: "Zadzwoń lub napisz, aby ustalić szczegóły zakupu i formę vouchera." },
  { num: "03", title: "Odbierz voucher", desc: "Voucher otrzymasz w eleganckiej formie — gotowy do wręczenia jako prezent." },
  { num: "04", title: "Wręcz i ciesz się", desc: "Podaruj bliskiej osobie wyjątkowe przeżycie w Pizzerii oSielsko." },
];

const faqItems = [
  { q: "Jak zamówić voucher?", a: "Skontaktuj się z nami telefonicznie (+48 500 384 100) lub mailowo (pizzasielsko@gmail.com), a pomożemy dobrać idealny voucher." },
  { q: "Czy voucher można kupić jako prezent?", a: "Oczywiście! Każdy voucher jest idealnym prezentem — przygotowujemy go w eleganckiej formie gotowej do wręczenia." },
  { q: "Czy voucher może być elektroniczny?", a: "Tak, możemy przygotować voucher w formie PDF do pobrania i wydrukowania lub wysłania elektronicznie." },
  { q: "Czy voucher ma termin ważności?", a: "Szczegóły dotyczące ważności ustalamy indywidualnie przy zakupie — skontaktuj się z nami po więcej informacji." },
  { q: "Czy mogę ustalić indywidualną wartość vouchera?", a: "Tak, chętnie dopasujemy ofertę do Twoich potrzeb. Skontaktuj się z nami, aby omówić szczegóły." },
];

const VoucheryPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="relative">
      <Helmet>
        <title>Vouchery Podarunkowe – Pizzeria oSielsko | Prezenty z Włoskim Smakiem</title>
        <meta name="description" content="Podaruj wyjątkowe przeżycie w Pizzerii oSielsko. Vouchery na randkę w kuchni, urodziny, degustację wina i wieczór karaoke. Idealny prezent na każdą okazję." />
        <link rel="canonical" href={`${DOMAIN}/vouchery`} />
      </Helmet>

      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="pt-[76px]">
        {/* Hero */}
        <section className="bg-[#FEF3BD] section-padding">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Prezenty z duszą</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Vouchery Podarunkowe
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Podaruj bliskim coś więcej niż przedmiot — podaruj im niezapomniane przeżycie.
                Nasze vouchery to zaproszenie do świata włoskich smaków, wspólnego gotowania
                i wyjątkowych chwil w Pizzerii oSielsko.
              </p>
              <a href="tel:+48500384100" className="btn-primary text-base px-8 py-4">
                📞 Zamów voucher
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Voucher details */}
        <section className="bg-[#FEFDE5] section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Wybierz idealny voucher</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Każdy z naszych voucherów to starannie przygotowane doświadczenie — dopasowane do okazji i osoby, którą chcesz obdarować.</p>
            </AnimatedSection>

            <div className="space-y-16">
              {vouchers.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.08}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                      <img src={v.image} alt={`Voucher ${v.title} – Pizzeria oSielsko`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <span className="text-3xl mb-3 block">{v.emoji}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{v.title}</h3>
                      <p className="text-primary font-semibold mb-4">{v.lead}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">{v.description}</p>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-semibold text-foreground">Dla kogo:</span> <span className="text-muted-foreground">{v.forWhom}</span></p>
                        <p><span className="font-semibold text-foreground">Na jaką okazję:</span> <span className="text-muted-foreground">{v.occasion}</span></p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#FEF3BD] section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Jak to działa?</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <AnimatedSection key={s.num} delay={i * 0.1} className="bg-[#FEFDE5] rounded-3xl p-6 text-center border border-border/30">
                  <span className="text-4xl font-bold text-primary/20 block mb-2">{s.num}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#FEFDE5] section-padding">
          <div className="container-custom max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Najczęstsze pytania</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05} className="bg-[#FEF3BD] rounded-2xl p-6 border border-border/30">
                  <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#FEF3BD] section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gotowy, by kogoś uszczęśliwić?</h2>
              <p className="text-muted-foreground mb-8">Skontaktuj się z nami, a pomożemy dobrać idealny voucher na każdą okazję.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48500384100" className="btn-primary text-base px-8 py-4">📞 Zadzwoń: 500 384 100</a>
                <a href="mailto:pizzasielsko@gmail.com" className="btn-ghost text-base px-8 py-4">✉️ Napisz do nas</a>
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
    </div>
  );
};

export default VoucheryPage;
