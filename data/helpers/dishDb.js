const db = require('../dbConfig');

module.exports = {
  getDishes() {
    return db('dish');
  },

  addDish(dish) {
    return db('dish')
      .insert(dish)
      .then(ids => ({ id: ids[0]}));
  },

  getDish(id) {
    return db('dish')
      .select({
        dishName: 'dish.name',
        recipeName: 'recipes.name'
      })
      .join('recipes', 'recipes.dish_id', 'dish.id')
      .where('dish.id', id)
  }
}