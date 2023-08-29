const express = require('express');   //import Express.
const Joi = require('joi');  // import Joi.
const app = express();  // Create the Express application on the app variable.
app.use(express.json());     // used the json file.

// Given the data to the server.
const customers = [
    {title : 'Ishika', id:1},
    {title : 'Saurav', id:2},
    {title : 'Siya', id:3},
    {title : 'Arya', id:4},
    {title : 'Rohan', id:5}
] 

//Read Request Handlers
// Display the message when the URL consist of '/'
app.get('/', (req,res)=>{
    res.send('Welcome to my Family!');
});