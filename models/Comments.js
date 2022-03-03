const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comments extends Model {}

Comments.init(
    {
        //content
        comment_content: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
    }
)

module.exports = Comments;