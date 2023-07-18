const Employee = require('./db/models/employee');
const Department = require('./db/models/department');
const Role = require('./db/models/role');

async function getAllEmployees() {
  try {
    const employees = await Employee.findAll();
    return employees;
  } catch (error) {
    throw new Error('Error retrieving employees:', error.message);
  }
}

async function getAllDepartments() {
  try {
    const departments = await Department.findAll();
    return departments;
  } catch (error) {
    throw new Error('Error retrieving departments:', error);
  }
}

async function getAllRoles() {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (error) {
    throw new Error('Error retrieving roles:', error);
  }
}

module.exports = {
  getAllEmployees,
  getAllDepartments,
  getAllRoles,
};
