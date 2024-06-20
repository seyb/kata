import { expect, it } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

// fizzbuzz(1) => 1
// fizzbuzz(2) => 1, 2
// fizzbuzz(3) => 1, 2, fizz
// fizzbuzz(4) => 1, 2, fizz, 4
// fizzbuzz(5) => 1, 2, fizz, 4, buzz
// fizzbuzz(6) => 1, 2, fizz, 4, buzz, fizz
// fizzbuzz(9) => 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
// fizzbuzz(15) => 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

// if multiple de 3 print fizz
// if multiple de 5 print buzz
// if multiple de 3 and 5 print fizzbuzz

it("fizzbuzz(1) should return 1", () => {
  expect(fizzbuzz(1)).toBe(1);
});
