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
  
  function getMixingTime(drink) {
    const ingredients = drinkRecipes[drink];
    if (!ingredients) {
      return `I can't calculate mixing time for "Zombie" at this moment. Come back later.`;
    }
  
    let totalMixingTime = 0;
  
    for (let i = 0; i < ingredients.length; i++) {
      const ingredient = ingredients[i];
      if (ingredientTimes[ingredient] !== undefined) {
        totalMixingTime += ingredientTimes[ingredient];
      } else {
        return `Ingredient "${ingredient}" has no defined mixing time.`;
      }
    }
  
    return `Total mixing time for ${drink} will be ${totalMixingTime} minutes.`;
  }
  
  export { getMixingTime };