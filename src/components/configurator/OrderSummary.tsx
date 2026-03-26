import type { PartyState } from "@/pages/KonfiguratorImprezPage";
import {
  partyTypes, durationOptions, spotOptions, pizzas, starters, drinks,
  decorationPackages, personalizationExtras, cakeServicePrice, extraAttractions,
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
  const pt = partyTypes.find(p => p.id === state.partyType);
  const dur = durationOptions.find(d => d.id === state.duration);
  const spot = spotOptions.find(s => s.id === state.spot);
  const decor = decorationPackages.find(d => d.id === state.decorationPackage);

  const pizzaLines = pizzas.filter(p => (state.pizzaQty[p.id] || 0) > 0);
  const starterLines = starters.filter(s => (state.starterQty[s.id] || 0) > 0);
  const drinkLines = drinks.filter(d => (state.drinkQty[d.id] || 0) > 0);

  const selectedPersonalization = personalizationExtras.filter(e => state.personalization.includes(e.id));
  const selectedAttractions = extraAttractions.filter(e => state.attractions.includes(e.id));

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
      </div>

      {/* Line items */}
      <div className="space-y-0 mb-4 pb-4 border-b border-border/40">
        {pt && line(`Pakiet: ${pt.label}`, pt.price)}
        {dur && dur.price > 0 && line(`Czas trwania: ${dur.label}`, dur.price)}
        {spot && spot.price > 0 && line(`Miejsce: ${spot.label}`, spot.price)}

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
      </div>

      {/* Total */}
      <div className="flex justify-between items-baseline">
        <span className="font-display text-base font-bold text-foreground">Szacunkowy koszt</span>
        <span className="font-data text-2xl font-bold text-primary">{total} zł</span>
      </div>

      <p className="font-body text-xs text-muted-foreground mt-3 leading-relaxed">
        To orientacyjna wycena. Finalne potwierdzenie może zależeć od terminu i dostępności.
      </p>

      {/* Stripe CTA */}
      <button
        disabled
        className="w-full mt-6 py-4 rounded-2xl font-body font-bold text-base bg-primary/20 text-primary cursor-not-allowed transition-colors"
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
