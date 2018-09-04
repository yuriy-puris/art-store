const UserModel = require('../models/modelUser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async (req, res) => {
  // check email
  let candidate = await UserModel.findOne({userEmail: req.body.loginEmail})
  if (candidate) {
    const checkPassword = bcrypt.compareSync(req.body.loginPassword, candidate.userPassword)
    if (checkPassword) {
      // generate token
      const token = jwt.sign({
        userEmail: candidate.userEmail,
        userId: candidate._id
      }, config.jwt, {expiresIn: 60 * 60})
      res.status(200).send({token: `Bearer ${token}`})
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
    } catch(error) {
      errorHandler(res, error)
    }
  }
}

module.exports.logout = (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
}