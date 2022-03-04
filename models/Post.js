const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
    //post title, content
    {
        post_title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: 'id'
            }
        }
    },
    {
        sequelize

    }

)

module.exports = Post;