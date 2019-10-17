const express = require ('express');
const router = express.Router();
const Person = require('../models/persons');

router.get('/persons', (req, res, next) => {
    Person.find({})
    //Person.find({}, {firstName:1, _id:0})
    //Person.find({ 'profession': 'artist' })
    //Person.find({}, 'personsInDatabase')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/persons', (req, res, next) => {
  console.log(req.body)
    if(req.body){
        Person.create(req.body)
      }else {
        res.json({
          error: "Something went wrong"
        })
      }
      next()
});

//Must add functionality for deleting later
router.delete('/persons/:id', (req, res, next) => {
    Person.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;