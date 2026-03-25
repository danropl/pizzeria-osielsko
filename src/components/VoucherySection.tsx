import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { vouchers } from "@/lib/vouchersData";

const VoucherySection = () => (
  <section id="vouchery" className="bg-background section-padding">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-3">Prezenty</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
          Vouchery Podarunkowe
        </h2>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-6">
        {vouchers.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
            <Link to="/vouchery" className="card-warm overflow-hidden flex flex-col h-full block">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={v.image} alt={`Voucher ${v.title} – Pizzeria oSielsko`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground flex-1">{v.contents}</p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <Link to="/vouchery" className="btn-primary text-base px-8 py-4">🎁 Zobacz wszystkie vouchery</Link>
      </AnimatedSection>
    </div>
  </section>
);

export default VoucherySection;
