import { mul, div, add, minus } from "./MathOperators";

describe("Math operation tests", () => {
  const number1 = Math.random();
  const number2 = Math.random();

  const resultOfMultiplication = number1 * number2;
  it(`mul ${number1} * ${number2} to equal ${resultOfMultiplication}`, () => {
    expect(mul(number1, number2)).toBe(resultOfMultiplication);
  });

  const resultOfDivision = number1 / number2;
  it(`div ${number1} / ${number2} to equal ${resultOfDivision}`, () => {
    expect(div(number1, number2)).toBe(resultOfDivision);
  });

  const resultOfSum = number1 + number2;
  it(`add ${number1} + ${number2} to equal ${resultOfSum}`, () => {
    expect(add(number1, number2)).toBe(resultOfSum);
  });

  const resultOfSubstraction = number1 - number2;
  it(`minus ${number1} - ${number2} to equal ${resultOfSubstraction}`, () => {
    expect(minus(number1, number2)).toBe(resultOfSubstraction);
  });
});
