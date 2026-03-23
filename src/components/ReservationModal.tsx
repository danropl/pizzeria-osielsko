import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESERVATION_URL } from "@/lib/constants";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ReservationModal = ({ open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative bg-card rounded-3xl border border-border/50 w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden"
            style={{ boxShadow: "var(--shadow-hover)" }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border/30">
              <div>
                <h3 className="font-subhead text-lg font-semibold text-foreground">Zarezerwuj stolik</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">Pizzeria oSielsko</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Zamknij"
              >
                ✕
              </button>
            </div>

            {/* Iframe */}
            <div className="flex-1 min-h-[500px]">
              <iframe
                src={RESERVATION_URL}
                className="w-full h-full min-h-[500px] border-0"
                title="Rezerwacja stolika – Pizzeria oSielsko"
                loading="lazy"
              />
            </div>

            {/* Footer fallback */}
            <div className="p-4 border-t border-border/30 text-center">
              <p className="font-body text-xs text-muted-foreground mb-2">
                Problemy z formularzem? Zadzwoń lub zarezerwuj bezpośrednio:
              </p>
              <div className="flex gap-3 justify-center">
                <a href="tel:+48500384100" className="btn-ghost text-sm py-2 px-4">📞 Zadzwoń</a>
                <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                  Otwórz formularz →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
