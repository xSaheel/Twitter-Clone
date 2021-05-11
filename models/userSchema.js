const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('User', userSchema);