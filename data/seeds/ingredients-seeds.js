
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'potatoes'},
        {name: 'bell peppers'},
        {name: 'onions'},
        {name: 'butter'},
        {name: 'oil'},
        {name: 'asada'},
        {name: 'tortillas'},
        {name: 'cilantro'},
        {name: 'eggs'},
        {name: 'chicken broth'},
        {name: 'corn starch'},
        {name: 'water'}
      ]);
    });
};
