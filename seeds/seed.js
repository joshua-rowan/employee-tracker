const sequelize = require('../config/connection');
const { Department, Role, Employee } = require('../models');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Create departments
    const departments = await Department.bulkCreate([
      { name: 'Administrative' },
      { name: 'Support' },
      { name: 'Talent' },
      { name: 'Sales' },
      { name: 'Legal'},
    ]);

    // Create roles
    const roles = await Role.bulkCreate([
      { title: 'Manager', salary: 125000, department_id: departments[0].id },
      { title: 'Roadie', salary: 60000, department_id: departments[1].id },
      { title: 'Singer', salary: 750000, department_id: departments[2].id },
      { title: 'Sales_Consultant', salary: 95000, department_id: departments[3].id },
      { title: 'Lawyer', salary: 115000, department_id: departments[4].id },
    ]);

    // Create employees
    await Employee.bulkCreate([
      { first_name: 'Brian', last_name: 'Epstein', role_id: roles[0].id },
      { first_name: 'Carl', last_name: 'Cables', role_id: roles[1].id, manager_id: 1 },
      { first_name: 'Axl', last_name: 'Rose', role_id: roles[2].id, manager_id: 1 },
      { first_name: 'Diana', last_name: 'Dollars', role_id: roles[3].id, manager_id: 1 },
      { first_name: 'Wendy', last_name: 'Winner', role_id: roles[4].id, manager_id: 1 },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
