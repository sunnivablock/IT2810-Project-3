const express = require ('express');
const router = express.Router();
const Person = require('../models/persons');

router.get('/persons', async (req, res, next) => {

  const{sort, sortAsc} = req.query

  let sorting, sortDirection

  {sort ? sorting=sort:sorting = "rating"}
  {sortAsc? sortDirection = 1: sortDirection=-1}

  let content = {};

  if (req.query.lastName) {
    content.lastName = {$regex: RegExp(req.query.lastName), $options:'-i'};
  }
  if (req.query.firstName) {
    content.firstName = {$regex: RegExp(req.query.firstName), $options:'-i'};
  }
  if (req.query.rating) {
    content.rating = {$regex: RegExp(Int32.Parse(req.query.rating)), $options:'-i'};
    
  }
  if (req.query.profession) {
    content.profession = {$regex: RegExp(req.query.profession), $options:'-i'};
  }
  if (req.query.year) {
    content.year = {$regex: RegExp(req.query.year), $options:'-i'};
  }
  
  const person = await Person.find(content).sort({[sorting]:sortDirection});
  
  res.status(200).json(person).send();
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





module.exports = router;