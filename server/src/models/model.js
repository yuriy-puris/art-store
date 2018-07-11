const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArtStore = new Schema({
  users: Array,
  main_menu: Array
})

const ArtModel = mongoose.model('art_store', ArtStore)
module.exports = ArtModel