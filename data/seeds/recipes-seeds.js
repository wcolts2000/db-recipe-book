
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'potatoes-o-brian', instructions: "dice potatoes, bell peppers and, onions. add oil an butter to hot pan. add ingredients and stir regularly until browned to taste. season to taste", dish_id: 1},
        {name: 'street tacos', instructions: "cook asada in pan with oil, slice onions and cilantro, brown tortillas in pan, assemble and enjoy", dish_id: 2},
        {name: 'egg drop soup', instructions: "bring chicken broth to mild boil in pot. slowly stir in egg and diced green onion stalk, mix quarter cup water and 1 tbsp corn starch and slowly stir into pot. continue stirring, reduce heat, simmering and stirring until becomes slightly thick", dish_id: 3}
      ]);
    });
};
