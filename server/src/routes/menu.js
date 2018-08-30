const express = require('express')
const router = express.Router()
const controller = require('../controllers/menu')

router.get('/menu', controller.menu)

module.exports = router