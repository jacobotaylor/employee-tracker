const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const connect = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },
    `you can now view all your employees`
  );
  
  const promptChoice = () => {
    inquirer.prompt([
          {
            name: 'choices',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
              'View All Employees',
              'View All Roles',
              'View All Departments',
              'Add Employee',
              'Add Role',
              'Add Department',
              'Remove Employee',
              'Remove Role',
              'Remove Department',
              'Update Employee',
              'Exit'
              ]
          }
        ])
        .then((answers) => {
            const {choices} = answers;
      
              if (choices === 'View All Employees') {
                  getEmployees();
              }
      
              if (choices === 'View All Roles') {
                getRoles();
            }
              if (choices === 'View All Departments') {
                getDepartments();
            }
      
              if (choices === 'Add Employee') {
                  addEmployee();
              }
              
              if (choices === 'Add Role') {
                  addRole();
              }
              
              if (choices === 'Add Department') {
                  addDepartment();
              }

              if (choices === 'Remove Employee') {
                  removeEmployee();
              }
      
              if (choices === 'Remove Role') {
                  removeRole();
              }
      
              if (choices === 'Remove Department') {
                  removeDepartment();
              }
              if (choices === 'Update Employee') {
                  updateEmployee();
              }
      
              if (choices === 'Exit') {
                  connection.end();
              }
        });
      };

      
      getDepartments = () => {
          console.log('Showing departments');
          const sql = `SELECT department.id AS id, department.name AS department FROM department`; 
          
          connection.promise().query(sql, (err, rows) => {
              if (err) throw err;
              console.table(rows);
              promptUser();
            });
        };
        getRoles = () => {
            console.log('Showing roles');
            const sql = `SELECT role.id, role.title, department.name AS department
            FROM role INNER JOIN department ON role.department_id = department.id`; 
            
            connection.promise().query(sql, (err, rows) => {
                if (err) throw err;
                console.table(rows);
                promptUser();
            });
        };
        
        getEmployees = () => {
            console.log('Showing employees');
            const sql = `SELECT employee.id, 
            employee.first_name, 
            employee.last_name, 
            role.title, 
            department.name AS department,
            role.salary, 
            CONCAT (manager.first_name, " ", manager.last_name) AS manager
            FROM employee
            LEFT JOIN role ON employee.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            LEFT JOIN employee manager ON employee.manager_id = manager.id`;
            connection.promise().query(sql, (err, rows) => {
                if (err) throw err;
                console.table(rows);
                promptUser();
            });
        };

        const addEmployee = () => {
          inquirer
            .prompt([
              {
                message: "what is the employee's first name?",
                name: "first_name",
              },
              {
                message: "what is the employee's last name?",
                name: "last_name",
              },
              {
                message: "what is the employee's role?",
                name: "role_id",
              },
              {
                message: "who is the employee's manager?",
                name: "manager_id",
              },
            ])
            .then((answers) => {
              const { first_name, last_name, role_id, manager_id } = answers;
              db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}')`,
                (err, result) => {
                  if (result) console.table(result)
                });
        
              init();
            })
        };
        const addRole = () => {
          inquirer
            .prompt([
              {
                message: "what is the title of the role?",
                name: "title",
              },
              {
                message: "how much do they make?",
                name: "salary",
              },
              {
                message: "which department does the role belong to",
                name: "department_id",
              },
            ])
            .then((answers) => {
              const { first_name, last_name, role_id, manager_id } = answers;
              db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES ('${first_name}', '${last_name}', '${role_id}', '${manager_id}')`,
                (err, result) => {
                  if (result) console.table(result)
                });
        
              init();
            })
        };