
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1.0, measureType: "cup"},
        {recipe_id: 1, ingredient_id: 1, quantity: 1.0, measureType: "cup"},
        {recipe_id: 1, ingredient_id: 1, quantity: 1.0, measureType: "cup"}
      ]);
    });
};
