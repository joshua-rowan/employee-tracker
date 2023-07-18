const router = require('express').Router();
const { Employee } = require('../models');

// Route to get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve employees' });
  }
});

// Route to create a new employee
router.post('/', async (req, res) => {
  try {
    const employeeData = req.body;
    const newEmployee = await Employee.create(employeeData);
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

module.exports = router;
