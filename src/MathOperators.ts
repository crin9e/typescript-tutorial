export type MathOperationType = (first: number, second: number) => number;

export const mul: MathOperationType = (first, second) => first * second;

export const div: MathOperationType = (first, second) => first / second;

export const add: MathOperationType = (first, second) => first + second;

export const minus: MathOperationType = (first, second) => first - second;

export type ScalarOperator = "*" | "/" | "+" | "-";

export const mathOperators: {
  [key in ScalarOperator]: MathOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathOperatorsPriorities: {
  [key in ScalarOperator]: number;
} = {
  "*": 1,
  "/": 1,
  "+": 2,
  "-": 2,
};
