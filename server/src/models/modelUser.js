const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  userName: {
    type: String,
    unique: false
  },
  userEmail: {
    type: String,
    unique: true
  },
  userPhone: {
    type: Number
  },
  userPassword: {
    type: String
  }
})

module.exports = mongoose.model('users', User)