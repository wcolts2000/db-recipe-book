
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe-ingredients', function(tbl) {
    tbl.increments();

    tbl.integer('recipe_id').unsigned().references('id').inTable('recipe');
    tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredient')


    tbl.float('quantity');
    tbl.string('measureType', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe-ingredients');
};
