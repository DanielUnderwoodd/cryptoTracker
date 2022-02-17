import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Themes } from "react-tradingview-widget";
import { TradingViewWidget } from "../../../LazyConfig/Lazy";
import { useParams } from "react-router-dom";

export default function Chart(props) {
  var { name } = useParams();

  const [symbol, setSymbol] = useState("btc");
  const refContainer = useRef(null);

  useEffect(() => {
    const found = props.data.find((coinName) => name === coinName);
    if (!found && props.data.length > 0)
      throw new Error("This coin is not available");
    setSymbol(name.toUpperCase());
  }, [props, name]);

  return (
    <div className="chart">
      --
      <TradingViewWidget
        symbol={symbol + "USDT"}
        theme={Themes.DARK}
        ref={refContainer}
      />
    </div>
  );
}
