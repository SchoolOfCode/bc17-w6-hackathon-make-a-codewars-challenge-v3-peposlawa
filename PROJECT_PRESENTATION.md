## Project Details

**Room:** 18 <br>
**Name:** Paulina Szymkiewicz <br>
**Link:** [Link To GitHub Repository](https://github.com/SchoolOfCode/bc17-w6-hackathon-make-a-codewars-challenge-v3-peposlawa.git) <br>
**Overview:** Your task is to implement the function `getMixingTime` which should calculate the total mixing time for a given drink based on the ingredients and their mixing times.

## Coding Kata Challenge

Hi there! <br><br>
Your task is to implement the function `getMixingTime`.

- This function should take a `(drink)` name as an argument and return a string with the total mixing time for that drink.
- The total mixing time is the sum of the mixing times for all the ingredients in the drink.

Now... If an ingredient has no defined mixing time, the function should return a string saying so. If the drink is not in the `drinkRecipes` object, the function should return a string saying that it can't calculate the mixing time for that drink at this moment.

<details>
  <summary>Got super stuck? Click here for an example solution!</summary>

### Javascript

```javascript
function getMixingTime(drink) { // Function to calculate mixing time for drinks
  const ingredients = drinkRecipes[drink]; // Get ingredients for the drink from drinkRecipes object
  if (!ingredients) { // If drink is not found in drinkRecipes object, return error message
    return `I can't calculate mixing time for "Zombie" at this moment.`;
  }

  let totalMixingTime = 0; // Initialize totalMixingTime variable to start at 0
  for (let i = 0; i < ingredients.length; i++) { // Loop through each ingredient in the ingredients array
    const ingredient = ingredients[i]; // Get the ingredient from the array at index i (which means the current ingredient in the loop)
    if (ingredientTimes[ingredient] !== undefined) { // If the ingredient has a defined mixing time in the ingredientTimes object
      totalMixingTime += ingredientTimes[ingredient]; // Add the mixing time of the ingredient to the totalMixingTime variable to calculate the total mixing time
    } else { // If the ingredient does not have a defined mixing time in the ingredientTimes object return error message
      return `Ingredient "${ingredient}" has no defined mixing time.`;
    }
  } // If all ingredients have defined mixing time, return the total mixing time for the drink
  return `Total mixing time for ${drink} will be ${totalMixingTime} minutes.`;
}
```

</details>