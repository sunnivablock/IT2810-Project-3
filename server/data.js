var mongoose = require("mongoose");
const Schema = mongoose.Schema;
​
// this will be our data base's data structure 
var DataSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    profession: String,
    year: String,
    rating: String
  },
  { timestamps: true }
);
​
// export the new Schema so we could modify it using Node.js
var dataModel = mongoose.model("dataModel", DataSchema);