const inquirer = require('inquirer');
const Department = require('./db/models/department');
const Role = require('./db/models/role');
const Employee = require('./db/models/employee');
const sequelize = require('./db/connection');

const starterQuestion = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['viewAllEmployees', 'addEmployee', 'updateEmployeeRole', 'viewAllRoles', 'addRole', 'viewAllDepartments', 'addDepartment', 'deleteEmployee'],
    },
];

async function init() {
    try {
    const answer = await inquirer.prompt(questions);
    switch (answer.choice) {
        case 'viewAllEmployees':
            //function
            break;
        case 'addEmployee':
            //function
            break;
        case 'updateEmployeeRole':
            //function
            break;
        case 'viewAllRoles':
            //function
            break;
        case 'addRole':
            //function
            break;
        case 'viewAllDepartments':
            //function
            break;
        case 'addDepartment':
            //function
            break;
        case 'deleteEmployee':
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
