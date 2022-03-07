const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
    //post title, content
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        // },
        post_title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "user",
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        // underscored: true,
        // modelName: 'post',
        // freezeTableName: true,

    }

)

module.exports = Post;