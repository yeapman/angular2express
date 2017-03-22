var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personInfo = new Schema({
  first_name: string,
  second_name: string
});

module.exports = mongoose.model('person', personInfo);