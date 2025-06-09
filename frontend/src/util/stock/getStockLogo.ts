export const getStockLogoUrl = (symbol: string): string => {
  const map: Record<string, string> = {
    TSLA: "Tesla.png",
    AAPL: "Apple.png",
    GOOGL: "Google.png",
    META: "Meta.png",
    NVDA: "Nvidia.png",
  };

  return `/logos/${map[symbol] ?? "default.png"}`;
};
