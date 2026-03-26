import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import type { PartyState } from "@/pages/KonfiguratorImprezPage";
import {
  partyTypes, durationOptions, spotOptions, deliveryModes, budgetLevels, guestCharacterOptions,
  pizzas, starters, drinks,
  decorationPackages, personalizationExtras, cakeServicePrice, extraAttractions, organizationalOptions,
} from "@/lib/partyConfiguratorData";

interface Props {
  state: PartyState;
  total: number;
}

const line = (label: string, amount: number) =>
  amount > 0 ? (
    <div key={label} className="flex justify-between text-sm py-1">
      <span className="font-body text-foreground/80">{label}</span>
      <span className="font-data font-semibold text-foreground">{amount} zł</span>
    </div>
  ) : null;

const OrderSummary = ({ state, total }: Props) => {
  const [copied, setCopied] = useState(false);
  const [flash, setFlash] = useState(false);
  const prevTotal = useRef(total);

  useEffect(() => {
    if (prevTotal.current !== total) {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 600);
      prevTotal.current = total;
      return () => clearTimeout(t);
    }
  }, [total]);

  const pt = partyTypes.find(p => p.id === state.partyType);
  const dur = durationOptions.find(d => d.id === state.duration);
  const spot = spotOptions.find(s => s.id === state.spot);
  const decor = decorationPackages.find(d => d.id === state.decorationPackage);
  const delivery = deliveryModes.find(d => d.id === state.deliveryMode);
  const budget = budgetLevels.find(b => b.id === state.budgetLevel);
  const guestChar = guestCharacterOptions.find(g => g.id === state.guestCharacter);

  const pizzaLines = pizzas.filter(p => (state.pizzaQty[p.id] || 0) > 0);
  const starterLines = starters.filter(s => (state.starterQty[s.id] || 0) > 0);
  const drinkLines = drinks.filter(d => (state.drinkQty[d.id] || 0) > 0);
  const selectedPersonalization = personalizationExtras.filter(e => state.personalization.includes(e.id));
  const selectedAttractions = extraAttractions.filter(e => state.attractions.includes(e.id));
  const selectedOrgOptions = organizationalOptions.filter(e => (state.orgOptions || []).includes(e.id));

  const totalPizzas = pizzas.reduce((sum, p) => sum + (state.pizzaQty[p.id] || 0), 0);
  const guestCount = state.adults + state.kids;
  const recommendedPizzas = Math.max(1, Math.ceil(guestCount / 2.5));

  // Build plain-text summary for copying
  const buildSummaryText = () => {
    const lines: string[] = ["=== Konfiguracja imprezy — Pizzeria oSielsko ===", ""];
    if (pt) lines.push(`Typ: ${pt.label}`);
    if (state.eventName) lines.push(`Okazja: ${state.eventName}`);
    if (state.date) lines.push(`Data: ${state.date}`);
    if (state.time) lines.push(`Godzina: ${state.time}`);
    lines.push(`Goście: ${state.adults} dorosłych${state.kids > 0 ? `, ${state.kids} dzieci` : ""}`);
    if (dur) lines.push(`Czas: ${dur.label}`);
    if (spot && spot.id !== "none") lines.push(`Miejsce: ${spot.label}`);
    if (delivery && delivery.id !== "on-site") lines.push(`Tryb: ${delivery.label}`);
    if (budget) lines.push(`Poziom: ${budget.label}`);
    if (guestChar) lines.push(`Charakter: ${guestChar.label}`);

    if (pizzaLines.length > 0) {
      lines.push("", "--- Pizze ---");
      pizzaLines.forEach(p => lines.push(`  ${p.name} × ${state.pizzaQty[p.id]} = ${p.price * state.pizzaQty[p.id]!} zł`));
    }
    if (starterLines.length > 0) {
      lines.push("", "--- Dodatki ---");
      starterLines.forEach(s => lines.push(`  ${s.name} × ${state.starterQty[s.id]} = ${s.price * state.starterQty[s.id]!} zł`));
    }
    if (drinkLines.length > 0) {
      lines.push("", "--- Napoje ---");
      drinkLines.forEach(d => lines.push(`  ${d.name} × ${state.drinkQty[d.id]} = ${d.price * state.drinkQty[d.id]!} zł`));
    }

    lines.push("", `SZACUNKOWY KOSZT: ${total} zł`);
    lines.push("", "To orientacyjna wycena. Skontaktuj się z nami, aby potwierdzić termin i szczegóły.");
    return lines.join("\n");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="card-warm p-6 lg:p-8">
      <h3 className="font-display text-lg font-bold text-foreground mb-4">Podsumowanie</h3>

      {/* Basic info */}
      <div className="space-y-1 mb-4 pb-4 border-b border-border/40">
        {pt && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Typ:</span> {pt.label}</p>}
        {state.eventName && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Okazja:</span> {state.eventName}</p>}
        {state.date && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Data:</span> {state.date}</p>}
        {state.time && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Godzina:</span> {state.time}</p>}
        <p className="font-body text-sm text-foreground/70">
          <span className="font-semibold text-foreground">Goście:</span> {state.adults} dorosłych{state.kids > 0 ? `, ${state.kids} dzieci` : ""}
        </p>
        {dur && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Czas:</span> {dur.label}</p>}
        {spot && spot.id !== "none" && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Miejsce:</span> {spot.label}</p>}
        {delivery && delivery.id !== "on-site" && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Tryb:</span> {delivery.label}</p>}
        {budget && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Poziom:</span> {budget.label}</p>}
        {guestChar && <p className="font-body text-sm text-foreground/70"><span className="font-semibold text-foreground">Charakter:</span> {guestChar.label}</p>}
      </div>

      {/* Pizza recommendation indicator */}
      {guestCount > 0 && totalPizzas > 0 && (
        <div className={`mb-3 px-3 py-2 rounded-xl text-xs font-body font-semibold ${
          totalPizzas < recommendedPizzas
            ? "bg-amber-50 text-amber-700 border border-amber-200"
            : totalPizzas <= recommendedPizzas + 2
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-blue-50 text-blue-700 border border-blue-200"
        }`}>
          {totalPizzas < recommendedPizzas
            ? `⚠ Wybrano ${totalPizzas} z rekomendowanych ${recommendedPizzas} pizz`
            : totalPizzas <= recommendedPizzas + 2
              ? `✓ Idealna ilość pizz dla ${guestCount} gości`
              : `ℹ Wybrano ${totalPizzas} pizz — hojnie dla ${guestCount} gości!`
          }
        </div>
      )}

      {/* Line items */}
      <div className="space-y-0 mb-4 pb-4 border-b border-border/40">
        {pt && line(`Pakiet: ${pt.label}`, pt.price)}
        {dur && dur.price > 0 && line(`Czas trwania: ${dur.label}`, dur.price)}
        {spot && spot.price > 0 && line(`Miejsce: ${spot.label}`, spot.price)}
        {delivery && delivery.price > 0 && line(`Dowóz`, delivery.price)}

        {pizzaLines.length > 0 && (
          <div className="pt-2">
            <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Pizze</p>
            {pizzaLines.map(p => line(`${p.name} × ${state.pizzaQty[p.id]}`, p.price * state.pizzaQty[p.id]!))}
          </div>
        )}

        {starterLines.length > 0 && (
          <div className="pt-2">
            <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Dodatki</p>
            {starterLines.map(s => line(`${s.name} × ${state.starterQty[s.id]}`, s.price * state.starterQty[s.id]!))}
          </div>
        )}

        {drinkLines.length > 0 && (
          <div className="pt-2">
            <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Napoje</p>
            {drinkLines.map(d => line(`${d.name} × ${state.drinkQty[d.id]}`, d.price * state.drinkQty[d.id]!))}
          </div>
        )}

        {decor && decor.price > 0 && line(`Dekoracje: ${decor.label}`, decor.price)}
        {selectedPersonalization.map(e => line(e.label, e.price))}
        {state.cakeService && line("Serwis własnego tortu", cakeServicePrice)}
        {selectedAttractions.map(e => line(e.label, e.price))}
        {selectedOrgOptions.filter(o => o.price > 0).map(o => line(o.label, o.price))}
      </div>

      {/* Total */}
      <div className={`flex justify-between items-baseline rounded-xl px-3 py-2 -mx-3 transition-colors ${flash ? "animate-price-flash" : ""}`}>
        <span className="font-display text-base font-bold text-foreground">Szacunkowy koszt</span>
        <span className="font-data text-2xl font-bold text-primary transition-all duration-300">{total} zł</span>
      </div>

      <p className="font-body text-xs text-muted-foreground mt-3 leading-relaxed">
        To orientacyjna wycena. Finalne potwierdzenie może zależeć od terminu i dostępności.
      </p>

      {/* Copy / Share */}
      <div className="flex gap-2 mt-4">
        <button
          type="button"
          onClick={handleCopy}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/60 bg-card font-body text-sm font-semibold text-foreground/70 hover:border-primary/40 hover:text-primary transition-all"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Skopiowano!" : "Kopiuj podsumowanie"}
        </button>
      </div>

      {/* Stripe CTA */}
      <button
        disabled
        className="w-full mt-4 py-4 rounded-2xl font-body font-bold text-base bg-primary/20 text-primary cursor-not-allowed transition-colors"
      >
        Zapłać online (wkrótce)
      </button>
      <p className="font-body text-xs text-center text-muted-foreground mt-2">
        Płatność online zostanie uruchomiona w kolejnej wersji
      </p>
    </div>
  );
};

export default OrderSummary;
