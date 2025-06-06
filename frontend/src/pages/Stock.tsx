import styled from "styled-components";
import { useParams } from "react-router-dom";
import StockBuyingSelling from "@/components/stock/StockBuyingSelling";
import { useEffect, useState } from "react";
import { RenderLineChart } from "@/components/graph/StockGraph";
import { Segmented } from "antd";
import {
  parseDailyStockData,
  parseIntradayStockData,
  PriceData,
} from "@/util/stock/parseStockData";
import { dailyApple, intradayApple } from "@/store/stockTestObject";
import { capitalizeFirstLetter } from "@/util/capitalize";

const Stock: React.FC = () => {
  const { stockName } = useParams<{ stockName: string }>();

  const chartType: string[] = ["일", "실시간"];
  const [selectedChartType, setSelectedChartType] = useState<string>(
    chartType[0]
  );

  const [stockPriceList, setStockPriceList] = useState<PriceData[][]>([]);

  useEffect(() => {
    const fetchStockPrice = async () => {
      const dailyPrice: PriceData[] = parseDailyStockData(dailyApple);
      const intradayPrice: PriceData[] = parseIntradayStockData(intradayApple);
      setStockPriceList([dailyPrice, intradayPrice]);
    };
    fetchStockPrice();
  }, []);

  const getStockData = () => {
    if (selectedChartType === chartType[0]) {
      return stockPriceList[0];
    } else {
      return stockPriceList[1];
    }
  };

  return (
    <StockStyle>
      {stockName && <h1>{capitalizeFirstLetter(stockName)}</h1>}
      <div className="container">
        <div className="chart">
          <div className="stock-subtitle">차트</div>
          <Segmented<string>
            className="segmented"
            options={chartType}
            onChange={(value) => {
              setSelectedChartType(value);
            }}
          />
          {stockPriceList[0] && stockPriceList[1] && (
            <RenderLineChart
              data={getStockData()}
              selectedChartType={selectedChartType}
            />
          )}
        </div>
        <div className="trade">
          <div className="stock-subtitle">매매</div>
          <StockBuyingSelling />
        </div>
      </div>
    </StockStyle>
  );
};

const StockStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;

  h1 {
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    gap: 50px;
  }

  .stock-subtitle {
    font-weight: 600;
  }

  .chart {
    .segmented {
      width: fit-content;

      .ant-segmented-item-selected {
        font-weight: 500;
        align-items: center;
      }
    }
  }

  .chart,
  .trade {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default Stock;
