export type TransactionType = "buy" | "sell";

export interface Transaction {
  id: number;
  stockName: string;
  stockSymbol: string;
  logoUrl: string;
  type: TransactionType;
  quantity: number;
  totalPrice: number;
  date: string;
}
