import Uphold from "@uphold/uphold-sdk-javascript";

const sdk = new Uphold({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: "foo",
  clientSecret: "bar",
});

export const fetchPrices = async (currency, list) => {
  try {
    const updatedPrices = { ...list };

    const tickers = await sdk.getTicker(currency);

    for (let currencyItem in updatedPrices) {
      if (currencyItem !== currency) {
        const matchingTicker = tickers.find(
          (ticker) =>
            ticker.pair === `${currencyItem}-${currency}` ||
            ticker.pair === `${currency}${currencyItem}`
        );
        if (matchingTicker) {
          updatedPrices[currencyItem] = parseFloat(matchingTicker.ask);
        } else {
          console.log(`There's no match for that ticker.`);
        }
      } else {
        updatedPrices[currencyItem] = 1;
      }
    }

    return updatedPrices;
  } catch (error) {
    console.error("Error >>>", error.message);
    throw error;
  }
};
