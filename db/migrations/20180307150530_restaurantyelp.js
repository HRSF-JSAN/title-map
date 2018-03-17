const DOLLARSIGNS = ['$', '$$', '$$$', '$$$$', '$$$$$'];

exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('restaurant', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.integer('rating');
      table.enu('price', DOLLARSIGNS);
    }),
    knex.schema.createTable('address', (table) => {
      table.increments('id');
      table.string('address');
      table.string('image');
      table.string('phonenumber');
      table.integer('id_restaurant').references('restaurant.id');
    }),
    knex.schema.createTable('types', (table) => {
      table.increments('id').primary();
      table.string('type');
    }),
    knex.schema.createTable('restaurant_types', (table) => {
      table.integer('id_types').references('types.id');
      table.integer('id_restaurant').references('restaurant.id')
    }),
  ])
);

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('restaurant'),
    knex.schema.dropTable('address'),
    knex.schema.dropTable('types'),
    knex.schema.dropTable('restaurant_types'),
  ])
);
