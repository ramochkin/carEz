const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Posts extends Model {}

Posts.init(
    //post title, content
    {
        post_title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize
    }

)

module.exports = Posts;