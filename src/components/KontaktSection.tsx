import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const hours = [
  { day: "Poniedziałek", open: "[GODZINA]", close: "[GODZINA]" },
  { day: "Wtorek", open: "[GODZINA]", close: "[GODZINA]" },
  { day: "Środa", open: "[GODZINA]", close: "[GODZINA]" },
  { day: "Czwartek", open: "[GODZINA]", close: "[GODZINA]" },
  { day: "Piątek", open: "[GODZINA]", close: "[GODZINA]" },
  { day: "Sobota", open: "[GODZINA]", close: "[GODZINA]" },
  { day: "Niedziela", open: "[GODZINA]", close: "[GODZINA]" },
];

const dayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

const KontaktSection = () => {
  const [todayIndex, setTodayIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", rodo: false });

  useEffect(() => {
    setTodayIndex(new Date().getDay());
  }, []);

  const todayName = dayNames[todayIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formularz wysłany! (demo — podłączyć backend)");
  };

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
          {/* Info + Form */}
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
                    <span className="font-data tabular-nums">{h.open} – {h.close}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="badge-tag bg-accent/10 text-accent">
                  🟢 Status: sprawdź godziny
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a href="[LINK_FACEBOOK]" target="_blank" rel="noopener noreferrer" className="btn-ghost py-2 px-4 text-sm" aria-label="Facebook">Facebook</a>
              <a href="[LINK_INSTAGRAM]" target="_blank" rel="noopener noreferrer" className="btn-ghost py-2 px-4 text-sm" aria-label="Instagram">Instagram</a>
              <a href="[LINK_TIKTOK]" target="_blank" rel="noopener noreferrer" className="btn-ghost py-2 px-4 text-sm" aria-label="TikTok">TikTok</a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="card-warm p-6 space-y-4">
              <h3 className="font-subhead text-lg font-semibold text-foreground">Napisz do nas</h3>
              <input
                type="text"
                placeholder="Imię"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Wiadomość"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.rodo}
                  onChange={(e) => setFormData({ ...formData, rodo: e.target.checked })}
                  className="mt-1 accent-primary"
                />
                <span className="font-body text-xs text-muted-foreground">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką Prywatności (RODO).
                </span>
              </label>
              <button type="submit" className="btn-primary w-full">Wyślij wiadomość</button>
            </form>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.15} className="space-y-3">
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-border/30 bg-bg-dark/50 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-4xl mb-4">🗺️</p>
                <p className="font-body text-sm text-muted-foreground">
                  Mapa Google Maps<br />
                  <span className="text-xs">[Uzupełnić iframe z Google Maps embed — współrzędne GPS]</span>
                </p>
              </div>
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
