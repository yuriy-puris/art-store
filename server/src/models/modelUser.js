const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  userPhone: {
    type: Number,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('users', User)