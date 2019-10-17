const express = require("express")
const app = express()
const mongoose = require('mongoose')
const url = "mongodb://it2810-09.idi.ntnu.no:27017/Gutta"
const apiPort = 8000

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


//Set up default mongoose connection
var mongoDB = url;
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
  { timestamp: true, collection : 'Krutt' },
);

// export the new Schema so we could modify it using Node.js
var actor = mongoose.model('actor', dataSchema);

// find all persons who are actors
/*actor.find({ 'profession': 'actor' }, function (err, actors) {
  if (err) return handleError(err);
  console.log(actors)
  // 'actors' contains the list of persons that match the criteria.
})*/

app.get('/actors', async function(req, res) {
  const actors = await actor.find({ 'profession': 'actor' });
  if(actor) {
    res.send(actors)
  }
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))