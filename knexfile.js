// Update with your config settings.

const pgSettings = {
  host: "database-1.cswncgslisak.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "people"
};

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/dev.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations"
    }
  },
  production: {
    client: "postgresql",
    connection: pgSettings,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./db/migrations"
    }
  }
};
