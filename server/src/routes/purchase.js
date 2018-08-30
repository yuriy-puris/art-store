const express = require('express')
const router = express.Router()
const controller = require('../controllers/purchase')

router.get('/purchase', controller.purchase)

module.exports = router