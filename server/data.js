const mongodb = require("mongodb");
const Schema = mongodb.Schema;
​
// this will be our data base's data structure 
const DataSchema = new Schema(
  {
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
module.exports = mongodb.model("Data", DataSchema);