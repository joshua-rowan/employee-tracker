const router = require('express').Router();
const { Role } = require('../models');

// Route to get all roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve roles' });
  }
});

// Route to create a new role
router.post('/', async (req, res) => {
  try {
    const roleData = req.body;
    const newRole = await Role.create(roleData);
    res.status(201).json(newRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create role' });
  }
});

module.exports = router;
