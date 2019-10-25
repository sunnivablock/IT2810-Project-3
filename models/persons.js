const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


// this will be our data base's data structure 
const dataSchema = new Schema({
    firstName: String,
    lastName: String,
    profession: String,
    year: Number,
    rating: Number
  },
  { timestamp: true, collection : 'Krutt' }
);

// export the new Schema so we could modify it using Node.js
var Person = mongoose.model('person', dataSchema);

module.exports = Person;