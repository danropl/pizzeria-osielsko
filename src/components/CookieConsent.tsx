import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onOpenPrivacy: () => void;
}

const CookieConsent = ({ onOpenPrivacy }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setTimeout(() => setShow(true), 2000);
  }, []);

  const accept = () => { localStorage.setItem("cookies-accepted", "true"); setShow(false); };
  const reject = () => { localStorage.setItem("cookies-accepted", "false"); setShow(false); };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[999] bg-primary/95 backdrop-blur-lg p-4 sm:p-5"
        >
          <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">
              🍪 Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z naszej strony.{" "}
              <button
                onClick={onOpenPrivacy}
                className="underline text-primary-foreground/90 hover:text-primary-foreground transition-colors font-semibold"
              >
                Polityka prywatności
              </button>
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={accept} className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-foreground text-primary font-body font-bold text-xs rounded-xl transition-all duration-300 hover:bg-primary-foreground/90">Akceptuję</button>
              <button onClick={reject} className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary-foreground/30 text-primary-foreground/70 font-body font-bold text-xs rounded-xl transition-all duration-300 hover:bg-primary-foreground/10 hover:text-primary-foreground">Tylko niezbędne</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
