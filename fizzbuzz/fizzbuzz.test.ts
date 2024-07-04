import { describe, expect, it } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

// fizzbuzz(15) => 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

// if multiple de 3 print fizz
// if multiple de 5 print buzz
// if multiple de 3 and 5 print fizzbuzz

describe("fizzbuzz", () => {
  it("fizzbuzz(1) should return an array with 1", () => {
    expect(fizzbuzz(1)).toEqual([1]);
  });

  it("fizzbuzz(2) should return an array with 1,2", () => {
    expect(fizzbuzz(2)).toEqual([1, 2]);
  });

  it("fizzbuzz(3) should return an array with 1,2,fizz", () => {
    expect(fizzbuzz(3)).toEqual([1, 2, "fizz"]);
  });

  it("fizzbuzz(4) should return an array with 1,2,fizz, 4", () => {
    expect(fizzbuzz(4)).toEqual([1, 2, "fizz", 4]);
  });

  it("fizzbuzz(5) should return an array with 1,2,fizz,4,buzz", () => {
    expect(fizzbuzz(5)).toEqual([1, 2, "fizz", 4, "buzz"]);
  });

  it("fizzbuzz(6) should return an array with 1,2,fizz,4,buzz,fizz", () => {
    expect(fizzbuzz(6)).toEqual([1, 2, "fizz", 4, "buzz", "fizz"]);
  });

  it("fizzbuzz(9) should return an array with 1,2,fizz,4,buzz,fizz, 7,8,fizz", () => {
    expect(fizzbuzz(9)).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
    ]);
  });

  it("fizzbuzz(15) should return an array with 1,2,fizz,4,buzz,fizz, 7,8,fizz, buzz, 11, fizz, 13, 14, fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);
  });
});
