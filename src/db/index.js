const pg = require("pg");

const client = new pg.Client({
  user: "rpbknqnretiivu",
  password: "72b7a432a18b760e3c378527edc173e913ca8bfb5b2e304021e01ac63e30d872",
  database: "d78dek7upeoe0a",
  host: "ec2-3-230-24-12.compute-1.amazonaws.com",
  ssl: {rejectUnauthorized: false}
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
