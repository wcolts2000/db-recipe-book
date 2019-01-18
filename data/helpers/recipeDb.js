const db = require('../dbConfig');

module.exports = {
  getRecipes() {
    return db('recipes')
    .select({
      recipe: 'recipes.name',
      dish: 'dish.name'
    })
    .join('dish', 'dish.id', 'recipes.dish_id')
  },

  addRecipe(recipe) {
    return db('recipes')
      .insert(recipe)
      .then(ids => ({id: ids[0]}));
  }
}