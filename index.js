const mysql = require('mysql2');
const inquirer = require('inquirer');


const promptMessages = {
    viewAllDepartments: "View All Departments",
    viewAllRoles: "View all Roles",
    viewAllEmployees: "View All Employees",
    addDepartment: "Add a Department",
    addRole: "Add A Role",
    addEmployee: "Add An Employee",
    updateRole: "Update Employee Role",
    exit: "Exit"
};

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
});

db.connect(err => {
    if (err) throw err;
    prompt();
});

function prompt() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                promptMessages.viewAllDepartments,
                promptMessages.viewAllRoles,
                promptMessages.viewAllEmployees,
                promptMessages.addDepartment, 
                promptMessages.addRole,     
                promptMessages.addEmployee,
                promptMessages.updateRole,
                promptMessages.exit
            ]
        })
        .then(answer => {
            console.log('answer', answer);
            switch (answer.action) {
                case promptMessages.viewAllDepartments:
                    viewAllDepartments();
                    break;

                case promptMessages.viewAllRoles:
                    viewAllRoles();
                    break;

                case promptMessages.viewAllEmployees:
                    viewAllEmployees();
                    break;

                case promptMessages.addDepartment:
                    addDepartment();
                    break;

                case promptMessages.addRole:
                    addRole();
                    break;

                case promptMessages.addEmployee:
                    addEmployee();
                    break;

                case promptMessages.updateRole:
                    remove('role');
                    break;

                case promptMessages.exit:
                    connection.end();
                    break;
            }
        });
}

function viewAllDepartments() {
    const query = "SELECT * FROM department";
   db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        prompt();
    });
}
function viewAllRoles() {
    const query = "SELECT * FROM role";
    db.query(query, (err, res) => {
         if (err) throw err;
         console.table(res);
         prompt();
     });

}
function viewAllEmployees() {
    const query = "SELECT * FROM employee";
    db.query(query, (err, res) => {
         if (err) throw err;
         console.table(res);
         prompt();
     });
 
}

function addDepartment() {

    inquirer.prompt({      
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
    }).then(function(answer){
        db.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            prompt()
    })
    })
}
function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the title for the role?",
          name: "roleName"
        },
        {
          type: "input",
          message: "What is the salary for the role?",
          name: "salaryTotal"
        },
        {
          type: "input",
          message: "What is the department id for the role?",
          name: "deptID"
        }
      ])
      .then(function(answer) {
  
  
        db.query("INSERT INTO role (title, salary) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.departmentID], function(err, res) {
          if (err) throw err;
          console.table(res);
          prompt();
        });
      });
  }
function addEmployee() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "employeeFirstName"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "employeeLastName"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
      }
    ])
    .then(function(answer) {

    db.query("SELECT employee (first_name, last_name, role_id, manager_id)VALUES (?, ?, ?, ?)", [answer.employeeFirstName, answer.employeeLastName, answer.roleID, answer.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        prompt();
        
        });
    });
}

function updateRole() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "Which role would you like to update?",
        name: "roleUpdate"
      },

      {
        type: "input",
        message: "What is the new salary for this role?",
        name: "updateSalary"
      }
    ])
    .then(function(answer) {
   
    db.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.eeUpdate],function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
      });
    });
}
