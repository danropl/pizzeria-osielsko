import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShoppingBag, Plus, Minus, X, ArrowRight, ArrowLeft, Gift, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MobileBottomBar from "@/components/MobileBottomBar";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import ReservationModal from "@/components/ReservationModal";
import { vouchers } from "@/lib/vouchersData";
import { useCartStore } from "@/lib/cartStore";

const DOMAIN = "https://pizzeriaosielsko.pl";

const VoucheryPage = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const {
    items, addItem, removeItem, updateQuantity, clearCart,
    checkoutStep, setCheckoutStep, formData, setFormData,
  } = useCartStore();
  const [addedId, setAddedId] = useState<string | null>(null);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const handleAdd = (voucher: typeof vouchers[0]) => {
    addItem(voucher);
    setAddedId(voucher.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("confirmation");
  };

  return (
    <>
      <Helmet>
        <title>Sklep z Voucherami – Pizzeria oSielsko | Prezent na każdą okazję</title>
        <meta name="description" content="Kup voucher podarunkowy online. Randka w Kuchni, warsztaty pizzy, degustacja wina. Dodaj do koszyka i zamów w Pizzerii oSielsko." />
        <link rel="canonical" href={`${DOMAIN}/vouchery`} />
      </Helmet>

      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="pt-[76px]">
        {/* Compact hero */}
        <section className="bg-bg-dark py-10 md:py-14">
          <div className="container-custom text-center max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-data text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                Sklep z voucherami
              </p>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                Podaruj wyjątkowe przeżycie
              </h1>
              <p className="font-body text-base text-foreground/60 leading-relaxed">
                Wybierz voucher, dodaj do koszyka i zamów — idealny prezent na każdą okazję.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Shop layout */}
        <section className="bg-background section-padding">
          <div className="container-custom px-4">
            <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-10 xl:gap-14">

              {/* Product grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-subhead text-lg font-semibold text-foreground">
                    Nasze vouchery ({vouchers.length})
                  </h2>
                  {totalItems > 0 && (
                    <button
                      onClick={() => document.getElementById("cart-panel")?.scrollIntoView({ behavior: "smooth" })}
                      className="lg:hidden inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Koszyk ({totalItems})
                    </button>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {vouchers.map((v) => {
                    const isAdded = addedId === v.id;
                    return (
                      <motion.div
                        key={v.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="card-warm overflow-hidden flex flex-col"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={v.image}
                            alt={`Voucher ${v.title}`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-start gap-2 mb-2">
                            <span className="text-xl">{v.emoji}</span>
                            <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                              {v.title}
                            </h3>
                          </div>
                          <p className="font-body text-sm text-foreground/60 leading-relaxed mb-3 flex-1">
                            {v.contents}
                          </p>
                          <div className="flex items-center gap-2 mb-4">
                            <Gift className="w-3.5 h-3.5 text-primary/60" />
                            <span className="font-data text-xs text-muted-foreground uppercase tracking-wider">
                              Voucher prezentowy
                            </span>
                          </div>
                          <button
                            onClick={() => handleAdd(v)}
                            disabled={isAdded}
                            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-body font-bold uppercase tracking-wide transition-all duration-300 ${
                              isAdded
                                ? "bg-accent text-accent-foreground"
                                : "bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-dark))] hover:shadow-md"
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-4 h-4" />
                                Dodano!
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-4 h-4" />
                                Dodaj do koszyka
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Cart sidebar */}
              <div id="cart-panel" className="mt-10 lg:mt-0">
                <div className="lg:sticky lg:top-[92px]">
                  <div className="card-warm p-6">
                    {/* Cart header */}
                    <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border/40">
                      <ShoppingBag className="w-5 h-5 text-primary" />
                      <h2 className="font-display text-lg font-bold text-foreground">
                        {checkoutStep === "cart" && "Koszyk"}
                        {checkoutStep === "form" && "Dane zamówienia"}
                        {checkoutStep === "confirmation" && "Potwierdzenie"}
                      </h2>
                      {checkoutStep === "cart" && totalItems > 0 && (
                        <span className="ml-auto font-data text-xs text-muted-foreground">
                          {totalItems} szt.
                        </span>
                      )}
                    </div>

                    {/* Step: Cart */}
                    {checkoutStep === "cart" && (
                      <>
                        {items.length === 0 ? (
                          <div className="text-center py-10">
                            <ShoppingBag className="w-10 h-10 mx-auto text-muted-foreground/30 mb-3" />
                            <p className="font-body text-sm text-muted-foreground">
                              Koszyk jest pusty
                            </p>
                            <p className="font-body text-xs text-muted-foreground/50 mt-1">
                              Wybierz voucher z listy obok
                            </p>
                          </div>
                        ) : (
                          <>
                            <div className="space-y-3 mb-5">
                              {items.map((item) => (
                                <div key={item.voucher.id} className="flex gap-3 p-3 rounded-xl bg-background/60 border border-border/30">
                                  <img
                                    src={item.voucher.image}
                                    alt={item.voucher.title}
                                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-subhead text-sm font-semibold text-foreground truncate">
                                      {item.voucher.emoji} {item.voucher.title}
                                    </h4>
                                    <p className="font-data text-[11px] text-muted-foreground mt-0.5">
                                      Cena ustalana indywidualnie
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                      <button
                                        onClick={() => updateQuantity(item.voucher.id, item.quantity - 1)}
                                        className="p-1 rounded-md border border-border/40 text-foreground/50 hover:text-foreground hover:bg-muted transition-colors"
                                      >
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="font-data text-sm font-bold text-foreground w-5 text-center">
                                        {item.quantity}
                                      </span>
                                      <button
                                        onClick={() => updateQuantity(item.voucher.id, item.quantity + 1)}
                                        className="p-1 rounded-md border border-border/40 text-foreground/50 hover:text-foreground hover:bg-muted transition-colors"
                                      >
                                        <Plus className="w-3 h-3" />
                                      </button>
                                      <button
                                        onClick={() => removeItem(item.voucher.id)}
                                        className="ml-auto p-1 text-destructive/50 hover:text-destructive transition-colors"
                                        aria-label="Usuń"
                                      >
                                        <X className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <button
                              onClick={() => setCheckoutStep("form")}
                              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-xl text-sm font-body font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[hsl(var(--primary-dark))] hover:shadow-md"
                            >
                              Przejdź dalej
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </>
                    )}

                    {/* Step: Form */}
                    {checkoutStep === "form" && (
                      <>
                        <button
                          onClick={() => setCheckoutStep("cart")}
                          className="inline-flex items-center gap-1 font-body text-sm text-foreground/50 hover:text-foreground transition-colors mb-4"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          Wróć do koszyka
                        </button>

                        {/* Mini summary */}
                        <div className="p-3 rounded-xl bg-background/60 border border-border/30 mb-5">
                          <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            Zamówienie
                          </p>
                          {items.map((item) => (
                            <p key={item.voucher.id} className="font-body text-sm text-foreground">
                              {item.voucher.emoji} {item.voucher.title} × {item.quantity}
                            </p>
                          ))}
                        </div>

                        <form onSubmit={handleSubmitForm} id="voucher-form" className="space-y-4">
                          <p className="font-data text-xs text-muted-foreground uppercase tracking-wider">
                            Twoje dane
                          </p>
                          <div>
                            <label className="block font-body text-sm font-semibold text-foreground mb-1">
                              Imię i nazwisko *
                            </label>
                            <input
                              type="text" required maxLength={100}
                              value={formData.name}
                              onChange={(e) => setFormData({ name: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                              placeholder="Jan Kowalski"
                            />
                          </div>
                          <div>
                            <label className="block font-body text-sm font-semibold text-foreground mb-1">
                              E-mail *
                            </label>
                            <input
                              type="email" required maxLength={255}
                              value={formData.email}
                              onChange={(e) => setFormData({ email: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                              placeholder="jan@example.com"
                            />
                          </div>
                          <div>
                            <label className="block font-body text-sm font-semibold text-foreground mb-1">
                              Telefon *
                            </label>
                            <input
                              type="tel" required maxLength={20}
                              value={formData.phone}
                              onChange={(e) => setFormData({ phone: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                              placeholder="+48 500 000 000"
                            />
                          </div>

                          <div className="border-t border-border/30 pt-4">
                            <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mb-3">
                              Szczegóły prezentu
                            </p>
                          </div>
                          <div>
                            <label className="block font-body text-sm font-semibold text-foreground mb-1">
                              Imię obdarowanego
                            </label>
                            <input
                              type="text" maxLength={100}
                              value={formData.recipientName}
                              onChange={(e) => setFormData({ recipientName: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                              placeholder="Anna"
                            />
                          </div>
                          <div>
                            <label className="block font-body text-sm font-semibold text-foreground mb-1">
                              Dedykacja
                            </label>
                            <textarea
                              maxLength={500} rows={2}
                              value={formData.dedication}
                              onChange={(e) => setFormData({ dedication: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                              placeholder="Wszystkiego najlepszego!"
                            />
                          </div>
                          <div>
                            <label className="block font-body text-sm font-semibold text-foreground mb-1">
                              Forma vouchera
                            </label>
                            <div className="flex gap-2">
                              {(["elektroniczny", "papierowy"] as const).map((fmt) => (
                                <button
                                  key={fmt} type="button"
                                  onClick={() => setFormData({ format: fmt })}
                                  className={`flex-1 px-3 py-2.5 rounded-xl text-sm font-body font-semibold border transition-all duration-200 ${
                                    formData.format === fmt
                                      ? "border-primary bg-primary/10 text-primary"
                                      : "border-border/60 text-foreground/60 hover:border-primary/40"
                                  }`}
                                >
                                  {fmt === "elektroniczny" ? "📧 Elektroniczny" : "📦 Papierowy"}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block font-body text-sm font-semibold text-foreground mb-1">
                              Uwagi
                            </label>
                            <textarea
                              maxLength={500} rows={2}
                              value={formData.notes}
                              onChange={(e) => setFormData({ notes: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                              placeholder="Opcjonalne..."
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-xl text-sm font-body font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[hsl(var(--primary-dark))] hover:shadow-md mt-2"
                          >
                            Przejdź do płatności
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </form>
                      </>
                    )}

                    {/* Step: Confirmation */}
                    {checkoutStep === "confirmation" && (
                      <div className="text-center py-6">
                        <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                          <Check className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">
                          Dziękujemy za zainteresowanie!
                        </h3>
                        <p className="font-body text-sm text-foreground/60 leading-relaxed mb-5">
                          System płatności online zostanie uruchomiony wkrótce.
                          Aby sfinalizować zamówienie, skontaktuj się z nami:
                        </p>
                        <div className="rounded-xl bg-background/60 border border-border/30 p-4 text-left space-y-2 mb-5">
                          <p className="font-body text-sm">
                            <span className="font-semibold text-foreground">📞</span>{" "}
                            <a href="tel:+48500384100" className="text-primary hover:underline">
                              +48 500 384 100
                            </a>
                          </p>
                          <p className="font-body text-sm">
                            <span className="font-semibold text-foreground">✉️</span>{" "}
                            <a href="mailto:pizzasielsko@gmail.com" className="text-primary hover:underline">
                              pizzasielsko@gmail.com
                            </a>
                          </p>
                        </div>
                        <button
                          onClick={() => clearCart()}
                          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-body font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[hsl(var(--primary-dark))]"
                        >
                          Zamknij
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <BackToTop />
      <MobileBottomBar onOpenReservation={() => setReservationOpen(true)} />
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ReservationModal open={reservationOpen} onClose={() => setReservationOpen(false)} />
    </>
  );
};

export default VoucheryPage;
