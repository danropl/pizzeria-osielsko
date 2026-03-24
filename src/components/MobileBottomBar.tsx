import { ORDER_URL } from "@/lib/constants";

interface Props {
  onOpenReservation: () => void;
}

const MobileBottomBar = ({ onOpenReservation }: Props) => (
  <div className="fixed bottom-0 left-0 right-0 z-[998] lg:hidden bg-primary/95 backdrop-blur-lg border-t border-primary-foreground/10 px-4 py-2 flex gap-2">
    <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-foreground text-primary font-body font-bold text-sm rounded-xl text-center">🍕 Zamów</a>
    <button onClick={onOpenReservation} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-primary-foreground/30 text-primary-foreground/80 font-body font-bold text-sm rounded-xl hover:bg-primary-foreground/10 hover:text-primary-foreground text-center">📞 Rezerwacja</button>
  </div>
);

export default MobileBottomBar;
