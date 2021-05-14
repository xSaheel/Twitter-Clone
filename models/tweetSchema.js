const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    email: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: String,
        required: true,
        default: Date.toLocaleString()
    }
})

module.exports = mongoose.model('Tweet', tweetSchema);