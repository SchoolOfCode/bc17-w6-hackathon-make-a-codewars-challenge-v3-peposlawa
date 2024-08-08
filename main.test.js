import { test, expect } from 'vitest';
import { getMixingTime, checkIfDrinkAvailable, isIngredientAvailable } from './main.js';

// Test for a drink with all ingredients having defined mixing times.✅
test('getMixingTime for Mojito should return total mixing time for a drink', () => {
  expect(getMixingTime('Mojito')).toBe(`Total mixing time for Mojito will be 6 minutes.`);
});

// Test for a drink with an ingredient that has no defined mixing time.✅
test('getMixingTime for Margarita should return an error message for a drink with an ingredient that has no defined mixing time', () => {
  expect(getMixingTime('Margarita')).toBe(`Ingredient "Salt" has no defined mixing time.`);
});

// Test for a drink that is not in the drinkRecipes object.✅
test('getMixingTime should return an error message for a drink that is not in the drinkRecipes object', () => {
  expect(getMixingTime('Zombie')).toBe(`I can't calculate mixing time for "Zombie" at this moment. Come back later.`);
});

// Test for checkIfDrinkAvailable Function with all ingredients available.✅
test('checkIfDrinkAvailable should return a message indicating all ingredients are available for a drink', () => {
  expect(checkIfDrinkAvailable('Passionfruit Martini')).toBe(`All ingredients available. Would you like your Passionfruit Martini stirred or shaken?`);
});

// Test for a drink with all ingredients available.
test('checkIfDrinkAvailable should return a message indicating all ingredients are available for a drink', () => {
  expect(checkIfDrinkAvailable('Passionfruit Martini')).toBe(`All ingredients available. Would you like your Passionfruit Martini stirred or shaken?`);
});

// Test for a drink with some ingredients missing.

// Test for a drink that is not in the drinkRecipes object.

// Unit Tests for isIngredientAvailable Function:

// Test for an ingredient that is available.

// Test for an ingredient that is not available.
