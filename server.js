// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const myRouter = express.Router();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
const mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/27017/client');
var url = 'mongodb://localhost:27017/client';
var Book = require('./src/app/models/bookeModel');
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use('/api', myRouter);

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("connected successfull to server");

  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    });
  });
});
var insertDocuments = function(db, callback) {
  var collection = db.collection('documents');
  collection.insertMany([
    {'first_name': 'yarik'}
  ], function(err, result) {

    console.log("inserted 3 documents into the collection");
    callback(result);
  });
}
var findDocuments = function(db, callback) {
  var collection = db.collection('documents');

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("found this document");
    console.log(docs);
    callback(docs);
  })
}

myRouter.route('/Books')
  // .post(function(req, res) {
  //   var book = new Book(req.body);
  //   console.log(book);
  //   res.send(book);
  // })
  .get(function(req, res){
    Book.find(function(err, book ){
      if(err)
        console.log(err)
      else
        res.json(docs)
    })
  });


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// // Set our api routes
// app.use('/api/public', publicRouter);

// Catch all other routes and return the index file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});
app.get('/testtest', function(req, res) {
  res.send('welcome to my api');
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
