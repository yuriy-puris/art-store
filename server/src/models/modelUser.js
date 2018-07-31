const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const User = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  userEmail: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  userPassword: {
    type: String,
    required: true,
    trim: true
  },
  userProducts: Array
})

User.statics.authenticate = function(userName, userEmail, userPassword) {
  UserModel.findOne({ email: email })
    .exec((err, user) => {
      if (err) {
        return callback(err)
      } else if (!user) {
        let err = new Error('User not found')
        err.status = 401
        return callback(err)
      }
      bcrypt.compare(userPassword, user.userPassword, (err, result) => {
        if (result === true) {
          return callback(null, user)
        } else {
          return callback()
        }
      })
    })
}




const UserModel = mongoose.model('users', User)
module.exports = UserModel