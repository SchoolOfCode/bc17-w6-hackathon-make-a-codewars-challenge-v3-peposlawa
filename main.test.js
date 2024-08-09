// This file is for testing functions in main.js file.
// You can run the tests by running `npm test` in the terminal.
// There are three tests available below for the getMixingTime function.

import { test, expect } from "vitest";
import { getMixingTime } from "./main.js";

// test 1 - getMixingTime for Mojito should return total mixing time for a drink
test("getMixingTime for Mojito should return total mixing time for a drink", () => {
  expect(getMixingTime("Mojito")).toBe(
    `Total mixing time for Mojito will be 6 minutes.`
  );
});

// test 2 - getMixingTime for Margarita should return error about no defined mixing time
test("getMixingTime for Margarita should return error about no defined mixing time", () => {
  expect(getMixingTime("Margarita")).toBe(
    `Ingredient 'Salt' has no defined mixing time.`
  );
});

// test 3 - getMixingTime for Zombie should return error about not being able to calculate mixing time because drink is not in the drinkRecipes object (does not exist)
test("getMixingTime for Zombie should return error about not being able to calculate mixing time", () => {
  expect(getMixingTime("Zombie")).toBe(
    `I can't calculate mixing time for 'Zombie' at this moment.`
  );
});
 