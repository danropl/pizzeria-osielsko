import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { events } from "@/lib/eventsData";

const EventySection = () => (
  <section id="eventy" className="bg-bg-dark section-padding">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Wyjątkowe doświadczenia</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Eventy & Atrakcje
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, i) => (
          <AnimatedSection key={event.title} delay={i * 0.05} className="w-full">
            <Link to="/eventy" className="card-warm overflow-hidden flex flex-col w-full h-full block">
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
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <Link to="/eventy" className="btn-primary text-base px-8 py-4">📩 Zobacz wszystkie eventy</Link>
      </AnimatedSection>
    </div>
  </section>
);

export default EventySection;
