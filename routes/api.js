const express = require ('express');
const router = express.Router();
const Person = require('../models/persons');
var cors = require('cors')


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
    content.rating = req.query.rating;
  }
  if (req.query.profession) {
    content.profession = {$regex: RegExp(req.query.profession), $options:'-i'};
  }
   if (req.query.year) {
    content.year = req.query.year;
  }
  
  const person = await Person.find(content).sort({[sorting]:sortDirection});
  
  res.status(200).json(person).send();
});

router.post('/persons', (req, res, next) => {
  console.log(req.body)
    if(req.body){
        Person.create(req.body)
        res.json("Added!")
      }else {
        res.json({
          error: "Something went wrong"
        })
        return;
      }
});





module.exports = router;