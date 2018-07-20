const express = require('express')
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

const app = express()

app.use(session({
  name: 'art-store',
  secret: 'work hard',
  rolling: true,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  cookie: { 
    secure: false, 
    httpOnly: false,
    maxAge: 30 * 60 * 1000,
  },
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  credentials: true
}));

app.use(cookieParser())

app.use(require('./routes/routes'))

mongoose.connect(config.dbURL, config.dbOptions)

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))