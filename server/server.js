const express = require("express")
const app = express()
const mongodb = require('mongodb').MongoClient
const url = "mongodb://it2810-09.idi.ntnu.no:27017/"

app.get('/', function(req, res) {
    mongodb.connect(url, function(err, db) {
        if (err) throw err
        let dbo = db.db("test")
        dbo.collection("testdata").findOne({}, function(err, result) {
            if (err) throw err
            res.send(result)
        })
    })
    
})



app.listen(8080) 