import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/cartStore";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

const VoucherCartDrawer = () => {
  const { items, isOpen, setIsOpen, checkoutStep, setCheckoutStep, removeItem, updateQuantity, clearCart, formData, setFormData } = useCartStore();

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("confirmation");
  };

  if (!isOpen) {
    return totalItems > 0 ? (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-[999] bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg hover:bg-[hsl(var(--primary-dark))] transition-all duration-300 hover:scale-105"
        aria-label="Otwórz koszyk"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      </button>
    ) : null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[1100]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[1101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border/50">
              <h2 className="font-display text-xl font-bold text-foreground">
                {checkoutStep === "cart" && "🛒 Koszyk"}
                {checkoutStep === "form" && "📝 Dane zamówienia"}
                {checkoutStep === "confirmation" && "✅ Potwierdzenie"}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground/50 hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5">
              {checkoutStep === "cart" && (
                <>
                  {items.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground/40 mb-4" />
                      <p className="font-body text-muted-foreground">Koszyk jest pusty</p>
                      <p className="font-body text-sm text-muted-foreground/60 mt-1">
                        Dodaj voucher, aby kontynuować
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.voucher.id} className="card-warm p-4 flex gap-4">
                          <img
                            src={item.voucher.image}
                            alt={item.voucher.title}
                            className="w-20 h-20 rounded-xl object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-subhead text-sm font-semibold text-foreground truncate">
                              {item.voucher.title}
                            </h3>
                            <p className="font-data text-xs text-muted-foreground mt-1">
                              Cena ustalana indywidualnie
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                              <button
                                onClick={() => updateQuantity(item.voucher.id, item.quantity - 1)}
                                className="p-1 rounded-lg border border-border/50 text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-data text-sm font-semibold text-foreground w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.voucher.id, item.quantity + 1)}
                                className="p-1 rounded-lg border border-border/50 text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => removeItem(item.voucher.id)}
                                className="ml-auto p-1 text-destructive/60 hover:text-destructive transition-colors"
                                aria-label="Usuń"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {checkoutStep === "form" && (
                <form onSubmit={handleSubmitForm} id="voucher-form" className="space-y-5">
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Adres e-mail *
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="jan@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Numer telefonu *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => setFormData({ phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="+48 500 000 000"
                    />
                  </div>
                  <div className="border-t border-border/30 pt-5">
                    <p className="font-data text-xs text-muted-foreground uppercase tracking-wider mb-4">
                      Szczegóły prezentu
                    </p>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Imię osoby obdarowanej
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      value={formData.recipientName}
                      onChange={(e) => setFormData({ recipientName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="Anna"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Dedykacja / wiadomość
                    </label>
                    <textarea
                      maxLength={500}
                      rows={3}
                      value={formData.dedication}
                      onChange={(e) => setFormData({ dedication: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                      placeholder="Wszystkiego najlepszego z okazji urodzin!"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Preferowana forma vouchera
                    </label>
                    <div className="flex gap-3">
                      {(["elektroniczny", "papierowy"] as const).map((fmt) => (
                        <button
                          key={fmt}
                          type="button"
                          onClick={() => setFormData({ format: fmt })}
                          className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-body font-semibold border transition-all duration-200 ${
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
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                      Dodatkowe uwagi
                    </label>
                    <textarea
                      maxLength={500}
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                      placeholder="Opcjonalne informacje..."
                    />
                  </div>
                </form>
              )}

              {checkoutStep === "confirmation" && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Dziękujemy za zainteresowanie!
                  </h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-6">
                    System płatności online zostanie uruchomiony wkrótce. Aby sfinalizować
                    zamówienie vouchera, skontaktuj się z nami telefonicznie lub mailowo
                    — odezwiemy się najszybciej jak to możliwe.
                  </p>
                  <div className="card-warm p-4 text-left space-y-2 mb-6">
                    <p className="font-body text-sm">
                      <span className="font-semibold text-foreground">📞 Telefon:</span>{" "}
                      <a href="tel:+48500384100" className="text-primary hover:underline">
                        +48 500 384 100
                      </a>
                    </p>
                    <p className="font-body text-sm">
                      <span className="font-semibold text-foreground">✉️ E-mail:</span>{" "}
                      <a href="mailto:pizzasielsko@gmail.com" className="text-primary hover:underline">
                        pizzasielsko@gmail.com
                      </a>
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      clearCart();
                      setIsOpen(false);
                    }}
                    className="btn-primary text-sm px-6 py-3"
                  >
                    Zamknij
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            {checkoutStep === "cart" && items.length > 0 && (
              <div className="p-5 border-t border-border/50 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-foreground/70">
                    Vouchery: {totalItems} szt.
                  </span>
                  <span className="font-data text-xs text-muted-foreground uppercase tracking-wider">
                    Cena ustalana indywidualnie
                  </span>
                </div>
                <button
                  onClick={() => setCheckoutStep("form")}
                  className="btn-primary w-full text-base py-3.5"
                >
                  Przejdź dalej →
                </button>
              </div>
            )}
            {checkoutStep === "form" && (
              <div className="p-5 border-t border-border/50 space-y-3">
                <button
                  type="button"
                  onClick={() => setCheckoutStep("cart")}
                  className="w-full text-center font-body text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  ← Wróć do koszyka
                </button>
                <button
                  type="submit"
                  form="voucher-form"
                  className="btn-primary w-full text-base py-3.5"
                >
                  Przejdź do płatności →
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VoucherCartDrawer;
