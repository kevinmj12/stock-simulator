import styled from "styled-components";
import { useParams } from "react-router-dom";
import StockBuyingSelling from "@/components/stock/StockBuyingSelling";

const Stock = () => {
  const { stockName } = useParams<{ stockName: string }>();

  return (
    <StockStyle>
      <h1>Stock</h1>
      <h2>{stockName}</h2>
      <StockBuyingSelling />
    </StockStyle>
  );
};

const StockStyle = styled.div``;

export default Stock;
