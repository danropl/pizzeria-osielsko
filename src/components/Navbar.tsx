import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.svg";
import { ORDER_URL } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Start", isHome: true },
  { href: "/eventy", label: "Eventy", isHome: false },
  { href: "/vouchery", label: "Vouchery", isHome: false },
  { href: "/oferta-specjalna", label: "Oferta", isHome: false },
  { href: "/#kontakt", label: "Kontakt", isHome: true },
];

interface Props {
  onOpenReservation: () => void;
}

const Navbar = ({ onOpenReservation }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (link: typeof navLinks[0]) => {
    if (link.href === "/") return location.pathname === "/";
    if (link.href.startsWith("/#")) return location.pathname === "/" ;
    return location.pathname === link.href;
  };

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileOpen(false);
    if (link.href === "/#kontakt") {
      if (location.pathname === "/") {
        document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#kontakt";
      }
    }
    // For Link-based navigation, the Link component handles it
  };

  const renderNavItem = (link: typeof navLinks[0], mobile = false) => {
    const classes = mobile
      ? `text-left px-4 py-3 rounded-xl font-body text-sm font-semibold uppercase tracking-[0.06em] transition-all duration-200 block w-full ${
          isActive(link)
            ? "text-primary bg-primary/8"
            : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
        }`
      : `relative px-5 py-2 text-[13px] font-body font-semibold uppercase tracking-[0.08em] rounded-lg transition-all duration-300 ${
          isActive(link)
            ? "text-primary"
            : "text-foreground/60 hover:text-foreground"
        }`;

    if (link.href === "/#kontakt") {
      return (
        <button
          key={link.href}
          onClick={() => handleNavClick(link)}
          className={classes}
        >
          {link.label}
          {!mobile && isActive(link) && (
            <motion.span
              layoutId="nav-underline"
              className="absolute bottom-0.5 left-5 right-5 h-[2px] bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            />
          )}
        </button>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => setMobileOpen(false)}
        className={classes}
      >
        {link.label}
        {!mobile && isActive(link) && (
          <motion.span
            layoutId="nav-underline"
            className="absolute bottom-0.5 left-5 right-5 h-[2px] bg-primary rounded-full"
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 bg-background ${
        scrolled
          ? "shadow-[0_1px_0_0_hsl(var(--border)/0.4),0_4px_20px_-4px_rgba(0,0,0,0.08)]"
          : ""
      }`}
      style={{ height: "76px" }}
    >
      <div className="container-custom h-full flex items-center justify-between px-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="Pizzeria oSielsko — strona główna"
        >
          <img
            src={logoImg}
            alt="Pizzeria oSielsko – logo"
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav links — centered */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5" aria-label="Nawigacja główna">
          {navLinks.map((link) => renderNavItem(link))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-body font-semibold uppercase tracking-[0.06em] text-foreground/70 border border-border/60 rounded-xl transition-all duration-300 hover:text-primary hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="text-sm">📞</span>
            Rezerwacja
          </button>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-body font-bold uppercase tracking-[0.06em] bg-primary text-primary-foreground rounded-xl transition-all duration-300 hover:bg-[hsl(var(--primary-dark))] hover:shadow-[0_4px_12px_-2px_hsl(var(--primary)/0.35)]"
          >
            Zamów online
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2 text-foreground/70 hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileOpen}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 z-[1001] bg-background border-t border-border shadow-xl"
          >
            <nav className="p-5 flex flex-col gap-1" aria-label="Nawigacja mobilna">
              {navLinks.map((link) => renderNavItem(link, true))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                <button
                  onClick={() => { setMobileOpen(false); onOpenReservation(); }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-body font-semibold uppercase tracking-[0.06em] text-foreground/70 border border-border/60 rounded-xl transition-all duration-300 hover:text-primary hover:border-primary/40"
                >
                  <span className="text-sm">📞</span>
                  Rezerwacja
                </button>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-[13px] font-body font-bold uppercase tracking-[0.06em] bg-primary text-primary-foreground rounded-xl transition-all duration-300 hover:bg-[hsl(var(--primary-dark))]"
                  onClick={() => setMobileOpen(false)}
                >
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
