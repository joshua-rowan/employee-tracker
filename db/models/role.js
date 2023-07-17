const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Role extends Model {}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        salary: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'department',
            key: 'id',
            },
        },
    }, 
    {
    sequelize,
    timestamps: false,
    modelName: 'role',
    }
);

module.exports = Role;