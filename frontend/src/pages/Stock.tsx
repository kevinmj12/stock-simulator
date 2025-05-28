import styled from "styled-components";
import { useParams } from "react-router-dom";
import { stockPrice } from "@/api/stock.api";
import { useEffect, useState } from "react";
import { testApple } from "@/store/stockTestObject";
import { RenderLineChart } from "@/components/graph/StockGraph";

const Stock = () => {
  const { stockName } = useParams<{ stockName: string }>();

  const [stockPriceList, setStockPriceList] = useState(null);

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const result = await stockPrice("AAPL", "day");
        setStockPriceList(result);
      } catch (error) {
        console.error("Error", error);
      }
    };
    // fetchStockPrice();
  }, []);

  return (
    <StockStyle>
      <h1>Stock</h1>
      <h2>{stockName}</h2>

      <RenderLineChart />
    </StockStyle>
  );
};

const StockStyle = styled.div``;

export default Stock;
