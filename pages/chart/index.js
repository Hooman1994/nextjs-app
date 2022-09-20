import React from "react";
import { TradingViewStockChartWidget } from "react-tradingview-components";

const chart = () => {
  return (
    <TradingViewStockChartWidget
      symbol="NASDAQ:AAPL"
      theme="Light"
      width={1800}
      height={700}
      range="12m"
      locale="fa_IR"
      hide_side_toolbar={false}
      timezone="Asia/Tehran"
      details={true}
      calendar={true}
      withdateranges={true}
      // hotlist={true}
    />
  );
};

export default chart;
