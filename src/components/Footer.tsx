import { useState } from "react";
import logoImg from "@/assets/logo.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1 - Logo */}
          <div>
            <img
              src={logoImg}
              alt="Logo Pizzeria Osielsko"
              className="w-48 mb-3 invert"
            />
            <p className="font-body text-sm text-background/60 mb-4">
              Autentyczna włoska pizza z pieca opalanego drewnem
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm font-body" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/pizzeriaosielsko/" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm font-body" aria-label="Instagram">Instagram</a>
              <a href="https://www.tiktok.com/@pizzeria_osielsko" target="_blank" rel="noopener noreferrer" className="text-background/40 hover:text-background transition-colors text-sm font-body" aria-label="TikTok">TikTok</a>
            </div>
          </div>

          {/* Col 2 - Nav */}
          <div>
            <h4 className="font-subhead text-lg font-semibold text-background mb-4">Nawigacja</h4>
            <nav className="space-y-2">
              {["#hero|Start", "#menu|Menu", "#eventy|Eventy", "#vouchery|Vouchery", "#historia|Historia", "#kontakt|Kontakt"].map((item) => {
                const [href, label] = item.split("|");
                return (
                  <button key={href} onClick={() => scrollTo(href)} className="block font-body text-sm text-background/60 hover:text-background transition-colors">
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h4 className="font-subhead text-lg font-semibold text-background mb-4">Kontakt</h4>
            <div className="space-y-2 font-body text-sm text-background/60">
              <p>Akacjowa 2, 86-031 Osielsko</p>
              <p>+48 500 384 100</p>
              <p>pizzasielsko@gmail.com</p>
            </div>
          </div>

          {/* Col 4 - Newsletter */}
          <div>
            <h4 className="font-subhead text-lg font-semibold text-background mb-4">Newsletter</h4>
            <p className="font-body text-sm text-background/60 mb-4">
              Zapisz się i bądź na bieżąco z nowościami i promocjami.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Zapisano! (demo)"); setEmail(""); }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Twój email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-xl bg-background/10 border border-background/20 font-body text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary text-sm py-2 px-4">Zapisz się</button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/40">
            © 2025 Pizzeria Osielsko. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4 font-body text-xs text-background/40">
            <a href="#" className="hover:text-background transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-background transition-colors">Regulamin</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
