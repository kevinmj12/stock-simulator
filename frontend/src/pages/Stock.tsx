import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RenderLineChart } from "@/components/graph/StockGraph";
import { Segmented } from "antd";
import {
  parseDailyStockData,
  parseIntradayStockData,
  PriceData,
} from "@/util/stock/parseStockData";
import { dailyApple, intradayApple } from "@/store/stockTestObject";

// 차트 종류에 따라 맞는 데이터를 리턴하는 함수

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
      <h1>{stockName}</h1>
      <div className="chart">
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
    </StockStyle>
  );
};

const StockStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    margin-left: 20px;
  }

  .chart {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .segmented {
      width: fit-content;
      margin-left: 20px;
    }
  }
`;

export default Stock;
