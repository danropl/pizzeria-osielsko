import logoImg from "@/assets/logo.svg";
import { ORDER_URL } from "@/lib/constants";

interface Props {
  onOpenPrivacy: () => void;
}

const Footer = ({ onOpenPrivacy }: Props) => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logoImg} alt="Pizzeria Osielsko – logo" className="w-48 mb-3 invert" />
            <p className="font-body text-sm text-background/60 mb-4">
              Autentyczna włoska pizza z pieca opalanego drewnem
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm font-body" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm font-body" aria-label="Instagram">Instagram</a>
              <a href="https://www.tiktok.com/@pizzeria_osielsko" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm font-body" aria-label="TikTok">TikTok</a>
            </div>
          </div>

          <div>
            <h4 className="font-subhead text-lg font-semibold text-background mb-4">Nawigacja</h4>
            <nav className="space-y-2">
              {[
                { href: "#hero", label: "Start" },
                { href: "#eventy", label: "Eventy" },
                { href: "#vouchery", label: "Vouchery" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((item) => (
                <button key={item.href} onClick={() => scrollTo(item.href)} className="block font-body text-sm text-background/60 hover:text-background transition-colors">
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-subhead text-lg font-semibold text-background mb-4">Kontakt</h4>
            <div className="space-y-2 font-body text-sm text-background/60">
              <p>Akacjowa 2, 86-031 Osielsko</p>
              <p>+48 500 384 100</p>
              <p>pizzasielsko@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-subhead text-lg font-semibold text-background mb-4">Zamów online</h4>
            <p className="font-body text-sm text-background/60 mb-4">
              Złóż zamówienie przez nasz system online i odbierz gorącą pizzę!
            </p>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6 inline-block">
              🍕 Zamów teraz
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/40">
            © 2025 Pizzeria Osielsko. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4 font-body text-xs text-background/40">
            <button onClick={onOpenPrivacy} className="hover:text-background transition-colors">Polityka prywatności</button>
            <span className="text-background/20">|</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
