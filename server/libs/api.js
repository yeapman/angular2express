var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/client';
// middleware that is specific to this router


// define the about route
router.get('/about', function (req, res) {
  var responseJson = {
    "data": [
      {
        "first_name": "yarik",
      "second_name": "fonarik"
      }
    ]
  };
  res.json(responseJson);
});

MongoClient.connect(url, function(err, db) {
  // assert.equal(null, err);
  console.log("connected successfull to server");

  // insertDocuments(db, function() {
  //   findDocuments(db, function() {
  //     db.close();
  //   });
  // });

  findDocuments(db, function() {
    db.close();
  });
});
// var insertDocuments = function(db, callback) {
//   var collection = db.collection('levindb');
//   collection.insertMany([
//     {'first_name': 'yarik'}
//   ], function (err, result) {
//
//     console.log("inserted 1 documents into the collection");
//     callback(result);
//   });
// }

var findDocuments = function(db, callback) {
  var collection = db.collection('levindb');

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("found this document");
    console.log(docs);
    callback(docs);
  });
}




module.exports = router;
