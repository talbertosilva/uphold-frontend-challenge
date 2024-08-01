import React from "react";
import PriceLine from "./PriceLine";

const Prices = React.memo(({ data, fetchLoading }) => {
  return (
    <>
      {fetchLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.value > 0 ? (
            Object.entries(data.list).map(([currencyKey, currencyPrice]) => (
              <PriceLine
                currency={currencyKey}
                price={(currencyPrice * data.value).toFixed(6)}
              />
            ))
          ) : (
            <p style={{ color: "rgb(136, 136, 136)", fontSize: "small" }}>
              Enter an amount to check prices
            </p>
          )}
        </div>
      )}
    </>
  );
});

export default Prices;
