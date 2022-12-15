import { isOperator } from "./helpers";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumber =
      (isOperator(prevItem) || prevItem === undefined) && !isNaN(Number(item));

    const isValidOperator = !isOperator(prevItem) && isOperator(item);

    if (isValidNumber || isValidOperator) {
      const resultedItem = isValidNumber ? Number(item) : item;
      result = [...result, resultedItem];
      return result;
    }

    throw new TypeError("Unexpected string");
  }, []);
};
