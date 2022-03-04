const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Models extends Model {}

Models.init(
    {
        //content
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        modelName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brandId:{
            type: DataTypes.INTEGER,
            references: {
                model: "Brands",
                key: 'id'
            }
        }
    },
    {
        sequelize
    }
)

module.exports = Models;