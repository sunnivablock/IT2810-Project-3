const express = require(express);
const app = express();
const apiPort = 8080;
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = "mongodb://it2810-09.idi.ntnu.no:27017/";
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function(callback) {
//The code in this asynchronous callback block is executed after connecting to MongoDB. 
    console.log('Successfully connected to MongoDB.');
});

var Schema = mongoose.Schema;
// this will be our data base's data structure 
var dataSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    profession: String,
    year: String,
    rating: String
  },
  { timestamps: true }
);
// export the new Schema so we could modify it using Node.js
var actor = mongoose.model('actor', dataSchema);
// find all persons who are actors, selecting the 'firstName' fields
actor.find({ 'profession': 'actor' }, function (err, actors) {
  if (err) return handleError(err);
  console.log(actors)
  // 'actors' contains the list of athletes that match the criteria.
})
app.listen(apiPort, () => console.log('Server running on port ${apiPort}'));

/*import data from './data.js'



const mongodb = require('mongodb').MongoClient
const url = "mongodb://it2810-09.idi.ntnu.no:27017/"


app.get('/', function(req, res) {
    mongodb.connect(url, function(err, db) {
        if (err) throw err
        let dbo = db.db("Gutta")
        dbo.collection("Krutt").find({}, function(err, result) {
            if (err) throw err
            res.send(result)
        })
    })
    
})*/