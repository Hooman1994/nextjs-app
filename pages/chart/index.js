import React from "react";
import { TradingViewStockChartWidget } from "react-tradingview-components";

const chart = () => {
  return (
    <TradingViewStockChartWidget
      symbol="NASDAQ:AAPL"
      theme="Light"
      width={1500}
      height={600}
      range="12m"
    />
  );
};

export default chart;
