const express = require('express')
const router = express.Router()
const controller = require('../controllers/latest_products')

router.get('/latest_products', controller.latest_products)

module.exports = router