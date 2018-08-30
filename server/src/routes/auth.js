const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')

router.post('/login', controller.login)
router.post('/login', controller.logout)
router.post('/login', controller.signup)

module.exports = router