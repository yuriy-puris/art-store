const express = require('express')
const router = express.Router()
const UserModel = require('../models/modelUser')
const mongoClient = require("mongodb").MongoClient
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
  if (req.session.userId) {
    res.send(req.session.userId)
  }
})

router.get('/users', (req, res) => {
  UserModel.find({}, (err, users) => {
    res.send(users)
  })
})

//load products
// router.post('/card-product', (req, res) => {
//   UserModel.updateOne({ _id: req.session.userId }, { $push: { userProducts: req.body } }, (err, result) => {
//     if (err) {
//       console.log(err)
//     }
//     res.redirect('/user-products')
//   })
// })

//get card user products
// router.get('/user-products', (req, res) => {
//   UserModel.findById(req.session.userId, (err, result) => {
//     result.userProducts.forEach(item => {
//       return item.id_product.indexOf()
//     })
//   })
// })


router.get('/user-products', (req, res) => {
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection('products').find().toArray((err, lat_prod) => {
      lat_prod.forEach(item => {
        console.log(item)
      })
    })
  })
})

module.exports = router