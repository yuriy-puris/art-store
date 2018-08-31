const express = require('express')
// require modules
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const cookieParser = require('cookie-parser')
const UserModel = require('./models/modelUser')
const bcrypt = require('bcrypt')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoClient = require("mongodb").MongoClient

// require routes
const authRoutes = require('./routes/auth')
const categoriesRoutes = require('./routes/categories')
const menuRoutes = require('./routes/menu')
const latestProductsRoutes = require('./routes/latest_products')
const purchaseRoutes = require('./routes/purchase')
const checkoutRoutes = require('./routes/checkout')

const app = express()

mongoose.connect(config.dbURL, config.dbOptions)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

// use modules
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  credentials: true
}))

app.use(cookieParser())

// use routes
app.use('/api/auth', authRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/products', latestProductsRoutes)
app.use('/api/purchase', purchaseRoutes)
app.use('/api/checkout', checkoutRoutes)

module.exports = app