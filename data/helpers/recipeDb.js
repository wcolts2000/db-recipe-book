const db = require('../dbConfig');

module.exports = {
  getRecipes() {
    return db('recipes');
  },

  addRecipe(recipe) {
    return db('recipes')
      .insert(recipe)
      .then(ids => ({id: ids[0]}));
  }
}