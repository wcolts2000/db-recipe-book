const express = require('express');
const db = require('../data/dbConfig');
const helpers = require('../data/helpers/recipeDb')

const router = express.Router();

router.get('/', (req, res) => {
  helpers.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({ message: " there was an error retrieving the data"}))
})

module.exports = router;