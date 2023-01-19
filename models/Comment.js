const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    messageId: String, //63c81173fd65c9077f6eb682
    userName: String,
    userProfileImage: String,
    text: String,
    createdDate: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;


