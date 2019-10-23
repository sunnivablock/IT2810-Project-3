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
  next();
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


