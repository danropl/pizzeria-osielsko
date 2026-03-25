import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileBottomBar from "@/components/MobileBottomBar";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import ReservationModal from "@/components/ReservationModal";
import AnimatedSection from "@/components/AnimatedSection";

import heartPizzaImg from "@/assets/heart-pizza.jpg";
import eventXmasImg from "@/assets/event-xmas.jpg";
import interior2Img from "@/assets/interior-2.jpg";
import cateringImg from "@/assets/catering.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import eventWorkshopImg from "@/assets/event-workshop.jpg";
import eventChallengeImg from "@/assets/event-challenge.jpg";

const DOMAIN = "https://pizzeriaosielsko.pl";

interface EventDetail {
  title: string;
  badge: string;
  badgeColor: string;
  lead: string;
  description: string;
  forWhom: string;
  occasion: string;
  vibe: string;
  image: string;
}

const events: EventDetail[] = [
  {
    title: "Urodziny Mały Pizzaiolo",
    badge: "Dla dzieci 👶",
    badgeColor: "bg-accent/80 text-accent-foreground",
    lead: "Wyjątkowe urodziny w stylu włoskim dla najmłodszych.",
    description: "Twoje dziecko wcieli się w rolę prawdziwego pizzaiolo — samodzielnie wyrobi ciasto, dobierze składniki i stworzy swoją wymarzaną pizzę. Całość odbywa się w atmosferze zabawy, pod okiem naszego zespołu, w otoczeniu aromatów prawdziwej włoskiej kuchni.",
    forWhom: "Dzieci, rodziny, rodzice szukający wyjątkowego pomysłu na przyjęcie urodzinowe.",
    occasion: "Urodziny, imieniny, zakończenie roku szkolnego, nagroda specjalna.",
    vibe: "Radosny, kreatywny, pełen smaków i uśmiechów — włoskie urodziny, jakich nie zapomni żadne dziecko.",
    image: eventKidsImg,
  },
  {
    title: "Warsztaty Robienia Pizzy",
    badge: "Warsztaty 👨‍🍳",
    badgeColor: "bg-orange-500/80 text-white",
    lead: "Naucz się wyrabiać ciasto i komponować smaki jak prawdziwy pizzaiolo.",
    description: "Warsztaty to praktyczne doświadczenie kulinarne — od przygotowania ciasta na mące tipo '00', przez dobór składników, aż po wypiek w piecu opalanym drewnem rozgrzanym do 400°C. Prowadzone przez doświadczony zespół Pizzerii oSielsko.",
    forWhom: "Dorośli, pary, grupy przyjaciół, zespoły firmowe, rodziny z dziećmi.",
    occasion: "Team building, prezent urodzinowy, randka, spotkanie integracyjne.",
    vibe: "Edukacyjny, inspirujący i pełen zabawy — odkryj sekrety włoskiego rzemiosła.",
    image: eventWorkshopImg,
  },
  {
    title: "Randka w Kuchni",
    badge: "Romantyczny 💕",
    badgeColor: "bg-pink-500/80 text-white",
    lead: "Romantyczny wieczór dla dwojga przy wspólnym gotowaniu.",
    description: "Randka w Kuchni to wieczór stworzony dla par, które kochają jedzenie i wspólne chwile. Razem przygotujecie włoskie dania pod okiem naszego zespołu, a potem zasiądziecie do kolacji w kameralnym klimacie. To doświadczenie, które zbliża i zostaje w pamięci.",
    forWhom: "Pary, zakochani, małżeństwa szukające wyjątkowego wspólnego czasu.",
    occasion: "Rocznica, walentynki, zaręczyny, niespodzianka dla drugiej połówki.",
    vibe: "Kameralny, ciepły, romantyczny — włoska kolacja, jaką przygotujecie razem.",
    image: heartPizzaImg,
  },
  {
    title: "Letnie Kino z Pizzą",
    badge: "Sezonowy 🌙",
    badgeColor: "bg-blue-800/80 text-white",
    lead: "Seans filmowy pod gwiazdami z gorącą pizzą w ręku.",
    description: "Gdy wieczorem zapada zmierzch, nasz ogród zamienia się w kino pod chmurką. Gorąca pizza, chłodne napoje i wielki ekran — to idealne połączenie dla miłośników filmów i dobrego jedzenia. Wydarzenie sezonowe, dostępne w sezonie letnim.",
    forWhom: "Rodziny, pary, grupy przyjaciół, miłośnicy filmów.",
    occasion: "Letni wieczór, randka pod gwiazdami, spotkanie towarzyskie.",
    vibe: "Relaksujący, nastrojowy, letni — kino, jakiego nie znajdziesz nigdzie indziej.",
    image: eventXmasImg,
  },
  {
    title: "Pizza Challenge",
    badge: "Wyzwanie 🌶️",
    badgeColor: "bg-red-500/80 text-white",
    lead: "Kto zje najszybciej? Rywalizacja w dobrym stylu.",
    description: "Pizza Challenge to wyzwanie dla tych, którzy lubią rywalizację i dobrą zabawę. Czy dasz radę zjeść pizzę szybciej niż Twoi znajomi? Emocje, śmiech i pyszna pizza gwarantowane — niezależnie od wyniku.",
    forWhom: "Grupy przyjaciół, drużyny, osoby lubiące wyzwania i dobrą zabawę.",
    occasion: "Wieczór ze znajomymi, integracja, spotkanie towarzyskie, urodziny.",
    vibe: "Energetyczny, zabawny, pełen adrenaliny — rywalizacja w najlepszym włoskim stylu.",
    image: eventChallengeImg,
  },
  {
    title: "Karaoke Italiano Night",
    badge: "Muzyczny 🎶",
    badgeColor: "bg-purple-500/80 text-white",
    lead: "Włoskie przeboje i pizza do późna w nocy.",
    description: "Wieczór pełen muzyki, śmiechu i włoskich klasyków. Karaoke Italiano Night to idealna okazja, by zaśpiewać ulubione piosenki przy gorącej pizzy i dobrym towarzystwie. Nie musisz śpiewać idealnie — musisz się dobrze bawić!",
    forWhom: "Grupy przyjaciół, pary, osoby szukające zabawy i rozrywki.",
    occasion: "Wieczór panieński/kawalerski, urodziny, impreza firmowa, piątkowy wieczór.",
    vibe: "Radosny, muzyczny, spontaniczny — la dolce vita w najlepszym wydaniu.",
    image: interior2Img,
  },
  {
    title: "Pizza & Wino z Sommelierem",
    badge: "Premium 🍷",
    badgeColor: "bg-rose-800/80 text-white",
    lead: "Degustacja win dobranych do pizzy przez eksperta.",
    description: "Wieczór prowadzony przez sommeliera, który dobierze wina idealnie pasujące do naszych pizz. Dowiesz się, jak smaki wzajemnie się wzmacniają, i odkryjesz nowe ulubione połączenia — eleganckie doświadczenie dla koneserów.",
    forWhom: "Koneserzy wina, pary, grupy przyjaciół, osoby szukające premium doświadczenia.",
    occasion: "Prezent urodzinowy, kolacja biznesowa, celebracja rocznicowa.",
    vibe: "Elegancki, edukacyjny, ekskluzywny — smak Włoch w kieliszku i na talerzu.",
    image: pizzasVarietyImg,
  },
  {
    title: "Voucher Experience",
    badge: "Prezent 🎁",
    badgeColor: "bg-yellow-600/80 text-white",
    lead: "Podaruj komuś niezapomniane przeżycie w naszej restauracji.",
    description: "Voucher Experience to możliwość sprezentowania bliskiej osobie dowolnego doświadczenia z naszej oferty eventowej. Wybierz rodzaj przeżycia, ustal szczegóły z nami, a obdarowana osoba otrzyma elegancki voucher gotowy do realizacji.",
    forWhom: "Osoby szukające wyjątkowego prezentu dla bliskich, par, dzieci, przyjaciół.",
    occasion: "Urodziny, święta, podziękowanie, niespodzianka, rocznica.",
    vibe: "Emocjonalny, osobisty, pełen anticipacji — prezent, który daje radość jeszcze przed realizacją.",
    image: cateringImg,
  },
];

