var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');

var rethinkdb = require('rethinkdb');
var _db = require('../models/db');
var async = require('async');
var dbImage = new _db();
console.log(dbImage.connectToImageDb)

//path and originalname are the fields stored in mongoDB
var imageSchema = mongoose.Schema({
 data: Buffer,
 contentType: String

});


var Image = module.exports = mongoose.model('files', imageSchema);
  router.getImages = function(callback, limit) {

 Image.find(callback).limit(limit);
}


router.getImageById = function(id, callback) {

 Image.findById(id, callback);

}

router.addImage = function(image, callback) {
  async.waterfall([
    function(callback) {
      console.log(db.connectToDb)
      db.connectToDb(function(err,connection) {
        if(err) {
          return callback(true,"Error connecting to database");
        }
        callback(null,connection);
      });
    },
    function(connection,callback) {
      rethinkdb.table('image').insert({'data': goalData.blog, 'contentType': goalData.description}
      ).run(connection,function(err,result) {
        connection.close();
        if(err) {
          return callback(true,"Error happens while adding new goals");
        }
        callback(null,result);
      });
    }
  ],function(err,data) {
    callback(err === null ? false : true,data);
  });

}


// To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'uploads/')
 },
 filename: function(req, file, cb) {
 cb(null, file.originalname);
 }
});

var upload = multer({
 storage: storage
});

router.get('/', function(req, res, next) {
 res.render('index.ejs');
});

router.post('/', upload.any(), function(req, res, next) {

 res.send(req.files);

/*req.files has the information regarding the file you are uploading...
from the total information, i am just using the path and the imageName to store in the mongo collection(table)
*/
 var path = req.files[0].path;
 var imageName = req.files[0].originalname;

 var imagepath = {};
 imagepath['path'] = path;
 imagepath['originalname'] = imageName;

 //imagepath contains two objects, path and the imageName

 //we are passing two objects in the addImage method.. which is defined above..
 router.addImage(imagepath, function(err) {

 });

});

module.exports = router;
