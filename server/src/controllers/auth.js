const UserModel = require('../models/modelUser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.login = async (req, res) => {
  // check email
  let candidate = await UserModel.findOne({userEmail: req.body.userEmail})
  if (candidate) {
    const checkPassword = bcrypt.compareSync(req.body.userPassword, candidate.userPassword)
    if (checkPassword) {
      // generate token
      const token = '';
    } else {
      res.status(401).send({message: 'Password is not match.'})
    }
  } else {
    res.status(404).send({message: 'This user do not exist.'})
  }
}

module.exports.signup = async (req, res) => {
  // check email
  const candidate = await UserModel.findOne({userEmail: req.body.userEmail})

  if (candidate) {
    // this email already exist
    res.status(409).send({message: 'this email already exist'})
  } else {
    const newUser = new UserModel({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPhone: req.body.userPhone,
      userPassword: bcrypt.hashSync(req.body.userPassword, bcrypt.genSaltSync(5))
    })

    try {
      await newUser.save()
      let userData = {
        userName: req.body.userName,
        userEmail: req.body.userEmail
      }
      res.status(201).send(userData)
    } catch(err) {
      console.log(err)
    }
  }
}

module.exports.logout = (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
}