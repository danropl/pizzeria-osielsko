import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Start" },
  { href: "#menu", label: "Menu" },
  { href: "#eventy", label: "Eventy" },
  { href: "#vouchery", label: "Vouchery" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // scrollspy
      for (const link of [...navLinks].reverse()) {
        const el = document.querySelector(link.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-lg"
          : "bg-background/95 backdrop-blur-xl"
      }`}
      style={{ height: "72px" }}
    >
      <div className="container-custom h-full flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <button onClick={() => handleClick("#hero")} className="flex items-center gap-2 group" aria-label="Pizzeria Osielsko — strona główna">
          <span className="text-2xl">🔥</span>
          <span className="font-display text-xl font-bold text-primary">Pizzeria Osielsko</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative px-4 py-2 text-sm font-body font-medium rounded-xl transition-colors ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:[NUMER_TELEFONU]" className="btn-ghost text-sm py-2 px-4">
            📞 Rezerwacja
          </a>
          <a href="#menu" className="btn-primary text-sm py-2 px-4">
            Zamów online
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border/50 overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-2" aria-label="Nawigacja mobilna">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-left px-4 py-3 rounded-2xl font-body font-medium transition-colors ${
                    activeSection === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 mt-2">
                <a href="tel:[NUMER_TELEFONU]" className="btn-ghost text-sm py-2 px-4 flex-1 text-center">
                  📞 Rezerwacja
                </a>
                <a href="#menu" className="btn-primary text-sm py-2 px-4 flex-1 text-center" onClick={() => setMobileOpen(false)}>
                  Zamów online
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
