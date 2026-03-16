import ImagePlaceholder from "./ImagePlaceholder";
import AnimatedSection from "./AnimatedSection";
import heartPizzaImg from "@/assets/heart-pizza.jpg";
import drinksImg from "@/assets/drinks.jpg";
import interiorImg from "@/assets/interior.jpg";
import interior2Img from "@/assets/interior-2.jpg";
import eventXmasImg from "@/assets/event-xmas.jpg";

interface EventItem {
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  price: string;
  placeholder: string;
  image?: string;
}

const events: EventItem[] = [
  { title: "Urodziny Mały Pizzaiolo", badge: "Dla dzieci 👶", badgeColor: "bg-accent/10 text-accent", desc: "Warsztaty pizzy dla najmłodszych — fartuszki, czapki kucharskie, mnóstwo zabawy!", price: "od [CENA] zł/dziecko", placeholder: "Dzieci w fartuszkach i czapkach kucharskich przy stole kuchennym" },
  { title: "Warsztaty Robienia Pizzy", badge: "Warsztaty 👨‍🍳", badgeColor: "bg-orange-500/10 text-orange-700", desc: "Naucz się robić pizzę jak prawdziwy neapolitańczyk. Ciasto, sos, piec — pełne doświadczenie.", price: "[CENA] zł/os.", placeholder: "Ręce rozciągające ciasto na pizzę — mąka w powietrzu" },
  { title: "Randka w Kuchni", badge: "Romantyczny 💕", badgeColor: "bg-pink-500/10 text-pink-600", desc: "Wieczór dla dwojga — wspólne gotowanie, wino, świece i niezapomniane wspomnienia.", price: "[CENA] zł/para", placeholder: "Romantyczny wieczór w kuchni", image: heartPizzaImg },
  { title: "Letnie Kino z Pizzą", badge: "Sezonowy 🌙", badgeColor: "bg-blue-900/10 text-blue-800", desc: "Film pod gwiazdami, ciepła pizza i napoje — idealne letnie wieczory.", price: "[CENA / wstęp wolny]", placeholder: "Wieczorny seans filmowy na zewnątrz" },
  { title: "Pizza Challenge", badge: "Wyzwanie 🌶️", badgeColor: "bg-red-500/10 text-red-600", desc: "Zmierz się z naszą ogromną pizzą XXL! Dasz radę sam ją zjeść?", price: "[CENA] zł", placeholder: "Ogromna pizza XXL na stole" },
  { title: "Karaoke Italiano Night", badge: "Muzyczny 🎶", badgeColor: "bg-purple-500/10 text-purple-700", desc: "Śpiewaj włoskie i polskie przeboje przy pizzy i winie!", price: "[CENA / wstęp wolny]", placeholder: "Wieczór karaoke w restauracji" },
  { title: "Pizza & Wino z Sommelierem", badge: "Premium 🍷", badgeColor: "bg-rose-800/10 text-rose-800", desc: "Degustacja wina z profesjonalnym sommelierem, dobrana z naszymi pizzami.", price: "[CENA] zł/os.", placeholder: "Degustacja wina z pizzą", image: drinksImg },
  { title: "Event na Zamówienie / Private", badge: "Private 🏢", badgeColor: "bg-yellow-600/10 text-yellow-700", desc: "Organizujemy wydarzenia firmowe, imprezy okolicznościowe i przyjęcia prywatne.", price: "Wycena indywidualna", placeholder: "Elegancko nakryty stół na prywatne przyjęcie", image: interiorImg },
];

const EventySection = () => (
  <section id="eventy" className="bg-bg-dark section-padding">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Wyjątkowe doświadczenia</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Eventy & Atrakcje
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <AnimatedSection key={event.title} delay={i * 0.05} className="card-warm overflow-hidden flex flex-col">
            <div className="relative">
              {event.image ? (
                <div className="aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : (
                <ImagePlaceholder label={event.placeholder} aspectRatio="aspect-[4/3]" className="rounded-none rounded-t-3xl" />
              )}
              <span className={`absolute top-3 left-3 badge-tag ${event.badgeColor}`}>{event.badge}</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">{event.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 flex-1">{event.desc}</p>
              <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mb-4">{event.price}</p>
              <button className="btn-primary text-sm py-2 w-full">Dowiedz się więcej</button>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <a href="#kontakt" className="btn-primary text-base px-8 py-4">📩 Zapytaj o event lub rezerwację</a>
      </AnimatedSection>
    </div>
  </section>
);

export default EventySection;
