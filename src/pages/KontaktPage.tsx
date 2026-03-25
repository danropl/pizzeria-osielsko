import { useState } from "react";
import Navbar from "@/components/Navbar";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileBottomBar from "@/components/MobileBottomBar";
import ReservationModal from "@/components/ReservationModal";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
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
