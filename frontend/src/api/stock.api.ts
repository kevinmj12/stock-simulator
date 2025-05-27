import axios from "axios";

type StockTime = "hour" | "day" | "week" | "month";
enum StockTimeUrl {
  hour = "TIME_SERIES_INTRADAY",
  day = "TIME_SERIES_DAILY",
  week = "TIME_SERIES_WEEKLY",
  month = "TIME_SERIES_MONTHLY",
}

interface StockProps {
  stockTime: StockTime;
  symbol: string;
}

const stockRequestHandler = async (stockProps: StockProps) => {
  const BASE_URL = process.env.REACT_APP_STOCK_API_URL;
  const KEY = process.env.REACT_APP_STOCK_API_KEY;

  let response;

  let params: Record<string, string> = {
    function: StockTimeUrl[stockProps.stockTime],
    symbol: stockProps.symbol,
    apikey: KEY!,
  };

  if (stockProps.stockTime === "hour") {
    params["interval"] = "60min";
  }

  const url = `${BASE_URL}/query`;
  response = await axios.get(url, {
    params: params,
  });

  return response.data;
};

export const stockPrice = (symbol: string, stockTime: StockTime) => {
  return stockRequestHandler({ symbol: symbol, stockTime: stockTime });
};
