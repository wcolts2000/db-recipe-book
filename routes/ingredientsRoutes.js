const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('ingredients')
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => res.status(500).json({message: "There was an error retrieving data"}))
})

module.exports = router;