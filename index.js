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

// Http methods GET PUT DELETE POST

//Read Request Handlers
// Display the message when the URL consist of '/'
app.get('/', (req,res)=>{
    res.send('Welcome to my Family!');
});

//Display the list of customer when the URL consists of api customers
app.get('/api/customers',(req,res)=>{
    res.send(customers);
});

//Display the Information of specific Customers when the URL consists of api customers.
app.get('/api/customers/:id', (req, res)=>{
    const customer = customers.find(c=>c.id === parseInt(req.params.id));
    //If there is no valid customer id the display an error with the following
    if(!customer) res.status(404).send(<h2 style= "font-family: Malgun Gothic; color: darkred;"> Ooo .... Not the part of this member.</h2>);
    res.send(customer);
});
// POST method is used to create the data.
//CREATE Request Handler
// CREATE New Customer Information
app.post('/api/customer', (req,res)=>{
    const { error } = validateCustomer(req.body);
    if (error){
        res.status(400).send(error.detail[0].message)
        return;
    }
    //Increment the customer id
    const customer= {
        id: customers.length + 1,
        title: req.body.title
    };
    customers.push(customer);
    res.send(customer);
});


// Update Request Handler
//Update the EXisting Customer Information
app.put()

// validate information.

function validateCustomer(customer){
    const schema = {
        title: joi.string().min(3).required()
    };
    return Jio.validate(customer, schema);
}






// PORT ENVIRONMENT VARIABLE

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log("listening to the port ${PORT}"));