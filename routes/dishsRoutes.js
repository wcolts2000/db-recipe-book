const express = require('express');
const db = require('../data/dbConfig');
const helpers = require('../data/helpers/dishDb')

const router = express.Router();

router.get('/', (req, res) => {
  helpers.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json({ message: "There was an error retrieving the data"}))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  helpers.getDish(id)
  .then(dish => res.status(200).json(dish))
  .catch(err => res.status(500).json({ message: "there was an error retrieving the dish"}))
})

router.post('/', (req, res) => {
  helpers.addDish(req.body)
  .then(id => res.status(201).json(id))
  .catch(err => res.status(500).json({ message: "there was an error adding dish to database"}))
}
)
module.exports = router;