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
        <div className="trade-subtitle">구매 가격</div>
        <div className="box">$60</div>
      </div>
      <div className="amount">
        <div className="trade-subtitle">수량</div>
        <div className="box">
          <div className="input">
            <input placeholder="수량 입력"></input>
          </div>
          <div className="buttons">
            <button>－</button>
            <button>＋</button>
          </div>
        </div>
      </div>
    </StockBuyingSellingStyle>
  );
};

const StockBuyingSellingStyle = styled.div<{ $selected: string }>`
  width: 270px;
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

    .trade-subtitle {
      width: 60px;
      font-weight: 600;
      margin: 0;
    }
    .box {
      display: flex;
      justify-content: space-between;
      flex: 1;
      margin-left: 20px;
      border: ${({ theme }) => `solid 1px ${theme.color.border}`};
      border-radius: 8px;
      padding: 3px 3px 3px 10px;
      .input {
        flex: 1;
        input {
          font-size: 16px;
          border: none;
          width: 100%;
          outline: none;
          padding: 0;
        }
      }

      .buttons {
        display: flex;
        button {
          border: none;
          background-color: transparent;
          font-size: 14px;
          font-weight: 600;
          color: ${({ theme }) => theme.color.secondary};
          padding: 2px 6px;
          cursor: pointer;

          &:hover {
            background-color: ${({ theme }) => theme.color.background};
            border-radius: 4px;
          }
        }
      }
    }
    .stock-amounts {
    }
  }
`;

export default StockBuyingSelling;
