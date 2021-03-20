const pg = require("pg");
console.log(process.env.DBHOST);
const client = new pg.Client({
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DB,
  port: 5432,
  host: process.env.DBHOST,
  ssl: {rejectUnauthorized: false}
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
