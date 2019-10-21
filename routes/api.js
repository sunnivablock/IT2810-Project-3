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

router.get('/persons/firstNameASC', (req, res, next) => {
  Person.find({}).sort({firstName:1})
  .then(data => res.json(data))
  .catch(next)
});

router.get('/persons/firstNameDESC', (req, res, next) => {
  Person.find({}).sort({firstName:-1})
  .then(data => res.json(data))
  .catch(next)
});

router.get('/persons/lastNameASC', (req, res, next) => {
  Person.find({}).sort({lastName:1})
  .then(data => res.json(data))
  .catch(next)
});

router.get('/persons/lastNameDESC', (req, res, next) => {
  Person.find({}).sort({lastName:-1})
  .then(data => res.json(data))
  .catch(next)
});

router.get('/persons/ratingASC', (req, res, next) => {
  Person.find({}).sort({rating:1}).collation({locale: "en_US", numericOrdering: true})
  .then(data => res.json(data))
  .catch(next)
});

router.get('/persons/ratingDESC', (req, res, next) => {
  Person.find({}).sort({rating:-1}).collation({locale: "en_US", numericOrdering: true})
  .then(data => res.json(data))
  .catch(next)
});

router.get('/persons/bestThreeRated', (req, res, next) => {
  Person.find({}).sort({rating:-1}).limit(3).collation({locale: "en_US", numericOrdering: true})
  .then(data => res.json(data))
  .catch(next)
});


router.get('/persons/yearASC', (req, res, next) => {
  Person.find({}).sort({year:1})
  .then(data => res.json(data))
  .catch(next)
});

router.get('/persons/yearDESC', (req, res, next) => {
  Person.find({}).sort({year:-1})
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