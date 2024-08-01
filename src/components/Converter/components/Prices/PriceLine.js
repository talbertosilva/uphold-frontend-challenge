import React from "react";
import "./PriceLine.css";

const PriceLine = ({ price, currency }) => {
  return (
    <div className="price-line-container">
      <p>{price}</p>
      <div className="currency-container">
        <img
          src={`coins-logo/${currency}.png`}
          alt={`${currency} logo`}
          width="24px"
          height="24px"
        />
        <p>{currency}</p>
      </div>
    </div>
  );
};

export default PriceLine;
