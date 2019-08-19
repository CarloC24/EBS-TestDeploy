exports.up = function(knex, Promise) {
  return knex.schema.createTable("person", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("person");
};

exports.config = { transaction: false };
