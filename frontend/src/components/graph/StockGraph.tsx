import { testApple } from "@/store/stockTestObject";
import { parseStockData } from "@/util/stock/parseStockData";
import React, { useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// 월 중복 제거용 formatter 생성 함수
const createMonthTickFormatter = (): ((tick: string) => string) => {
  let lastMonth: number | null = null;
  return (tick: string) => {
    const date = new Date(tick);
    const month = date.getMonth() + 1; // 0부터 시작이므로 +1
    if (month !== lastMonth) {
      lastMonth = month;
      return `${month}월`;
    }
    return "";
  };
};

export const RenderLineChart: React.FC = () => {
  const tickFormatter = createMonthTickFormatter();

  // Todo: rawData 실제 받아온 데이터로 변경
  const rawData = parseStockData(testApple);
  const prices = rawData.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // padding으로 상, 하 여유 조정
  const padding = (maxPrice - minPrice) * 0.1;
  const domain: [number, number] = [
    Math.floor(minPrice - padding),
    Math.ceil(maxPrice + padding),
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth;
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* y축만 렌더링 */}
      <div style={{}}>
        <LineChart
          width={61}
          height={300}
          margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
        >
          <XAxis width={30} />
          <YAxis domain={domain} />
        </LineChart>
      </div>

      {/* x축과 스크롤 가능한 그래프 렌더링*/}
      <div
        ref={scrollContainerRef}
        style={{ overflowX: "auto", width: "600px" }}
      >
        <LineChart
          width={Math.max(rawData.length * 40)}
          height={300}
          data={rawData}
          margin={{ top: 5, right: 10, bottom: 5, left: 20 }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="name"
            tickFormatter={tickFormatter}
            tick={{ fontSize: 15 }}
            tickLine={false}
            // axisLine={false}
          />
          <Tooltip />
          <YAxis domain={domain} width={-5} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};
