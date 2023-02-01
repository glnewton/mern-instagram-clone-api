// import moment from 'moment';

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userName: String,
    userProfileImage: String,
    imageUrl: String,
    message: String,
    createdDate: String,
    likes: { type: Number, default: 0},
    comments: { type: Number, default: 0}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
