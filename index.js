const mysql = require("mysql2");
const promisesql = require("promise-mysql");
const inquirer = require("inquirer");

// establish promise
const promiseConnection = promisesql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "tracker_db",
});

// regular connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "tracker_db",
});

connection.connect((err) => {
  if (err) throw err;

  console.log(`
  ************************
  ****EMPLOYEE TRACKER****
  ************************
  `);

  initialize();
});

// ********* INITIALIZE SCRIPT ************
function initialize() {
  inquirer
    .prompt({
      name: "mainMenu",
      type: "list",
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
      switch (response.mainMenu) {
        case "View All Departments":
          console.log("\n");
          viewAllDept();
          break;
        case "View All Roles":
          console.log("\n");
          viewAllRoles();
          break;
        case "View All Employees":
          console.log("\n");
          viewAllEmpl();
          break;
        case "Add a Department":
          console.log("\n");
          addDept();
          break;
        case "Add a Role":
          console.log("\n");
          addRole();
          break;
        case "Update Employee Role":
          console.log("Update Employee Role");
          break;
      }
    });
}

// **** VIEW DEPARTMENT ****
function viewAllDept() {
  let sql = `SELECT * FROM department`;
  promiseConnection.then((connect) => {
    connect.query(sql, (err, res) => {
      console.table(res);
      initialize();
    });
  });
}

// **** VIEW ROLES ****
function viewAllRoles() {
  let sql = `SELECT * FROM role`;
  promiseConnection.then((connect) => {
    connect.query(sql, (err, res) => {
      console.table(res);
      initialize();
    });
  });
}

// **** VIEW EMPLOYEES ****
function viewAllEmpl() {
  let sql = `SELECT * FROM employee`;
  promiseConnection.then((connect) => {
    connect.query(sql, (err, res) => {
      console.table(res);
      initialize();
    });
  });
}

// **** ADD DEPARTMENT ****
function addDept() {
  inquirer
    .prompt({
      // get department name. Validate for input.
      name: "newDept",
      type: "input",
      message: "Add a new department name: ",
      validate: (deptInput) => {
        if (deptInput) {
          return true;
        } else {
          console.log("New department name: ");
          return false;
        }
      },
    })
    .then((res) => {
      connection.query(
        `INSERT INTO department (name) VALUES ("${res.newDept}");`,
        (err, res) => {
          if (err) return err;
          console.log("Department successfully added\n");
          initialize();
        }
      );
    });
}

// **** ADD ROLE ****
function addRole() {
  // add array to choose from department
  let deptArr = [];

  // sets up promise connection to get department names for later choice
  promiseConnection
    .then((connect) => {
      return connect.query(`SELECT id, name FROM department`);
    })
    // returns department names and id to the array for later choice
    .then((dept) => {
      for (i = 0; i < dept.length; i++) {
        deptArr.push({
          name: dept[i].name,
          id: dept[i].id,
        });
      }
    })
    .then((dept) => {
      inquirer
        .prompt([
          {
            name: "roleTitle",
            type: "input",
            message: "Role Title: ",
            validate: (roleInput) => {
              if (roleInput) {
                return true;
              } else {
                console.log("Please input a role");
                return false;
              }
            },
          },
          {
            name: "roleSalary",
            type: "input",
            message: "Role Salary: ",
            validate: (salaryInput) => {
              if (salaryInput) {
                return true;
              } else {
                console.log("Please input a salary");
                return false;
              }
            },
          },
          {
            name: "roleDept",
            type: "list",
            message: "Department",
            choices: deptArr,
          },
        ])
        .then((res) => {
          console.log(res);
          let deptId;

          // finds id for department
          for (i = 0; i < deptArr.length; i++) {
            if (res.roleDept == deptArr[i].name) {
              deptId = deptArr[i].id;
            }
          }

          // adds to DB table. title in quotes in case of spaces
          connection.query(
            `
            INSERT INTO role (title, salary, department_id)
            VALUES ("${res.roleTitle}", ${res.roleSalary}, ${deptId})`,

            (err, res) => {
              if (err) return err;
              console.log("Role successfully added\n");
              initialize();
            }
          );
        });
    });
}

// **** UPDATE EMPLOYEE ****
function updateEmpl() {}
