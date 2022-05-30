const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const authRoute = require('./route/auth')

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true },
    () => console.log('Database Connected'));

    app.use(express.json())

    app.use('/api/user' ,authRoute) 





app.listen(3000, () => console.log('Server Up and Running'));