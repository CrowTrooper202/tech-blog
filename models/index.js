const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//user has many posts
User.hasMany(Post,{
    foreignKey: 'user_id',
})

// user has many comments

User.hasMany(Comment,{
    foreignKey: 'user_id',
})

// post has many comments

Post.hasMany(Comment,{
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
})

// post has one user

Post.belongsTo(User,{
    foreignKey: 'user_id'
})

// coment has one user
Comment.belongsTo(User,{
    foreignKey: 'user_id'
})
// coment belongs to one post

Comment.belongsTo(Post,{
    foreignKey: 'Post_id'
})

module.exports = {User, Comment, Post};