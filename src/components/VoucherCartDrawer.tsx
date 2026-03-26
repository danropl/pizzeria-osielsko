import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/cartStore";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";

const VoucherCartDrawer = () => {
  const { items, checkoutStep, setCheckoutStep, removeItem, updateQuantity, cartTotal } = useCartStore();

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = cartTotal();

  // This drawer is now a simple floating cart button — full checkout is on the page
  if (totalItems === 0) return null;

  return (
    <button
      onClick={() => {
        const el = document.getElementById("cart-panel");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-20 right-4 lg:hidden z-[999] bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg hover:bg-[hsl(var(--primary-dark))] transition-all duration-300 hover:scale-105"
      aria-label="Otwórz koszyk"
    >
      <ShoppingBag className="w-5 h-5" />
      <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
        {totalItems}
      </span>
    </button>
  );
};

export default VoucherCartDrawer;
