const inquirer = require('inquirer');
const Department = require('./db/models/department');
const Role = require('./db/models/role');
const Employee = require('./db/models/employee');
const sequelize = require('./db/connection');

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
        const employees = await Employee.findAll();
        console.log('All Employees:');
        employees.forEach((employee) => {
            console.log(`ID: ${employee.id}, Name: ${employee.first_name} ${employee.last_name}`);
        });
    } catch (error) {
        console.error('Error retrieving employees:', error);
    }
}

async function init() {
    try {
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
            //function
            break;
        case 'Add Role':
            //function
            break;
        case 'View All Departments':
            //function
            break;
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
