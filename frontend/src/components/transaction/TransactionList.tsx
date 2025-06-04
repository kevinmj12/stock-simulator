import styled from "styled-components";
import { mockTransactions } from "../../data/transactions";
import { format } from "date-fns";
import { useTransactionStore } from "../../store/transactionStore";

const TransactionList = () => {
  const { selectTransaction, selectedTransactionId } = useTransactionStore();

  return (
    <TransactionListStyle>
      {mockTransactions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((tx) => {
          const dateObj = new Date(tx.date);
          const date = format(dateObj, "M.d");
          const time = format(dateObj, "HH:mm");
          const isBuy = tx.type === "buy";
          const signedPrice = `${
            isBuy ? "-" : "+"
          }$${tx.totalPrice.toLocaleString()}`;
          const stockCount = tx.quantity;
          const balance = isBuy ? "$8,732.54" : "$10,152.34"; // 실제 구현 시 상태로 관리

          return (
            <li
              key={tx.id}
              onClick={() => {
                if (selectedTransactionId === tx.id) {
                  selectTransaction(null);
                } else {
                  selectTransaction(tx.id);
                }
              }}
              className={selectedTransactionId === tx.id ? "active" : ""}
            >
              <div className="row">
                <div className="left">
                  <div className="top">
                    <span className="date">{date}</span>
                    <span className="stock">
                      {tx.stockName} {stockCount}주
                    </span>
                  </div>
                  <div className="bottom">
                    <span className="time">{time}</span>
                    <span className="line">|</span>
                    <span className="type">{isBuy ? "구매" : "판매"}</span>
                  </div>
                </div>
                <div className="right">
                  <span className={`price ${isBuy ? "buy" : "sell"}`}>
                    {signedPrice}
                  </span>
                  <span className="balance">{balance}</span>
                </div>
              </div>
            </li>
          );
        })}
    </TransactionListStyle>
  );
};

const TransactionListStyle = styled.ul`
  list-style: none;
  padding: 0 10px;
  width: 100%;

  li {
    border-bottom: 0.7px solid ${({ theme }) => theme.color.border};
    padding: 10px 0;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.color.hover};
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .left {
      display: flex;
      flex-direction: column;

      .top {
        display: flex;
        gap: 12px;
        font-weight: 500;

        .date {
          width: 37px;
          text-align: left;
          margin-left: 10px;
          color: ${({ theme }) => theme.color.subtext};
        }

        .stock {
          font-weight: 500;
        }
      }

      .bottom {
        display: flex;
        gap: 5px;
        font-size: 14px;
        color: ${({ theme }) => theme.color.subtext};
        margin-top: 4px;
        margin-left: 59px;

        .time {
          width: 39px;
        }

        .line {
          padding: 0 2px 0 0;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 10px;

      .price {
        font-weight: bold;
      }

      /* .price.buy {
        color: ${({ theme }) => theme.color.rise};
      }

      .price.sell {
        color: ${({ theme }) => theme.color.fall};
      } */

      .balance {
        font-size: 14px;
        color: ${({ theme }) => theme.color.subtext};
        margin-top: 4px;
      }
    }
  }
`;

export default TransactionList;
