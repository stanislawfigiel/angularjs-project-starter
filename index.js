var express = require('express')
var PORT = 3000;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
let db;
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName);

  app.listen(PORT, function() {
    console.log('listening on port', PORT);
  });

});



const insertDocuments = function(documents, callback) {
  const collection = db.collection('documents');
  collection.insertMany(documents, function(err, result) {
    callback(result);
  });
}




var app = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});

var proxy = require('express-http-proxy');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));












var notes = [];

app.post('/note/add', function(req, res) {
  var note = req.body.note;
  notes.push(note);


  const docs = [{aawwwwwwww:'ss',bbwwwwwww:'ddd', ccwwwww:'fffffff'}];
  insertDocuments(docs, function () {
    // client.close();
  });


  res.json({value: note});
});

app.get('/notes', function(req, res) {
  res.json({notes: notes});
});

app.delete('/notes', function(req, res) {
  var note = req.body.note;
  var index = notes.indexOf(note);
  notes = notes.filter(function(note, i) {return i !== index});
  res.json({deleted: note});
});










// app.listen(PORT, function() {
//     console.log('listening on port', PORT);
// });
