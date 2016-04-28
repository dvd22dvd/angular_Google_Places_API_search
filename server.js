// Require the Express Module
var express = require("express");
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");

// Require path
var path = require("path");
// Integrate body-parser with JSON
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client')));


require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes.js');
routes_setter(app);



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})