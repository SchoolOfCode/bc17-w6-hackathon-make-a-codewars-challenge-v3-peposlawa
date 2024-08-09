import { test, expect } from 'vitest';
import { getMixingTime } from './main.js';

test('getMixingTime for Mojito should return total mixing time for a drink', () => {
    expect(getMixingTime('Mojito')).toBe(`Total mixing time for Mojito will be 6 minutes.`);
  });