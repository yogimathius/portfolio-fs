const pg = require("pg");

const client = new pg.Client({
  user: "ctnuuhzxxwhwsi",
  process.env.DBPASSWORD: "6b99459ba180ac20eba82a79c9ddbd81e59b9e3a929dfde8dcbfded506130e51",
  process.env.DB: "d45flg8j9d0dui",
  port: 5432,
  process.env.DBHOST: "ec2-18-204-101-137.compute-1.amazonaws.com",
  ssl: {rejectUnauthorized: false}
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
