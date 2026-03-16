import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";
import MenuSection from "@/components/MenuSection";
import EventySection from "@/components/EventySection";
import VoucherySection from "@/components/VoucherySection";
import OpinieSection from "@/components/OpinieSection";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Pizzeria Osielsko",
  "url": "https://[DOMENA]",
  "telephone": "+48500384100",
  "email": "pizzasielsko@gmail.com",
  "description": "Autentyczna włoska pizzeria z piecem opalanym drewnem w Osielsku koło Bydgoszczy.",
  "servesCuisine": "Italian",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Akacjowa 2",
    "addressLocality": "Osielsko",
    "postalCode": "86-031",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.1844016,
    "longitude": 18.0846522
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "[GODZINA]", "closes": "[GODZINA]" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday","Saturday"], "opens": "[GODZINA]", "closes": "[GODZINA]" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "[GODZINA]", "closes": "[GODZINA]" }
  ],
  "hasMenu": "https://[DOMENA]/#menu",
  "sameAs": [
    "https://www.facebook.com/[PROFIL]",
    "https://www.instagram.com/[PROFIL]"
  ]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pizzeria Osielsko – Prawdziwa Włoska Pizza z Pieca Drewnianego | Zamów Online</title>
        <meta name="description" content="Pizzeria Osielsko – autentyczna włoska pizza wypiekana w piecu opalanym drewnem. Naturalne składniki, piec 400°C. Zamów online, zarezerwuj stolik, kup voucher. Osielsko k. Bydgoszczy." />
        <meta name="keywords" content="pizzeria Osielsko, pizza Osielsko, pizza Bydgoszcz okolice, włoska restauracja Osielsko, pizza z pieca drewnianego, neapolitańska pizza Bydgoszcz, zamów pizzę Osielsko" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://[DOMENA]/" />
        <meta name="geo.region" content="PL-KP" />
        <meta name="geo.placename" content="Osielsko, Bydgoszcz" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content="Pizzeria Osielsko – Prawdziwa Włoska Pizza z Pieca" />
        <meta property="og:description" content="Autentyczna pizza neapolitańska z pieca opalanego drewnem. Zamów online lub zarezerwuj stolik w Osielsku k. Bydgoszczy." />
        <meta property="og:image" content="https://[DOMENA]/og-image.jpg" />
        <meta property="og:url" content="https://[DOMENA]" />
        <meta property="og:locale" content="pl_PL" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <HistoriaSection />
        <MenuSection />
        <EventySection />
        <VoucherySection />
        <OpinieSection />
        <KontaktSection />
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
      <MobileBottomBar />
    </>
  );
};

export default Index;
