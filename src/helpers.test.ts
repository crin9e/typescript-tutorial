import { isOperator, checkMathOperatorsPriorities } from "./helpers";

describe("test operator recognition", () => {
  it("*, /, +, - are operators", () => {
    expect(isOperator("+")).toEqual(true);
    expect(isOperator("-")).toEqual(true);
    expect(isOperator("*")).toEqual(true);
    expect(isOperator("/")).toEqual(true);
    expect(isOperator("asd")).toEqual(false);
    expect(isOperator("1")).toEqual(false);
    expect(isOperator(1)).toEqual(false);
  });
});

describe("test operator priorities", () => {
  it("* and / are first priority operations, + and - are second", () => {
    expect(checkMathOperatorsPriorities("+", 2)).toEqual(true);
    expect(checkMathOperatorsPriorities("-", 2)).toEqual(true);
    expect(checkMathOperatorsPriorities("*", 1)).toEqual(true);
    expect(checkMathOperatorsPriorities("/", 1)).toEqual(true);
    expect(checkMathOperatorsPriorities("/", 2)).toEqual(false);
  });
});
