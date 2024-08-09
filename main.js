// Hi there! Your task is to implement the function getMixingTime. This function should take a drink name as an argument and return a string with the total mixing time for that drink. The total mixing time is the sum of the mixing times for all the ingredients in the drink. If an ingredient has no defined mixing time, the function should return a string saying so. If the drink is not in the drinkRecipes object, the function should return a string saying that it can't calculate the mixing time for that drink at this moment.

const drinkRecipes = {
    "Pina Colada": ["Pineapple Juice", "Coconut Cream", "Rum", "Ice", "Cherry"],
    "Mojito": ["Mint Leaves", "Lime Juice", "Rum", "Sugar", "Soda Water"],
    "Margarita": ["Tequila", "Lime Juice", "Triple Sec", "Salt", "Ice"],
    "Bloody Mary": ["Vodka", "Tomato Juice", "Lemon Juice", "Tabasco", "Celery"],
    "Cosmopolitan": ["Vodka", "Cranberry Juice", "Lime Juice", "Triple Sec", "Orange Peel"],
    "Passionfruit Martini": ["Vodka", "Passionfruit Juice", "Lime Juice", "Vanilla Syrup", "Passionfruit"],
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
  
// Implement the function getMixingTime
function getMixingTime(drink) {
  // Your code here
}

// Do not remove or change this line, or the tests won't work
export { getMixingTime };

// Example usage of the function
getMixingTime('Mojito'); // Should return: "Total mixing time for Mojito will be 6 minutes."
getMixingTime('Margarita'); // Should return: "Ingredient 'Salt' has no defined mixing time."
getMixingTime('Zombie'); // Should return: "I can't calculate mixing time for 'Zombie' at this moment"