const express = require('express')
const router = express.Router()
const UserModel = require('../models/modelUser')
const mongoClient = require("mongodb").MongoClient;
const bcrypt = require('bcrypt')

router.get('*', function(req, res) {
  res.send(req.session);
});

router.get('/menu', (req, res) => {
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db("art_products").collection("main_menu").find({}).toArray(function(err, datadb) {
      datadb.forEach(function(item) {
        res.send(item.main_menu)
        client.close()
      })
    })
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
    return res.redirect('/')
  })
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
        req.session.save()
        // console.log(req.session)
        return res.redirect('/profile')
      } else {
        console.log('invalid password')
        return res.send(400).send('invalid password')
      }
    }
  })
})

router.get('/profile', (req, res, next) => {
  console.log(req.session)
})

module.exports = router