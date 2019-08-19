exports.up = async function(knex, Promise) {
  return await knex.schema.createTable("person", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
  });
};

exports.down = async function(knex, Promise) {
  return await knex.schema.dropTable("person");
};

exports.config = { transaction: false };
