import styled from "styled-components";
import { useParams } from "react-router-dom";
import { stockPrice } from "@/api/stock.api";

const Stock = () => {
  const { stockName } = useParams<{ stockName: string }>();

  return (
    <StockStyle>
      <h1>Stock</h1>
      <h2>{stockName}</h2>
      <button
        onClick={() => {
          const stockPriceList = stockPrice("AAPL", "day");
          console.log(stockPriceList);
        }}
      >
        Hello
      </button>
    </StockStyle>
  );
};

const StockStyle = styled.div``;

export default Stock;
