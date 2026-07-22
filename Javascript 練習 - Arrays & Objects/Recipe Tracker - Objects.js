const recipes = [];

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
}
const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
}

const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
}

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(recipe) {
    return recipe.length;
}

function getDifficultyLevel(time) {
    if (time <=30)   {
        return "easy";
    } else if (time > 30 && time <= 60) {
        return "medium";
    } else {
        return "hard";
    }   
}

let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime)
recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

let recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
let recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime)
recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;

let recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
let recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime)
recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;

console.log(recipes);

