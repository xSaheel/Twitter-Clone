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
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Tweet', tweetSchema);