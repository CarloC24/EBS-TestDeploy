const config = require("../knexfile");
const dbenv = config["development"];
module.exports = require("knex")(dbenv);
