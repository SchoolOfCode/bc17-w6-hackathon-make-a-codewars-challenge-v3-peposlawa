import { test, expect } from 'vitest';
import { getMixingTime } from './main.js';

test('getMixingTime for Mojito should return total mixing time for a drink', () => {
    expect(getMixingTime('Mojito')).toBe(`Total mixing time for Mojito will be 6 minutes.`);
  });

  test('getMixingTime for Margarita should return error about no defined mixing time', () => {
    expect(getMixingTime('Margarita')).toBe(`Ingredient 'Salt' has no defined mixing time.`);
  });

  test('getMixingTime for Zombie should return error about not being able to calculate mixing time', () => {
    expect(getMixingTime('Zombie')).toBe(`I can't calculate mixing time for 'Zombie' at this moment.`);
  });