const pg = require("pg");

console.log('env: ', process.env.DATABASE_URL);
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: {
    rejectUnauthorized: false
  }
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
