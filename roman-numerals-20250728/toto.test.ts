import {expect, it} from 'vitest';

function roman(number: number) {
  return 'I'
}

it('roman of 1 returns I', () => {
  expect(roman(1)).toBe('I');
})
