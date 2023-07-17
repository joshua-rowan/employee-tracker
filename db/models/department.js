const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Department extends Model {}

Department.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    modelName: 'department',
});

module.exports = Department;