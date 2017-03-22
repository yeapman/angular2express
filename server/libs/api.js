var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/client';
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// middleware that is specific to this router
var person = new Schema({
  data2: {type: Object, required: true }
});

// define the about route
router.get('/about', function (req, res) {
  // var responseJson = {
  //   "data": [
  //     {
  //       "first_name": "yarik",
  //     "second_name": "fonarik"
  //     }
  //   ]
  // };
  res.json(responseJson);
});

MongoClient.connect(url, function(err, db) {
  // assert.equal(null, err);
  console.log("connected successfull to server");


  findDocuments(db, function() {
    db.close();
  });

  // deleteDocument(db, function() {
  //   db.close();
  // });



  // findData(db, function() {
  //   db.close();
  // });

// insertDocuments(db, function() {
//   db.close();
// });

});


// var insertDocuments = function(db, callback) {
//   var collection = db.collection('levindb');
//   collection.insertMany([
//     { "data2":
//       {
//         'first_name': 'yarik',
//         'last_name': 'levin',
//         'age': 22
//     }
//     }
//   ], function (err, result) {
//
//     console.log("inserted 1 documents into the collection");
//     callback(result);
//   });
// })

var findDocuments = function(db, callback) {
  var collection = db.collection('levindb');

  collection.findOne({'data2': {}},(function(err, doc) {
    assert.equal(err, null);
    console.log("found this document");
    assert.equal(null, doc.first_name);
    assert.equal(2, doc.last_name);
}));
};


// var findData = function(db, callback) {
//   var collection = db.collection('levindb');
//
//   collection.findOne({_id: '58d2461eaec9921d686fe2c4'}, function(err, document) {
//     assert.equal(err, null);
//     console.log(document.first_name);
//     callback(document);
//   });
// }
// var deleteDocument = function(db, callback) {
//   var collection = db.collection('levindb');
//
//     collection.remove( { "_id" : ObjectId("58d2492a6a33d81c3cbc61fc")}, function(err, result) {
//       console.log("delete one line");
//       callback(result);
//     });
// });





  module.exports = router;
