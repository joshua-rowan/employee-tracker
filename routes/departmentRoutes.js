const router = require('express').Router();
const { Department } = require('../models');

// Route to get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve departments' });
  }
});

// Route to create a new department
router.post('/', async (req, res) => {
  try {
    const departmentData = req.body;
    const newDepartment = await Department.create(departmentData);
    res.status(201).json(newDepartment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create department' });
  }
});

module.exports = router;
