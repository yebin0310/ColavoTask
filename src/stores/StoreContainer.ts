import create from "zustand";

interface DiscountItem {
  name: string;
  rate: number;
  services?: string[];
}

interface SelectedItem {
  name: string;
  price: number;
  quantity: number;
}

interface StoreType {
  procedure: string | undefined;
  selectedItems: SelectedItem[];
  selectedDiscounts: DiscountItem[];
  totalPrice: number;
  setProcedure: (isProcedure: string | undefined) => void;
  setSelectedItems: (items: SelectedItem[]) => void;
  setSelectedDiscounts: (discounts: DiscountItem[]) => void;
  setTotalPrice: (price: number) => void;
  updateDiscountServices: (
    discountName: string,
    selectedServices: string[]
  ) => void;
}

const useStore = create<StoreType>((set) => ({
  procedure: undefined,
  selectedItems: [],
  selectedDiscounts: [],
  totalPrice: 0,

  setProcedure: (isProcedure) => set({ procedure: isProcedure }),

  setSelectedItems: (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    set({ selectedItems: items, totalPrice: total });
  },

  setSelectedDiscounts: (discounts) => set({ selectedDiscounts: discounts }),

  setTotalPrice: (price) => set({ totalPrice: price }),

  updateDiscountServices: (
    discountName: string,
    selectedServices: string[]
  ) => {
    set((state) => {
      const updatedDiscounts = state.selectedDiscounts.map((discount) =>
        discount.name === discountName
          ? { ...discount, services: selectedServices }
          : discount
      );
      return { selectedDiscounts: updatedDiscounts };
    });
  },
}));

export default useStore;
