import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORDER_URL } from "@/lib/constants";

interface Props {
  open: boolean;
  onClose: () => void;
}

const OrderModal = ({ open, onClose }: Props) => {
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
          className="fixed inset-0 z-[1001] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative bg-card rounded-3xl border border-border/50 w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
            style={{ boxShadow: "var(--shadow-hover)" }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border/30 flex-shrink-0">
              <div>
                <h3 className="font-subhead text-lg font-semibold text-foreground">🍕 Zamów online</h3>
                <p className="font-body text-sm text-muted-foreground mt-0.5">Pizzeria Osielsko – menu i zamówienia</p>
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
            <div className="flex-1 overflow-hidden">
              <iframe
                src={ORDER_URL}
                className="w-full h-full border-0"
                title="Menu zamówień – Pizzeria Osielsko"
                allow="payment"
              />
            </div>

            {/* Footer fallback */}
            <div className="p-3 sm:p-4 border-t border-border/30 text-center flex-shrink-0">
              <p className="font-body text-xs text-muted-foreground mb-2">
                Problemy z ładowaniem? Otwórz menu bezpośrednio:
              </p>
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6 inline-block">
                Otwórz w nowej karcie →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
