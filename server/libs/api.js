var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var db;
const bodyParser = require('body-parser');
var url = 'mongodb://localhost:27017/client';
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
const app = express();
// middleware that is specific to this router
var mongoDB = 'mongodb://localhost:27017/client';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.model('users', {first_name: String});
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

  mongoose.model('users').find(function(err, users){
    res.send(users);
  })
});

  router.get('/artist', function(req, res) {
    db.collection('levindb').find().toArray(function(err, docs) {
      if(err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(docs);
    })
  })


})
MongoClient.connect(url, function(err, database) {
  // assert.equal(null, err);
  console.log("connected successfull to server");
if(err) {
  return console.log(err);
}
db = database;



  //
  //  findDocuments(db, function() {
  //   db.close();
  // });

  // findById(db, function() {
  //   db.close();
  // });


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




var findById = function(db, callback) {
  var collection = db.collection('levindb');

  collection.findOne({"_id": ObjectId("58d2817e29090203700aff11")}, function(err, docs) {
    assert.equal(err, null);
    console.log("found 1 doc");
    console.log(docs);
    callback(docs);
  })
}



// var insertDocuments = function(db, callback) {
//   var collection = db.collection('levindb');
//   var userYarik = {
//     "names": [{
//       "name": "yariiiiiik111111",
//       "sname": "leviiiiin222222"
//     }
//   ]
//   };
//   collection.insertOne(userYarik, function (err, result) {
//     console.log("inserted 1 documents into the collection");
//     callback(result);
//   });
// };

// var findDocuments = function(db, callback) {
//    var collection = db.collection('levindb');
//
//      collection.find({}).toArray(function(err, docs) {
//           assert.equal(err, null);
//           console.log("found this document");
//           console.log(docs);
//           callback(docs);
//         })
//   }




// var myNewCallback = function(db, callback) {
//   var collection = db.collection('levindb');
//
//   collection.findOne({ "_id": ObjectId("58d2817e29090203700aff11")}, function(err, docs) {
//     if(err) {
//       res.send('error, fuck')
//     } else {
//       res.send(docs);
//     }
//   })
// }
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





  module.exports = router
