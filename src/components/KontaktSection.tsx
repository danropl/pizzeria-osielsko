import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { ORDER_URL } from "@/lib/constants";

const hours = [
  { day: "Poniedziałek", open: "Zamknięte", close: "" },
  { day: "Wtorek", open: "13:00", close: "21:00" },
  { day: "Środa", open: "13:00", close: "21:00" },
  { day: "Czwartek", open: "13:00", close: "21:00" },
  { day: "Piątek", open: "13:00", close: "22:00" },
  { day: "Sobota", open: "13:00", close: "22:00" },
  { day: "Niedziela", open: "13:00", close: "21:00" },
];

const dayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

const KontaktSection = () => {
  const [todayIndex, setTodayIndex] = useState(0);

  useEffect(() => {
    setTodayIndex(new Date().getDay());
  }, []);

  const todayName = dayNames[todayIndex];

  return (
    <section id="kontakt" className="bg-background section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Kontakt</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Odwiedź nas
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[40%_60%] gap-8">
          {/* Info */}
          <AnimatedSection className="space-y-6">
            <div className="card-warm p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Adres</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Akacjowa%202,%2086-031%20Osielsko" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:underline">
                    Akacjowa 2, 86-031 Osielsko
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Telefon</p>
                  <a href="tel:+48500384100" className="font-body text-sm text-primary hover:underline">+48 500 384 100</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Email</p>
                  <a href="mailto:pizzasielsko@gmail.com" className="font-body text-sm text-primary hover:underline">pizzasielsko@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-warm p-6">
              <h3 className="font-subhead text-lg font-semibold text-foreground mb-4">Godziny otwarcia</h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center px-3 py-2 rounded-xl text-sm font-body ${
                      h.day === todayName ? "bg-primary/10 text-primary font-semibold" : "text-foreground/70"
                    }`}
                  >
                    <span>{h.day}</span>
                    <span className="font-data tabular-nums">
                      {h.close ? `${h.open} – ${h.close}` : h.open}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social + CTA */}
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="btn-ghost py-2 px-4 text-sm" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="btn-ghost py-2 px-4 text-sm" aria-label="Instagram">Instagram</a>
              <a href="https://www.tiktok.com/@pizzeria_osielsko" target="_blank" rel="noopener noreferrer" className="btn-ghost py-2 px-4 text-sm" aria-label="TikTok">TikTok</a>
            </div>

            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-base py-4"
            >
              🍕 Zamów online
            </a>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.15} className="space-y-3">
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-border/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200!2d18.0846522!3d53.1844016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470310d52334fe87%3A0x7c12a88e5b166e26!2sPizzeria%20oSIELSKO!5e0!3m2!1spl!2spl!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Pizzeria Osielsko"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Akacjowa%202,%2086-031%20Osielsko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm font-semibold text-primary hover:underline"
            >
              🗺️ Otwórz w Google Maps →
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default KontaktSection;
