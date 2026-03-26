import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { faqCategories } from "@/lib/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Show first 2 questions from first 4 categories on homepage
const homeFaqs = faqCategories
  .slice(0, 4)
  .flatMap((c) => c.questions.slice(0, 2));

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
          {homeFaqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-warm px-6 border-none"
            >
              <AccordionTrigger className="font-subhead text-base font-semibold text-foreground hover:no-underline text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                <p>{faq.a}</p>
                {faq.link && (
                  <Link
                    to={faq.link.to}
                    className="inline-flex items-center gap-1.5 mt-3 text-primary font-semibold text-sm hover:underline"
                  >
                    {faq.link.label} →
                  </Link>
                )}
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
