import { create } from "zustand";

interface TransactionState {
  selectedTransactionId: number | null;
  selectTransaction: (id: number | null) => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  selectedTransactionId: null,
  selectTransaction: (id) => set({ selectedTransactionId: id }),
}));
