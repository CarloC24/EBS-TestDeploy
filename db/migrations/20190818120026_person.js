exports.up = function(knex, Promise) {
  return knex.schema.createTable("person", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("person");
};
