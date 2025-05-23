import styled from "styled-components";
import { useParams } from "react-router-dom";

const Stock = () => {
  const { stockName } = useParams<{ stockName: string }>();

  return (
    <StockStyle>
      <h1>Stock</h1>
      <h2>{stockName}</h2>
    </StockStyle>
  );
};

const StockStyle = styled.div``;

export default Stock;
