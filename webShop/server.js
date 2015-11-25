//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');

//MongoDb (MongoLab)
mongoose.connect('mongodb://Vytautas:keksinas@ds054298.mongolab.com:54298/products');


//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//Start server
app.listen(3000);
console.log('API is running on pore 3000');