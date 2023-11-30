// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const host = env("DB_HOST");
  const port = env("DB_PORT");
  const database = env("DB_NAME");
  const user = env("DB_USERNAME");
  const password = env("DB_PASSWORD");

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: false,
      },
      debug: false,
    },
  };
};
