const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories')

router.get('/categories', controller.categories)

module.exports = router