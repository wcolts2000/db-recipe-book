const express = require('express');
const db = require('../data/dbConfig');
const helpers = require('../data/helpers/recipeDb')

const router = express.Router();

router.get('/', (req, res) => {
  helpers.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({ message: " there was an error retrieving the data"}))
})

router.post('/', (req, res) => {
  helpers.addRecipe(req.body)
  .then(id => res.status(201).json(id))
  .catch(err => res.status(500).json({ message: "There was an error adding the recipe"}))
})

module.exports = router;