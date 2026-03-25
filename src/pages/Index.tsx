import { useState } from "react";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";
import GallerySection from "@/components/GallerySection";
import EventySection from "@/components/EventySection";
import VoucherySection from "@/components/VoucherySection";
import OpinieSection from "@/components/OpinieSection";
import FAQSection from "@/components/FAQSection";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import MobileBottomBar from "@/components/MobileBottomBar";
import MediterraneanDecorations from "@/components/MediterraneanDecorations";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import ReservationModal from "@/components/ReservationModal";
import { Helmet } from "react-helmet-async";

const DOMAIN = "https://pizzeriaosielsko.pl";

const jsonLdRestaurant = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Pizzeria oSielsko",
  "url": DOMAIN,
  "telephone": "+48500384100",
  "email": "pizzasielsko@gmail.com",
  "description": "Autentyczna włoska pizzeria z piecem opalanym drewnem w Osielsku koło Bydgoszczy. Pizza neapolitańska, eventy, warsztaty, vouchery podarunkowe.",
  "servesCuisine": "Italian",
  "priceRange": "$$",
  "image": `${DOMAIN}/og-image.jpg`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Akacjowa 2",
    "addressLocality": "Osielsko",
    "postalCode": "86-031",
    "addressRegion": "kujawsko-pomorskie",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.1844016,
    "longitude": 18.0846522
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday"], "opens": "00:00", "closes": "00:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday"], "opens": "13:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday","Saturday"], "opens": "13:00", "closes": "22:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "13:00", "closes": "21:00" }
  ],
  "sameAs": [
    "https://www.facebook.com/pizzeriaosielsko/",
    "https://www.instagram.com/pizzeriaosielsko/",
    "https://www.tiktok.com/@pizzeria_osielsko"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120",
    "bestRating": "5"
  }
};

