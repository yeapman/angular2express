var ObjectId = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();

module.exports = function() {
  router.get('/newroute', function(req, res)  {
    const details = {'_id': ObjectId("58d2817e29090203700aff11")};
    // db.collection('levindb').findOne(details, function (err, item)  {
    //   if (err) {
    //     res.send({'error': 'an error has occuers'});
    //   } else {
    //     console.log("res something");
    //     res.send(item);
    //   }
    // });

      res.send('hello')
  });
};
