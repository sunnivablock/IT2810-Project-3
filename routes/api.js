const express = require ('express');
const router = express.Router();
const Person = require('../models/persons');

router.get('/persons', async (req, res, next) => {
  //let lastName = {$regex : RegExp(req.query.lastName), $options : '-i'};
  //console.log(lastName)
  //const person = await Person.find({lastName})


  let content = {};
  if (req.query.lastName) {
    content.lastName = {$regex: RegExp(req.query.lastName), $options:'-i'};
  }
  if (req.query.firstName) {
    content.firstName = {$regex: RegExp(req.query.firstName), $options:'-i'};
  }
  if (req.query.rating) {
    content.rating = {$regex: RegExp(req.query.rating), $options:'-i'};
    
  }
  if (req.query.profession) {
    content.profession = {$regex: RegExp(req.query.profession), $options:'-i'};
  }
  if (req.query.year) {
    content.year = {$regex: RegExp(req.query.year), $options:'-i'};
  }
  console.log(content)
  const person = await Person.find(content)
  
  res.status(200).json(person).send();
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