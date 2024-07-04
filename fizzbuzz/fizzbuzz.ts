export function fizzbuzz(number: number) {
  const fizzBuzz = [];
  for (let i = 1; i <= number; i++) {
    fizzBuzz.push(i % 3 ? i : "fizz");
  }
  return fizzBuzz;
}
