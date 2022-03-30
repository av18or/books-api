// Require Express, Mongoose, and dotenv: 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// Initiate the app variable: 
const app = express();


//middleware
app.use(express.json());

//Basic Express server.
// root index route with some text
app.get('/', (req,res) => {
    res.send('This is a test API');
});






//Listen on port:
app.listen(process.env.PORT);