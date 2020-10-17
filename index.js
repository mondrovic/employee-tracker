const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connectionProperties = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "admin123",
  database: "tracker_db",
};

const connection = mysql.createConnection(connectionProperties);

connection.connect((err) => {
  if (err) throw err;

  console.log(`
  ************************
  ****EMPLOYEE TRACKER****
  ************************
  `);
});
