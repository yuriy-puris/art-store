const express = require('express')
const router = express.Router()
const ArtModel = require('../models/model')
const mongoClient = require("mongodb").MongoClient;

router.get('/menu', (req, res) => {

  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', function(err, client){
    client.db("art_products").collection("main_menu").find({}).toArray(function(err, datadb) {
      datadb.forEach(function(item) {
        res.send(item.main_menu)
        client.close();
      })
    });
  });

})

module.exports = router