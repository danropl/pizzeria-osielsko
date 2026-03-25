import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import eventXmasImg from "@/assets/event-xmas.jpg";
import interior2Img from "@/assets/interior-2.jpg";
import cateringImg from "@/assets/catering.jpg";
import pizzasVarietyImg from "@/assets/pizzas-variety.jpg";
import eventKidsImg from "@/assets/event-kids.jpg";
import eventWorkshopImg from "@/assets/event-workshop.jpg";
import eventChallengeImg from "@/assets/event-challenge.jpg";

interface EventItem {
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  image: string;
}

const events: EventItem[] = [
  { title: "Urodziny Mały Pizzaiolo", badge: "Dla dzieci 👶", badgeColor: "bg-accent/80 text-accent-foreground", desc: "Wyjątkowe urodziny w stylu włoskim dla najmłodszych.", image: eventKidsImg },
  { title: "Warsztaty Robienia Pizzy", badge: "Warsztaty 👨‍🍳", badgeColor: "bg-orange-500/80 text-white", desc: "Naucz się wyrabiać ciasto i komponować smaki jak prawdziwy pizzaiolo.", image: eventWorkshopImg },
  { title: "Randka w Kuchni", badge: "Romantyczny 💕", badgeColor: "bg-pink-500/80 text-white", desc: "Romantyczny wieczór dla dwojga przy wspólnym gotowaniu.", image: heartPizzaImg },
  { title: "Letnie Kino z Pizzą", badge: "Sezonowy 🌙", badgeColor: "bg-blue-800/80 text-white", desc: "Seans filmowy pod gwiazdami z gorącą pizzą w ręku.", image: eventXmasImg },
  { title: "Pizza Challenge", badge: "Wyzwanie 🌶️", badgeColor: "bg-red-500/80 text-white", desc: "Kto zje najszybciej? Rywalizacja w dobrym stylu.", image: eventChallengeImg },
  { title: "Karaoke Italiano Night", badge: "Muzyczny 🎶", badgeColor: "bg-purple-500/80 text-white", desc: "Włoskie przeboje i pizza do późna w nocy.", image: interior2Img },
  { title: "Pizza & Wino z Sommelierem", badge: "Premium 🍷", badgeColor: "bg-rose-800/80 text-white", desc: "Degustacja win dobranych do pizzy przez eksperta.", image: pizzasVarietyImg },
  { title: "Voucher Experience", badge: "Prezent 🎁", badgeColor: "bg-yellow-600/80 text-white", desc: "Podaruj komuś niezapomniane przeżycie w naszej restauracji.", image: cateringImg },
];

const EventySection = () => (
  <section id="eventy" className="bg-[#FEF3BD] section-padding">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Wyjątkowe doświadczenia</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Eventy & Atrakcje
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, i) => (
          <AnimatedSection key={event.title} delay={i * 0.05} className="card-warm overflow-hidden flex flex-col w-full">
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
                <img src={event.image} alt={`${event.title} – event w Pizzerii Osielsko`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <span className={`absolute top-3 left-3 badge-tag ${event.badgeColor}`}>{event.badge}</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">{event.title}</h3>
              <p className="font-body text-sm text-muted-foreground flex-1">{event.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <a href="#kontakt" onClick={(e) => { e.preventDefault(); document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary text-base px-8 py-4">📩 Zapytaj o event lub rezerwację</a>
      </AnimatedSection>
    </div>
  </section>
);

export default EventySection;
