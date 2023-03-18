const pg = require("pg");

const client = new pg.Client({
  user: "hnciykslpjiycc",
  password: "eed28cee8fc12fa9bf1b40b151c2b0482c3af8846794755f575d953829d02d4b",
  database: "d3scjafqtb7gdj",
  host: "ec2-3-93-160-246.compute-1.amazonaws.com",
  ssl: {rejectUnauthorized: false}
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
