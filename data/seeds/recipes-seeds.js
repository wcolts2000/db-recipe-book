
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'potatoes-o-brian'},
        {name: 'street tacos'},
        {name: 'egg drop soup'}
      ]);
    });
};
