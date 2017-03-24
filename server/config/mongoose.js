// Require mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Require file-system so that we can load, read, require all file-system
var fs = require('fs');

//Connect to the database
mongoose.connect('mongodb://localhost/meanbelt');

//Specify the path to all the models
var models_path = __dirname + '/../models';

//Read all the files in the models_path and for each one check the js file before requiring it
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
});
