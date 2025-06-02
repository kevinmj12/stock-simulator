import styled from "styled-components";
import { Segmented } from "antd";
import { useState } from "react";

const StockBuyingSelling = () => {
  const tradeType: string[] = ["매수", "매도"];
  const [selected, setSelected] = useState<string>("매수");

  return (
    <StockBuyingSellingStyle $selected={selected}>
      <Segmented<string>
        className="segmented"
        options={tradeType}
        onChange={(value) => {
          setSelected(value);
        }}
        block
      />
      <div className="price">
        <p>구매 가격</p>
        <div className="box">$60</div>
      </div>
      <div className="amount">
        <p>수량</p>
        <div className="box">1</div>
      </div>
    </StockBuyingSellingStyle>
  );
};

const StockBuyingSellingStyle = styled.div<{ $selected: string }>`
  min-width: 200px;
  max-width: 250px;
  .segmented {
    margin-bottom: 20px;
    .ant-segmented-item {
      transition: none;
      align-items: center;
    }
    .ant-segmented-item-selected {
      color: ${({ $selected, theme }) =>
        $selected === "매수" ? theme.color.rise : theme.color.fall};
      font-weight: 600;
      align-items: center;
    }
  }

  .price,
  .amount {
    padding: 0;
    display: flex;
    align-items: center;
    margin: 15px 0;

    p {
      width: 60px;
      font-weight: 600;
      margin: 0;
    }
    .box {
      flex: 1;
      margin-left: 20px;
      border: ${({ theme }) => `solid 1px ${theme.color.border}`};
      border-radius: 8px;
      padding: 5px 10px;
    }
  }
`;

export default StockBuyingSelling;
