const express = require('express')
const router = express.Router()
const UserModel = require('../models/modelUser')
const mongoClient = require("mongodb").MongoClient
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

router.post('/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
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
    if (err) {
      return next(err)
    }
    req.session.userId = user._id
    let userData = {
      userName: user.userName,
      userEmail: user.userEmail
    }
    res.send(userData)
  })
})
//final buy
router.post('/purchase', (req, res) => {
  let UserPurchases = {
    products: req.body,
    userId: req.session.userId
  }
  mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
    client.db('art_products').collection('purchased_products').findOne({ userId: req.session.userId }, (err, result) => {
      if (err) {
        client.db('art_products').collection('purchased_products').insertOne(UserPurchases)
      } else {
        console.log(result)
        // res.sendStatus(200)
      }
    })
  })
})

router.post('/checkout', (req, res) => {
  UserModel.findOne({ _id: req.session.userId }, (err, result) => {
    if (err) {
      res.set('Set-Cookie','purchase=false')
      res.sendStatus(200)
    } else {
      mongoClient.connect('mongodb://yuriy:kldu57nv@ds121461.mlab.com:21461/art_products', (err, client) => {
        client.db('art_products').collection('purchased_products').findOne({ userId: req.session.userId }, (err, result) => {
          if (result === null) {
            res.set('Set-Cookie','purchase=false')
            res.sendStatus(200)
          } else {
            res.set('Set-Cookie','purchase=true')
            res.send(result.products)
          }
        })
      })
    }
  })
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