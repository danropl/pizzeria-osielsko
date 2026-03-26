import { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileBottomBar from "@/components/MobileBottomBar";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import ReservationModal from "@/components/ReservationModal";
import AnimatedSection from "@/components/AnimatedSection";
import SectionBlock from "@/components/configurator/SectionBlock";
import ItemQuantityRow from "@/components/configurator/ItemQuantityRow";
import QuantitySelector from "@/components/configurator/QuantitySelector";
import OrderSummary from "@/components/configurator/OrderSummary";
import ProgressIndicator from "@/components/configurator/ProgressIndicator";
import RecommendationBlock from "@/components/configurator/RecommendationBlock";

import {
  partyTypes, durationOptions, spotOptions, timeSlots, deliveryModes, budgetLevels, guestCharacterOptions,
  pizzas, starters, drinks,
  decorationPackages, personalizationExtras, cakeServicePrice, extraAttractions, organizationalOptions,
  type RecommendedSet,
} from "@/lib/partyConfiguratorData";

const DOMAIN = "https://pizzeriaosielsko.pl";

// ── State shape ──────────────────────────────────
export interface PartyState {
  partyType: string;
  eventName: string;
  date: string;
  time: string;
  adults: number;
  kids: number;
  duration: string;
  spot: string;
  deliveryMode: string;
  budgetLevel: string;
  guestCharacter: string;
  pizzaQty: Record<string, number>;
  starterQty: Record<string, number>;
  drinkQty: Record<string, number>;
  decorationPackage: string;
  personalization: string[];
  cakeService: boolean;
  attractions: string[];
  orgOptions: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactNotes: string;
  contactPriority: string;
}

const initial: PartyState = {
  partyType: "",
  eventName: "",
  date: "",
  time: "",
  adults: 4,
  kids: 0,
  duration: "2h",
  spot: "none",
  deliveryMode: "on-site",
  budgetLevel: "standard",
  guestCharacter: "",
  pizzaQty: {},
  starterQty: {},
  drinkQty: {},
  decorationPackage: "none",
  personalization: [],
  cakeService: false,
  attractions: [],
  orgOptions: [],
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  contactNotes: "",
  contactPriority: "",
};

// ── Component ────────────────────────────────────
const KonfiguratorImprezPage = () => {
  const [s, setS] = useState<PartyState>(initial);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const TOTAL_STEPS = 6;

  const set = <K extends keyof PartyState>(key: K, val: PartyState[K]) =>
    setS(prev => ({ ...prev, [key]: val }));

  const setQty = (key: "pizzaQty" | "starterQty" | "drinkQty", id: string, v: number) =>
    setS(prev => ({ ...prev, [key]: { ...prev[key], [id]: v } }));

  const toggleArr = (key: "personalization" | "attractions" | "orgOptions", id: string) =>
    setS(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(id) ? (prev[key] as string[]).filter(x => x !== id) : [...(prev[key] as string[]), id],
    }));

  // ── Apply recommended set ──
  const applyRecommendation = (rec: RecommendedSet) => {
    const newPizzaQty: Record<string, number> = {};
    rec.pizzas.forEach(p => { newPizzaQty[p.id] = p.qty; });
    const newStarterQty: Record<string, number> = {};
    rec.starters.forEach(s => { newStarterQty[s.id] = s.qty; });
    const newDrinkQty: Record<string, number> = {};
    rec.drinks.forEach(d => { newDrinkQty[d.id] = d.qty; });
    setS(prev => ({
      ...prev,
      pizzaQty: newPizzaQty,
      starterQty: newStarterQty,
      drinkQty: newDrinkQty,
      decorationPackage: rec.decoration,
    }));
  };

  const goNext = useCallback(() => {
    setActiveStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goBack = useCallback(() => {
    setActiveStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ── Price calculation ──
  const total = useMemo(() => {
    let sum = 0;
    const pt = partyTypes.find(p => p.id === s.partyType);
    if (pt) sum += pt.price;
    const dur = durationOptions.find(d => d.id === s.duration);
    if (dur) sum += dur.price;
    const spot = spotOptions.find(sp => sp.id === s.spot);
    if (spot) sum += spot.price;
    const delivery = deliveryModes.find(d => d.id === s.deliveryMode);
    if (delivery) sum += delivery.price;
    const budget = budgetLevels.find(b => b.id === s.budgetLevel);
    if (budget) sum += budget.price;
    const gc = guestCharacterOptions.find(g => g.id === s.guestCharacter);
    if (gc) sum += gc.price;

    pizzas.forEach(p => { sum += (s.pizzaQty[p.id] || 0) * p.price; });
    starters.forEach(st => { sum += (s.starterQty[st.id] || 0) * st.price; });
    drinks.forEach(d => { sum += (s.drinkQty[d.id] || 0) * d.price; });

    const dec = decorationPackages.find(d => d.id === s.decorationPackage);
    if (dec) sum += dec.price;

    personalizationExtras.forEach(e => { if (s.personalization.includes(e.id)) sum += e.price; });
    if (s.cakeService) sum += cakeServicePrice;
    extraAttractions.forEach(e => { if (s.attractions.includes(e.id)) sum += e.price; });
    organizationalOptions.forEach(e => { if (s.orgOptions.includes(e.id)) sum += e.price; });

    return sum;
  }, [s]);

  const guestCount = s.adults + s.kids;
  const recommendedPizzas = Math.max(1, Math.ceil(guestCount / 2.5));

  // ── Radio card helper ──
  const radioCard = (
    options: { id: string; label: string; desc?: string; price: number }[],
    value: string,
    onChange: (id: string) => void,
  ) => (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map(opt => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
            value === opt.id
              ? "border-primary bg-primary/5 shadow-md"
              : "border-border/60 bg-card hover:border-primary/40"
          }`}
        >
          <span className="font-body text-sm font-semibold text-foreground block">{opt.label}</span>
          {opt.desc && <span className="font-body text-xs text-muted-foreground block mt-0.5">{opt.desc}</span>}
          <span className="font-data text-xs font-bold text-primary mt-1 block">
            {opt.price === 0 ? "w cenie" : `+${opt.price} zł`}
          </span>
        </button>
      ))}
    </div>
  );

  // ── Checkbox card helper ──
  const checkboxCard = (
    options: { id: string; label: string; desc?: string; price: number }[],
    selected: string[],
    toggleKey: "personalization" | "attractions" | "orgOptions",
  ) => (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map(e => (
        <label
          key={e.id}
          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
            selected.includes(e.id)
              ? "border-primary bg-primary/5"
              : "border-border/60 bg-card hover:border-primary/40"
          }`}
        >
          <input
            type="checkbox"
            checked={selected.includes(e.id)}
            onChange={() => toggleArr(toggleKey, e.id)}
            className="sr-only"
          />
          <div className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
            selected.includes(e.id) ? "bg-primary border-primary text-primary-foreground" : "border-border"
          }`}>
            {selected.includes(e.id) && <span className="text-xs">✓</span>}
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-body text-sm font-semibold text-foreground block">{e.label}</span>
            {e.desc && <span className="font-body text-xs text-muted-foreground block mt-0.5">{e.desc}</span>}
            <span className="font-data text-xs font-bold text-primary">
              {e.price === 0 ? "bezpłatne" : `+${e.price} zł`}
            </span>
          </div>
        </label>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Konfigurator imprez – Pizzeria oSielsko | Zaplanuj przyjęcie</title>
        <meta
          name="description"
          content="Zaplanuj imprezę w Pizzerii oSielsko — urodziny, spotkania, eventy firmowe. Skonfiguruj menu, dekoracje, atrakcje i sprawdź orientacyjny koszt online."
        />
        <link rel="canonical" href={`${DOMAIN}/konfigurator-imprez`} />
      </Helmet>

      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main>
        {/* Hero */}
        <section className="bg-bg-dark section-padding pt-32 md:pt-36">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3"
            >
              Zaplanuj swoje wydarzenie
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              Konfigurator imprez
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg text-foreground/70 leading-relaxed mb-8"
            >
              Urodziny, wieczór ze znajomymi, spotkanie firmowe czy kolacja rocznicowa?
              Dobierz typ imprezy, menu, dekoracje i atrakcje — od razu zobaczysz orientacyjny koszt.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProgressIndicator currentStep={activeStep} onStepClick={(step) => { setActiveStep(step); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
            </motion.div>
          </div>
        </section>

        {/* Configurator */}
        <section className="bg-background section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
              {/* LEFT — form */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Step 1: Party type */}
                    {activeStep === 1 && (
                      <SectionBlock step="01" title="Typ imprezy" subtitle="Wybierz rodzaj wydarzenia">
                        {radioCard(partyTypes, s.partyType, id => set("partyType", id))}
                      </SectionBlock>
                    )}

                    {/* Step 2: Guests & date */}
                    {activeStep === 2 && (
                      <SectionBlock step="02" title="Goście i termin" subtitle="Określ datę, godzinę i liczbę gości">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="font-body text-sm font-semibold text-foreground block mb-1.5">Nazwa / okazja</label>
                            <input type="text" placeholder="np. Urodziny Ani" value={s.eventName} onChange={e => set("eventName", e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                          </div>
                          <div>
                            <label className="font-body text-sm font-semibold text-foreground block mb-1.5">Preferowana data</label>
                            <input type="date" value={s.date} onChange={e => set("date", e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                          </div>
                          <div>
                            <label className="font-body text-sm font-semibold text-foreground block mb-1.5">Godzina rozpoczęcia</label>
                            <select value={s.time} onChange={e => set("time", e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40">
                              <option value="">Wybierz godzinę</option>
                              {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div className="flex gap-6">
                            <div className="flex-1">
                              <label className="font-body text-sm font-semibold text-foreground block mb-1.5">Dorośli</label>
                              <QuantitySelector value={s.adults} onChange={v => set("adults", v)} min={1} max={40} />
                            </div>
                            <div className="flex-1">
                              <label className="font-body text-sm font-semibold text-foreground block mb-1.5">Dzieci</label>
                              <QuantitySelector value={s.kids} onChange={v => set("kids", v)} min={0} max={30} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 space-y-5">
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Czas trwania</p>
                            {radioCard(durationOptions, s.duration, id => set("duration", id))}
                          </div>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Preferowane miejsce</p>
                            {radioCard(spotOptions, s.spot, id => set("spot", id))}
                          </div>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Tryb realizacji</p>
                            {radioCard(deliveryModes, s.deliveryMode, id => set("deliveryMode", id))}
                          </div>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Poziom imprezy</p>
                            {radioCard(budgetLevels, s.budgetLevel, id => set("budgetLevel", id))}
                          </div>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Charakter spotkania</p>
                            {radioCard(guestCharacterOptions, s.guestCharacter, id => set("guestCharacter", id))}
                          </div>
                        </div>
                      </SectionBlock>
                    )}

                    {/* Step 3: Food */}
                    {activeStep === 3 && (
                      <SectionBlock step="03" title="Jedzenie i napoje" subtitle={`Rekomendacja dla ${guestCount} gości: ok. ${recommendedPizzas} pizz`}>
                        {s.partyType && (
                          <div className="mb-6">
                            <RecommendationBlock guestCount={guestCount} partyType={s.partyType} onApply={applyRecommendation} />
                          </div>
                        )}
                        <p className="font-body text-xs text-muted-foreground mb-4">
                          Orientacyjnie 1 pizza wystarcza dla 2–3 osób. Możesz dowolnie zmienić ilości poniżej.
                        </p>
                        <div className="mb-6">
                          <h4 className="font-display text-base font-bold text-foreground mb-3">🍕 Pizze</h4>
                          <div className="card-warm p-4">
                            {pizzas.map(p => (
                              <ItemQuantityRow key={p.id} name={p.name} desc={p.desc} price={p.price} qty={s.pizzaQty[p.id] || 0} onChange={v => setQty("pizzaQty", p.id, v)} />
                            ))}
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-display text-base font-bold text-foreground mb-3">🥖 Dodatki i startery</h4>
                          <div className="card-warm p-4">
                            {starters.map(st => (
                              <ItemQuantityRow key={st.id} name={st.name} desc={st.desc} price={st.price} qty={s.starterQty[st.id] || 0} onChange={v => setQty("starterQty", st.id, v)} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-display text-base font-bold text-foreground mb-3">🥤 Napoje</h4>
                          <div className="card-warm p-4">
                            {drinks.map(d => (
                              <ItemQuantityRow key={d.id} name={d.name} desc={d.desc} price={d.price} qty={s.drinkQty[d.id] || 0} onChange={v => setQty("drinkQty", d.id, v)} />
                            ))}
                          </div>
                        </div>
                      </SectionBlock>
                    )}

                    {/* Step 4: Decorations & extras */}
                    {activeStep === 4 && (
                      <SectionBlock step="04" title="Dekoracje i atrakcje" subtitle="Dopasuj klimat wydarzenia">
                        <div className="space-y-6">
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Pakiet dekoracji</p>
                            {radioCard(decorationPackages, s.decorationPackage, id => set("decorationPackage", id))}
                          </div>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Personalizacja</p>
                            {checkboxCard(personalizationExtras, s.personalization, "personalization")}
                          </div>
                          <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            s.cakeService ? "border-primary bg-primary/5" : "border-border/60 bg-card hover:border-primary/40"
                          }`}>
                            <input type="checkbox" checked={s.cakeService} onChange={() => set("cakeService", !s.cakeService)} className="sr-only" />
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                              s.cakeService ? "bg-primary border-primary text-primary-foreground" : "border-border"
                            }`}>
                              {s.cakeService && <span className="text-xs">✓</span>}
                            </div>
                            <div>
                              <span className="font-body text-sm font-semibold text-foreground block">Serwis własnego tortu</span>
                              <span className="font-data text-xs font-bold text-primary">+{cakeServicePrice} zł</span>
                            </div>
                          </label>
                          <div>
                            <p className="font-body text-sm font-semibold text-foreground mb-2">Atrakcje dodatkowe</p>
                            {checkboxCard(extraAttractions, s.attractions, "attractions")}
                          </div>
                        </div>
                      </SectionBlock>
                    )}

                    {/* Step 5: Contact */}
                    {activeStep === 5 && (
                      <SectionBlock step="05" title="Szczegóły i kontakt" subtitle="Opcje organizacyjne i dane do rezerwacji">
                        <div className="mb-6">
                          <p className="font-body text-sm font-semibold text-foreground mb-2">Opcje organizacyjne</p>
                          {checkboxCard(organizationalOptions, s.orgOptions, "orgOptions")}
                        </div>
                        <div className="card-warm p-5 space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="k-name" className="font-body text-sm font-semibold text-foreground block mb-1.5">Imię i nazwisko</label>
                              <input id="k-name" type="text" value={s.contactName} onChange={e => set("contactName", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                            </div>
                            <div>
                              <label htmlFor="k-email" className="font-body text-sm font-semibold text-foreground block mb-1.5">E-mail</label>
                              <input id="k-email" type="email" value={s.contactEmail} onChange={e => set("contactEmail", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="k-phone" className="font-body text-sm font-semibold text-foreground block mb-1.5">Telefon</label>
                            <input id="k-phone" type="tel" value={s.contactPhone} onChange={e => set("contactPhone", e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                          </div>
                          <div>
                            <label htmlFor="k-notes" className="font-body text-sm font-semibold text-foreground block mb-1.5">Uwagi organizacyjne</label>
                            <textarea id="k-notes" rows={3} value={s.contactNotes} onChange={e => set("contactNotes", e.target.value)}
                              placeholder="Dodatkowe życzenia, alergie, pytania…"
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
                          </div>
                          <div>
                            <label htmlFor="k-priority" className="font-body text-sm font-semibold text-foreground block mb-1.5">Co jest dla Ciebie najważniejsze?</label>
                            <textarea id="k-priority" rows={2} value={s.contactPriority} onChange={e => set("contactPriority", e.target.value)}
                              placeholder="np. Zabawa dla dzieci, elegancka oprawa, smaczne jedzenie…"
                              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
                          </div>
                        </div>
                      </SectionBlock>
                    )}

                    {/* Step 6: Summary (full-width on this step) */}
                    {activeStep === 6 && (
                      <SectionBlock step="06" title="Podsumowanie" subtitle="Sprawdź swoją konfigurację i wyślij zapytanie">
                        <OrderSummary state={s} total={total} />
                      </SectionBlock>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
                  {activeStep > 1 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="px-6 py-3 rounded-xl border-2 border-border/60 bg-card font-body text-sm font-semibold text-foreground/70 hover:border-primary/40 hover:text-primary transition-all"
                    >
                      ← Wstecz
                    </button>
                  ) : <div />}
                  {activeStep < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-bold shadow-md hover:bg-primary/90 transition-all"
                    >
                      Dalej →
                    </button>
                  ) : <div />}
                </div>
              </div>

              {/* RIGHT — sticky summary (visible on steps 1-5) */}
              {activeStep < 6 && (
                <div className="lg:sticky lg:top-28">
                  <AnimatedSection>
                    <OrderSummary state={s} total={total} />
                  </AnimatedSection>
                </div>
              )}
            </div>
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

export default KonfiguratorImprezPage;
