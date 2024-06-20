import {expect, it} from 'vitest';
import {toto} from './index';

it('fails', () => {
  expect(toto()).toBe(false);
})
