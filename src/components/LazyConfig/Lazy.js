import React from "react";

export const Coin = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../Body/CoinLists/Coin/Coin")), 2000)
    )
);

export const TradingViewWidget = React.lazy(() =>
  import("react-tradingview-widget")
);
