const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Brands = require('./Brands');


// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE' // post deleted, comment should be as well 
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE'
// });

// User -> Post
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

// User -> Comment
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

// Post -> Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Brands.hasMany(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})


module.exports = {User, Post, Comment, Brands}

