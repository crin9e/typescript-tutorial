import { parser } from "./parser";

describe("operations are getting parsed correctly", () => {
  it("numbers and operators are getting parsed correctly", () => {
    expect(parser("2 + 2")).toEqual([2, "+", 2]);
    expect(parser("2 * 2")).toEqual([2, "*", 2]);
    expect(parser("2 * 2 - 3 / 3")).toEqual([2, "*", 2, "-", 3, "/", 3]);
  });
});
