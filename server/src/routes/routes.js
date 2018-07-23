const express = require('express')
const router = express.Router()
const UserModel = require('../models/modelUser')
const mongoClient = require("mongodb").MongoClient;
const bcrypt = require('bcrypt')

<<<<<<< HEAD
<<<<<<< HEAD
//header menu
=======
>>>>>>> b9aca6d16e0e169021d79ecbad4da6f7843ee8a7
=======
//header menu
>>>>>>> d870b5182cd64453e246feb83a32f7a72ac075f5
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
  console.log(req.session)
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
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(req.session.userId)
        return res.send(req.session.userId)
=======
        req.session.save()
        console.log(req)
        return res.redirect('/profile')
>>>>>>> b9aca6d16e0e169021d79ecbad4da6f7843ee8a7
=======
        console.log(req.session.userId)
        return res.send(req.session.userId)
>>>>>>> d870b5182cd64453e246feb83a32f7a72ac075f5
      } else {
        console.log('invalid password')
        return res.send(400).send('invalid password')
      }
    }
  })
})

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d870b5182cd64453e246feb83a32f7a72ac075f5
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
    // return res.redirect('/')
  })
<<<<<<< HEAD
=======
router.get('/profile', (req, res, next) => {
  console.log(req.session.userId)
>>>>>>> b9aca6d16e0e169021d79ecbad4da6f7843ee8a7
=======
>>>>>>> d870b5182cd64453e246feb83a32f7a72ac075f5
})


module.exports = router