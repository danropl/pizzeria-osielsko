import { Sparkles } from "lucide-react";
import { getRecommendedSet, pizzas, starters, drinks } from "@/lib/partyConfiguratorData";

interface Props {
  guestCount: number;
  partyType: string;
  onApply: (set: ReturnType<typeof getRecommendedSet>) => void;
}

const RecommendationBlock = ({ guestCount, partyType, onApply }: Props) => {
  if (!partyType || guestCount < 1) return null;

  const set = getRecommendedSet(guestCount, partyType);

  const pizzaNames = set.pizzas.map(p => {
    const found = pizzas.find(x => x.id === p.id);
    return found ? `${found.name} ×${p.qty}` : "";
  }).filter(Boolean);

  const starterNames = set.starters.map(s => {
    const found = starters.find(x => x.id === s.id);
    return found ? `${found.name} ×${s.qty}` : "";
  }).filter(Boolean);

  const drinkNames = set.drinks.map(d => {
    const found = drinks.find(x => x.id === d.id);
    return found ? `${found.name} ×${d.qty}` : "";
  }).filter(Boolean);

  return (
    <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-primary" />
        <h4 className="font-display text-base font-bold text-foreground">Nasza rekomendacja</h4>
      </div>
      <p className="font-body text-sm text-foreground/70 mb-3">
        Dla {guestCount} gości sugerujemy następujący zestaw:
      </p>
      <div className="space-y-1.5 mb-4">
        {pizzaNames.length > 0 && (
          <p className="font-body text-sm text-foreground">
            <span className="font-semibold">🍕 Pizze:</span> {pizzaNames.join(", ")}
          </p>
        )}
        {starterNames.length > 0 && (
          <p className="font-body text-sm text-foreground">
            <span className="font-semibold">🥖 Dodatki:</span> {starterNames.join(", ")}
          </p>
        )}
        {drinkNames.length > 0 && (
          <p className="font-body text-sm text-foreground">
            <span className="font-semibold">🥤 Napoje:</span> {drinkNames.join(", ")}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={() => onApply(set)}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-bold transition-all hover:shadow-md hover:bg-[hsl(var(--primary-dark))]"
      >
        <Sparkles className="w-4 h-4" />
        Dodaj rekomendowany zestaw
      </button>
    </div>
  );
};

export default RecommendationBlock;
