import React, { useState, useEffect } from "react";
import "./inputBox.css";
import { fetchPrices } from "../../utils/useApi";
import useDebounce from "../../utils/useDebounce";

const InputBox = ({ data, setData, setFetchLoading }) => {
  const { currency, value, list } = data;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [inputValue, setInputValue] = useState(value);
  const [inputCurrency, setInputCurrency] = useState(currency);

  const debouncedValue = useDebounce(inputValue, 500);
  const debouncedCurrency = useDebounce(inputCurrency, 100);

  useEffect(() => {
    const fetchData = async () => {
      setFetchLoading(true);
      try {
        const updatedPrices = await fetchPrices(inputCurrency, list);
        setData((prevData) => ({
          ...prevData,
          list: updatedPrices,
          value: debouncedValue,
        }));
      } catch (error) {
        console.error("Error fetching prices:", error.message);
      } finally {
        setFetchLoading(false);
      }
    };

    if (debouncedValue !== value || debouncedCurrency !== currency) {
      fetchData();
    }
  }, [debouncedValue, debouncedCurrency, currency, list, value, setData]);

  const handleCurrencyChange = (newCurrency) => {
    setInputCurrency(newCurrency);
    setData((prevData) => ({ ...prevData, currency: newCurrency }));
    setIsDropdownOpen(false);
  };

  return (
    <div className="input-container">
      <input
        placeholder={value}
        value={inputValue}
        type={"number"}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="dropdown-currencies">
        <div
          className="main-currency"
          onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        >
          <img
            src={`coins-logo/${inputCurrency}.png`}
            alt={`${inputCurrency} logo`}
            height="24px"
          />
          <p>{inputCurrency}</p>
          <img src="coins-logo/dropdown-icon.svg" alt="Dropdown icon" />
        </div>

        {isDropdownOpen && (
          <div className="dropdown-list">
            {Object.keys(list).map((itemCurrency) => (
              <div
                key={itemCurrency}
                className="dropdown-list-item"
                onClick={() => handleCurrencyChange(itemCurrency)}
              >
                <img
                  src={`coins-logo/${itemCurrency.toUpperCase()}.png`}
                  alt={`${itemCurrency} logo`}
                  height="24px"
                  loading="lazy"
                />
                <p>{itemCurrency}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputBox;
