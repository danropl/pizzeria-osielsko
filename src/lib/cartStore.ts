import { create } from "zustand";
import type { VoucherItem } from "./vouchersData";

export interface CartItem {
  voucher: VoucherItem;
  quantity: number;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  recipientName: string;
  dedication: string;
  format: "elektroniczny" | "papierowy";
  notes: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  checkoutStep: "cart" | "form" | "confirmation";
  formData: OrderFormData;
  addItem: (voucher: VoucherItem) => void;
  removeItem: (voucherId: string) => void;
  updateQuantity: (voucherId: string, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (open: boolean) => void;
  setCheckoutStep: (step: "cart" | "form" | "confirmation") => void;
  setFormData: (data: Partial<OrderFormData>) => void;
  resetForm: () => void;
}

const defaultFormData: OrderFormData = {
  name: "",
  email: "",
  phone: "",
  recipientName: "",
  dedication: "",
  format: "elektroniczny",
  notes: "",
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  checkoutStep: "cart",
  formData: { ...defaultFormData },

  addItem: (voucher) =>
    set((state) => {
      const existing = state.items.find((i) => i.voucher.id === voucher.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.voucher.id === voucher.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, { voucher, quantity: 1 }], isOpen: true };
    }),

  removeItem: (voucherId) =>
    set((state) => ({
      items: state.items.filter((i) => i.voucher.id !== voucherId),
    })),

  updateQuantity: (voucherId, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((i) => i.voucher.id !== voucherId)
          : state.items.map((i) =>
              i.voucher.id === voucherId ? { ...i, quantity } : i
            ),
    })),

  clearCart: () => set({ items: [], checkoutStep: "cart", formData: { ...defaultFormData } }),
  setIsOpen: (open) => set({ isOpen: open }),
  setCheckoutStep: (step) => set({ checkoutStep: step }),
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  resetForm: () => set({ formData: { ...defaultFormData }, checkoutStep: "cart" }),
}));
