
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var db = require('./models/db');

var dbModel = new db();
console.log(db)
console.log(dbModel.setupDb);
dbModel.setupDb();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json());
app.use(require('./controllers'));

http.listen(3000, function(){
  console.log('listening on port 3000');
});
