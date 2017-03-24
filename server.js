// =========== REQUIRE
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('colors');

//=============SETUP
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static("./bower_components"));

//============= DATABASE
require('./server/config/mongoose.js');

//==============ROUTES
require('./server/config/routes.js')(app);

//=============== LISTEN
app.listen(8000, function() {
  console.log("soaring at 8000".blue)
});
