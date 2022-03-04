const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Brands extends Model {}

Brands.init(
    {
        //content
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        brandName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize
    }
)

module.exports = Brands;