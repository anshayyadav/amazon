import { formateCurrency } from "../script/ulils/money.js";

describe("test suite: formateCurrency", () => {
  it("convert cent into dollars", () => {
    expect(formateCurrency(2095)).toEqual("20.95");
  });

  it("works with 0", () => {
    expect(formateCurrency(0)).toEqual("0.00");
  });

  it("round up to the nearest cent", () => {
    expect(formateCurrency(2000.5)).toEqual("20.01");
  });
});