const jsonLdEvents = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Event", "name": "Urodziny Mały Pizzaiolo", "description": "Wyjątkowe urodziny w stylu włoskim dla najmłodszych w Pizzerii Osielsko.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
    { "@type": "Event", "name": "Warsztaty Robienia Pizzy", "description": "Naucz się wyrabiać ciasto i komponować smaki jak prawdziwy pizzaiolo.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
    { "@type": "Event", "name": "Randka w Kuchni", "description": "Romantyczny wieczór dla dwojga przy wspólnym gotowaniu w Pizzerii Osielsko.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
    { "@type": "Event", "name": "Letnie Kino z Pizzą", "description": "Seans filmowy pod gwiazdami z gorącą pizzą w ręku.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
    { "@type": "Event", "name": "Pizza Challenge", "description": "Kto zje najszybciej? Rywalizacja w dobrym stylu w Pizzerii Osielsko.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
    { "@type": "Event", "name": "Karaoke Italiano Night", "description": "Włoskie przeboje i pizza do późna w nocy.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
    { "@type": "Event", "name": "Pizza & Wino z Sommelierem", "description": "Degustacja win dobranych do pizzy przez eksperta.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
    { "@type": "Event", "name": "Voucher Experience", "description": "Podaruj komuś niezapomniane przeżycie w Pizzerii Osielsko.", "organizer": { "@type": "Organization", "name": "Pizzeria oSielsko" }, "location": { "@type": "Place", "name": "Pizzeria oSielsko", "address": "Akacjowa 2, 86-031 Osielsko" }, "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode" },
  ]
};

const jsonLdProducts = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Product", "name": "Voucher – Randka w Kuchni", "description": "Romantyczny prezent dla pary — wspólne gotowanie w Pizzerii Osielsko.", "brand": { "@type": "Brand", "name": "Pizzeria oSielsko" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "PLN" } },
    { "@type": "Product", "name": "Voucher – Urodziny Pizzaiolo", "description": "Niezapomniane urodziny w klimacie włoskim w Pizzerii Osielsko.", "brand": { "@type": "Brand", "name": "Pizzeria oSielsko" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "PLN" } },
    { "@type": "Product", "name": "Voucher – Pizza & Wino z Sommelierem", "description": "Ekskluzywna degustacja win dobranych do pizzy przez eksperta.", "brand": { "@type": "Brand", "name": "Pizzeria oSielsko" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "PLN" } },
    { "@type": "Product", "name": "Voucher – Wieczór Karaoke", "description": "Zabawa z włoskimi klasykami i pyszną pizzą do późna w nocy.", "brand": { "@type": "Brand", "name": "Pizzeria oSielsko" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "PLN" } },
  ]
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Czy Pizzeria oSielsko organizuje urodziny dla dzieci?", "acceptedAnswer": { "@type": "Answer", "text": "Tak! Organizujemy wyjątkowe urodziny \u201eMały Pizzaiolo\u201D w stylu włoskim. Dzieci uczą się robić pizzę, dekorują ją samodzielnie, a potem wspólnie jedzą." } },
    { "@type": "Question", "name": "Jak zarezerwować stolik w Pizzerii Osielsko?", "acceptedAnswer": { "@type": "Answer", "text": "Rezerwację można zrobić telefonicznie pod numerem +48 500 384 100 lub wysyłając e-mail na pizzasielsko@gmail.com." } },
    { "@type": "Question", "name": "Czy można kupić voucher na warsztaty pizzy?", "acceptedAnswer": { "@type": "Answer", "text": "Tak! Oferujemy vouchery podarunkowe na warsztaty robienia pizzy, randkę w kuchni, degustację pizza & wino oraz wieczór karaoke. Dostępne w formie kartki lub PDF." } },
    { "@type": "Question", "name": "Jakie eventy organizuje Pizzeria oSielsko?", "acceptedAnswer": { "@type": "Answer", "text": "Organizujemy m.in. urodziny Mały Pizzaiolo, warsztaty robienia pizzy, randki w kuchni, letnie kino z pizzą, Pizza Challenge, Karaoke Italiano Night, degustacje pizza & wino z sommelierem oraz Voucher Experience." } },
    { "@type": "Question", "name": "Czy pizza jest wypiekana w piecu opalanym drewnem?", "acceptedAnswer": { "@type": "Answer", "text": "Tak — każda pizza jest wypiekana w autentycznym piecu opalanym drewnem, rozgrzanym do 400°C." } },
    { "@type": "Question", "name": "Gdzie znajduje się Pizzeria oSielsko?", "acceptedAnswer": { "@type": "Answer", "text": "Restauracja mieści się przy ul. Akacjowej 2, 86-031 Osielsko, w pobliżu Bydgoszczy. Dysponujemy parkingiem i ogrodem." } },
    { "@type": "Question", "name": "Jakie są godziny otwarcia Pizzerii Osielsko?", "acceptedAnswer": { "@type": "Answer", "text": "Wtorek–czwartek i niedziela: 13:00–21:00, piątek–sobota: 13:00–22:00. Poniedziałki — zamknięte." } },
    { "@type": "Question", "name": "Czy Pizzeria oSielsko oferuje jedzenie na wynos?", "acceptedAnswer": { "@type": "Answer", "text": "Tak, oferujemy pizzę na wynos. Zamówienie można złożyć telefonicznie (+48 500 384 100) lub bezpośrednio w restauracji." } },
  ]
};

const Index = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="relative">
      <MediterraneanDecorations />

      <Helmet>
        <title>Pizzeria oSielsko – Autentyczna Pizza Włoska z Pieca | Zamów Online</title>
        <meta name="description" content="Pizzeria oSielsko – autentyczna włoska pizza z pieca opalanego drewnem. Naturalne składniki, eventy, warsztaty pizzy, vouchery. Zamów online lub zarezerwuj stolik. Osielsko k. Bydgoszczy." />
        <meta name="keywords" content="pizzeria Osielsko, pizza Osielsko, pizza Bydgoszcz, włoska restauracja Osielsko, pizza z pieca drewnianego, neapolitańska pizza, zamów pizzę Osielsko, eventy Osielsko, warsztaty pizzy, voucher pizzeria, urodziny dla dzieci pizzeria" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={`${DOMAIN}/`} />
        <meta name="geo.region" content="PL-KP" />
        <meta name="geo.placename" content="Osielsko, Bydgoszcz" />

        <meta property="og:type" content="restaurant" />
        <meta property="og:site_name" content="Pizzeria oSielsko" />
        <meta property="og:title" content="Pizzeria oSielsko – Autentyczna Pizza Włoska z Pieca Drewnianego" />
        <meta property="og:description" content="Prawdziwa pizza neapolitańska z pieca opalanego drewnem. Eventy, warsztaty, vouchery. Zamów online lub zarezerwuj stolik w Osielsku k. Bydgoszczy." />
        <meta property="og:image" content={`${DOMAIN}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pizzeria oSielsko – pizza z pieca opalanego drewnem" />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:locale" content="pl_PL" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pizzeria oSielsko – Autentyczna Pizza Włoska z Pieca" />
        <meta name="twitter:description" content="Prawdziwa pizza neapolitańska z pieca opalanego drewnem w Osielsku k. Bydgoszczy. Zamów online lub zarezerwuj stolik." />
        <meta name="twitter:image" content={`${DOMAIN}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="Pizzeria oSielsko – pizza z pieca opalanego drewnem" />

        <script type="application/ld+json">{JSON.stringify(jsonLdRestaurant)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdEvents)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdProducts)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFAQ)}</script>
      </Helmet>

      <div className="relative z-[2]">
        <Navbar onOpenReservation={() => setReservationOpen(true)} />
      </div>
      <main className="relative z-[2] flex flex-col gap-3 md:gap-5">
        <HeroSection />
        <HistoriaSection />
        <GallerySection />
        <EventySection />
        <VoucherySection />
        <OpinieSection />
        <FAQSection />
        <KontaktSection />
      </main>
      <div className="relative z-[2]">
        <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      </div>
      <BackToTop />
      <CookieConsent onOpenPrivacy={() => setPrivacyOpen(true)} />
      <MobileBottomBar onOpenReservation={() => setReservationOpen(true)} />
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ReservationModal open={reservationOpen} onClose={() => setReservationOpen(false)} />
    </div>
  );
};

export default Index;
