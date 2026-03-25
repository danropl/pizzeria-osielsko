import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Czy Pizzeria oSielsko organizuje urodziny dla dzieci?",
    answer:
      'Tak! Organizujemy wyjątkowe urodziny „Mały Pizzaiolo" w stylu włoskim. Dzieci uczą się robić pizzę, dekorują ją samodzielnie, a potem wspólnie jedzą. Zapraszamy do kontaktu, aby ustalić szczegóły i zarezerwować termin.',
  },
  {
    question: "Jak zarezerwować stolik w Pizzerii Osielsko?",
    answer:
      "Rezerwację można zrobić telefonicznie pod numerem +48 500 384 100 lub wysyłając wiadomość e-mail na adres pizzasielsko@gmail.com. Możesz też skorzystać z formularza kontaktowego na naszej stronie.",
  },
  {
    question: "Czy można kupić voucher na warsztaty pizzy?",
    answer:
      "Oczywiście! Oferujemy vouchery podarunkowe na warsztaty robienia pizzy, randkę w kuchni, degustację pizza & wino oraz wieczór karaoke. Vouchery dostępne w formie eleganckiej kartki lub w wersji elektronicznej (PDF).",
  },
  {
    question: "Jakie eventy organizuje Pizzeria oSielsko?",
    answer:
      "Organizujemy m.in. urodziny Mały Pizzaiolo, warsztaty robienia pizzy, randki w kuchni, letnie kino z pizzą, Pizza Challenge, Karaoke Italiano Night, degustacje pizza & wino z sommelierem oraz Voucher Experience.",
  },
  {
    question: "Czy pizza jest wypiekana w piecu opalanym drewnem?",
    answer:
      "Tak — każda nasza pizza jest wypiekana w autentycznym piecu opalanym drewnem, rozgrzanym do 400°C. Dzięki temu ciasto zyskuje niepowtarzalny, lekko wędzony charakter i idealną chrupkość.",
  },
  {
    question: "Gdzie znajduje się Pizzeria oSielsko?",
    answer:
      "Nasza restauracja mieści się przy ul. Akacjowej 2, 86-031 Osielsko, w pobliżu Bydgoszczy. Dysponujemy parkingiem i ogrodem, w którym mile widziane są również zwierzęta.",
  },
  {
    question: "Jakie są godziny otwarcia Pizzerii Osielsko?",
    answer:
      "Wtorek–czwartek i niedziela: 13:00–21:00, piątek–sobota: 13:00–22:00. W poniedziałki restauracja jest zamknięta.",
  },
  {
    question: "Czy Pizzeria oSielsko oferuje jedzenie na wynos?",
    answer:
      "Tak, oferujemy pizzę na wynos. Zamówienie można złożyć telefonicznie (+48 500 384 100) lub bezpośrednio w restauracji.",
  },
];

const FAQSection = () => (
  <section id="faq" className="bg-bg-dark section-padding">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">
          Pytania i odpowiedzi
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Często zadawane pytania
        </h2>
      </AnimatedSection>

      <AnimatedSection className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-warm px-6 border-none"
            >
              <AccordionTrigger className="font-subhead text-base font-semibold text-foreground hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>

      <AnimatedSection className="text-center mt-10">
        <Link to="/faq" className="btn-ghost text-sm px-6 py-3">
          Zobacz wszystkie pytania →
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
