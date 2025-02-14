const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");
const router = express.Router();




router.get('/', (req, res) => {

    // res.send('incoming gifs');


 });

// add a new favorite
router.post('/', async (req, res) => {
 
  res.sendStatus(201);

});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});


//*****STRETCH GOAL*****//
// delete a favorite
// router.delete('/:id', (req, res) => {
//   res.sendStatus(200);
// });

module.exports = router;
