const express = require('express')
const router = express.Router()
const UserModel = require('../models/modelUser')
const mongoClient = require("mongodb").MongoClient;
const bcrypt = require('bcrypt')

//header menu
router.get('/menu', (req, res) => {
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection("main_menu").find({}).toArray(function(err, datadb) {
      datadb.forEach(function(item) {
        res.send(item.main_menu)
        client.close()
      })
    })
  })
})

//main product
router.get('/latest_products', (req, res) => {
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection('latest_products').find().toArray((err, lat_prod) => {
      lat_prod.forEach(item => {
        res.send(item)
        client.close()
      })
    })
  })
})

//main categories
router.get('/categories', (req, res) => {
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection('products').findOne({products: {$type: 'array'}}, 'products', (err, result) => {
      res.send(result)
    })
  })
})

router.get('/', (req, res) => {
  if (req.session.userId) {
    console.log(session.jwt)
    res.send(req.session.userId)
  }
})

router.post('/login', (req, res) => {
  let { loginName, loginPassword } = req.body
  UserModel.findOne({ userName: loginName }, 'userName userEmail userPassword', (err, user) => {
    if (err) {
      console.log('invalid login')
      return res.send(401).send('invalid login')
    } else {
      let passwordCheck = bcrypt.compare(loginPassword, user.userPassword)
      if (passwordCheck) {
        req.session.userId = user._id
        let userData = {
          userName: user.userName,
          userEmail: user.userEmail
        }
        return res.send(userData)
      } else {
        console.log('invalid password')
        return res.send(400).send('invalid password')
      }
    }
  })
})

router.get('/users', (req, res) => {
  UserModel.find({}, (err, users) => {
    res.send(users)
  })
})

router.post('/signup', (req, res) => {
  let { userName, userEmail, userPassword } = req.body
  let userDate = {
    userName,
    userEmail,
    userPassword: bcrypt.hashSync(userPassword, bcrypt.genSaltSync(5))
  }
  let newUser = new UserModel(userDate)
  newUser.save((err, user) => {
    if(err) {
      return next(err)
    }
    req.session.userId = user._id
  })
})


module.exports = router