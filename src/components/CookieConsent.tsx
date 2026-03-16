import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
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
          className="fixed bottom-0 left-0 right-0 z-[999] bg-foreground/95 backdrop-blur-lg p-4"
        >
          <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/80">
              🍪 Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z naszej strony.
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={accept} className="btn-primary text-xs py-2 px-4">Akceptuj</button>
              <button onClick={reject} className="btn-ghost text-xs py-2 px-4 border-background/30 text-background/70 hover:bg-background/10 hover:text-background">Odrzuć</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
