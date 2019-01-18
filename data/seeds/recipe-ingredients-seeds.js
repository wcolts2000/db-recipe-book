
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 2.0, measureType: "whole"},
        {recipe_id: 1, ingredient_id: 2, quantity: 1.0, measureType: "whole"},
        {recipe_id: 1, ingredient_id: 3, quantity: 1.0, measureType: "whole"},
        {recipe_id: 1, ingredient_id: 4, quantity: 2.0, measureType: "tbsp"},
        {recipe_id: 1, ingredient_id: 5, quantity: 2.0, measureType: "tbsp"},
        {recipe_id: 2, ingredient_id: 6, quantity: 0.5, measureType: "lbs"},
        {recipe_id: 2, ingredient_id: 7, quantity: 1.0, measureType: "package"},
        {recipe_id: 2, ingredient_id: 3, quantity: 1.0, measureType: "whole"},
        {recipe_id: 2, ingredient_id: 5, quantity: 2.0, measureType: "tbsp"},
        {recipe_id: 2, ingredient_id: 8, quantity: 1.0, measureType: "sprig"},
        {recipe_id: 3, ingredient_id: 9, quantity: 2.0, measureType: "whole"},
        {recipe_id: 3, ingredient_id: 10, quantity: 2.0, measureType: "cup"},
        {recipe_id: 3, ingredient_id: 11, quantity: 1.0, measureType: "tbsp"},
        {recipe_id: 3, ingredient_id: 12, quantity: 0.25, measureType: "cup"},
        {recipe_id: 3, ingredient_id: 13, quantity: 1.0, measureType: "stalk"}
      ]);
    });
};
