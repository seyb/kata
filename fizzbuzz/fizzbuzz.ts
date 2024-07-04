export function fizzbuzz(number: number) {
  const fizzBuzz = [];
  for (let i = 1; i <= number; i++) {
    let value: number | string = i;
    value = evaluateFizzbuzz(i);
    fizzBuzz.push(value);
  }
  return fizzBuzz;
}

function isMultipleOf3(number: number): boolean {
  return number % 3 === 0;
}

function isMultipleOf5(number: number): boolean {
  return number % 5 === 0;
}

function fizz(number: number): "fizz" | number {
  return isMultipleOf3(number) ? "fizz" : number;
}

function buzz(number: number): "buzz" | number {
  return isMultipleOf5(number) ? "buzz" : number;
}

function isFizz(number: number): boolean {
  return fizz(number) === "fizz";
}

function isBuzz(number: number): boolean {
  return buzz(number) === "buzz";
}

function evaluateFizzbuzz(
  number: number
): "fizzbuzz" | "fizz" | "buzz" | number {
  if (isFizz(number) && isBuzz(number)) {
    return "fizzbuzz";
  }
  if (isFizz(number)) {
    return fizz(number);
  }
  return buzz(number);
}
