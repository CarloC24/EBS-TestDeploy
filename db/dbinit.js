const config = require("../knexfile");
const dbenv = config["production"];
module.exports = require("knex")(dbenv);
