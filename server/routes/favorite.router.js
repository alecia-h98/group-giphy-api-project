const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");
const router = express.Router();




// router.get('/', (req, res) => {

//     // res.send('incoming gifs');


//  });

// add a new favorite
router.post('/', async (req, res) => {
 const queryText = `INSERT INTO  "favorites" ("giphy_image_url") VALUES ($1);`
 pool.query(queryText, [req.body.giphy_image_url])
 .then((results) => {
  res.sendStatus(201);
 }) .catch((err) => {
  console.log(err);
  res.sendStatus(500);
 });
// const dataToStore = req.body;
// try{
//   await insertData(dataToStore);
//   res.status(201);
// } catch (error) {
//   console.error(error);
//   res.status(500);
// }
});

// update a favorite's associated category
router.put('/:favoriteId/:categoryId', (req, res) => {
  const queryText = `UPDATE "favorites" SET "category_id"=$2 WHERE "id"=$1 RETURNING *;`;
  pool
    .query(queryText, [req.params.favoriteId, req.params.categoryId])
    .then(() => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
}).catch ((error) => {
  console.log(`ERROR IN UPDATING THE FAVORITES`, error);
  res.sendStatus(500);
})
});


//*****STRETCH GOAL*****//
// delete a favorite
// router.delete('/:id', (req, res) => {
//   res.sendStatus(200);
// });

module.exports = router;
