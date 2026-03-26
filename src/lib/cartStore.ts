import { create } from "zustand";
import type { VoucherItem, VoucherFormat } from "./vouchersData";

export interface CartItem {
  voucher: VoucherItem;
  quantity: number;
  selectedValue: number;
  format: VoucherFormat;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  recipientName: string;
  dedication: string;
  deliveryMethod: "elektroniczny" | "odbiór osobisty";
  preferredDate: string;
  notes: string;
}

interface CartStore {
  items: CartItem[];
  checkoutStep: "cart" | "form" | "preview" | "confirmation";
  formData: OrderFormData;
  addItem: (voucher: VoucherItem, value: number, format: VoucherFormat) => void;
  removeItem: (itemIndex: number) => void;
  updateQuantity: (itemIndex: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
  setCheckoutStep: (step: "cart" | "form" | "preview" | "confirmation") => void;
  setFormData: (data: Partial<OrderFormData>) => void;
  resetForm: () => void;
}

const defaultFormData: OrderFormData = {
  name: "",
  email: "",
  phone: "",
  recipientName: "",
  dedication: "",
  deliveryMethod: "elektroniczny",
  preferredDate: "",
  notes: "",
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  checkoutStep: "cart",
  formData: { ...defaultFormData },

  addItem: (voucher, value, format) =>
    set((state) => {
      // Check if same voucher+value+format exists
      const idx = state.items.findIndex(
        (i) => i.voucher.id === voucher.id && i.selectedValue === value && i.format === format
      );
      if (idx >= 0) {
        const newItems = [...state.items];
        newItems[idx] = { ...newItems[idx], quantity: newItems[idx].quantity + 1 };
        return { items: newItems };
      }
      return { items: [...state.items, { voucher, quantity: 1, selectedValue: value, format }] };
    }),

  removeItem: (itemIndex) =>
    set((state) => ({
      items: state.items.filter((_, i) => i !== itemIndex),
    })),

  updateQuantity: (itemIndex, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((_, i) => i !== itemIndex)
          : state.items.map((item, i) => (i === itemIndex ? { ...item, quantity } : item)),
    })),

  cartTotal: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.selectedValue * item.quantity, 0);
  },

  clearCart: () => set({ items: [], checkoutStep: "cart", formData: { ...defaultFormData } }),
  setCheckoutStep: (step) => set({ checkoutStep: step }),
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  resetForm: () => set({ formData: { ...defaultFormData }, checkoutStep: "cart" }),
}));
