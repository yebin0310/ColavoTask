import create from "zustand";

interface StoreType {
  procedure: string | undefined;
  setProcedure: (isProcedure: string) => void;
}

const useStore = create<StoreType>((set) => ({
  procedure: undefined,

  setProcedure: (isProcedure) => set({ procedure: isProcedure }),
}));
export default useStore;
