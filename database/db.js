const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = mongoose.connect(process.env.MONGO_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB connected");
}

module.exports = connectDB;
