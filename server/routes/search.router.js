const express = require('express');
const axios = require("axios");
const router = express.Router();


router.get('/:query', async (req, res) => {
    const gifyKey = process.env.GIPHY_API_KEY;
    const searchKey = req.params.query;
    console.log(searchKey);
    try{
        const response = await axios.get(
            `http://api.giphy.com/v1/gifs/search?api_key=${gifyKey}&q=${searchKey}&limit=10`);
            console.log(response.data);
            res.send(response.data);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
});

module.exports = router;