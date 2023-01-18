const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userName: String,
    imageUrl: String,
    message: String,
    createdDate: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
