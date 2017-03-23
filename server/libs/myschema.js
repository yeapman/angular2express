var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personInfo = new Schema({
  first_name: string,
  second_name: string
}, {collection: 'levindb'});

module.exports = mongoose.model('person', personInfo);
