import { mathOperators, mathOperatorsPriorities } from "./MathOperators";
import type { ScalarOperator } from "./MathOperators";

export const isOperator = (item: string | number): item is ScalarOperator =>
  item in mathOperators;

export const checkMathOperatorsPriorities = (
  operator: string,
  priorities: number | number[]
): boolean => {
  if (!isOperator(operator)) {
    return false;
  }

  const prioritiesForCheck = !Array.isArray(priorities)
    ? [priorities]
    : priorities;

  for (const priority of prioritiesForCheck) {
    if (mathOperatorsPriorities[operator as ScalarOperator] === priority) {
      return true;
    }
  }
  return false;
};
