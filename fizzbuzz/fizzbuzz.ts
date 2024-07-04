export function fizzbuzz(number: number) {
  const fizzBuzz = [];
  for (let i = 1; i <= number; i++) {
    let value : number | string= i;
    if (i%3 === 0) {
      value = 'fizz'
    }
    if (i%5 === 0) {
      value = 'buzz'
    }
    fizzBuzz.push(value);
  }
  return fizzBuzz;
}
