const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db');

dotenv.config({ path: './database/config.env' });

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());

const tweetsRouter = require('./routes/tweets');
const usersRouter = require('./routes/users');

app.use('/tweets', tweetsRouter);
app.use('/users', usersRouter);

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port: ${PORT}`));