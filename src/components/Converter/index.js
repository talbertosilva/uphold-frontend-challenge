import React, { lazy, Suspense, useState } from "react";
import "./converter.css";

const Prices = lazy(() => import("./components/Prices"));
const InputBox = lazy(() => import("./components/InputBox"));

const initialState = {
  value: 0.0,
  currency: "USD",
  list: {
    USD: 0,
    EUR: 0,
    GBP: 0,
    CHF: 0,
    BTC: 0,
    ETH: 0,
    LTC: 0,
    XRP: 0,
    CNY: 0,
  },
};

const Converter = () => {
  const [data, setData] = useState(initialState);
  const [fetchLoading, setFetchLoading] = useState(false);

  return (
    <div className="converter-container">
      <Suspense fallback={<div>Loading...</div>}>
        <h1 id="title">Currency Converter</h1>
        <p id="subtitle">
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </p>
        <InputBox
          data={data}
          setData={setData}
          setFetchLoading={setFetchLoading}
        />
        <Prices data={data} fetchLoading={fetchLoading} />
      </Suspense>
    </div>
  );
};

export default Converter;
