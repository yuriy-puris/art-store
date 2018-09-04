const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  userName: {
    type: String,
    unique: false,
    required: true
  },
  userEmail: {
    type: String,
    unique: true,
    required: true
  },
  userPhone: {
    type: Number,
    required: true
  },
  userPassword: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', User)