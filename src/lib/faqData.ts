export interface FAQQuestion {
  q: string;
  a: string;
  link?: { label: string; to: string };
}

export interface FAQCategory {
  id: string;
  emoji: string;
  title: string;
  questions: FAQQuestion[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "rezerwacje",
    emoji: "📞",
    title: "Rezerwacje i wizyty",
    questions: [
      {
        q: "Czy trzeba rezerwować stolik?",
        a: "Rezerwacja nie jest obowiązkowa, ale zdecydowanie ją polecamy — szczególnie w weekendy i wieczorami. Dzięki niej mamy pewność, że Twój stolik będzie gotowy na Twoje przybycie.",
        link: { label: "Zarezerwuj stolik", to: "/kontakt" },
      },
      {
        q: "Jak zarezerwować stolik?",
        a: "Rezerwację można zrobić telefonicznie pod numerem +48 500 384 100 lub wysyłając wiadomość e-mail na adres pizzasielsko@gmail.com. Możesz też skorzystać z formularza kontaktowego na naszej stronie.",
        link: { label: "Przejdź do kontaktu", to: "/kontakt" },
      },
      {
        q: "Jak zarezerwować stolik dla większej grupy?",
        a: "Dla grup powyżej 8 osób prosimy o kontakt telefoniczny lub mailowy z wyprzedzeniem. Chętnie przygotujemy odpowiedni stolik i dopasujemy menu do Państwa potrzeb.",
        link: { label: "Skonfiguruj imprezę", to: "/konfigurator-imprez" },
      },
      {
        q: "Gdzie znajduje się Pizzeria oSielsko?",
        a: "Nasza restauracja mieści się przy ul. Akacjowej 2, 86-031 Osielsko, w pobliżu Bydgoszczy. Dysponujemy parkingiem i ogrodem, w którym mile widziane są również zwierzęta.",
        link: { label: "Zobacz mapę i dane kontaktowe", to: "/kontakt" },
      },
      {
        q: "Jakie są godziny otwarcia?",
        a: "Wtorek–czwartek i niedziela: 13:00–21:00, piątek–sobota: 13:00–22:00. W poniedziałki restauracja jest zamknięta.",
      },
      {
        q: "Jak skontaktować się z pizzerią?",
        a: "Najszybciej zadzwoń pod numer +48 500 384 100. Możesz też napisać e-mail na pizzasielsko@gmail.com lub odwiedzić nas osobiście przy ul. Akacjowej 2 w Osielsku.",
        link: { label: "Strona kontaktowa", to: "/kontakt" },
      },
    ],
  },
  {
    id: "vouchery",
    emoji: "🎁",
    title: "Vouchery",
    questions: [
      {
        q: "Czy można kupić voucher jako prezent?",
        a: "Oczywiście! Vouchery to idealny prezent na urodziny, rocznicę, święta czy po prostu jako miły gest. Przygotujemy go tak, żeby wyglądał wyjątkowo.",
        link: { label: "Przejdź do sklepu z voucherami", to: "/vouchery" },
      },
      {
        q: "Czy voucher może być elektroniczny?",
        a: "Tak — voucher możemy przygotować w formie elektronicznej (PDF) lub eleganckiej kartki papierowej. Ustalamy to indywidualnie przy zamówieniu.",
        link: { label: "Zamów voucher online", to: "/vouchery" },
      },
      {
        q: "Jak zamówić voucher?",
        a: "Najłatwiej przez nasz sklep z voucherami — wybierz rodzaj, wartość i formę, dodaj do koszyka i uzupełnij dane. Możesz też skontaktować się z nami telefonicznie (+48 500 384 100) lub mailowo.",
        link: { label: "Otwórz sklep z voucherami", to: "/vouchery" },
      },
      {
        q: "Czy voucher ma termin ważności?",
        a: "Szczegóły dotyczące ważności ustalamy indywidualnie. Skontaktuj się z nami, a dobierzemy najlepsze rozwiązanie.",
        link: { label: "Zapytaj o szczegóły", to: "/kontakt" },
      },
      {
        q: "Czy można ustalić indywidualną wartość vouchera?",
        a: "Tak — w naszym sklepie możesz wybrać jedną z gotowych wartości (100, 150, 200 lub 300 zł) lub wpisać własną kwotę dopasowaną do Twoich potrzeb.",
        link: { label: "Wybierz wartość vouchera", to: "/vouchery" },
      },
      {
        q: "Czy można kupić voucher na warsztaty pizzy?",
        a: "Tak! Oferujemy vouchery podarunkowe na warsztaty robienia pizzy, randkę w kuchni, degustację pizza & wino oraz wieczór karaoke.",
        link: { label: "Zobacz dostępne vouchery", to: "/vouchery" },
      },
      {
        q: "Jak działa odbiór lub realizacja voucheru?",
        a: "Voucher elektroniczny otrzymasz mailem po złożeniu zamówienia. Voucher papierowy odbierzesz w restauracji. Realizacja następuje po okazaniu voucheru podczas wizyty.",
      },
    ],
  },
  {
    id: "eventy",
    emoji: "🎉",
    title: "Eventy i atrakcje",
    questions: [
      {
        q: "Jakie eventy organizuje Pizzeria oSielsko?",
        a: "Organizujemy m.in. urodziny Mały Pizzaiolo, warsztaty robienia pizzy, randki w kuchni, letnie kino z pizzą, Pizza Challenge, Karaoke Italiano Night, degustacje pizza & wino z sommelierem oraz Voucher Experience.",
        link: { label: "Zobacz nasze eventy", to: "/eventy" },
      },
      {
        q: "Czy Pizzeria oSielsko organizuje urodziny dla dzieci?",
        a: 'Tak! Organizujemy wyjątkowe urodziny „Mały Pizzaiolo" w stylu włoskim. Dzieci uczą się robić pizzę, dekorują ją samodzielnie, a potem wspólnie jedzą.',
        link: { label: "Skonfiguruj urodziny", to: "/konfigurator-imprez" },
      },
      {
        q: "Czy można zorganizować event prywatny?",
        a: "Tak — organizujemy wydarzenia prywatne, firmowe i okolicznościowe. Skontaktuj się z nami, a wspólnie zaplanujemy event dopasowany do Twoich potrzeb.",
        link: { label: "Skonfiguruj imprezę", to: "/konfigurator-imprez" },
      },
      {
        q: "Dla ilu osób można przygotować atrakcję?",
        a: "Wielkość grupy ustalamy indywidualnie w zależności od rodzaju wydarzenia. Organizujemy zarówno kameralne spotkania dla kilku osób, jak i większe imprezy grupowe.",
        link: { label: "Sprawdź w konfiguratorze", to: "/konfigurator-imprez" },
      },
      {
        q: "Czy można zgłosić alergie lub preferencje żywieniowe?",
        a: "Oczywiście — przy planowaniu eventu lub rezerwacji możesz poinformować nas o alergiach i preferencjach. Dostosujemy menu tak, aby każdy gość mógł komfortowo zjeść.",
        link: { label: "Skontaktuj się z nami", to: "/kontakt" },
      },
    ],
  },
  {
    id: "konfigurator",
    emoji: "🛠️",
    title: "Konfigurator imprez",
    questions: [
      {
        q: "Jak działa konfigurator imprez?",
        a: "Konfigurator prowadzi Cię krok po kroku — wybierasz typ imprezy, liczbę osób, pizze, napoje, dekoracje i dodatki. Na bieżąco widzisz podsumowanie i szacunkowy koszt.",
        link: { label: "Otwórz konfigurator", to: "/konfigurator-imprez" },
      },
      {
        q: "Czy konfigurator pokazuje realne ceny?",
        a: "Konfigurator zawiera orientacyjne ceny pozycji z naszego menu. Ostateczna wycena zależy od indywidualnych ustaleń — skontaktuj się z nami po wygenerowaniu podsumowania.",
      },
      {
        q: "Czy mogę zaplanować imprezę urodzinową w konfiguratorze?",
        a: "Tak — konfigurator obsługuje urodziny dla dzieci i dorosłych, imprezy firmowe, spotkania prywatne i inne okazje. Wybierz typ imprezy w pierwszym kroku.",
        link: { label: "Zaplanuj imprezę", to: "/konfigurator-imprez" },
      },
    ],
  },
  {
    id: "zamowienia",
    emoji: "🍕",
    title: "Zamówienia i oferta",
    questions: [
      {
        q: "Czy Pizzeria oSielsko oferuje jedzenie na wynos?",
        a: "Tak, oferujemy pizzę na wynos. Zamówienie można złożyć telefonicznie (+48 500 384 100) lub bezpośrednio w restauracji.",
      },
      {
        q: "Czy można zamówić online?",
        a: "Tak — zamówienie online możesz złożyć przez nasz system zamówień dostępny na stronie. Przycisk „Zamów online" znajdziesz w nawigacji.",
      },
      {
        q: "Czy pizza jest wypiekana w piecu opalanym drewnem?",
        a: "Tak — każda nasza pizza jest wypiekana w autentycznym piecu opalanym drewnem, rozgrzanym do 400°C. Dzięki temu ciasto zyskuje niepowtarzalny, lekko wędzony charakter i idealną chrupkość.",
      },
      {
        q: "Jak zapytać o ofertę specjalną?",
        a: "Zapoznaj się z naszymi aktualnymi pakietami na stronie oferty specjalnej. Jeśli potrzebujesz czegoś indywidualnego — skontaktuj się z nami.",
        link: { label: "Zobacz ofertę specjalną", to: "/oferta-specjalna" },
      },
    ],
  },
  {
    id: "organizacyjne",
    emoji: "ℹ️",
    title: "Informacje organizacyjne",
    questions: [
      {
        q: "Czy jest parking przy restauracji?",
        a: "Tak — przy restauracji znajduje się parking dla gości.",
      },
      {
        q: "Czy można przyjść ze zwierzęciem?",
        a: "Tak — w naszym ogrodzie mile widziane są zwierzęta domowe.",
      },
      {
        q: "Czy restauracja ma ogród / ogródek?",
        a: "Tak — dysponujemy ogrodem, w którym w sezonie letnim można zjeść posiłek na świeżym powietrzu.",
      },
    ],
  },
];
