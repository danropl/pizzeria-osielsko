import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.svg";
import { ORDER_URL } from "@/lib/constants";

interface Props {
  onOpenPrivacy: () => void;
}

const Footer = ({ onOpenPrivacy }: Props) => {
  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logoImg} alt="Pizzeria oSielsko – logo" className="w-48 mb-3 invert" />
            <p className="text-sm text-background/60 mb-4">
              Autentyczna włoska pizza z pieca opalanego drewnem
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm" aria-label="Instagram">Instagram</a>
              <a href="https://www.tiktok.com/@pizzeria_osielsko" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm" aria-label="TikTok">TikTok</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Nawigacja</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-background/60 hover:text-background transition-colors">Start</Link>
              <Link to="/eventy" className="block text-sm text-background/60 hover:text-background transition-colors">Eventy</Link>
              <Link to="/vouchery" className="block text-sm text-background/60 hover:text-background transition-colors">Vouchery</Link>
              <a href="/#kontakt" className="block text-sm text-background/60 hover:text-background transition-colors">Kontakt</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>Akacjowa 2, 86-031 Osielsko</p>
              <p>+48 500 384 100</p>
              <p>pizzasielsko@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Zamów online</h4>
            <p className="text-sm text-background/60 mb-4">
              Złóż zamówienie przez nasz system online i odbierz gorącą pizzę!
            </p>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6 inline-block">
              🍕 Zamów teraz
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © 2026 Pizzeria oSielsko. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4 text-xs text-background/40">
            <button onClick={onOpenPrivacy} className="hover:text-background transition-colors">Polityka prywatności</button>
            <span className="text-background/20">|</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-[11px] text-background/30">
            Realizacja{" "}
            <a href="https://emanager.pro/" target="_blank" rel="noopener noreferrer" className="hover:text-background/60 transition-colors underline underline-offset-2">
              EMANAGER.PRO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