const audiences = [
  { emoji: "💑", label: "Pary", desc: "Romantyczne kolacje, randki w kuchni, degustacje wina." },
  { emoji: "👨‍👩‍👧‍👦", label: "Rodziny", desc: "Urodziny, warsztaty, wspólne gotowanie z dziećmi." },
  { emoji: "👧", label: "Dzieci", desc: "Kreatywne przyjęcia urodzinowe i warsztaty pizzaiolo." },
  { emoji: "👥", label: "Grupy przyjaciół", desc: "Karaoke, wyzwania, letnie kino, wspólna zabawa." },
  { emoji: "🏢", label: "Firmy", desc: "Integracje, team building, wieczory tematyczne." },
  { emoji: "🎁", label: "Szukający prezentu", desc: "Vouchery na wyjątkowe doświadczenia i przeżycia." },
];

const reservationSteps = [
  { num: "01", title: "Wybierz rodzaj eventu", desc: "Przejrzyj ofertę i zdecyduj, co najbardziej pasuje do Twojej okazji." },
  { num: "02", title: "Skontaktuj się z nami", desc: "Zadzwoń lub napisz — pomożemy dopasować event do Twoich potrzeb." },
  { num: "03", title: "Ustal szczegóły", desc: "Wspólnie ustalimy datę, liczbę osób i wszystkie detale." },
  { num: "04", title: "Zarezerwuj i ciesz się", desc: "Potwierdź rezerwację i przygotuj się na wyjątkowe przeżycie." },
];

const EventyPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="relative">
      <Helmet>
        <title>Eventy i Atrakcje – Pizzeria oSielsko | Warsztaty, Randki, Wyjątkowe Wieczory</title>
        <meta name="description" content="Odkryj wyjątkowe eventy w Pizzerii oSielsko: warsztaty pizzy, randki w kuchni, kino z pizzą, karaoke, degustacje wina. Organizujemy niezapomniane doświadczenia dla par, rodzin i grup." />
        <link rel="canonical" href={`${DOMAIN}/eventy`} />
      </Helmet>

      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="pt-[76px]">
        {/* Hero */}
        <section className="bg-[#FEF3BD] section-padding">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Wyjątkowe doświadczenia</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Eventy & Atrakcje
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Pizzeria oSielsko to więcej niż restauracja — to miejsce spotkań, emocji i niezapomnianych chwil.
                Organizujemy wydarzenia, które łączą ludzi przy wspólnym stole, pizzy z pieca i prawdziwych włoskich smakach.
              </p>
              <button onClick={() => setReservationOpen(true)} className="btn-primary text-base px-8 py-4">
                📩 Zapytaj o event
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* Event details */}
        <section className="bg-[#FEFDE5] section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nasze wydarzenia i atrakcje</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Każde wydarzenie to starannie przygotowane doświadczenie — dopasowane do okazji, grupy i klimatu, jakiego szukacie.</p>
            </AnimatedSection>

            <div className="space-y-20">
              {events.map((ev, i) => (
                <AnimatedSection key={ev.title} delay={i * 0.06}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                        <img src={ev.image} alt={`${ev.title} – Pizzeria oSielsko`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <span className={`absolute top-4 left-4 badge-tag ${ev.badgeColor}`}>{ev.badge}</span>
                    </div>
                    <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{ev.title}</h3>
                      <p className="text-primary font-semibold mb-4">{ev.lead}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">{ev.description}</p>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-semibold text-foreground">Dla kogo:</span> <span className="text-muted-foreground">{ev.forWhom}</span></p>
                        <p><span className="font-semibold text-foreground">Na jaką okazję:</span> <span className="text-muted-foreground">{ev.occasion}</span></p>
                        <p><span className="font-semibold text-foreground">Klimat:</span> <span className="text-muted-foreground">{ev.vibe}</span></p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="bg-[#FEF3BD] section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Dla kogo organizujemy?</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((a, i) => (
                <AnimatedSection key={a.label} delay={i * 0.08} className="bg-[#FEFDE5] rounded-3xl p-6 border border-border/30 text-center">
                  <span className="text-4xl block mb-3">{a.emoji}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{a.label}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How to book */}
        <section className="bg-[#FEFDE5] section-padding">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Jak zarezerwować event?</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reservationSteps.map((s, i) => (
                <AnimatedSection key={s.num} delay={i * 0.1} className="bg-[#FEF3BD] rounded-3xl p-6 text-center border border-border/30">
                  <span className="text-4xl font-bold text-primary/20 block mb-2">{s.num}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#FEF3BD] section-padding">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Zorganizujmy coś wyjątkowego!</h2>
              <p className="text-muted-foreground mb-8">Masz pomysł na event? Skontaktuj się z nami, a pomożemy go zrealizować w Pizzerii oSielsko.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setReservationOpen(true)} className="btn-primary text-base px-8 py-4">📞 Zarezerwuj termin</button>
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

export default EventyPage;
