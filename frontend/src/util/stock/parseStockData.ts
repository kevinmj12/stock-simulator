export type StockData = {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": {
    [date: string]: TimeSeriesEntry;
  };
};

export type TimeSeriesEntry = {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
};

export const parseStockData = (data: StockData) => {
  const timeSeries = data["Time Series (Daily)"];
  let rtnData = Object.entries(timeSeries).map(([date, values]) => ({
    name: date,
    price: parseFloat(values["4. close"]),
  }));
  rtnData = rtnData.reverse();

  return rtnData;
};
