// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection.js');

// class Models extends Model {}

// Models.init(
//     {
//         //content
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         model_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         brand_id:{
//             type: DataTypes.INTEGER,
//             references: {
//                 model: "brands",
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         underscored: true,
//         modelName: 'models',
//         freezeTableName: true,
//     }
// )

// module.exports = Models;