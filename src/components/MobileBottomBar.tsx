interface Props {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
}

const MobileBottomBar = ({ onOpenReservation, onOpenOrder }: Props) => (
  <div className="fixed bottom-0 left-0 right-0 z-[998] lg:hidden bg-foreground/95 backdrop-blur-lg border-t border-background/10 px-4 py-2 flex gap-2">
    <button onClick={onOpenOrder} className="btn-primary flex-1 text-sm py-3 text-center">🍕 Zamów</button>
    <button onClick={onOpenReservation} className="btn-ghost flex-1 text-sm py-3 text-center border-background/30 text-background/70 hover:bg-background/10 hover:text-background">📞 Rezerwacja</button>
  </div>
);

export default MobileBottomBar;
