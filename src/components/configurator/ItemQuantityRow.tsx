import QuantitySelector from "./QuantitySelector";

interface Props {
  name: string;
  desc: string;
  price: number;
  qty: number;
  onChange: (v: number) => void;
}

const ItemQuantityRow = ({ name, desc, price, qty, onChange }: Props) => (
  <div className="flex items-center gap-4 py-3 border-b border-border/40 last:border-0">
    <div className="flex-1 min-w-0">
      <p className="font-body text-sm font-semibold text-foreground">{name}</p>
      <p className="font-body text-xs text-muted-foreground truncate">{desc}</p>
    </div>
    <span className="font-data text-sm font-semibold text-foreground/70 whitespace-nowrap">{price} zł</span>
    <QuantitySelector value={qty} onChange={onChange} />
    {qty > 0 && (
      <span className="font-data text-sm font-bold text-primary whitespace-nowrap w-16 text-right">
        {qty * price} zł
      </span>
    )}
  </div>
);

export default ItemQuantityRow;
