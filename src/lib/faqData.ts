export interface FAQCategory {
  id: string;
  emoji: string;
  title: string;
  questions: { q: string; a: string }[];
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
      },
      {
        q: "Jak zarezerwować stolik?",
        a: "Rezerwację można zrobić telefonicznie pod numerem +48 500 384 100 lub wysyłając wiadomość e-mail na adres pizzasielsko@gmail.com. Możesz też skorzystać z formularza kontaktowego na naszej stronie.",
      },
      {
        q: "Gdzie znajduje się Pizzeria oSielsko?",
        a: "Nasza restauracja mieści się przy ul. Akacjowej 2, 86-031 Osielsko, w pobliżu Bydgoszczy. Dysponujemy parkingiem i ogrodem, w którym mile widziane są również zwierzęta.",
      },
      {
        q: "Jakie są godziny otwarcia?",
        a: "Wtorek–czwartek i niedziela: 13:00–21:00, piątek–sobota: 13:00–22:00. W poniedziałki restauracja jest zamknięta.",
      },
      {
        q: "Jak skontaktować się z pizzerią?",
        a: "Najszybciej zadzwoń pod numer +48 500 384 100. Możesz też napisać e-mail na pizzasielsko@gmail.com lub odwiedzić nas osobiście przy ul. Akacjowej 2 w Osielsku.",
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
      },
      {
        q: "Czy voucher może być elektroniczny?",
        a: "Tak — voucher możemy przygotować w formie elektronicznej (PDF) lub eleganckiej kartki papierowej. Ustalamy to indywidualnie przy zamówieniu.",
      },
      {
        q: "Jak zamówić voucher?",
        a: "Skontaktuj się z nami telefonicznie (+48 500 384 100) lub mailowo (pizzasielsko@gmail.com). Pomożemy wybrać odpowiedni rodzaj i ustalić szczegóły. Możesz też skorzystać z formularza na naszej stronie voucherów.",
      },
      {
        q: "Czy voucher ma termin ważności?",
        a: "Szczegóły dotyczące ważności ustalamy indywidualnie. Skontaktuj się z nami, a dobierzemy najlepsze rozwiązanie.",
      },
      {
        q: "Czy można ustalić indywidualną wartość vouchera?",
        a: "Tak — chętnie przygotujemy voucher o indywidualnej wartości lub zakresie dopasowanym do Twoich potrzeb. Wystarczy się z nami skontaktować.",
      },
      {
        q: "Czy można kupić voucher na warsztaty pizzy?",
        a: "Tak! Oferujemy vouchery podarunkowe na warsztaty robienia pizzy, randkę w kuchni, degustację pizza & wino oraz wieczór karaoke. Vouchery dostępne w formie eleganckiej kartki lub w wersji elektronicznej (PDF).",
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
      },
      {
        q: "Czy Pizzeria oSielsko organizuje urodziny dla dzieci?",
        a: 'Tak! Organizujemy wyjątkowe urodziny \u201eMały Pizzaiolo\u201D w stylu włoskim. Dzieci uczą się robić pizzę, dekorują ją samodzielnie, a potem wspólnie jedzą. Zapraszamy do kontaktu, aby ustalić szczegóły i zarezerwować termin.',
      },
      {
        q: "Czy można zorganizować event prywatny?",
        a: "Tak — organizujemy wydarzenia prywatne, firmowe i okolicznościowe. Skontaktuj się z nami, a wspólnie zaplanujemy event dopasowany do Twoich potrzeb.",
      },
      {
        q: "Dla ilu osób można przygotować atrakcję?",
        a: "Wielkość grupy ustalamy indywidualnie w zależności od rodzaju wydarzenia. Organizujemy zarówno kameralne spotkania dla kilku osób, jak i większe imprezy grupowe.",
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
        a: "Skontaktuj się z nami telefonicznie lub mailowo. Chętnie przedstawimy aktualną ofertę specjalną i pomożemy wybrać najlepszą opcję na Twoją okazję.",
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
