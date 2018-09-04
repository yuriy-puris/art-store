const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories')
const passport = require('passport')

router.get('/categories', passport.authenticate('jwt', {session: false}), controller.categories)

module.exports = router