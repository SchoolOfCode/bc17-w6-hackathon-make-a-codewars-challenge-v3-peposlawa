const drinkRecipes = {
  "Pina Colada": 
    ["Pineapple Juice", "Coconut Cream", "Rum", "Ice", "Cherry"],
  "Mojito": 
    ["Mint Leaves", "Lime Juice", "Rum", "Sugar", "Soda Water"],
  "Margarita": 
    ["Tequila", "Lime Juice", "Triple Sec", "Salt", "Ice"],
  "Bloody Mary": 
    ["Vodka", "Tomato Juice", "Lemon Juice", "Tabasco", "Celery"],
  "Cosmopolitan": 
    ["Vodka", "Cranberry Juice", "Lime Juice", "Triple Sec", "Orange Peel"],
  "Passionfruit Martini": 
    ["Vodka", "Passionfruit Juice", "Lime Juice", "Vanilla Syrup", "Passionfruit"],
};

const ingredientTimes = {
  "Pineapple Juice": 2,
  "Coconut Cream": 3,
  "Rum": 1,
  "Ice": 1,
  "Cherry": 1,
  "Mint Leaves": 1,
  "Lime Juice": 2,
  "Sugar": 1,
  "Soda Water": 1,
  "Tequila": 2,
  "Triple Sec": 1,
  "Salt": 0,
  "Vodka": 1,
  "Tomato Juice": 3,
  "Lemon Juice": 2,
  "Tabasco": 1,
  "Celery": 1,
  "Cranberry Juice": 2,
  "Orange Peel": 1,
  "Passionfruit Juice": 2,
  "Vanilla Syrup": 1,
  "Passionfruit": 2,
};

const availableIngredients = [
  "Pineapple Juice",
  "Coconut Cream",
  // "Rum",
  "Ice",
  "Cherry",
  "Mint Leaves",
  "Lime Juice",
  "Sugar",
  "Soda Water",
  "Tequila",
  "Triple Sec",
  "Salt",
  "Vodka",
  "Tomato Juice",
  "Lemon Juice",
  "Tabasco",
  "Celery",
  "Cranberry Juice",
  "Orange Peel",
  "Passionfruit Juice",
  "Vanilla Syrup",
  "Passionfruit",
];

// Function to calculate mixing time for drinks
function getMixingTime(drink) {
  const ingredients = drinkRecipes[drink];
  if (!ingredients) { 
    return `I can't calculate mixing time for "${drink}" at this moment. Come back later.`;
  }

  let totalMixingTime = 0;

  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    if (ingredientTimes[ingredient]) {
      totalMixingTime += ingredientTimes[ingredient];
    } else {
      return `Ingredient "${ingredient}" has no defined mixing time.`;
    }
  }

  return `Total mixing time for ${drink} will be ${totalMixingTime} minutes.`;
}

// Function to check if drink is available to make by checking ingredients
function checkIfDrinkAvailable(drink) {
  const ingredients = drinkRecipes[drink];
  if (!ingredients) {
    return `${drink} is not available in our menu yet.`;
  }

  const missingIngredients = [];
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    if (!availableIngredients.includes(ingredient)) {
      missingIngredients.push(ingredient);
    }
  }

  if (missingIngredients.length === 0) {
    return `All ingredients available. Would you like your ${drink} stirred or shaken?`;
  } else {
    return `Unfortunately you won't be drinkin' ${drink} tonight as there is no ${missingIngredients.join(", ")}.`;
  }
}

// Function to check if ingredient is available in the bar
function isIngredientAvailable(ingredient) {
  if (availableIngredients.includes(ingredient)) {
    return `Yes, ${ingredient} is available.`;
  } else {
    return `Sorry, ${ingredient} is not available.`;
  }
}

// Exporting functions to be used in main.test.js
export { getMixingTime, checkIfDrinkAvailable, isIngredientAvailable };

// checking mixing time for drinks
console.log(getMixingTime("Pina Colada")); // Total mixing time for Pina Colada will be 8 minutes✅
console.log(getMixingTime("Unknown")); // Drink not found✅
console.log(getMixingTime("Margarita")); // Salt has no defined mixing time so it will return error message✅

// checking if drink is available by checking ingredients
console.log(checkIfDrinkAvailable("Passionfruit Martini")); // All ingredients available
console.log(checkIfDrinkAvailable("Zombie")); // Not available yet
console.log(checkIfDrinkAvailable("Pina Colada")); // Missing Rum

// checking if ingredient is available in the bar
console.log(isIngredientAvailable("Rum")); // No, Rum is not available
console.log(isIngredientAvailable("Vodka")); // Yes, Vodka is available
console.log(isIngredientAvailable("Chocolate")); // No, Chocolate is not available