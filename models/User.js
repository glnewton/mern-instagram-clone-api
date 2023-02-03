const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { 
        type: String,
        required: {true: "Username is required"},
        unique: true
    },
    password: {
        type: String,
        required: {true: "Password is required"},
    },
    email: {
        type: String,
        required: {true: "Email is required"},
        unique: true
    },
    profilePicture: {
        type: String,
        default: ""
    }
    // about: {
    //     type: String,
    //     max: 50
    // },
    // headline: {
    //     type: String,
    //     max: 50
    // },
    // followers: [],
    // following: [],
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // }
});

const User = mongoose.model('User', UserSchema);

module.exports = User

