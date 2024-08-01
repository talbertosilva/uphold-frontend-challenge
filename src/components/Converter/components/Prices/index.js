import React from "react";
import PriceLine from "./PriceLine";

const Prices = React.memo(({ data, fetchLoading }) => {
  const formatPrice = (price) => {
    return price > 1 ? price.toFixed(2) : price.toFixed(6);
  };

  return (
    <div>
      {fetchLoading ? (
        <p>Fetching prices...</p>
      ) : data.value > 0 ? (
        Object.entries(data.list).map(([currencyKey, currencyPrice]) => (
          <PriceLine
            key={currencyKey}
            currency={currencyKey}
            price={formatPrice(currencyPrice * data.value)}
          />
        ))
      ) : (
        <p style={{ color: "rgb(136, 136, 136)", fontSize: "small" }}>
          Enter an amount to check prices
        </p>
      )}
    </div>
  );
});

export default Prices;
