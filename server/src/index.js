const app = require('./app')
const config = require('./config/config')


// const app = express()

// app.use(session({
//   name: 'art-store',
//   secret: 'work hard',
//   rolling: true,
//   resave: true,
//   saveUninitialized: true,
//   store: new MongoStore({
//     mongooseConnection: mongoose.connection,
//     ttl: 20 *  4 * 60 * 60
//   }),
//   cookie: {
//     secure: false,
//     httpOnly: false,
//     maxAge: 300 * 60 * 1000,
//   },
// }))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })
//
// app.use(morgan('combined'))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(cors({
//   origin:['http://localhost:8080'],
//   methods:['GET','POST'],
//   credentials: true
// }))

// app.use(cookieParser())
//
// app.use(require('./routes/routes'))

app.listen(process.env.PORT || config.port, () => console.log(`Server start on port ${config.port} ...`))