const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userName: String,
    userProfileImage: String,
    imageUrl: String,
    message: String,
    likes: Number,
    createdDate: String,
    comments: Number
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
