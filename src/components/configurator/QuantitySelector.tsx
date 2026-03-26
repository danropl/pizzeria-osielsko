import { Minus, Plus } from "lucide-react";

interface Props {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({ value, onChange, min = 0, max = 99 }: Props) => (
  <div className="flex items-center gap-2">
    <button
      type="button"
      onClick={() => onChange(Math.max(min, value - 1))}
      disabled={value <= min}
      className="w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center text-foreground/60 hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      aria-label="Zmniejsz"
    >
      <Minus className="w-3.5 h-3.5" />
    </button>
    <span className="w-8 text-center font-data font-semibold text-foreground tabular-nums text-sm">
      {value}
    </span>
    <button
      type="button"
      onClick={() => onChange(Math.min(max, value + 1))}
      disabled={value >= max}
      className="w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center text-foreground/60 hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      aria-label="Zwiększ"
    >
      <Plus className="w-3.5 h-3.5" />
    </button>
  </div>
);

export default QuantitySelector;
