const inquirer = require('inquirer');
const fs = require('fs');
const { getAllEmployees, getAllDepartments, getAllRoles } = require('./dbQueries');
const Department = require('./db/models/department');
const Role = require('./db/models/role');
const Employee = require('./db/models/employee');
const sequelize = require('./db/connection');
const path = require('path');

const starterQuestion = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Delete Employee',
        ],
        name: 'choice',
    },
];

async function viewAllEmployees() {
    try {
      const employees = await getAllEmployees();
      console.log('All Employees:');
      employees.forEach((employee) => {
        console.log(`ID: ${employee.id}, Name: ${employee.first_name} ${employee.last_name}`);
      });
    } catch (error) {
      console.error('Error retrieving employees:', error);
    }
  }

  async function viewAllDepartments() {
    try {
      const departments = await getAllDepartments();
      console.log('All Departments:');
      departments.forEach((department) => {
        console.log(`ID: ${department.id}, Name: ${department.name}`);
      });
    } catch (error) {
      console.error('Error retrieving departments:', error);
    }
  }
  
  async function viewAllRoles() {
    try {
      const roles = await getAllRoles();
      console.log('All Roles:');
      roles.forEach((role) => {
        console.log(`ID: ${role.id}, Title: ${role.title}, Salary: ${role.salary}`);
      });
    } catch (error) {
      console.error('Error retrieving roles:', error);
    }
  }

async function initializeDatabase() {
    try {
        const schemaFilePath = path.join(__dirname, 'db', 'schema.sql');
        const schemaSQL = fs.readFileSync(schemaFilePath, 'utf8');
        console.log('Schem SQL:', schemaSQL);
        await sequelize.query(schemaSQL);

        const seedsFilePath = path.join(__dirname, 'db', 'seeds.sql');
        const seedsSQL = fs.readFileSync(seedsFilePath, 'utf8');
        await sequelize.query(seedsSQL);

        console.log('Database initialized.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

async function init() {
    try {
        await initializeDatabase();

        const answer = await inquirer.prompt(starterQuestion);
        switch (answer.choice) {
            case 'View All Employees':
                await viewAllEmployees();
                break;
            case 'Add Employee':
            //function
                break;
            case 'Update Employee Role':
            //function
                break;
            case 'View All Roles':
                await viewAllRoles();
                break;
            case 'Add Role':
            //function
                break;
            case 'View All Departments':
                await viewAllDepartments();
                break
            case 'Add Department':
            //function
                break;
            case 'Delete Employee':
            //function
                break;
            default:
                console.log('Invalid Choice');
        }
    } catch (error) {
        console.error(error);
    } finally {
        sequelize.close();
    }
}

init();
