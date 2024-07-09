export function fizzbuzz(number: number) {
  const fizzBuzz = [];
  for (let i = 1; i <= number; i++) {
    let value: number | string = i;
    value = evaluateFizzbuzz(i);
    fizzBuzz.push(value);
  }
  return fizzBuzz;
}

function evaluateFizzbuzz(
  number: number
): "fizzbuzz" | "fizz" | "buzz" | number {
  if (number % 3 === 0  && number % 5 === 0) {
    return "fizzbuzz";
  }
  if (number % 3 === 0) {
    return "fizz"
  }

  if (number % 5 === 0) {
    return "buzz";
  }
  return number;
}
