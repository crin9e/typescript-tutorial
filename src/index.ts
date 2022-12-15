import { createInterface } from "readline";
import { solveSimpleExp } from "./engine";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("> ", (expression: string) => {
      const result = solveSimpleExp(expression);

      if (result !== undefined) {
        // eslint-disable-next-line no-console
        console.log(`Result: ${result}`);
      }

      resolve(null);
    });
  });

async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
