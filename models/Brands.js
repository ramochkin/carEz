const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Brands extends Model {}

Brands.init(
    {
        //content
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        brand_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'brands',
        freezeTableName: true,
        
    }
)

module.exports = Brands;