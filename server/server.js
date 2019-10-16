const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('../routes/api');
//const path = require('path');
const mongoose = require('mongoose');
const url = "mongodb://it2810-09.idi.ntnu.no:27017/Gutta"
const apiPort = 8000

//Set up default mongoose connection
var mongoDB = url;
mongoose.connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

//helps us handle CORS related issues we might face if we try to access our api from a different dormain.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))



// find all persons who are actors
/*actor.find({ 'profession': 'actor' }, function (err, actors) {
  if (err) return handleError(err);
  console.log(actors)
  // 'actors' contains the list of persons that match the criteria.
})*/

/*//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function(callback) {

    //The code in this asynchronous callback block is executed after connecting to MongoDB. 
    console.log('Successfully connected to MongoDB.');
});*/

/*
app.post("/persons", (req, res) => {
  var myData = new Person(req.body);
  myData.save()
    .then(item => {
      res.send("person saved to d atabase");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});*/