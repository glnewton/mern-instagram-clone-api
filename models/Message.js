const mongoose = require('mongoose');
import Comment from './Comment.js';


const messageSchema = new mongoose.Schema({
    userName: String,
    userProfileImage: String,
    imageUrl: String,
    message: String,
    likes: Number,
    createdDate: String,
    comments: [Comment]
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
