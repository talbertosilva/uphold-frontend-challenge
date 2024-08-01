import Uphold from "@uphold/uphold-sdk-javascript";

const sdk = new Uphold({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: "foo",
  clientSecret: "bar",
});

export const fetchPrices = async (currency, list) => {
  try {
    const updatedPrices = { ...list };

    for (let currencyItem in updatedPrices) {
      if (currencyItem !== currency) {
        const data = await sdk.getTicker(`${currency}-${currencyItem}`);
        updatedPrices[currencyItem] = data.ask;
      } else {
        updatedPrices[currencyItem] = 1;
      }
    }

    return updatedPrices;
  } catch (error) {
    console.error("Error fetching prices:", error.message);
    throw error;
  }
};
