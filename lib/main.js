const inquirer = require("inquirer");
const consoleTable = require("console.table");

function initialize() {
  inquirer
    .prompt({
      name: "mainMenu",
      action: "list",
      message: "Main Menu",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Update Employee Role",
      ],
    })
    .then((response) => {
      console.log(response);
    });
}

module.exports = initialize();
