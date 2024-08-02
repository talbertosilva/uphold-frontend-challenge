import { fetchPrices } from "../useApi.js";
import Uphold from "@uphold/uphold-sdk-javascript";

jest.mock("../useApi.js");
jest.mock("@uphold/uphold-sdk-javascript");

describe("fetchPrices", () => {
  let sdk;

  beforeEach(() => {
    Uphold.mockClear();
  });

  it("should call the sdk class constructor", () => {
    sdk = new Uphold();
    expect(Uphold).toHaveBeenCalledTimes(1);
  });

  it("should call the getTicker method on the class instance", () => {
    expect(Uphold).not.toHaveBeenCalled();

    sdk = new Uphold();
    expect(Uphold).toHaveBeenCalledTimes(1);

    sdk.getTicker();

    const mockUpholdInstance = Uphold.mock.instances[0];
    const mockGetTicker = mockUpholdInstance.getTicker;
    expect(mockGetTicker).toHaveBeenCalledTimes(1);
  });

  it("should call the getTicker method if passed a currency pair", () => {
    sdk = new Uphold();
    const pair = "USD-EUR";
    sdk.getTicker(pair);

    const mockUpholdInstance = Uphold.mock.instances[0];
    const mockGetTicker = mockUpholdInstance.getTicker;
    expect(mockGetTicker).toHaveBeenCalledWith(pair);
  });
});
