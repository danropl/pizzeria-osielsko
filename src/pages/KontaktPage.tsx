import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileBottomBar from "@/components/MobileBottomBar";
import ReservationModal from "@/components/ReservationModal";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import AnimatedSection from "@/components/AnimatedSection";
import { Helmet } from "react-helmet-async";

const KontaktPage = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Kontakt – Pizzeria oSielsko</title>
        <meta name="description" content="Skontaktuj się z Pizzerią oSielsko. Adres, telefon, godziny otwarcia i mapa dojazdu." />
      </Helmet>
      <Navbar onOpenReservation={() => setReservationOpen(true)} />
      <main className="pt-[76px]">
        <KontaktSection />

        {/* Cross-linking CTA */}
        <section className="bg-bg-dark section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Co jeszcze możemy dla Ciebie zrobić?
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/vouchery" className="card-warm p-6 text-center hover:border-primary/30 transition-colors group">
                <span className="text-2xl mb-2 block">🎁</span>
                <h3 className="font-subhead text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Kup voucher</h3>
                <p className="font-body text-xs text-muted-foreground">Idealny prezent na każdą okazję</p>
              </Link>
              <Link to="/konfigurator-imprez" className="card-warm p-6 text-center hover:border-primary/30 transition-colors group">
                <span className="text-2xl mb-2 block">🎉</span>
                <h3 className="font-subhead text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Skonfiguruj imprezę</h3>
                <p className="font-body text-xs text-muted-foreground">Zaplanuj urodziny lub event</p>
              </Link>
              <Link to="/faq" className="card-warm p-6 text-center hover:border-primary/30 transition-colors group">
                <span className="text-2xl mb-2 block">❓</span>
                <h3 className="font-subhead text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">FAQ</h3>
                <p className="font-body text-xs text-muted-foreground">Odpowiedzi na częste pytania</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <BackToTop />
      <MobileBottomBar onOpenReservation={() => setReservationOpen(true)} />
      <ReservationModal open={reservationOpen} onClose={() => setReservationOpen(false)} />
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};

export default KontaktPage;
