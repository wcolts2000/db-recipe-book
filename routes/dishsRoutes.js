const express = require('express');
const db = require('../data/dbConfig');
const helpers = require('../data/helpers/dishDb')

const router = express.Router();

router.get('/', (req, res) => {
  helpers.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json({ message: "There was an error retrieving the data"}))
})

module.exports = router;